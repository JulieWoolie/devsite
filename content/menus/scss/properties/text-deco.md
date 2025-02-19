---
title: Text Decoration
type: docs
description: "Properties related to text decoration (italic, underlined, bold)"
---

Text decoration in Delphi is done with 5 boolean CSS properties.

| Field | Value |
|--|--|
| Cascades | Yes |
| Default value | `false` |

## Decoration properties
| Property name | Description |
|--|--|
| `bold` | Sets whether the text is bold |
| `italic` | Sets whether the text is italic |
| `underlined` | Sets if the text is underlined |
| `strikethrough` | Sets if the text has a line through it |
| `obfuscated` | Makes the text cycle through different characters each frame, appearing obfuscated |

{{<alert title="Examples">}}
```scss
p {
  bold: true;
  italic: true;
  underlined: true;
  strikethrough: true;
  obfuscated: true;
}
```
{{</alert>}}