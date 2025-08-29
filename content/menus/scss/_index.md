---
title: "CSS Styling"
type: docs
toc: true
description: "Document Styling and layout"
weight: 100
---

CSS allows you to style and change how the elements of a menu page look like.

## Notes / unsupported features
- All CSS pseudo classes are supported!
- CSS custom properties (eg: `--custom-property`) are not supported, instead 
  variables are defined in the top level stylesheet scope with this format:
  `$<variable name>: <value>;`
- Despite SCSS being used a lot of SCSS features are not supported, such as 
  functions, `@import` and `@use`, to name a few
- CSS Pseudo elements (eg `:placeholder`, `:first-letter`, `:first-line`) are 
  not supported.

## Compatibility table
| Feature | Supported? |
|--|--|
|`@for` | No |
|`@if` | Yes |
|`@each` | No |
|`@function` | No |
|`@return` | No |
|`@continue` | No |
|`@break` | No |
| String interpolation | No |
| Lists | Yes |
| Maps | No |
| `@use "scss:list";` | No |
| `@use "scss:math";` | No |
| `@use "scss:color";` | No |
| `@use "scss:map";` | No |
| `<`, `<=`, `>=`, `>`, `==`, `!=` Operators | Yes |
| `+`, `-`, `*`, `/`, `%` Operators | Yes |
| `and`, `or`, `not` Operators | Yes |