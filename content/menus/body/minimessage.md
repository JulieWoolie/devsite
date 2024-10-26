---
title: "Minimessage elements"
type: docs
description: "Minimessage-like tags"
---
Delphi includes support for a number of tags that aim to replicate the
styling of minimessage text.
  
This means that `<yellow>Hello, <bold>world</bold>!</yellow>` is valid and will 
render correctly in Delphi menus.

## List of supported tags
<ul style="columns: 2">
  <li><code>&lt;black&gt;</code></li>
  <li><code>&lt;dark_blue&gt;</code></li>
  <li><code>&lt;dark-blue&gt;</code></li>
  <li><code>&lt;dark_green&gt;</code></li>
  <li><code>&lt;dark-green&gt;</code></li>
  <li><code>&lt;dark_aqua&gt;</code></li>
  <li><code>&lt;dark-aqua&gt;</code></li>
  <li><code>&lt;dark_red&gt;</code></li>
  <li><code>&lt;dark-red&gt;</code></li>
  <li><code>&lt;dark_purple&gt;</code></li>
  <li><code>&lt;dark-purple&gt;</code></li>
  <li><code>&lt;gold&gt;</code></li>
  <li><code>&lt;gray&gt;</code></li>
  <li><code>&lt;grey&gt;</code></li>
  <li><code>&lt;dark_gray&gt;</code></li>
  <li><code>&lt;dark_grey&gt;</code></li>
  <li><code>&lt;dark-gray&gt;</code></li>
  <li><code>&lt;dark-grey&gt;</code></li>
  <li><code>&lt;blue&gt;</code></li>
  <li><code>&lt;green&gt;</code></li>
  <li><code>&lt;aqua&gt;</code></li>
  <li><code>&lt;red&gt;</code></li>
  <li><code>&lt;light_purple&gt;</code></li>
  <li><code>&lt;light-purple&gt;</code></li>
  <li><code>&lt;purple&gt;</code></li>
  <li><code>&lt;yellow&gt;</code></li>
  <li><code>&lt;white&gt;</code></li>
</ul>

## Limits
Some tags used by the Minimessage format are not possible to support in XML,
such as the `<gradient>` tag in Minimessage. The 
`<gradient:[color1],[colors,]></gradient>` syntax is not possible in XML.