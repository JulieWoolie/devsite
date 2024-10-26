---
title: "color"
type: docs
description: Text color property
---

Sets the color of the text displayed on elements.

| Field | Value |
|--|--|
| Cascades | Yes |
| Initial value | `black` |

## Values
Accepts any expression or value that resolves to a color value.  
See [SCSS / Colors](/menus/scss/colors) for more info

## Examples
```scss
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: #ff0000ff;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: hsl(0, 100%, 50%);
}
```