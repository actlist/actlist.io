---
title: One time plugin
date: 2018-09-26
permalink: /docs/one-time-plugin/
---

* If you want to build a one time plugin that deactivates the plugin when something is done,
  you can use `setOneTimePlugin(true);` method on plugin's constructor as like below
  ```java
  public Plugin() throws Exception {
      super("whatever you want");
      
      setOneTimePlugin(true);
  }
  ```
  
  once this is happens, the plugin will have deactivate state as default state. and if user clicks the toggle button to activates the plugin then `pluginActivated()` method will be raised.
  you can just coding something within the `pluginActivated()` method.
  
  don't forget the `requestDeactivate();` method. this method will makes your plugin to back to deactivate state.
  

* Here is an example source code
  ```java
  import org.silentsoft.actlist.plugin.ActlistPlugin;
  
  public class Plugin extends ActlistPlugin {
  
      public static void main(String args[]) throws Exception {
          debug();
      }
  
      public Plugin() throws Exception {
          super("whatever you want");
          
          setOneTimePlugin(true);
      }
  
      @Override
      protected void initialize() throws Exception { }
  
      @Override
      public void pluginActivated() throws Exception {
          try {
              /*
               * do something here
               */
          } catch (Exception e) {
              // exception handling
          } finally {
              requestDeactivate();
          }
      }
  
      @Override
      public void pluginDeactivated() throws Exception { }
  
  }
  ```