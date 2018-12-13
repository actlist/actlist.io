---
title: Quick start
permalink: /docs/quick-start/
redirect_from: /docs/index.html
---

#### Language Requirements
* Java 1.8 (with JavaFx)

#### Development setup

To create an Actlist plugin, you need to do some of the following:
* Create a new Java project and configure to Maven project.
* Add `repository`, `parent` and `dependency` information to `pom.xml`
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
* Generate executable main class called `Plugin` where in default package (please do not assign package).
* Inherit the `ActlistPlugin` class in your `Plugin` class.
* (Optional) to make a plugin that contains graphic things, you can write the `Plugin.fxml` file where in the same location.
* (Optional) you can set the plugin's icon image to display on about menu (Right click > About) through `Plugin.png`. if not exists `Plugin.png` then default Actlist logo image will be displayed.
* Done.

Here is an example source code of `Plugin.java`
```
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

        setPluginAuthor("Silentsoft");
        /**
         * or you could use hyper-link via
         * setPluginAuthor("Silentsoft", URI.create("http://silentsoft.org"));
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
        System.out.println("Hello, World !");
    }

    @Override
    public void pluginActivated() throws Exception {
        System.out.println("plugin is activated.");
    }

    @Override
    public void pluginDeactivated() throws Exception {
        System.out.println("plugin is deactivated.");
    }

}
```
