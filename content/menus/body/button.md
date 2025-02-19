---
title: "<button> element"
type: docs
description: "An intractable button element."
---

## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `action` | *string* | Action for the button to perform when clicked | `action="cmd: tp %player% 0 100 0"` |
| `action-trigger` | *string* | Specifies whether left or right clicking<br>triggers the `action` attribute.<br>`"left"` by default. | `action-trigger="right"` |
| `enabled` | *boolean* | Disables / enables the button | `enabled="false"` |

### Action attribute
Makes the button element to perform an action when clicked.

| Action | Description | Example |
|--|--|--|
| `close` | Closes the menu | `close` |
| `cmd: <command>` | Executes a command as console.<br>You can use `%player%` as a placeholder for the player's name | `cmd: kill %player%` |
| `player-cmd: <command>` | Executes a command as the player.<br>You can use `%player%` as a placeholder for the player's name | `player-cmd: balance` |

Action triggers:
| Value | Triggers |
|--|--|
| `left` | When the button is left-clicked (Punched) |
| `right` | When the button is right-clicked (Interacted with) |


## Default Styling
```scss
button {
  $button-bg: #096cfe;

  display: inline;
  color: white;
  background-color: $button-bg;
  border-color: #121212;
  padding: 0.5px;
  border: 0.5px;

  &:hover {
    background-color: lighten($button-bg, 20%);
  }
  &:active {
    background-color: darken($button-bg, 25%);
  }
}
```

## Examples
```xml
<button>Button text</button>
```
```xml
<button action="close">Close Menu</button>
```
```xml
<button action="cmd: kill %player%">Kill Self</button>
```
```xml
<button enabled="false" action="cmd: give %player% pumpkin_pie 64">Get some pumpkin pies :)</button>
```