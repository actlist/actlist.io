---
title: Export and launch
date: 2020-08-17
permalink: /docs/export-and-launch/
---

* Make sure you have a below `parent` and `property` in your `pom.xml`
  ```
  <parent>
      <groupId>org.silentsoft</groupId>
      <artifactId>actlist-plugin-sdk</artifactId>
      <version>2.2.0</version>
  </parent>
  <properties>
      <mainClass>your.pkg.Plugin</mainClass>
  </properties>
  ```

* Run maven command via CLI or GUI with `clean package` goals
  ```
  $ mvn clean package
  ```

* `project-name-verion.jar` file will be created under the `/target/` directory

* Finally, launch the Actlist and drag and drop the plugin.jar file onto the Actlist.