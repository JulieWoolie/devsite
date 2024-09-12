---
title: "Argument Types"
type: docs
toc: true
---

[Accessing Argument types](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ArgumentTypes.html)
  
Contains the various built-in argument types Grenadier has.
  
Most argument types have a vanilla counterpart that the API types are mapped
to. Grenadier does also feature several argument types that have no vanilla
counterpart and have more general use cases.

## General use argument types
| Argument type | Description | Example |
| --- | --- | --- |
| [OptionsArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/options/OptionsArgument.html) | Parse a list of pre-set options and flags | `key=value -flag` |
| [MapArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/MapArgument.html) | Takes a string-object map and parses a map value via its string key | `a_value` |
| [EnumArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/EnumArgument.html) | Parses an enum constant from it's [Enum.name()](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Enum.html#name()) | `red` |
| [ArrayArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ArrayArgument.html) | Parses a list of a specified type of arguments | `minecraft:stone,minecraft:oak_log` |
| [LocalDateArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/LocalDateArgument.html) | Parses a [LocalDate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/LocalDate.html) object from the ISO-8601 format | `12-12-2023` |
| [TimeArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/TimeArgument.html) | Parses a [Duration](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Duration.html) | `3s, 3seconds, 5m, 5minutes, 3m+2s, 4h-23m` |

## Minecraft argument types
| Argument type | Description | Example |
| --- | --- | --- |
| [BlockArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/BlockArgument.html) | Parses a block state and optionally NBT data that can be applied to a block | `minecraft:chest[facing=west]{dataKey:1b}` |
| [BlockFilterArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/BlockFilterArgument.html) | Parses a block or block tag that can be used to as a predicate for blocks | `#minecraft:buttons[face=ceiling]` |
| [ComponentArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ComponentArgument.html) | Parses a text component from a JSON format | `{"text":"Some text","color":"red"}` |
| [EntityArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/EntityArgument.html) | Parses an entity selector that returns 1 or more entities/players | `@e[limit=1,distance=..2]` |
| [GameModeArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/GameModeArgument.html) | Game mode value from a non-vanilla set of labels | `creative, survival, c, s` |
| [ItemArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ItemArgument.html) | Parses an itemstack along with item NBT data | `minecraft:stone{nbtKey:1b}` |
| [ItemFilterArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ItemFilterArgument.html) | Parses an item or itemtag along with NBT data that will be used as a predicate against other items | `#minecraft:flowers{nbtKey:1b}` |
| [KeyArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/KeyArgument.html) | Parses a namespaced key | `minecraft:stone` |
| [NbtArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/NbtArgument.html) | Parses NBT data in the SNBT format | `{foo:'bar',abc:1b}` |
| [ObjectiveArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ObjectiveArgument.html) | Parses a scoreboard objective from its name | `deaths, noClip` |
| [ParticleArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/ParticleArgument.html) | Parses a particle by its key | `minecraft:explosion_emitter` |
| [PositionArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/PositionArgument.html) | Parses a relative/local/absolute 2D or 3D position | `~ ~ ~` |
| [TagPathArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/TagPathArgument.html) | Parses an NBT path | `key1.key2[]` |
| [TeamArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/TeamArgument.html) | Parses a scoreboard team from its name | `team1, Team2` |
| [UuidArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/UuidArgument.html) | Parses a UUID by its hexadecimal value | `21290ce5-679c-4917-b30e-168c0d450c72` |
| [WorldArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/WorldArgument.html) | Parses a world by its name | `world, world_the_end` |
| [DoubleRangeArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/DoubleRangeArgument.html) | Parses an inclusive range of double values | `1..2, 1.., ..3` |
| [IntRangeArgument](https://javadoc.io/doc/net.forthecrown/grenadier/latest/net/forthecrown/grenadier/types/IntRangeArgument.html) | Parses an inclusive range of integer values | `1..2, 1.., ..3` |

## Using argument types
Argument types can be used very simply, for example:

```java
command.then(argument("local date", ArgumentTypes.localDate())
  .executes(context -> {
    LocalDate date = context.getArgument("local date", LocalDate.class);

    context.getSource().sendMessage(date.toString());
    return 0;
  }
);
```