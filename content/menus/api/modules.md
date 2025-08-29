---
title: Modules
type: docs
weight: 10
---
Modules are the very basis of the delphi plugin's menu loader and resource 
system.
  
To put it shortly, modules are namespaces that can be accessed by the Delphi 
plugin to load resources such as XML, JSON, SCSS or any kind of text files. 
Modules can either be directories or `.zip` files inside the 
`plugins/Delphi/modules` directory, or they can be registered by other plugins
with the Java API.
  
If you've been using the Delphi plugin, you've almost definitely used modules.
When you type in the command to open a page (`/delphi open <player> <path>`) you
use a module to know what page to open. For example `/delphi open @s foobar`, 
opens a page inside the `foobar` module.

## Registering custom modules
Custom modules can be registered with the Java API (See [here](/menus/) for 
information on how to get started with the API)
  
Basic, template, example of how to create and register a module:
```java
import com.juliewoolie.delphi.*;
import com.juliewoolie.delphi.resource.*;
import com.juliewoolie.delphi.util.*;

public class Example extends JavaPlugin {
  @Override
  public void onEnable() {
    Delphi delphi = DelphiProvider.get();
    delphi.getResources().registerModule("example-module", new ExampleModule());
  }
}

class ExampleModule implements ApiModule {

  @Override
  public Result<Document, String> loadDocument(ResourcePath path, DocumentContext context) {
    return Result.err("Not yet implemented");
  }
}
```
{{<alert title="Note">}}
Modules do **not** need to be manually unregistered, Delphi will 
automatically unregister all modules registered by a plugin when that plugin is
disabled.
{{</alert>}}

### Modules from jar resources
Modules can be created out of plugin jar resources, let's assume we have the 
following resources in our plugin's jar:
```txt
/resources/
├─/config.yml
├─/paper-plugin.yml
└─/page-data 
  ├─/index.xml
  └─/style.scss
```
and we want the `/page-data` directory to be a module that pages can be loaded
from, we can do like this:
```java
import com.juliewoolie.delphi.*;
import com.juliewoolie.delphi.resource.*;
import com.juliewoolie.delphi.util.*;

public class Example extends JavaPlugin {
  @Override
  public void onEnable() {
    Delphi delphi = DelphiProvider.get();

    // We have to give the constructor a class loader that resources will be 
    // loaded from, as well as the name of the directory to load data from.
    JarResourceModule module = new JarResourceModule(getClass().getClassLoader(), "page-data");

    // This is optional, but it specifies a list of file names inside of the
    // module.
    // Used for command auto completions.
    module.setFilePaths(List.of("index.xml", "style.scss"));

    delphi.getResources().registerModule("jar-module", module);
  }
}
```
Files from the `jar-module` can now be loaded like any other module and can be
accessed with the `/delphi open <player> <path>` command, like so: 
`/delphi open @s jar-module`.

### Modules from `.zip` files and directories
You can also create modules out of `.zip` files and directories that aren't 
inside the Delphi plugin's `modules` folder. This is done with 
`DelphiResources#createDirectoryModule(Path)` and 
`DelphiResources#createZipModule(Path)`
  
Directory example:
```java
import com.juliewoolie.delphi.*;
import com.juliewoolie.delphi.resource.*;
import com.juliewoolie.delphi.util.*;

public class Example extends JavaPlugin {
  @Override
  public void onEnable() {
    Delphi delphi = DelphiProvider.get();
    DelphiResources resources = delphi.getResources();

    Path dirPath = getDataPath().resolve("menu-directory");
    DirectoryModule module = resources.createDirectoryModule(dirPath);

    resources.registerModule("plugin-dir-module", dirPath);
  }
}
```
Zip module example:
```java
import com.juliewoolie.delphi.*;
import com.juliewoolie.delphi.resource.*;
import com.juliewoolie.delphi.util.*;

public class Example extends JavaPlugin {
  @Override
  public void onEnable() {
    Delphi delphi = DelphiProvider.get();
    DelphiResources resources = delphi.getResources();

    Path zipPath = getDataPath().resolve("zipfile.zip");
    Result<ZipModule, String> result = resources.createZipModule(zipPath);

    result
      .ifError(err -> getSLF4JLogger().error("Failed to create zip module: {}", err))
      .ifSuccess(module -> resources.registerModule("zip-module", module));
  }
}
```

## Creating a basic page with an `ApiModule`
```java
public class ExampleModule implements ApiModule {

  @Override
  public Result<Document, String> loadDocument(ResourcePath path, DocumentContext context) {
    Document document = context.newDocument();
    Element body = document.getBody();

    Element title = document.createElement("h1");
    title.setTextContent("Hello, world!");

    body.appendChild(title);

    return Result.ok(document);
  }
}
```

## Loading a page from plugin resources and invoking java objects from it
We'll create a page with a simple button that counts up each time you press it
and tells the player how many times its been clicked.
  
First let's make the page's XML. We'll call it `clicker-page/index.xml`:
```xml
<delphi>
  <head></head>

  <body>
    <!-- Give the button an ID, so we can reference it easily later -->
    <button id="clicker">Click me!</button>
  </body>
</delphi>
```
Then we'll write a java class to handle the button logic:
```java
package com.juliewoolie.example;

import com.juliewoolie.dom.*;
import com.juliewoolie.dom.event.*;

public class ClickerPage {
  // This is the entry point called by the Document
  public static void onDomInitialized(Document document) {
    // Wait for the document to be fully loaded
    document.addEventListener(EventTypes.DOM_LOADED, ClickerPage::onDomLoaded)
  }

  static void onDomLoaded(Event event) {
    Document document = event.getDocument();
    Element button = document.getElementById("clicker");

    if (button == null) {
      return;
    }

    button.addEventListener(EventTypes.CLICK, new ClickerListener());
  }

  static class ClickerListener implements EventListener {
    int count = 0;

    @Override
    public void onEvent(Event event) {
      count++;

      Player player = event.getDocument().getView().getPlayer();
      player.sendRichMessage("<yellow>You've clicked the button " + count + "times");
    }
  }
}
```
To tell the page to load the java class, we'll go back to the XML file and change
the `<head>` element to this:
```xml
<head>
  <java-object class-name="com.juliewoolie.example.ClickerPage"/>
</head>
```

And finally we register the page module
```java
public class ExamplePlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    JarResourceModule module = new JarResourceModule(getClassLoader(), "clicker-page");
    module.setFilePaths(List.of("index.xml"));

    Delphi delphi = DelphiProvider.get();
    delphi.getResources().registerModule("clicker-page", module);
  }
}
```

## Opening pages with the API
Pages can be opened for players with the following code:
```java
String pagePath = "example-module:index.xml?param=false";
Player player = // ...

Delphi delphi = DelphiProvider.get();

delphi.newViewBuilder()
    .setPath(pagePath)
    .setPlayer(player)
    .openOrLog();
```

The `openOrLog` returns an `Optional<DocumentView>` if you need to do anything 
with the view.  
If instead you want full control over the result and errors, you can use 
`open()` which returns a `Result<DocumentView, DelphiException>`, or you can use
`openOrThrow()` which will throw the `DelphiException` instead of logging or
returning it.
  
By default, the spawned document will be spawned directly infront of the player,
facing the player. If you want to spawn the document at a specific position.
```java
String pagePath = "example-module:index.xml?param=false";
Player player = // ...
Location location = new Location(player.getWorld(), 100, 100, 100, 0, 0);

Delphi delphi = DelphiProvider.get();

delphi.newViewBuilder()
    .setPath(pagePath)
    .setPlayer(player)
    .setSpawnLocation(location)
    .openOrLog();
```