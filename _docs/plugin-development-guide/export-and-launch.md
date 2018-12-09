---
title: Export and launch
permalink: /docs/export-and-launch/
---

* Make sure you have a maven build plugin settings in `pom.xml` as like below
  ```
  <build>
      <plugins>
          ...
          <plugin>
              <artifactId>maven-assembly-plugin</artifactId>
              <configuration>
                  <archive>
                      <manifest>
                          <mainClass>Plugin</mainClass>
                      </manifest>
                  </archive>
                  <descriptorRefs>
                      <descriptorRef>jar-with-dependencies</descriptorRef>
                  </descriptorRefs>
              </configuration>
              <executions>
                  <execution>
                      <id>make-assembly</id>
                      <phase>package</phase>
                      <goals>
                          <goal>single</goal>
                      </goals>
                  </execution>
              </executions>
          </plugin>
          ...
      </plugins>
  </build>
  ```

* and `actlist-plugin` dependency scope muse be `provided`
  ```
  <dependencies>
      ...
      <dependency>
          <groupId>org.silentsoft</groupId>
          <artifactId>actlist-plugin</artifactId>
          <version>1.3.0</version>
          <scope>provided</scope>
      </dependency>
      ...
  </dependencies>
  ```

* run maven command via CLI or GUI with `clean package` goals
  ```
  $ mvn clean package
  ```

* `project-name-verion-jar-with-dependencies.jar` file will be created under the `/target/` directory
  
* Finally, put the jar file into `/plugins/` directory that under the Actlist installed path and (re)start to Actlist.
  or just drag and drop the jar file onto Actlist's main screen.