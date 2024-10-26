---
title: Colors
type: docs
weight: 5
description: "Information about colors and valid color values."
---

## Hex values
Hex values are prefixed by a `#` character and specify a color using hex digits.
There are 3 types of valid hex sequences: 
- `#rgb` (3 character long) This is a shorter equivalent to `#rrggbb`. 
- `#rrggbb` (6 characters long)
- `#rrggbbaa` (8 characters long) Includes alpha component for transparency.

### Examples
```scss
@warn #fff; // => white
@warn #ff0000; // => red
@warn #ff0000c0; // => #c0ff0000
```


## Color Functions
List of Color functions
- [`rgb(red, green, blue)`](/menus/scss/functions/rgb): Creates color from RGB values
- [`hsl(hue, saturation, lightness)`](/menus/scss/functions/hsl): Creates color from HSL values
- [`darken(color, amount)`](/menus/scss/functions/darken): Darkens a color.
- [`lighten(color, amount)`](/menus/scss/functions/darken): Lightens a color.

## Color names
**Note**: These colors use CSS color values, so colors like red will use the CSS
value of `#FF0000` instead of the minecraft value `#FF5555`. The difference is
minor but notable.

<table>
  <thead>
    <tr>
      <th>Color Name (Case insensitive)</th>
      <th>CSS Value</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AliceBlue</code></td>
      <td><code>#F0F8FF</code></td>
      <td style="background-color: #F0F8FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>AntiqueWhite</code></td>
      <td><code>#FAEBD7</code></td>
      <td style="background-color: #FAEBD7; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Aqua</code></td>
      <td><code>#00FFFF</code></td>
      <td style="background-color: #00FFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Aquamarine</code></td>
      <td><code>#7FFFD4</code></td>
      <td style="background-color: #7FFFD4; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Azure</code></td>
      <td><code>#F0FFFF</code></td>
      <td style="background-color: #F0FFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Beige</code></td>
      <td><code>#F5F5DC</code></td>
      <td style="background-color: #F5F5DC; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Bisque</code></td>
      <td><code>#FFE4C4</code></td>
      <td style="background-color: #FFE4C4; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Black</code></td>
      <td><code>#000000</code></td>
      <td style="background-color: #000000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>BlanchedAlmond</code></td>
      <td><code>#FFEBCD</code></td>
      <td style="background-color: #FFEBCD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Blue</code></td>
      <td><code>#0000FF</code></td>
      <td style="background-color: #0000FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>BlueViolet</code></td>
      <td><code>#8A2BE2</code></td>
      <td style="background-color: #8A2BE2; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Brown</code></td>
      <td><code>#A52A2A</code></td>
      <td style="background-color: #A52A2A; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>BurlyWood</code></td>
      <td><code>#DEB887</code></td>
      <td style="background-color: #DEB887; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>CadetBlue</code></td>
      <td><code>#5F9EA0</code></td>
      <td style="background-color: #5F9EA0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Chartreuse</code></td>
      <td><code>#7FFF00</code></td>
      <td style="background-color: #7FFF00; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Chocolate</code></td>
      <td><code>#D2691E</code></td>
      <td style="background-color: #D2691E; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Coral</code></td>
      <td><code>#FF7F50</code></td>
      <td style="background-color: #FF7F50; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>CornflowerBlue</code></td>
      <td><code>#6495ED</code></td>
      <td style="background-color: #6495ED; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Cornsilk</code></td>
      <td><code>#FFF8DC</code></td>
      <td style="background-color: #FFF8DC; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Crimson</code></td>
      <td><code>#DC143C</code></td>
      <td style="background-color: #DC143C; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Cyan</code></td>
      <td><code>#00FFFF</code></td>
      <td style="background-color: #00FFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkBlue</code></td>
      <td><code>#00008B</code></td>
      <td style="background-color: #00008B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkCyan</code></td>
      <td><code>#008B8B</code></td>
      <td style="background-color: #008B8B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkGoldenRod</code></td>
      <td><code>#B8860B</code></td>
      <td style="background-color: #B8860B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkGray</code></td>
      <td><code>#A9A9A9</code></td>
      <td style="background-color: #A9A9A9; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkGrey</code></td>
      <td><code>#A9A9A9</code></td>
      <td style="background-color: #A9A9A9; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkGreen</code></td>
      <td><code>#006400</code></td>
      <td style="background-color: #006400; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkKhaki</code></td>
      <td><code>#BDB76B</code></td>
      <td style="background-color: #BDB76B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkMagenta</code></td>
      <td><code>#8B008B</code></td>
      <td style="background-color: #8B008B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkOliveGreen</code></td>
      <td><code>#556B2F</code></td>
      <td style="background-color: #556B2F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkOrange</code></td>
      <td><code>#FF8C00</code></td>
      <td style="background-color: #FF8C00; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkOrchid</code></td>
      <td><code>#9932CC</code></td>
      <td style="background-color: #9932CC; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkRed</code></td>
      <td><code>#8B0000</code></td>
      <td style="background-color: #8B0000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkSalmon</code></td>
      <td><code>#E9967A</code></td>
      <td style="background-color: #E9967A; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkSeaGreen</code></td>
      <td><code>#8FBC8F</code></td>
      <td style="background-color: #8FBC8F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkSlateBlue</code></td>
      <td><code>#483D8B</code></td>
      <td style="background-color: #483D8B; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkSlateGray</code></td>
      <td><code>#2F4F4F</code></td>
      <td style="background-color: #2F4F4F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkSlateGrey</code></td>
      <td><code>#2F4F4F</code></td>
      <td style="background-color: #2F4F4F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkTurquoise</code></td>
      <td><code>#00CED1</code></td>
      <td style="background-color: #00CED1; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DarkViolet</code></td>
      <td><code>#9400D3</code></td>
      <td style="background-color: #9400D3; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DeepPink</code></td>
      <td><code>#FF1493</code></td>
      <td style="background-color: #FF1493; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DeepSkyBlue</code></td>
      <td><code>#00BFFF</code></td>
      <td style="background-color: #00BFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DimGray</code></td>
      <td><code>#696969</code></td>
      <td style="background-color: #696969; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DimGrey</code></td>
      <td><code>#696969</code></td>
      <td style="background-color: #696969; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>DodgerBlue</code></td>
      <td><code>#1E90FF</code></td>
      <td style="background-color: #1E90FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>FireBrick</code></td>
      <td><code>#B22222</code></td>
      <td style="background-color: #B22222; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>FloralWhite</code></td>
      <td><code>#FFFAF0</code></td>
      <td style="background-color: #FFFAF0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>ForestGreen</code></td>
      <td><code>#228B22</code></td>
      <td style="background-color: #228B22; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Fuchsia</code></td>
      <td><code>#FF00FF</code></td>
      <td style="background-color: #FF00FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Gainsboro</code></td>
      <td><code>#DCDCDC</code></td>
      <td style="background-color: #DCDCDC; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>GhostWhite</code></td>
      <td><code>#F8F8FF</code></td>
      <td style="background-color: #F8F8FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Gold</code></td>
      <td><code>#FFD700</code></td>
      <td style="background-color: #FFD700; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>GoldenRod</code></td>
      <td><code>#DAA520</code></td>
      <td style="background-color: #DAA520; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Gray</code></td>
      <td><code>#808080</code></td>
      <td style="background-color: #808080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Grey</code></td>
      <td><code>#808080</code></td>
      <td style="background-color: #808080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Green</code></td>
      <td><code>#008000</code></td>
      <td style="background-color: #008000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>GreenYellow</code></td>
      <td><code>#ADFF2F</code></td>
      <td style="background-color: #ADFF2F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>HoneyDew</code></td>
      <td><code>#F0FFF0</code></td>
      <td style="background-color: #F0FFF0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>HotPink</code></td>
      <td><code>#FF69B4</code></td>
      <td style="background-color: #FF69B4; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>IndianRed</code></td>
      <td><code>#CD5C5C</code></td>
      <td style="background-color: #CD5C5C; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Indigo</code></td>
      <td><code>#4B0082</code></td>
      <td style="background-color: #4B0082; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Ivory</code></td>
      <td><code>#FFFFF0</code></td>
      <td style="background-color: #FFFFF0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Khaki</code></td>
      <td><code>#F0E68C</code></td>
      <td style="background-color: #F0E68C; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Lavender</code></td>
      <td><code>#E6E6FA</code></td>
      <td style="background-color: #E6E6FA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LavenderBlush</code></td>
      <td><code>#FFF0F5</code></td>
      <td style="background-color: #FFF0F5; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LawnGreen</code></td>
      <td><code>#7CFC00</code></td>
      <td style="background-color: #7CFC00; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LemonChiffon</code></td>
      <td><code>#FFFACD</code></td>
      <td style="background-color: #FFFACD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightBlue</code></td>
      <td><code>#ADD8E6</code></td>
      <td style="background-color: #ADD8E6; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightCoral</code></td>
      <td><code>#F08080</code></td>
      <td style="background-color: #F08080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightCyan</code></td>
      <td><code>#E0FFFF</code></td>
      <td style="background-color: #E0FFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightGoldenRodYellow</code></td>
      <td><code>#FAFAD2</code></td>
      <td style="background-color: #FAFAD2; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightGray</code></td>
      <td><code>#D3D3D3</code></td>
      <td style="background-color: #D3D3D3; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightGrey</code></td>
      <td><code>#D3D3D3</code></td>
      <td style="background-color: #D3D3D3; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightGreen</code></td>
      <td><code>#90EE90</code></td>
      <td style="background-color: #90EE90; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightPink</code></td>
      <td><code>#FFB6C1</code></td>
      <td style="background-color: #FFB6C1; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSalmon</code></td>
      <td><code>#FFA07A</code></td>
      <td style="background-color: #FFA07A; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSeaGreen</code></td>
      <td><code>#20B2AA</code></td>
      <td style="background-color: #20B2AA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSkyBlue</code></td>
      <td><code>#87CEFA</code></td>
      <td style="background-color: #87CEFA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSlateGray</code></td>
      <td><code>#778899</code></td>
      <td style="background-color: #778899; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSlateGrey</code></td>
      <td><code>#778899</code></td>
      <td style="background-color: #778899; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightSteelBlue</code></td>
      <td><code>#B0C4DE</code></td>
      <td style="background-color: #B0C4DE; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LightYellow</code></td>
      <td><code>#FFFFE0</code></td>
      <td style="background-color: #FFFFE0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Lime</code></td>
      <td><code>#00FF00</code></td>
      <td style="background-color: #00FF00; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>LimeGreen</code></td>
      <td><code>#32CD32</code></td>
      <td style="background-color: #32CD32; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Linen</code></td>
      <td><code>#FAF0E6</code></td>
      <td style="background-color: #FAF0E6; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Magenta</code></td>
      <td><code>#FF00FF</code></td>
      <td style="background-color: #FF00FF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background-color: #800000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumAquaMarine</code></td>
      <td><code>#66CDAA</code></td>
      <td style="background-color: #66CDAA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumBlue</code></td>
      <td><code>#0000CD</code></td>
      <td style="background-color: #0000CD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumOrchid</code></td>
      <td><code>#BA55D3</code></td>
      <td style="background-color: #BA55D3; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumPurple</code></td>
      <td><code>#9370DB</code></td>
      <td style="background-color: #9370DB; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumSeaGreen</code></td>
      <td><code>#3CB371</code></td>
      <td style="background-color: #3CB371; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumSlateBlue</code></td>
      <td><code>#7B68EE</code></td>
      <td style="background-color: #7B68EE; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumSpringGreen</code></td>
      <td><code>#00FA9A</code></td>
      <td style="background-color: #00FA9A; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumTurquoise</code></td>
      <td><code>#48D1CC</code></td>
      <td style="background-color: #48D1CC; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MediumVioletRed</code></td>
      <td><code>#C71585</code></td>
      <td style="background-color: #C71585; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MidnightBlue</code></td>
      <td><code>#191970</code></td>
      <td style="background-color: #191970; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MintCream</code></td>
      <td><code>#F5FFFA</code></td>
      <td style="background-color: #F5FFFA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>MistyRose</code></td>
      <td><code>#FFE4E1</code></td>
      <td style="background-color: #FFE4E1; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Moccasin</code></td>
      <td><code>#FFE4B5</code></td>
      <td style="background-color: #FFE4B5; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>NavajoWhite</code></td>
      <td><code>#FFDEAD</code></td>
      <td style="background-color: #FFDEAD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Navy</code></td>
      <td><code>#000080</code></td>
      <td style="background-color: #000080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>OldLace</code></td>
      <td><code>#FDF5E6</code></td>
      <td style="background-color: #FDF5E6; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Olive</code></td>
      <td><code>#808000</code></td>
      <td style="background-color: #808000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>OliveDrab</code></td>
      <td><code>#6B8E23</code></td>
      <td style="background-color: #6B8E23; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Orange</code></td>
      <td><code>#FFA500</code></td>
      <td style="background-color: #FFA500; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>OrangeRed</code></td>
      <td><code>#FF4500</code></td>
      <td style="background-color: #FF4500; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Orchid</code></td>
      <td><code>#DA70D6</code></td>
      <td style="background-color: #DA70D6; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PaleGoldenRod</code></td>
      <td><code>#EEE8AA</code></td>
      <td style="background-color: #EEE8AA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PaleGreen</code></td>
      <td><code>#98FB98</code></td>
      <td style="background-color: #98FB98; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PaleTurquoise</code></td>
      <td><code>#AFEEEE</code></td>
      <td style="background-color: #AFEEEE; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PaleVioletRed</code></td>
      <td><code>#DB7093</code></td>
      <td style="background-color: #DB7093; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PapayaWhip</code></td>
      <td><code>#FFEFD5</code></td>
      <td style="background-color: #FFEFD5; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PeachPuff</code></td>
      <td><code>#FFDAB9</code></td>
      <td style="background-color: #FFDAB9; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Peru</code></td>
      <td><code>#CD853F</code></td>
      <td style="background-color: #CD853F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Pink</code></td>
      <td><code>#FFC0CB</code></td>
      <td style="background-color: #FFC0CB; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Plum</code></td>
      <td><code>#DDA0DD</code></td>
      <td style="background-color: #DDA0DD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>PowderBlue</code></td>
      <td><code>#B0E0E6</code></td>
      <td style="background-color: #B0E0E6; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Purple</code></td>
      <td><code>#800080</code></td>
      <td style="background-color: #800080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>RebeccaPurple</code></td>
      <td><code>#663399</code></td>
      <td style="background-color: #663399; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Red</code></td>
      <td><code>#FF0000</code></td>
      <td style="background-color: #FF0000; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>RosyBrown</code></td>
      <td><code>#BC8F8F</code></td>
      <td style="background-color: #BC8F8F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>RoyalBlue</code></td>
      <td><code>#4169E1</code></td>
      <td style="background-color: #4169E1; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SaddleBrown</code></td>
      <td><code>#8B4513</code></td>
      <td style="background-color: #8B4513; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Salmon</code></td>
      <td><code>#FA8072</code></td>
      <td style="background-color: #FA8072; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SandyBrown</code></td>
      <td><code>#F4A460</code></td>
      <td style="background-color: #F4A460; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SeaGreen</code></td>
      <td><code>#2E8B57</code></td>
      <td style="background-color: #2E8B57; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SeaShell</code></td>
      <td><code>#FFF5EE</code></td>
      <td style="background-color: #FFF5EE; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Sienna</code></td>
      <td><code>#A0522D</code></td>
      <td style="background-color: #A0522D; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Silver</code></td>
      <td><code>#C0C0C0</code></td>
      <td style="background-color: #C0C0C0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SkyBlue</code></td>
      <td><code>#87CEEB</code></td>
      <td style="background-color: #87CEEB; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SlateBlue</code></td>
      <td><code>#6A5ACD</code></td>
      <td style="background-color: #6A5ACD; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SlateGray</code></td>
      <td><code>#708090</code></td>
      <td style="background-color: #708090; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SlateGrey</code></td>
      <td><code>#708090</code></td>
      <td style="background-color: #708090; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Snow</code></td>
      <td><code>#FFFAFA</code></td>
      <td style="background-color: #FFFAFA; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SpringGreen</code></td>
      <td><code>#00FF7F</code></td>
      <td style="background-color: #00FF7F; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>SteelBlue</code></td>
      <td><code>#4682B4</code></td>
      <td style="background-color: #4682B4; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Tan</code></td>
      <td><code>#D2B48C</code></td>
      <td style="background-color: #D2B48C; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Teal</code></td>
      <td><code>#008080</code></td>
      <td style="background-color: #008080; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Thistle</code></td>
      <td><code>#D8BFD8</code></td>
      <td style="background-color: #D8BFD8; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Tomato</code></td>
      <td><code>#FF6347</code></td>
      <td style="background-color: #FF6347; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Turquoise</code></td>
      <td><code>#40E0D0</code></td>
      <td style="background-color: #40E0D0; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Violet</code></td>
      <td><code>#EE82EE</code></td>
      <td style="background-color: #EE82EE; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Wheat</code></td>
      <td><code>#F5DEB3</code></td>
      <td style="background-color: #F5DEB3; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>White</code></td>
      <td><code>#FFFFFF</code></td>
      <td style="background-color: #FFFFFF; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>WhiteSmoke</code></td>
      <td><code>#F5F5F5</code></td>
      <td style="background-color: #F5F5F5; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>Yellow</code></td>
      <td><code>#FFFF00</code></td>
      <td style="background-color: #FFFF00; width: 200px;"></td>
    </tr>
    <tr>
      <td><code>YellowGreen</code></td>
      <td><code>#9ACD32</code></td>
      <td style="background-color: #9ACD32; width: 200px;"></td>
    </tr>
  </tbody>
</table>