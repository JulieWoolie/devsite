---
title: "Delphi menu plugin"
type: docs
weight: 1
---

**Delphi** is a display entity menu plugin, which allows for menus to be written
in XML, SCSS and Java/Javascript and displayed with Display entities to players.

If you're interested in the development of this plugin, checkout my site: 
[juliewoolie.com/delphi](https://juliewoolie.com/delphi)

## Features
- Highly customizable floating menus
- Extensive Java API
- (partial) SCSS support 
- XML loaded menus
- Support for tooltips

## Download
Downloads are available on the [Hangar Page](https://hangar.papermc.io/JulieWoolie/delphi)

## Maven and gradle dependencies
### Gradle
```kotlin
repositories {
  maven("https://libraries.juliewoolie.com")
}

dependencies {
  compileOnly("com.juliewoolie:delphi:0.4.0-SNAPSHOT")
}
```
### Maven
```xml
<repositories>
  <repository>
    <id>ArcadiusRepo</id>
    <name>ArcadiusRepo</name>
    <url>https://libraries.juliewoolie.com</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.juliewoolie</groupId>
    <artifactId>delphi</artifactId>
    <version>0.4.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```
### Bukkit plugins
If you're writing a bukkit plugin, also add this to your `plugin.yml`
```yml
depend: 
  - "Delphi"
```
{{<alert color="warning">}}
Delphi requires PaperMC to run, the plugin will not run on just Spigot or Bukkit.
{{</alert>}}

### Paper plugins
If you're writing a PaperMC plugin, also add this to your `paper-plugin.yml`:
```yml
dependencies:
  server:
    Delphi:
      load: AFTER
      required: true
      join-classpath: true
```