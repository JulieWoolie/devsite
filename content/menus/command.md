---
title: Commands
type: docs
description: "Info regarding the `/delphi` command used to interact with and spawn pages."
weight: 5
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
| Permission | `delphi.commands` |

#### Full list of arguments
- `/delphi open <player> <page path>`
- `/delphi open <player> <page path> [instance name]`
- `/delphi open <players>|all-players <page path> <x y z> [instance name]`
- `/delphi open <players>|all-players <page path> <x y z> <yaw> <pitch> [instance name]`

#### Description  
Opens a page for a player or players.  
The `<players>` argument can either be a player's name or an entity selector 
like `@p` `@a` or `@a[distance=..10]`.  
The `<page path>` argument specifies a fully qualified path to a page file 
inside of a module.
  
See [Resource Paths](/menus/paths/) for more info on what type of input the 
`<page path>` argument expects.
  
#### Notes
- The `[instance name]` argument allows you to set a unique name for the spawned 
instance of that menu, the same name cannot be used more than once.
  
- The difference between `all-players` and `@a` is that `@a` will only show the 
page to players online when the command is executed, while `all-players` will 
show the page to all players, regardless of when players joined.

- If the `<players>` argument only results in one player being shown the page, 
then an `<x y z>` position doesn't have to be set, the page will, by default,
spawn in front of the player.
  
#### Examples
- `/delphi open @s ranksmenu`  
  Opens the ranks menu's main page for the player executing the command.  
  
- `/delphi open @a bingotable:season/winter.xml 134.5 70 -235.5`  
  Opens a page denoted by the file path `season/winter.xml` inside of the 
  `bingotable` module at `x=134.5 y=70 z=-235.5`

- `/delphi open JulieWoolie ranksmenu:index.xml?tier=booster`  
  Opens the `index.xml` page for a player named `JulieWoolie` from the module 
  `ranksmenu` and specifies a parameter `tier` with the value of `booster`.

- `/delphi open all-players scoreboard:explorer.xml 25.5 65 -25.5 90 0 global-scoreboard`  
  Opens a page for all players at `x=25.5 y=65 z=-25.5` with rotation 
  `yaw=90 pitch=0` and gives it the instance name `global-scoreboard`


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
| Arguments  | `/delphi close all` |
| Permission | `delphi.commands` |
  
#### Description
Closes all open pages.

#### Examples
- `/delphi close all`  
  Closes all pages open to all players.
  
## `/delphi close`
| | |
|--|--|
| Arguments  | `/delphi close <instance name>` |
| Permission | `delphi.commands` |
  
#### Description
Closes an open page with the specified instance name.

#### Examples
- `/delphi close global-scoreboard`  
  Closes the open page with the instance name `global-scoreboard`

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

## `/delphi debug dump-page-xml`
| | |
|--|--|
| Arguments  | `/delphi debug dump-page-xml` |
| Permission | `delphi.commands.debug` |
#### Description
Dumps all rendering information available about the page the command executor 
is looking at and writes it to `plugins/Delphi/debug/page-dump.xml`

## `/delphi debug dump-targeted-element-xml`
| | |
|--|--|
| Arguments  | `/delphi debug dump-targeted-element-xml` |
| Permission | `delphi.commands.debug` |
#### Description
Dumps all rendering information about the element the command executor is 
currently looking at at and writes it to 
`plugins/Delphi/debug/target-element-dump.xml`