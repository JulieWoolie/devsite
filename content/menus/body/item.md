---
title: "<item/> element"
type: docs
description: "Allows an item to be rendered in the menu"
---

Displays an item on the menu. This element cannot have child elements.
  
The displayed item can be set with either the `src` attribute or by writing the
item data JSON inside the element.

## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `src` | *path* | A [Resource Path](../../paths) to the item's data. | `src="item.json"` |
| `hide-item-tooltip` | *boolean* | Whether to show the item's tooltip or<br>not when the element is hovered over.<br>`true` by default | `hide-item-tooltip="true"` |
| `advanced-item-tooltips` | *boolean* | Whether to show the item tooltip<br>as if debug tooltips were enabled or not.<br>`false` by default | `advanced-item-tooltips="true"` |

### Source Attribute
Specifies a path to a JSON file containing item stack data for displaying the 
item.
  
Example *`index.xml`*:
```xml
<item src="item.json"/>
```
*`item.json`*:
```json
{
  "id": "minecraft:diamond_pickaxe",
  "count": 1,
  "components": {
    "item_name": "Cool Pickaxe :3",
    "enchantments": {
      "show_in_tooltip": true,
      "levels": {
        "minecraft:efficiency": 5,
        "minecraft:silk_touch": 1,
        "minecraft:mending": 1,
        "minecraft:unbreaking": 3
      }
    }
  }
}
```

## Default Styling
### Item element styling
```scss
item {
  display: inline;
  width: 25cm;
  height: 25cm;
}
```
### Tooltip styling
Changing the `item-tooltip-name`, `item-tooltip-line` allows you to modify the
styling of individual item tooltip lines, while `item-tooltip` modifies the 
style of the tooltip container element.

```scss
item-tooltip-name {
  margin-bottom: 0.5px;
  display: block;
}

item-tooltip {
  z-index: 10;
  display: block;

  padding: 0.25px;
  background-color: #170817;
  border: 0.25px;
  border-color: #270558;
  outline: 0.25px;
  outline-color: #170817;

  * {
    font-size: 50%;
  }
}
```

## Examples
```xml
<item src="item.json"/>
```
```xml
<item src="item.json" hide-item-tooltip="true"/>
```
```xml
<item src="item.json" hide-item-tooltip="false" advanced-item-tooltips="true"/>
```
```xml
<item>
  {id: 'minecraft:stone'}
</item>
```