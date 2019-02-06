---
title: Quick start
permalink: /docs/quick-start/
redirect_from: /docs/index.html
---

#### Language Requirements

* Java 1.8 (with JavaFx)

#### Development setup

* There are two ways to create an Actlist plugin. the first one is using starter-kit(which is highly recommended) and second one is creating java project manually.

  ##### 1. using starter-kit
    ```
    $ git clone https://github.com/silentsoft/actlist-plugin-starter-kit
    ```
  ---
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
              <version>1.4.3</version>
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
               * setPluginUpdateCheckURI(URI.create("http://your-server.name"), URI.create("http://location-of-archives"));
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
