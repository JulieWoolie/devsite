---
title: Basic Usage
type: docs
---

Reading binary data:
```java
InputStream input = // Get an input stream
CompoundTag tag = BinaryTags.readCompressed(input);
int intValue = tag.getInt("key");
String string = tag.getString("other_key");
```
Writing binary data:
```java
CompoundTag tag = // Get a tag
OutputStream stream = // Create a stream
BinaryTags.writeCompressed(stream, tag);
```
SNBT parsing:
```java
import net.forthecrown.nbt.string.Snbt;

String input = // Get an SNBT input
BinaryTag tag = Snbt.parse(input);
```
SNBT writing:
```java
BinaryTag tag = // Get a tag
String output = Snbt.toString(tag);
```