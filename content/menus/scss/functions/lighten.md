---
title: "lighten(color)"
type: docs
---
```scss
@function lighten($color, $amount: 25%)
```
Adds the specified `amount` to each of the specified `color`'s channels. If 
`amount` is not specified, it defaults to `25%`.

## Parameters
- **color**  
  Color input value, must be a valid color.
- **amount** *(Optional)*  
  Amount to lighten the color. If not specified, defaults to `25%`.

## Return value
Modified color

## Examples
```scss
@debug lighten(darkgreen); // => #007d00
@debug lighten(white); // => white
```