---
title: Context menu
permalink: /docs/context-menu/
---

* With `putFunction` method at `initialize` method, you can add function (context menu)
  ```
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