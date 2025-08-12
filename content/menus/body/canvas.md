---
title: "<canvas> element"
type: docs
description: "A canvas any image can be drawn on"
---

## Attributes
| Attribute | Value     | Description                                        | Example         |
|-----------|-----------|----------------------------------------------------|-----------------|
| `width`   | *integer* | Width of the canvas, if not set, defaults to `16`  | `width=16`      |
| `height`  | *integer* | Height of the canvas, if not set, defaults to `16` | `height=16`     |

## Modifying the Canvas
Currently, a `<canvas>` element can only be modified through the Java or JS APIs. Here is a quick 
example of how to do so:

{{< tabpane text=true right=false >}}
{{% tab header="`index.xml`" %}}
  ```html
  <delphi>
    <head>
      <script defer src="script.js"/>
    </head>
    <body>
      <canvas id="canvas" width="64" height="64"/>
    </body>
  </delphi>
  ```
{{% /tab %}}
{{% tab header="`script.js`" %}}
```js
const canvas = document.getElementById("canvas")

// Get the canvas' pixel buffer
const gfx = canvas.getCanvas()

// Draws a simple black-white gradient
for (let y = 0; y < gfx.getHeight(); y++) {
  for (let x = 0; x < gfx.getWidth(); x++) {
    const value = (y / gfx.getHeight()) * 255
    
    // Construct a color object, you can also use hsv(h, s, v)
    const color = rgb(value, value, value)

    gfx.setColor(x, y, color)
  }
}

```
{{% /tab %}}
{{< /tabpane >}}

## Notes
- By default, the `width` and `height` XML attributes will determine the size of the canvas element,
  but if the CSS properties `width` or `height` are set to any value other than `auto`, then that
  size will be used. The pixel resolution will not change, but the resulting size of each pixel 
  will.

- By default, each pixel's width and height is `0.025` 

- The amount of entities used to render a canvas element is equal to the amount of pixels, so be 
  careful, as a 16x16 canvas already uses 256 Text Display Entities.

- Canvases, like all Delphi nodes and elements are only re-rendered once per tick. 
  So, if you want to animate something, know you're unfortunately limited to 20 FPS.

## Default Styling
*None*

## Examples
```xml
<canvas/>
```
```xml
<canvas width="32" height="32"/>
```
```xml
<canvas width=48 height=64 />
```