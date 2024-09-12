---
title: Tag Paths
type: docs
---

Minecraft wiki: https://minecraft.wiki/w/NBT_path_format  
NBT paths can be created and used like so:
```java
import net.forthecrown.nbt.path.TagPath;

TagPath path = TagPath.parse("foo.bar[]");
BinaryTag tag = // Get a tag

List<BinaryTag> results = path.get(tag);
int removed = path.remove(tag);
int changed = path.set(tag, BinaryTags.stringTag("Hello, world!"));
```
Paths can also be created programmatically with `TagPath.builder()`, the above shown example would look like so:
```java
TagPath path = TagPath.builder()
	.addObjectNode("foo")
	.addObjectNode("bar")
	.addMatchAll()
	.build();
```