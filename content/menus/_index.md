---
title: "Delphi menu plugin"
type: docs
weight: 1
---

**Delphi** is a display entity menu plugin, which allows for menus to be written
in XML, SCSS and Java/Javascript and displayed with Display entities to players.

## Features
- Highly customizable floating menus
- Extensive Java and Javascript APIs
- (partial) SCSS support 
- XML loaded menus
- Support for tooltips, drop downs

## Maven and gradle dependencies
### Gradle
```kotlin
repositories {
  mavenCentral()
}

dependencies {
  compileOnly("net.arcadiusmc:delphi:1.0.0")
}
```
### Maven
```xml
<dependencies>
  <dependency>
    <groupId>net.arcadiusmc</groupId>
    <artifactId>delphi</artifactId>
    <version>1.0.0</version>
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