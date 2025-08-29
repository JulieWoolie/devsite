---
title: "outline-color"
type: docs
description: Outline color property
---

Sets the outline color of an element.

| Field | Value |
|--|--|
| Cascades | Yes |
| Default value | `black` |

## Values
Accepts any expression or value that resolves to a color value.  
See [SCSS / Colors](/menus/scss/color) for more info

## Examples
```scss
p {
  outline-color: red;
}
p {
  outline-color: #f00;
}
p {
  outline-color: #ff0000;
}
p {
  outline-color: #ff0000ff;
}
p {
  outline-color: rgb(255, 0, 0);
}
p {
  outline-color: hsl(0, 100%, 50%);
}
```