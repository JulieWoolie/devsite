---
title: "sin(x)"
type: docs
description: "Sine function"
---
```scss
@function sin($angle)
```

## Parameters
- **angle**  
  An angle, or any number. If the input has no unit, then it's treated as 
  radians.

## Returns
The sine of the angle `angle`, between `-1` and `1`, unless the angle is
`infinity` or `-infinity`, in which case, `NaN` is returned.