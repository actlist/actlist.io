---
title: About dialog
permalink: /docs/about-dialog/
---

* You can easily decorate 'about' dialog (Right click > About) by below methods.
  ```
  public Plugin() throws Exception {
      super("whatever you want");

      setPluginVersion("1.0.0"); // this is essential for update check
      setPluginUpdateCheckURI(URI.create("http://your-server.name"), URI.create("http://location-of-archives")); // e.g.

      // setPluginAuthor("Silentsoft");
      setPluginAuthor("Silentsoft", URI.create("http://silentsoft.org"));

      // these methods supports String and URI parameter
      setPluginDescription("You can set the description of your plugin");
      setPluginChangeLog(URI.create("https://github.com/yours/yours/blob/master/CHANGELOG.md")); // e.g.
      setPluginLicense(getClass().getResource("/Plugin.license").toURI());
  }
  ```

  ![]({{site.url}}/img/how-to-decorate-about-dialog.png)