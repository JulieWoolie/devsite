---
title: "cos(x)"
type: docs
description: "Cosine function"
---
```scss
@function cos($angle)
```

## Parameters
- **angle**  
  An angle, or any number. If the input has no unit, then it's treated as 
  radians.

## Returns
The cosine of the angle `angle`, between `-1` and `1`, unless the angle is
`infinity` or `-infinity`, in which case, `NaN` is returned.