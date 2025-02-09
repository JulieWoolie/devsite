---
title: "Margins"
type: docs
description: Properties related to margins
---

Margins are the empty space around elements used to create space.

| Field | Value |
|--|--|
| Cascades | No |
| Default value | `0` |

Margins can be set individually with these properties:
- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

Or defined with the `margin` shorthand.

{{<alert title="Shorthand examples">}}
```scss
// Sets all sides to have 1 pixel of margin.
margin: 1px;

// Top and bottom have 1 pixel of margin
// Left and right have 3 pixels of margin
margin: 1px 3px;
  
// Top has 1 pixel of margin
// Left and right have 1ch of margin
// Bottom has 5 pixels of margin
margin: 1px 1ch 5px;

// Top has 1ch of margin
// Right has 2em of margin
// Bottom has 3% of margin
// Left has 4vw of margin
margin: 1ch 2em 3% 4vw;
```
{{</alert>}}

{{<alert title="Individual example">}}
```scss
// Sets all sides to have 1 pixel of margin.
margin-top: 1px;
margin-right: 1px;
margin-bottom: 1px;
margin-left: 1px;
```
{{</alert>}}