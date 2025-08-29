---
title: "vertical-align"
type: docs
description: Vertical alignment property
---

Determines how items are vertically aligned in a regular block, aka, flow container.

| Field         | Value              |
|---------------|--------------------|
| Cascades      | No                 |
| Initial value | `bottom`           |
| Applies To    | Regular flow items |

## Values
Accepts any expression or value that resolves to an `auto` or `sub`, `super`, 
`top`, `middle` or `bottom` keyword.

{{< tabpane text=true right=false >}}
  {{% tab header="`super`" %}}<img class="brightenimg" src="/menus/vertalign/super.png">{{% /tab %}}
  {{% tab header="`top`" %}}<img class="brightenimg" src="/menus/vertalign/top.png">{{% /tab %}}
  {{% tab header="`middle`" %}}<img class="brightenimg" src="/menus/vertalign/middle.png">{{% /tab %}}
  {{% tab header="`bottom`" %}}<img class="brightenimg" src="/menus/vertalign/bottom.png">{{% /tab %}}
  {{% tab header="`sub`" %}}<img class="brightenimg" src="/menus/vertalign/sub.png">{{% /tab %}}
{{< /tabpane >}}

## Examples
```scss
span {
  vertical-align: super;
}
span {
  vertical-align: top;
}
span {
  vertical-align: middle;
}
span {
  vertical-align: bottom;
}
span {
  vertical-align: sub;
}
```
