---
title: Units
type: docs
weight: 5
description: "List of supported measurement units"
---

| Suffix | Unit type | Description |
|--|--|--|
| `ch` | length | Relative to the size of the '0' character in minecraft's `minecraft:default` font |
| `px` | length | Relative to 1/40th (see notes below) |
| `vw` | length | Relative to 1/100th of the width of the document screen |
| `vh` | length | Relative to 1/100th of the height of the document screen |
| `m` | length | Relative to the size of 1 block |
| `cm` | length | Relative to 1/100th of a block |
| `%` | length | Relative to the parent's size |
| `deg` | angle | Represents an angle in degrees. Relative to 1/360th of a circle |
| `grad` | angle | Represents an angle in gradians. Relative to 1/400th of a circle |
| `rad` | angle | Represents an angle in radians |
| `turn` | angle | Represents an angle with the number of rotations |

## Unit compatibility
Not all units are compatible with each other, the following is a list of 
compatible units and how they are handled.
| Units | Handling |
|--|--|
| `cm`, `m` | `m` measurements are converted to `cm` |
| `deg`, `grad`, `rad`, `turn` | Units are converted to either degrees or radians based on use case (eg: to degrees for operators like `+` and `-` and to radians for math, like `sin(x)`) |

## Notes
- Pixels aren't real, a pixel is defined as `1 / 40`. This comes from the fact 
  that an empty text display entity (Text display entity with content `""`) has
  a size that's 1/40th of a block. Thus a pixel is 1/40th, or `0.025`.