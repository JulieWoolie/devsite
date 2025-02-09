---
title: "set-property(property-name, value, important)"
type: docs
description: "Get the value of a CSS property"
---
```scss
@function set-property($property-name, $value, $important: false)
```

If this function is called from a context where there are no style properties 
(outside of a style rule), then an error will be raised.

## Parameters
- **property-name**  
  Name of the property to set the value of.
- **value**  
  The new value of the property.
- **important** *(Optional)*  
  Whether the value should be marked as important (Same as using `!important` 
  when setting a style property)  
  If not specified, defaults to `false`.

## Returns
The previous value of the specified property, or `null`, if the property has not 
explicitly been set previously.

## Examples
```scss
.class {
  @debug set-property("margin-left", 2px); // null
}

.class2 {
  margin: 1px;
  @debug set-property("margin", 2px 3px 4px 5px); // [1px, 1px, 1px, 1px]
}

.class3 {
  // Breaks regular SCSS syntax, but completely valid 
  // syntax in Delphi's SCSS
  set-property("padding", 2px);
}

@debug set-property("margin", 2px 3px 4px 5px); // Error! Invalid call context
```