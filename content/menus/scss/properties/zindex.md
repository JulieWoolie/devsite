---
title: "z-index"
type: docs
description: "Element depth property"
---
In web CSS the `z-index` element is only available in a positioned element, but
in Delphi this controls the rendering depth of an element regardless of layout 
context. (See Notes for more info)

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `0` |

## Values
The Z index property accepts any expression or value that resolves to an integer.

## Examples
```scss
p {
  z-index: 3;
}
```

## Notes
- In Delphi, every element is rendered with display entities which are rotated 
  and positioned along a plane (the document view screen). The Z index value 
  controls the depth distance from that view screen.

- The Z index value is added to the render entity's calculated depth value.