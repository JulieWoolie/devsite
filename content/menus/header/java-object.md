---
title: "<java-object> tag"
type: docs
weight: 20
description: "Load java objects from script files"
---

The `<java-object/>` element is used to link to a specific java (or Kotlin) 
class to load and invoke as the document is loaded. This element uses the 
`class-name` attribute to find a class.
  
When a class is found, the system will first try to find a 
`public static void onDomInitialize(Document)` method in the class, if found, it
is invoked.  
If not found, then the system will look for a public constructor with a single
[`Document`](/jd/menus/net/arcadiusmc/dom/Document.html) parameter. If found, it is invoked, if not, an error is logged in the
console.
  
## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `class-name` | *class* | Class path of the class to load | `net.arcadiusmc.entityeditor.menu.EquipmentEditorKt` |

## Examples
```xml
<java-object class-name="net.arcadiusmc.entityeditor.menu.EquipmentEditorKt"/>
```