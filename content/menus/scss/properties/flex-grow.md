---
title: "flex-grow"
type: docs
description: Flex growth
---

The flex growth determines if or how much a flex item grows in a flexbox 
container when there is extra space.

If set to `0`, an element won't grow at all, if set to any value above that, 
it will. If there are multiple elements with a positive grow value in a flexbox 
container, the `flex-grow` value acts as a weight. For example, if all 
elements have growth value of 1, they all grow an equal amount, if one has a 
growth value of 2, it will grow more than the others.

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
  flex-grow: 0;
}
span {
  flex-grow: 1;
}
```

## See also
- [flex-shrink](/menus/scss/properties/flex-shrink)
