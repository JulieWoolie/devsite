---
title: "Usage Guide"
type: docs
weight: 1
---

## Creating a basic page
After installing the plugin, navigate to the `plugins/Delphi/` folder. Then to 
the `modules` folder (Create it, if it doesn't exist).
  
In the `modules` folder, create another folder called `helloworld`.

There, create a file named `index.xml` and open it with your preferred code 
editor.

All Delphi pages use `<delphi>` as their root tag. You can then specify a 
`<head>` and `<body>` element inside that. For this example though, we're 
just going to make a small "Hello, world!" page.

The `index.xml` should look like this, with a our content inside the `<body>` 
element:
{{< tabpane text=true right=false >}}
  {{% tab header="`index.xml`" %}}
  ```xml
  <delphi>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </delphi>
  ```
  {{% /tab %}}
{{< /tabpane >}}

Save the file and then, in game, we can do `/delphi open @s helloworld` to 
spawn the page.

![](/menus/helloworld1.png)

## Applying basic style

Now, lets center the "Hello, world!" on the page. For this, we'll need to 
create a new `style.scss` file in the same folder as our `index.xml`.
  
If you're familiar with how CSS and styling works on the web, then this should 
be easy to understand.

We'll need to add the `<head>` element to the `index.xml` to link the style.
We do this by adding a `<style src="./style.scss"/>` element to that header, 
and then adding a class to the `<h1>` the hello world was declared in.

The end result should look like this:
{{< tabpane text=true right=false >}}
  {{% tab header="`index.xml`" %}}
  ```xml
  <delphi>
    <head>
      <style src="./style.scss"/>
    </head>
    <body>
      <h1 class="centered">Hello, world!</h1>
    </body>
  </delphi>
  ```
  {{% /tab %}}
  {{% tab header="`style.scss`" %}}
  ```scss
  .centered {
    margin-left: auto;
    margin-right: auto;
  }
  ```
  {{% /tab %}}
{{< /tabpane >}}

![](/menus/helloworld2.png)