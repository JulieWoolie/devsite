---
title: "rgb(red, green, blue)"
type: docs
description: "Create color value from RGB components"
---
```scss
@function rgb($red, $green, $blue, $alpha: 1.0)
```

Creates a color value out of the specified red, green and blue components. Any 
of the RGB components can be specified either as a percentage from 0 to 100 or
as a plain number from 0 to 255.

## Parameters
- **red**  
  Red color component
- **green**  
  Green color component
- **blue**  
  Blue color component
- **alpha** *(Optional)*  
  Alpha color component. This parameter is optional, if it's omitted, a value of
  `1.0` is used.  
  This parameter only accepts plain numbers in range `0.0` to `1.0`.

## Returns
A color value made of the specified RGB components.

## Notes
- The `rgba` function is an alias for `rgb`. As such, they are identical 
  functions.
- The `rgb(R G B[ / A])` syntax is **not** supported.
- The relative RGB color syntax (`rgb(from <color> R G B[ / A])`) is **not**
  supported.

## Examples
```scss
@debug rgb(255 255 255); // => white
@debug rgb(0 50% 0); // => 007f00
@debug rgb(255 0 0); // => red
@debug rgb(255 0 0 0.5); // => #7fff0000
```

## See also
- [`hsl(hue, saturation, lightness)`](/menus/scss/functions/hsl)
- [`darken(color, amount)`](/menus/scss/functions/darken)
- [`lighten(color, amount)`](/menus/scss/functions/lighten)