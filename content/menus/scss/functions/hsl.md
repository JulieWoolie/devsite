---
title: "hsl(hue, saturation, lightness)"
type: docs
description: "Create color value from HSL components"
---
```scss
@function hsl($hue, $saturation, $lightness, $alpha: 1.0)
```

## Parameters
- **hue**  
  Hue color component. Can be defined as plain number (treated the same as 
  degrees) or as a number with an angle measurement (`deg`, `rad`, `grad`, 
  `turn`).
- **saturation**  
  Saturation color component. Can either be a `0.0` to `1.0` value, or a `0%` 
  to `100%` value.
- **lightness**  
  Lightness color component. Can either be a `0.0` to `1.0` value, or a `0%` 
  to `100%` value.
- **alpha** *(Optional)*  
  Alpha color component. This parameter is optional, if it's omitted, a value of
  `1.0` is used.  
  This parameter only accepts plain numbers in range `0.0` to `1.0`.

## Returns
A color value made of of the specified hue, saturation, lightness and alpha 
values.

## Notes
- The `hsla` function is an alias for `hsl`. As such, they are identical 
  functions.
- The `hsl(H S L[ / A])` syntax is **not** supported.
- The relative RGB color syntax (`hsl(from <color> H S L[ / A])`) is **not**
  supported.

## See also
- [`rgb(red, green, blue)`](/menus/scss/functions/rgb)
- [`darken(color, amount)`](/menus/scss/functions/darken)
- [`lighten(color, amount)`](/menus/scss/functions/lighten)