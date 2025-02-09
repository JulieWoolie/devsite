---
title: "Padding"
type: docs
description: Properties related to padding
---

Padding extends the background, creating a space between the content of an 
element and its borders.

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `0` |

Padding can be set individually with these properties:
- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

Or defined with the `padding` shorthand.

{{<alert title="Shorthand examples">}}
```scss
// Sets all sides to have 1 pixel of padding.
padding: 1px;

// Top and bottom have 1 pixel of padding
// Left and right have 3 pixels of padding
padding: 1px 3px;
  
// Top has 1 pixel of padding
// Left and right have 1ch of padding
// Bottom has 5 pixels of padding
padding: 1px 1ch 5px;

// Top has 1ch of padding
// Right has 2em of padding
// Bottom has 3% of padding
// Left has 4vw of padding
padding: 1ch 2em 3% 4vw;
```
{{</alert>}}

{{<alert title="Individual example">}}
```scss
// Sets all sides to have 1 pixel of padding.
padding-top: 1px;
padding-right: 1px;
padding-bottom: 1px;
padding-left: 1px;
```
{{</alert>}}


## See also
- [background-color](/menus/scss/properties/background-color)