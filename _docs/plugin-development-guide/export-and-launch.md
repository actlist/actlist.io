---
title: Export and launch
permalink: /docs/export-and-launch/
---

* Make sure you have a below `repository`, `parent` and `dependency` in your `pom.xml`
  ```
  <repositories>
      <repository>
          <id>silentsoft-repository</id>
          <url>http://nexus.silentsoft.org/repository/maven-releases</url>
      </repository>
  </repositories>
  <parent>
      <groupId>org.silentsoft</groupId>
      <artifactId>actlist-plugin-sdk</artifactId>
      <version>1.0.0</version>
  </parent>
  <dependencies>
      <dependency>
          <groupId>org.silentsoft</groupId>
          <artifactId>actlist-plugin</artifactId>
          <version>1.4.0</version>
          <scope>provided</scope>
      </dependency>
  </dependencies>
  ```

* Run maven command via CLI or GUI with `clean package` goals
  ```
  $ mvn clean package
  ```

* `project-name-verion.jar` file will be created under the `/target/` directory
  
* Finally, put the jar file into `/plugins/` directory that under the Actlist installed path and (re)start to Actlist.
  or just drag and drop the jar file onto Actlist's main screen.