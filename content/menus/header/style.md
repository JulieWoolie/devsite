---
title: <style/> tag
type: docs
weight: 10
description: "Connects SCSS stylesheets to the document."
---

The style tag is used for connecting SCSS stylesheets to the document. This tag
can be declared as many times as needed to link multiple stylesheets.

You can either specify a filepath to an SCSS file using the `src` attribute, or
write SCSS inside of the style element.

## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `src` | *stylesheet file path* | Specifies the file path of a stylesheet to use in the current document | `./style.scss` |

## Examples
```xml
<style src="./style.css"/>
```
```xml
<style>
  .rule-1 {
    margin-left: auto;
    margin-right: auto;
  }
</style>
```

## See also
- [SCSS in Delphi](/menus/scss)