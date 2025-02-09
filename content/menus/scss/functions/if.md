---
title: "if($condition, if-true, if-false)"
type: docs
description: "Ternary function"
---
```scss
@function if($condition, $if-true, $if-false)
```

## Parameters
- **condition**  
  A truthy or falsey value.
- **if-true**  
  The value returned if the `$condition` parameter evaulates to `true`.
- **if-false**  
  The value returned if the `$condition` parameter evaulates to `false`.

## Returns
Either the second parameter if the first parameter evaluates to a truthy value,
or the third parameter otherwise.

## Examples
```scss
@debug if(true, 1px, 2px); // 1px;
@debug if(false, 1px, 2px); // 2px;
```