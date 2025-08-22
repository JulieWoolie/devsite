---
title: "flex-basis"
type: docs
description: Flex base size
---

Flex basis specifies the main base size of flex items, If a flex 
container's `flex-direction` is `column`, this acts like the `height` 
property, but if the direction is `row`, this acts like the `width` 
property.

| Field         | Value      |
|---------------|------------|
| Cascades      | No         |
| Initial value | `auto`     |
| Applies To    | flex items |

## Values
Accepts any expression or value that resolves to a `<length>` value.

## Examples
```scss
span {
  flex-basis: 25%;
}
span {
  flex-basis: 15px;
}
```