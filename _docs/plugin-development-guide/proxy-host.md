---
title: Proxy host
date: 2019-09-03
permalink: /docs/proxy-host/
---

* You can test your plugin with a specific proxy host for network connection.
  ```java
  public static void main(String args[]) throws Exception {
      debug(DebugParameter.custom().setProxyHost("http://1.2.3.4:8080").build());
  }
  ```
  
  If you set a specific proxy host via above code then these code will be executed before starting the Debug App.
  ```java
  System.setProperty("http.proxyHost", "1.2.3.4");
  System.setProperty("http.proxyPort", "8080");
  ```
  
  **Attention:** Please **do not** set proxy host and port directly via `System.setProperty (..)`.
  It will affects all other plugins and Actlist application.
  