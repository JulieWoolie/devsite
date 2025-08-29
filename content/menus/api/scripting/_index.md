---
title: JS Scripting
type: docs
weight: 90
description: "Delphi's JS Support"
---

This page gives a brief overview of the JS support Delphi provides

## Global variables
Constans available in a Script's global scope.

### `view`
The current document's [DocumentView](/menus/javadoc/0.4.3/com/juliewoolie/delphi/DocumentView.html) instance.

### `document`
The current [Document](/menus/javadoc/0.4.3/com/juliewoolie/dom/Document.html) instance.

### `server`
The current [Server](https://jd.papermc.io/paper/1.21.8/org/bukkit/Server.html) instance.

## Global Functions
Functions available in a Script's global scope.

### General purpose

#### `$(selector: string): Element[]`
Similar to the jQuery `$` operator, returns an array of DOM Elements.

#### `closeView(): void`
Closes the current menu.

#### `command(...args): void`
Execute a command as console, all specified arguments are joined with a single `" "` space character.

#### `getPlayer(...args: any[]): Player | Player[]`
Get a player or players, if multiple arguments are given.

#### `sendMessage(player: Player, ...messages: any[]): void`
Sends a message to a player, all arguments are converted to [Components](https://jd.advntr.dev/api/4.24.0/net/kyori/adventure/text/Component.html) 
and then concatenated together.

#### `sendActionBar(player: Player, ... messages: any[]): void`
Same as the above function, however it sends the messages to their 
actionbar instead of the player's chat.

### Color functions

#### `hsv(hue: number, sat: number, val: number, a: number = 1.0): Color`
Creates a [Color](/menus/javadoc/0.6.0/com/juliewoolie/dom/style/Color.html) instance 
from the specified hue, saturation and value components. All arguments should be in 
range `0..1`. Alpha, or `a` is an optional argument, if not specified, defaults to `1.0`

#### `rgb(red: number, green: number, blue: number, alpha: number = 255): Color`
Creates a [Color](/menus/javadoc/0.6.0/com/juliewoolie/dom/style/Color.html) instance 
from the specified red, green and blue components. Alpha is an optional argument, 
if not specified defaults to `255`.

### Scheduling

#### `setTimeout(task: ()=>void, delayTicks: number = 20): number`
Creates a delayed task that is executed after a specified number of ticks. If the `delayTicks` 
argument is not specified, it defaults to `20`.
  
Function returns the task ID number, which can be passed to `clearTimeout(taskId: number)` to 
cancel the task before execution.

#### `setInterval(task: ()=>void, delayTicks: number = 20, intervalTicks: number = 20): number`
Creates a delayed task that is exeucted after a specified number of ticks.
If both the `delayTicks` and `intervalTicks` arguments are not specified, both default to `20`.
If only the `intervalTicks` argument is not specified, it takes the same value as `delayTicks`.
  
Function returns the task ID number, which can be passed to `clearInterval(taskId: number)` to 
cancel the task before or during execution.

#### `clearTimeout(taskId: number): void` and `clearInterval(taskId: number): void`
Both functions are identical, passing either an ID returned from either `setInterval` or 
`setTimeout` will cancel the specified task.