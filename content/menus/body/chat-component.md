---
title: "<chat-component> element"
type: docs
description: "Element with content loaded from a JSON chat component."
---

This element lets you use a JSON text component for text content on a page.

{{<alert title="Note">}}
At time of writing, only vanilla english translations are supported, 
non-vanilla or non-english messages may be rendered incorrectly with incorrect 
sizes.
{{</alert>}}

## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `src` | *path* | Path to a text or JSON file that contains the component's contents. | `src="./text.json"` |
| `type` | *string* | Format the text is stored in. Supported values: `json`, `minimessage`. | `type="json"` |

## Default Styling
```scss
// None
```

## Examples
```xml
<chat-component>
  {"text": "Hello, world!"}
</chat-component>
```
```xml
<chat-component>
  {"translate": "blocks.minecraft.stone", "bold": "true"}
</chat-component>
```
```xml
<chat-component>
  {"keybind": "key.right"}
</chat-component>
```