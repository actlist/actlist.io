---
title: Dark mode
date: 2019-09-03
permalink: /docs/dark-mode/
---

* You can test your plugin to fit to dark mode by using `DebugParameter` like this:
  ```java
  public static void main(String args[]) throws Exception {
      debug(DebugParameter.custom().setDarkMode(true).build());
  }
  ```

* There is also `isDarkMode()` method and overridable `applicationConfigChanged()` method for adjusting color at runtime.
  ```java
  @Override
  public void applicationConfigChanged() throws Exception {
      if (isDarkMode()) {
          node.setStyle("-fx-background-color: -fx-base;");
      } else {
          node.setStyle("-fx-background-color: #ffffff;");
      }
  }
  ```
  
  Note: The `applicationConfigChanged()` method will be called when the Actlist user changes dark mode property or proxy host in the configuration view.