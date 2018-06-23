---
title: Export and launch
permalink: /docs/export-and-launch/
---

* (Only the first time) Plugin.java > Right click > `Run as Java Application`

  ![]({{site.url}}/img/export-1.png)

* Project > Right click > `Export`

  ![]({{site.url}}/img/export-2.png)

* Select `Runnable JAR file`

  ![]({{site.url}}/img/export-3.png)

* Select your project in `Launch configuration` combo box and define export destination via `Browse...` button then choose `Extract required libraries into generated JAR` option

  ![]({{site.url}}/img/export-4.png)

* Basically, the Actlist application contains all the libraries that required plugin things. So, you must to delete libraries within your jar file for reduce size of file. (This action will save about 7.2 MB and the jar file will be about 45 KB from 7.24 MB)
* If you are not added any 3rd party libraries, then the inside of the jar file is like as below.
  ```
  META-INF/
  Plugin.class
  (optional) Plugin.fxml
  (optional) Plugin.png
  ```

* Finally, put the jar file into `/plugins/` directory that under the Actlist installed path and (re)start to Actlist.