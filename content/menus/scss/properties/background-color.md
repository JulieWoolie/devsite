---
title: "background-color"
type: docs
description: Background color property
---

Sets the background color of an element.

| Field | Value |
|--|--|
| Cascades | Yes |
| Default value | `transparent` |

## Values
Accepts any expression or value that resolves to a color value.  
See [SCSS / Colors](/menus/scss/color) for more info

## Examples
```scss
p {
  background-color: red;
}
p {
  background-color: #f00;
}
p {
  background-color: #ff0000;
}
p {
  background-color: #ff0000ff;
}
p {
  background-color: rgb(255, 0, 0);
}
p {
  background-color: hsl(0, 100%, 50%);
}
```