---
title: Update check
permalink: /docs/update-check/
---

* Red dot will be appeared when updates found and if clicks, archives will be opened by default browser.
  ```java
  public Plugin() throws Exception {
      super("whatever you want");

      setPluginVersion("1.0.0"); // this is essential for update check
      setPluginUpdateCheckURI(URI.create("http://your-server.name"), URI.create("http://location-of-archives"));
  }
  ```

  ![]({{site.url}}/img/how-to-induce-to-latest-version-of-plugin.png)

  the Actlist will requests to your server with `version` parameter via `GET` method when Actlist is instanced up at first time.

  You can response with your web application server or if you don't have any web application server, but it's ok.
  feel free to use this [update-check.js](https://github.com/silentsoft/actlist-plugin-update-check/raw/master/update-check.js)
  but don't forget to upload the `update-check.js` file to your own online place like a `GitHub`.
  and you can specify the url of `update-check.js` on setPluginUpdateCheckURI method.
  (be aware that this request url must be ends with `.js`)
  
  * Using dynamic web application server
    * please response these parameters as single Map object to the Actlist's update check request.
      * `available` : `true` or `false`. this will notices to user that your plugin has available updates or not.
      * `url` : the plugin's archives url.
      * `killSwitch` : `on` or `off`. this will makes the plugin to unavailable.
      * `endOfService` : `true` or `false`. this will notices to user that your plugin has reached end-of-service or not.
  
  * Using static JavaScript file
    * if you don't have any web application server but you have `GitHub` account, this is your way.
    * please refer to this [sample repository](https://github.com/silentsoft/actlist-plugin-update-check).
      * you can see [Plugin.java](https://github.com/silentsoft/actlist-plugin-update-check/blob/master/src/main/java/Plugin.java) is pointing update check url to it's own repository's `https://github.com/.../raw/master/update-check.js`
      
  there are two ways to browse the archives.
    * the first way is browse by your `url` response value through `setPluginUpdateCheckURI(URI)` method.
    * the second way is browse by your code with 2nd parameter of `setPluginUpdateCheckURI(URI, URI)` method.

  also you can override `pluginUpdateFound` method and set archivesURI dynamically:
  ```java
  @Override
  public void pluginUpdateFound() throws Exception {
      setPluginArchivesURI(URI.create("http://location-of-archives"));
  }
  ```

  you should be aware that your `url` response value can be ignored when you code manually through `setPluginArchivesURI` method or 2nd parameter of `setPluginUpdateCheckURI(URI, URI)` is exists.