---
title: "Outline"
type: docs
description: Properties related to outlines
---

Outlines are the same as Borders, except one layer outward.
  
In normal CSS, outlines are declared with a single property, but in Delphi, 
outlines are treated the same as padding, just with a different color (set with 
[`outline-color`](/menus/scss/properties/outline-color))

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `0` |

Outlines can be set individually with these properties:
- `outline-top`
- `outline-right`
- `outline-bottom`
- `outline-left`

Or defined with the `outline` shorthand.

Outline color is determined by the [`outline-color`](/menus/scss/properties/outline-color) property.

{{<alert title="Shorthand examples">}}
```scss
// Sets all sides to have 1 pixel of outline.
outline: 1px;

// Top and bottom have 1 pixel of outline
// Left and right have 3 pixels of outline
outline: 1px 3px;
  
// Top has 1 pixel of outline
// Left and right have 1ch of outline
// Bottom has 5 pixels of outline
outline: 1px 1ch 5px;

// Top has 1ch of outline
// Right has 2em of outline
// Bottom has 3% of outline
// Left has 4vw of outline
outline: 1ch 2em 3% 4vw;
```
{{</alert>}}

{{<alert title="Individual example">}}
```scss
// Sets all sides to have 1 pixel of outline.
outline-top: 1px;
outline-right: 1px;
outline-bottom: 1px;
outline-left: 1px;
```
{{</alert>}}


## See also
- [outline-color](/menus/scss/properties/outline-color)