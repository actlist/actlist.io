---
title: Quick start
date: 2020-01-27
permalink: /docs/quick-start/
redirect_from: /docs/index.html
---

#### Requirements

* Oracle JDK 1.8 or Open JDK with JavaFx binary distribution
* (Optional) JavaFx Scene Builder for graphic design

#### Development setup

* There are two ways to create an Actlist plugin. the first one is using starter-kit(which is highly recommended) and second one is creating java project manually.

  ##### 1. using starter-kit
    1. [Download starter kit](https://github.com/silentsoft/actlist-plugin-starter-kit/archive/master.zip)
    2. Rename `master.zip` to the desired name and unzip it
    3. Enter the directory
    4. Initialize your project metadata
       ```
       $ ./mvnw initialize -DgroupId=com.example -DartifactId=awesome-demo
       ```
    5. Import project into your favorite IDE

  ##### 2. or creating java project manually
    * Create a new Java project and configure to Maven project.
    * Add `property`, `repository`, `parent` and `dependency` information to `pom.xml`
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
              <version>1.6.0</version>
              <scope>provided</scope>
          </dependency>
      </dependencies>
      ```
    * Generate executable main class called `your.pkg.Plugin.java` that you assigned from `mainClass` property on `pom.xml`
    * Inherit the `ActlistPlugin` class in your `Plugin` class.
    * (Optional) to make a plugin that contains graphic things, you can write the `Plugin.fxml` file where in the same location.
    * (Optional) you can set the plugin's icon image to display on about menu (Right click > About) through `Plugin.png`. if not exists `Plugin.png` then default Actlist logo image will be displayed.
    * Done.
      
      Here is an example source code of `Plugin.java`
      ```java
      package your.pkg;
      
      import org.silentsoft.actlist.plugin.ActlistPlugin;
      
      public class Plugin extends ActlistPlugin {
      
          public static void main(String args[]) throws Exception {
              debug();
          }
      
          public Plugin() throws Exception {
              super("Example Plugin");
      
              setPluginVersion("1.0.0");
              /**
               * you can induce to use the latest version of the plugin to your users via
               * setPluginUpdateCheckURI(URI.create("http://your-server.name"));
               */
      
              setPluginAuthor("John Doe");
              /**
               * or you could use hyper-link via
               * setPluginAuthor("John Doe", URI.create("https://github.com/your-github-account/"));
               */
      
              setPluginDescription("You can set the description of your plugin");
              /**
               * or you could use file via
               * setPluginDescription(getClass().getResource("/Plugin.description").toURI());
               *
               * ! you can set the plugin's ChangeLog and License with same way
               */
          }
      
          @Override
          protected void initialize() throws Exception {
              System.out.println("#initialize");
          }
      
          @Override
          public void pluginActivated() throws Exception {
              System.out.println("#pluginActivated");
          }
      
          @Override
          public void pluginDeactivated() throws Exception {
              System.out.println("#pluginDeactivated");
          }
      
      }
      ```
