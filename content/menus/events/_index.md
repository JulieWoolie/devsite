---
title: Events
type: docs
description: "Events allow you to listen to changes in the DOM and page with event handlers."
weight: 95
---

| Event Type | Triggers | Type |
|--|--|--|
| `mouse-enter` | Player's cursor enters an element | [`MouseEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MouseEvent.html) |
| `mouse-exit` | Player's cursor exits an element | [`MouseEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MouseEvent.html) |
| `mouse-move` | Player's cursor moves inside of an element | [`MouseEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MouseEvent.html) |
| `click` | Player clicks on an element | [`MouseEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MouseEvent.html) |
| `click-expire` | 3 Ticks after a `mouse-down` event. Can be considered a `mouse-up` event. | [`MouseEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MouseEvent.html) |
| `append-child` | An node is appended to an element's children | [`MutationEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MutationEvent.html) |
| `remove-child` | A node is removed from an element's children | [`MutationEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/MutationEvent.html) |
| `modify-attr` | An element's attribute is modified in any way | [`AttributeMutateEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/AttributeMutateEvent.html) |
| `modify-option` | A document's options are modified in any way | [`AttributeMutateEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/AttributeMutateEvent.html) |
| `load` | The DOM tree has finished loading | [`Event`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/Event.html) |
| `spawned` | The page has been spawned and is now visible to the player | [`Event`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/Event.html) |
| `close` | The DOM is about to be closed | [`Event`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/Event.html) |
| `input` | When the value of an [`<input>` element](/menus/body/input) is changed | [`InputEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/InputEvent.html) |
| `content-changed` | Called when a text node's content is changed | [`TextChangeEvent`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/TextChangeEvent.html) |
| `view-moved` | Called when the page is moved | [`Event`](/menus/javadoc/0.6.0/com/juliewoolie/dom/event/Event.html) |