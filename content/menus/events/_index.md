---
title: Events
type: docs
description: "Events allow you to listen to changes in the DOM and page with event handlers."
weight: 95
---

## Event Types
| Event Type | Triggers | Type |
|--|--|--|
| `mouse-enter` | Player's cursor enters an element | MouseEvent |
| `mouse-exit` | Player's cursor exits an element | MouseEvent |
| `mouse-move` | Player's cursor moves inside of an element | MouseEvent |
| `click` | Player clicks on an element | MouseEvent |
| `click-expire` | 3 Ticks after a `mouse-down` event. Can be considered a `mouse-up` event. | MouseEvent |
| `append-child` | An node is appended to an element's children | MutationEvent |
| `remove-child` | A node is removed from an element's children | MutationEvent |
| `modify-attr` | An element's attribute is modified in any way | AttributeMutateEvent |
| `modify-option` | A document's options are modified in any way | AttributeMutateEvent |
| `load` | The DOM tree has finished loading | Event |
| `spawned` | The page has been spawned and is now visible to the player | Event |
| `close` | The DOM is about to be closed | Event |