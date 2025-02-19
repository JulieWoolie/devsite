---
title: <option/> tag
type: docs
description: "Sets of key/value pairs that can be included in a page's `<head>` element."
weight: 10
---
  
Any key/value pair is valid and will be stored in the document, for scripts or
the system to use.
  
Options are declared inside `<head>` tag with the following syntax:
```xml
<option name="option name" value="option value" />
```
You can also omit the value
```xml
<option name="option name"/>
```
When you access an option with an omitted value (with `document.getOption(name: string)` 
for example) it will return an empty string. If several values for the same 
option are set in a page, the last valid one is used.

## Attributes
| Attribute | Value | Description |
|--|--|--|
| `name` | *option name* | Option name |
| `value`| *option value*| Option value|

## Supported options
List of options supported/used by the system.

<table>
  <thead><tr>
    <th>Option name</th>
    <th>Value</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default Value</th>
  </tr></thead>
  <tbody>
    <tr>
      <td><code>required-plugins</code></td>
      <td style="width: max-content;"><i>plugin-list</i></td>
      <td style="width: 50%">Space-separated list of plugins that must be enabled before a page is loaded. If any of the plugins are missing, document parsing fails.</td>
      <td style="width: 11em;"><code>Plugin1 Plugin2</code></td>
      <td>None</td>
    </tr>
    <tr>
      <td><code>screen-width</code></td>
      <td><i>number</i> or <code>default</code></td>
      <td>The width of the screen the content is rendered to.<br>Clamped to range [1..10]</td>
      <td><code>3</code></td>
      <td><code>3</code></td>
    </tr>
    <tr>
      <td><code>screen-height</code></td>
      <td><i>number</i> or <code>default</code></td>
      <td>The height of the screen the content is rendered to.<br>Clamped to range [1..10]</td>
      <td><code>2</code></td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td style="width: 14em;"><code>minimum-game-version</code></td>
      <td><i>minecraft version</i></td>
      <td>The minimum version of minecraft required to open the page.</td>
      <td><code>1.21</code></td>
      <td>None</td>
    </tr>
    <tr>
      <td style="width: 30ch;"><code>advanced-item-tooltips</code></td>
      <td><i>true</i> or <i>false</i></td>
      <td>If item tooltips use advanced tooltips. (Including the <code>F3+H</code> information). This option can also be set as an attribute on each <code>&lt;item&gt;</code> element.</td>
      <td><code>true</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>interaction-distance</code></td>
      <td><i>number</i></td>
      <td>The maximum distance that a player can interact with the screen from.</td>
      <td><code>15.75</code></td>
      <td><code>10</code></td>
    </tr>
  </tbody>
</table>