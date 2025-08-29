---
title: "border-color"
type: docs
description: Border color property
---

Sets the color of an element's border

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `black` |

## Values
Accepts any expression or value that resolves to a color value.  
See [SCSS / Colors](/menus/scss/color) for more info

## Examples
```scss
p {
  border-color: red;
}
p {
  border-color: #f00;
}
p {
  border-color: #ff0000;
}
p {
  border-color: #ff0000ff;
}
p {
  border-color: rgb(255, 0, 0);
}
p {
  border-color: hsl(0, 100%, 50%);
}
```

## See also
- [Borders](/menus/scss/properties/border)