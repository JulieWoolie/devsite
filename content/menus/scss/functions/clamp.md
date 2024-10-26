---
title: "clamp(min, value, max)"
type: docs
description: "Clamps a value between a minimum and maximum"
---
```scss
@function clamp($min, $value, $max)
```

## Parameters
- **min**  
  Lower (most negative) bound.
- **value**  
  Preferred value.
- **max**  
  Upper (most positive) bound.

## Returns
Either the `min`, `value`, or `max` parameter.  
`min` is returned if `value` is less than `min`.  
`max` is returned if `value` is greater than `max`.  
`val` is returned if `value` is greater than `min` and less than `max`.

## Examples
```scss
@debug clamp(1 10 100); // => 10
@debug clamp(1 -2 100); // => 1
@debug clamp(1 1000 100); // => 100
@debug clamp(2px 14px 30px); // => 14px
```

## See also
- [`min(a, b)`](/menus/scss/functions/min)
- [`max(a, b)`](/menus/scss/functions/max)