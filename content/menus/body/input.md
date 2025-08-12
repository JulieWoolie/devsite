---
title: "<input/> element"
type: docs
description: "Allows for user input"
---

Input elements take input from players

## Attributes
| Attribute | Value | Description | Example |
|--|--|--|--|
| `type` | *input type* | An input type, changes how the input is displayed and validated. | `type="number"` |
| `placeholder` | *string* | Placeholder text when no input has been given. | `placeholder="Enter name..."` |
| `enabled` | *boolean* | Whether the element is disabled or not.<br>`true` by default | `enabled="false"` |
| `prompt` | *string* | When clicked, this prompt is shown to a player to tell them to input text | `prompt="Type your password"` |

### `type` Attribute
| Value | Description | Input example |
|--|--|--|
| `text` (Default) | Regular text input, no validation or rendering changes are applied | `Hello, world!` |
| `number` | Input must be a valid `Double` in Java, input is validated before being submitted | `1.431` |
| `password` | Input is not validated but is displayed as asterisks ("*") | `my cool password` |

### `placeholder` Attribute
This attribute changes the placeholder text shown to players when no input has 
been submitted.
  
If the attribute is not explicitly set, then it defaults to `"..."`.

### `prompt` Attribute
When a player clicks on the input element to input something, they are shown a 
prompt in chat that tells them to type something in chat. This attribute 
controls the message shown.
**Note:** The attribute's value is parsed as a MiniMessage, so  
`prompt="<red>GIVE ME YOUR MONEY"` will show a red prompt.


## Default Styling
```scss
input {
  display: block;
  width: 100%;
  outline: 0.5px;
  outline-color: white;
  padding: 0.5px;
  background-color: black;
  box-sizing: border-box;

  &:hover {
    color: gray;
    outline-color: darkgray;
  }

  &:disabled {
    color: gray;
    outline-color: darkgray;
  }

  &::placeholder {
    color: gray;
    italic: true;
  }
}
```

## Examples
```xml
<input type="number"/>
```
```xml
<input enabled="false"/>
```
```xml
<input type="number" placeholder="Enter your height (m)"/>
```
```xml
<input prompt="Enter your password" placeholder="Password..." type="password"/>
```