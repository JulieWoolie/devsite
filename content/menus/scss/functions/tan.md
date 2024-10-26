---
title: "tan(x)"
type: docs
description: "Tangent function"
---
```scss
@function tan($angle)
```

## Parameters
- **angle**  
  An angle, or any number. If the input has no unit, then it's treated as 
  radians.

## Returns
The tangent of the angle `angle`. 
- If the angle is `infinity` or `-infinity`, `NaN` is returned.
- If the angle is `-0`, `-0` is returned.