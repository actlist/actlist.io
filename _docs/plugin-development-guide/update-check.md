---
title: Update check
permalink: /docs/update-check/
---

* Red dot will be appeared when updates found and if clicks, archives will be opened by default browser.
  ```
  public Plugin() throws Exception {
      super("whatever you want");

      setPluginVersion("1.0.0"); // this is essential for update check
      setPluginUpdateCheckURI(URI.create("http://your-server.name"), URI.create("http://location-of-archives"));
  }
  ```

  ![]({{site.url}}/img/how-to-induce-to-latest-version-of-plugin.png)

  the Actlist will requests to your server with `version` parameter via `GET` method when Actlist is instanced up at first time.

  you can response with below parameters to the Actlist's update check request.
    * `available` : `true` or `false`. this will notices to user that your plugin has available updates or not.
      * `url` : the plugin's archives url.
    * `killSwitch` : `on` or `off`. this will makes the plugin to unavailable.
    * `endOfService` : `true` or `false`. this will notices to user that your plugin has reached end-of-service or not.

  there are two ways to browse the archives.
    * the first is browse by your server with `setPluginUpdateCheckURI(URI)` method and `url` response value.
    * the second is browse by your code with `setPluginUpdateCheckURI(URI, URI)` method.

  also you can override `pluginUpdateFound` method and set archivesURI dynamically:
  ```
  @Override
  public void pluginUpdateFound() throws Exception {
      setPluginArchivesURI(URI.create("http://location-of-archives"));
  }
  ```

  you should be aware that the server's `url` response value can be ignored when you code manually via `setPluginArchivesURI` or second parameter of `setPluginUpdateCheckURI(URI, URI)` is exists.