---
title: Export and launch
permalink: /docs/export-and-launch/
---

* Make sure you have a below `property`, `repository`, `parent` and `dependency` in your `pom.xml`
  ```
  <properties>
      <mainClass>your.pkg.Plugin</mainClass>
  </properties>
  <repositories>
      <repository>
          <id>silentsoft-repository</id>
          <url>http://nexus.silentsoft.org/repository/maven-public</url>
      </repository>
  </repositories>
  <parent>
      <groupId>org.silentsoft</groupId>
      <artifactId>actlist-plugin-sdk</artifactId>
      <version>2.0.0</version>
  </parent>
  <dependencies>
      <dependency>
          <groupId>org.silentsoft</groupId>
          <artifactId>actlist-plugin</artifactId>
          <version>1.5.2</version>
          <scope>provided</scope>
      </dependency>
  </dependencies>
  ```

* Run maven command via CLI or GUI with `clean package` goals
  ```
  $ mvn clean package
  ```

* `project-name-verion.jar` file will be created under the `/target/` directory

* Finally, launch the Actlist and drag and drop the plugin.jar file onto the Actlist.