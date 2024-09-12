---
title: "NBT"
type: docs
toc: true
---
NamedBinaryTag library for java that lets you load, save binary tags, as well as
parsing and writing SNBT (Stringified NBT).

## Dependency info
### Maven:
```xml
<dependencies>
  <dependency>
    <groupId>net.forthecrown</groupId>
    <artifactId>nbt</artifactId>
    <version>LATEST</version>
  </dependency>

  <!-- If you're using this with PaperMC, you can also include -->
  <dependency>
    <groupId>net.forthecrown</groupId>
    <artifactId>paper-nbt</artifactId>
    <version>LATEST</version>
  </dependency>
</dependencies>
```
### Gradle (Kotlin):
```kotlin
repositories {
  mavenCentral()
}

dependencies {
  implementation("net.forthecrown:nbt:1.5.1")
  
  // If you're using this with PaperMC, you can also include 
  implementation("net.forthecrown:paper-nbt:1.7.5")
}
```