---
title: Message box
permalink: /docs/message-box/
---

* The Actlist has built in `MessageBox`.

  See the sample source code below:
  ```
  Optional<ButtonType> result = MessageBox.showConfirm("Are you human?");
  result.ifPresent((buttonType) -> {
      if (buttonType == ButtonType.OK) {
          System.out.println("OK. You are human");
      }
  });
  ```