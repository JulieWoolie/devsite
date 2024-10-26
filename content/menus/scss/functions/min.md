---
title: "min(a, b)"
type: docs
description: "Returns the smallest of the values specified"
---
```scss
@function min($a, $b)
```

## Parameters
- **a**  
  The first value
- **b**  
  The second value

## Returns
Either the `a` or `b`. `a` is returned if it is less than `b`, otherwise `b` 
is returned.

## See also
- [`clamp(min, value, max)`](/menus/scss/functions/clamp)
- [`max(a, b)`](/menus/scss/functions/max)