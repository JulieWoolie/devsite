---
title: "Gaps"
type: docs
description: "`gap`, `row-gap`, `column-gap` properties"
---

Gaps are empty spaces between elements in a flex container. There are 2 types of gaps, `column` and `row` gaps.

| Field         | Value           |
|---------------|-----------------|
| Cascades      | No              |
| Initial value | `0`             |
| Applies To    | flex containers |

## Values
Accepts any expression or value that resolves to an `auto` or a `<length>`.

## Examples
```scss
span {
  gap: 0;
}

span {
  gap: 2px;
}
span {
  /* Equivalent to the above example */
  row-gap: 2px;
  column-gap: 2px;
}

span {
  gap: 1px 2px;
}
span {
  /* Equivalent to the above example */
  row-gap: 1px;
  column-gap: 2px;
}
```