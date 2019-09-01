---
title: Message box
date: 2018-06-23
permalink: /docs/message-box/
---

* The Actlist has built in `MessageBox`.

  See the sample source code below:
  ```java
  Optional<ButtonType> result = MessageBox.showConfirm("Are you human?");
  result.ifPresent((buttonType) -> {
      if (buttonType == ButtonType.OK) {
          System.out.println("OK. You are human");
      }
  });
  ```