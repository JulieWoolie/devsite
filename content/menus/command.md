---
title: Commands
type: docs
description: "Info regarding the `/delphi` command used to interact with and spawn pages."
weight: 1
---
The `/delphi` command can be used in `.mcfunction` files inside of data packs 
and can be used with `/execute` commands.
  
#### Syntax
| Pattern | Description |
|--|--|
| `<argument-name>` | Required argument, replace with appropriate value. |
| `[argument-name]` | Optional argument, replace with appropriate value. |
| `argument-name` | Enter this literally, as shown. |
  
---

## `/delphi open`
| | |
|--|--|
| Arguments  | `/delphi open <players> <page path>` |
| Permission | `delphi.commands` |

#### Description  
Opens a page for a player or players.  
The `<players>` argument can either be a player's name or an entity selector 
like `@p` `@a` or `@a[distance=..10]`.  
The `<page path>` argument specifies a fully qualified path to a page file 
inside of a module.
  
See [Resource Paths](/menus/paths/) for more info on what type of input the 
`<page path>` argument expects.
  
#### Examples
- `/delphi open @s ranksmenu`  
  Opens the ranks menu's main page for the player executing the command.  
  
- `/delphi open @a bingotable:season/winter.xml`  
  Opens a page denoted by the file path `season/winter.xml` inside of the 
  `bingotable` module.

- `/delphi open JulieWoolie ranksmenu:index.xml?tier=booster`  
  Opens the `index.xml` page for a player named `JulieWoolie` from the module 
  `ranksmenu` and specifies a parameter `tier` with the value of `booster`

## `/delphi close targeted`
| | |
|--|--|
| Arguments  | `/delphi close targeted` |
| Permission | `delphi.commands` |
  
#### Description
Closes the page you currently are looking at. This command will select the 
nearest open page you are looking at, regardless of who the view belongs to.  
**Note**: Views that belong to players other than you are invisible to you,
to see all open page views, use `/delphi debug toggle-outlines`

## `/delphi close all`
| | |
|--|--|
| Arguments  | `/delphi close all [player]` |
| Permission | `delphi.commands` |
  
#### Description
If no player name is set, closes all open pages. Otherwise, will only close the
pages the specified player has open.

#### Examples
- `/delphi close all` or `/delphi close all @a`  
  Closes all pages open to all players.

- `/delphi close all JulieWoolie`  
  Closes all pages open to a player named "JulieWoolie"

## `/delphi list`
| | |
|--|--|
| Arguments  | `/delphi list [player]` |
| Permission | `delphi.commands` |
  
#### Description
If no player name is set, lists players and how many open pages they have. 
Otherwise, lists the ID and path of every page a player has open, along with
convenient teleport and close buttons to either teleport to the open page or
to close it respectively.

#### Examples
- `/delphi list @s`  
  Shows all pages open to the player executing the

- `/delphi list JulieWoolie`  
  Shows all pages open to a player named "JulieWoolie"

- `/delphi list`  
  Shows all open pages.

## `/delphi debug toggle-outlines`
| | |
|--|--|
| Arguments  | `/delphi debug toggle-outlines` |
| Permission | `delphi.commands.debug` |
  
#### Description
Enables/disables rendering debug outlines around open pages and around the
page elements players are looking at.
  
When enabled, blue outlines are draw around all pages (Along with a line jetting 
out from the center of the screen) and draws red outlines around the specific
page elements players are looking at.
  
Debug outline state is global and once the command is ran, outlines are shown
to all players with the `delphi.commands.debug` permission.

## `/delphi debug dump-xml`
| | |
|--|--|
| Arguments  | `/delphi debug dump-xml` |
| Permission | `delphi.commands.debug` |
#### Description
Dumps all rendering information available about the page the command executor 
is looking at and writes it to `plugins/Delphi/debug/target-view-dump.xml`