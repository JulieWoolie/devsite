---
title: "<script> elements"
type: docs
weight: 30
description: "Load or run JS code in a menu"
---

## Attributes
| Attribute | Value       | Description                                                                                            | Example           |
|-----------|-------------|--------------------------------------------------------------------------------------------------------|-------------------|
| `defer`   | *void*      | If the attribute is present, the loaded script is not executed until the document has finished lodaing | `defer`           |
| `src`     | *file path* | File path to the script file containing the JS code                                                    | `src="script.js"` |

You can specify either the `src` attribute to load the script from that file, or write JS code directly inside the `<script/>` element itself

## Examples
```html
<script src="script.js"/>
```
```html
<script defer src="script.js"/>
```
```html
<script>
  console.log("Hello, world!")
</script>
```
```html
<script defer>
  console.log("This script will be ran after the document has finished loading")
</script>
```