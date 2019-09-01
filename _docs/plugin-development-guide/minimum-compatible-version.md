---
title: Minimum compatible version
date: 2018-06-23
permalink: /docs/minimum-compatible-version/
---

  ```java
  public Plugin() throws Exception {
      super("whatever you want");

      setMinimumCompatibleVersion(1, 2, 6); // Actlist's major, minor, patch version.
  }
  ```