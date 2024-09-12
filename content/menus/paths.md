---
title: Resource Paths
description: "URL/URI like identifiers that point to a file or piece of data inside of a module."
type: docs
weight: 20
---
  
They consist of 3 parts: The module name, The file path and a query. The file 
path and query are optional elements.
  
## Elements
- **Module names** point to specific modules that are either in the 
  `plugins/Delphi/modules` directory or have been registered by another plugin.

- **The File path** is the path to a file inside of the module. The module name
  is separated from the file path by a `:` character.

- **The Query** is a set key-value pairs that specify additional parameters for 
  the module to use. These query values may be used differently based on module.
  Just like web URL search parameters, these begin with a `?` character and each
  key-value pair is separated by a `&` character.

## Syntax
### Module name
Module names can only contain alphanumeric characters, plus the `-`, `.`, `_` 
and `$` characters.

### File path
File paths can either be quoted strings (eg: `"quoted string"`) if they 
contain spaces or unquoted strings if they do not. If a path element is not 
quoted, it can only contain alphanumeric characters, plus the `-`, `.`, `_` 
and `$` characters.  
  
Path elements are separated with `/` characters, like any other file system.


### Query
Query elements begin with a `?` character and are made up of key-value pairs
separated by `&` characters. Keys are separated from values with the `=` 
character, and spaces are *not* allowed.  
    
Both keys and values can only contain alphanumeric characters, plus the `-`,
`.`, `_` and `$` characters.  
  
Values can be omitted from query elements, for example: `?key` or `?key1=`, in
which case the query's value, when accessed inside the API will simply be 
blank.

## Examples
```txt
module-name
```
Just a link to a module. If you pass this path into the `/delphi open` 
command, it will be converted into `module-name:index.xml`.

---

```txt
ranksmenu:main-menu.xml
```
Links to a file called `main-menu.xml` inside the `ranksmenu` module.

---

```txt
ranksmenu:specific.xml?player-tier=premium
```
Links to a file called `specific.xml` inside the `ranksmenu` module. 
Additionally, the `player-tier` query parameter is set to `premium`. This is
a value the module or page might use in some way.

---

```txt
entity-editor:?entity-id=21290ce5-679c-4917-b30e-168c0d450c72&world=world_void
```
Implicitly links to the `index.xml` file inside the `entity-editor` module 
with an `entity-id` and `world` parameter set.

---

```txt
module:"name with spaces.xml"
```
File name with spaces

---

```txt
module:"directory with spaces"/file.xml
```
Directory with spaces

---