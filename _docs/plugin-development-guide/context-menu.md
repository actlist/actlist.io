---
title: Context menu
date: 2018-06-23
permalink: /docs/context-menu/
---

* With `putFunction` method at `initialize` method, you can add function (context menu)
  ```java
  @Override
  protected void initialize() throws Exception {
      putFunction("printHelloWorld", new TextFunction("Hello World", () -> {
          System.out.println("Hello, World !");
      }));
      putFunction("printGoodMorning", new TextFunction("Good morning", () -> {
          System.out.println("Good morning !");
      }));
      putFunction("printGoodNight", new TextFunction("Good night", () -> {
          System.out.println("Good night !");
      }));
  }
  ```

  ![]({{site.url}}/img/how-to-add-function.png)