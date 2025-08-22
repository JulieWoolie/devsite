---
title: "Delphi menu plugin"
type: docs
weight: 1
---

**Delphi** is a display entity menu plugin, which allows for menus to be written
in XML, SCSS and Java/Javascript and displayed with Display entities to players.

If you're interested in the development of this plugin, checkout my site: 
[juliewoolie.com/delphi](https://juliewoolie.com/delphi)

## Features
* Ability to create HTML-like menus with XML and CSS (With limited native SCSS integration)
* Full support for CSS selectors (Including pseudo elements like `:hover` and `:active`)
* Fully documented Java API and JavaScript integration for easy scripting
* Contuing development and new features being added all the time.
* Extensive documentation (at [dev.juliewoolie.com](https://dev.juliewoolie.com))
* Fully documented Java API (at [dev.juliewoolie.com/menus/javadoc](/menus/javadoc/0.4.3/))
* Devtools to help you create menus and fix issues.
* All Delphi commands can be used in the `/execute` command and by datapack functions!

## Download
Downloads are available on the <a href="https://modrinth.com/plugin/delphi" target="_blank">Modrinth Page</a> and <a href="https://hangar.papermc.io/JulieWoolie/delphi" target="_blank">Hangar Page</a>

## Maven and gradle dependencies
### Gradle
```kotlin
repositories {
  maven("https://libraries.juliewoolie.com")
}

dependencies {
  compileOnly("com.juliewoolie:delphi:0.5.0-SNAPSHOT")
}
```
### Maven
```xml
<repositories>
  <repository>
    <id>DelphiRepo</id>
    <name>DelphiRepo</name>
    <url>https://libraries.juliewoolie.com</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.juliewoolie</groupId>
    <artifactId>delphi</artifactId>
    <version>0.5.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```
### Bukkit plugins
If you're writing a bukkit plugin, also add this to your `plugin.yml`
```yml
depend: 
  - "Delphi"
```
{{<alert color="warning">}}
Delphi requires PaperMC to run, the plugin will not run on just Spigot or Bukkit.
{{</alert>}}

### Paper plugins
If you're writing a PaperMC plugin, also add this to your `paper-plugin.yml`:
```yml
dependencies:
  server:
    Delphi:
      load: AFTER
      required: true
      join-classpath: true
```