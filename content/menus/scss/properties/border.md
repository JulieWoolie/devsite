---
title: "Borders"
type: docs
description: Properties related to borders
---

Borders create a visual border on the outside of an element.
  
In normal CSS, borders are declared with a single property, but in Delphi, 
borders are treated the same as padding, just with a different color (set with 
[`border-color`](/menus/scss/properties/border-color))

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `0` |

Borders can be set individually with these properties:
- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

Or defined with the `border` shorthand.

border color is determined by the [`border-color`](/menus/scss/properties/border-color) property.

{{<alert title="Shorthand examples">}}
```scss
// Sets all sides to have 1 pixel of border.
border: 1px;

// Top and bottom have 1 pixel of border
// Left and right have 3 pixels of border
border: 1px 3px;
  
// Top has 1 pixel of border
// Left and right have 1ch of border
// Bottom has 5 pixels of border
border: 1px 1ch 5px;

// Top has 1ch of border
// Right has 2em of border
// Bottom has 3% of border
// Left has 4vw of border
border: 1ch 2em 3% 4vw;
```
{{</alert>}}

{{<alert title="Individual example">}}
```scss
// Sets all sides to have 1 pixel of border.
border-top: 1px;
border-right: 1px;
border-bottom: 1px;
border-left: 1px;
```
{{</alert>}}