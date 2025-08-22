---
title: "flex-shrink"
type: docs
description: Flex Shrink
---

The flex shrink determines if or how much a flex item shrinks in a flexbox 
container when there is not enough space for all elements.

If all elements in a flex container have a shrink value of `0`, all elements 
will shrink equally. If any have a positive shrink value, only those will 
shrink. The larger the shrink value, the more they'll shrink. 

| Field         | Value      |
|---------------|------------|
| Cascades      | No         |
| Initial value | `0`        |
| Applies To    | flex items |

## Values
Accepts any expression or value that resolves to an integer value.

## Examples
```scss
span {
  flex-shrink: 0;
}
span {
  flex-shrink: 1;
}
```

## See also
- [flex-grow](/menus/scss/properties/flex-grow)
