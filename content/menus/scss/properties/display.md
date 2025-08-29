---
title: "display"
type: docs
description: Set how an element is treated and how it's children are laid out.
---

The display property sets how elements are laid out in a Flow layout context and
how an element's children are laid out.

`block` elements are placed onto their own lines, while any `inline` elements 
are all grouped together onto the same line.

| Field | Value |
|--|--|
| Cascades | No |
| Initial value | `block` |

## Values
Accepts any of the following keywords:
- `block`
- `inline`
- `inline-block`
- `flex`
- `inline-flex`

## Examples
```scss
p {
  display: block;
}
p {
  display: inline;
}
p {
  display: inline-block;
}
div {
  display: flex;
}
div {
  display: inline-flex;
}
```