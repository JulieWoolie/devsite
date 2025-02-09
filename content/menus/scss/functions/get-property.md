---
title: "get-property(property-name)"
type: docs
description: "Get the value of a CSS property"
---
```scss
@function get-property($property-name)
```

If this function is called from a context where there are no style properties 
(outside of a style rule), then an error will be raised.

## Parameters
- **property-name**  
  Name of the property to get the value of.

## Returns
The value of the specified property, may be `null`, if the property has not 
explicitly been set.

## Examples
```scss
.class {
  margin-left: 2px;
  @debug get-property("margin-left"); // 2.0px;
}

.class2 {
  @debug get-property("margin-left"); // null
}

@debug get-property("margin"); // Error! Invalid call context
```