---
title: Quick start
date: 2021-12-18
permalink: /docs/quick-start/
redirect_from: /docs/index.html
---

#### Requirements

* [OpenJDK 1.8 with JavaFx binary distribution](https://www.azul.com/downloads/?version=java-8-lts&package=jdk-fx#download-openjdk)
* [Scene Builder](https://gluonhq.com/products/scene-builder/#download) for graphic design

#### Development setup

There are two ways to create an Actlist plugin. the first one is using starter-kit(which is highly recommended) and the second one is creating Maven project using Maven archetype.

##### Getting started with GitHub

1. [Generate repository](https://github.com/actlist/actlist-plugin-starter-kit/generate)
2. Clone & import as a Maven project into your favorite IDE
    - If you are using `IntelliJ IDEA`, you need to enable `Add dependencies with "provided" scope to classpath` in the Run Configuration dialog
4. Launch
   ```
   src/main/java/sample/Plugin.java
   ```

##### Getting started with Maven

1. Execute following command:
   ```shell
   $ mvn archetype:generate \
         -DarchetypeGroupId=org.silentsoft \
         -DarchetypeArtifactId=actlist-plugin-archetype \
         -DarchetypeVersion=1.0.0 \
         -Dactlist-plugin-sdk-version=2.2.0 \
         -DgroupId=sample \
         -DartifactId=starter \
         -Dversion=1.0.0
   ```
   `Tip` - If you are behind a proxy server then you should use one of the following
   <details markdown="1"><summary>Details</summary>

    - Windows
      ```shell
      $ set MAVEN_OPTS=-Dhttps.proxyHost=10.20.30.40 -Dhttps.proxyPort=8080
      ```
    - macOS
      ```shell
      $ export MAVEN_OPTS=-Dhttps.proxyHost=10.20.30.40 -Dhttps.proxyPort=8080
      ```
    - `Note` - The proxy host `10.20.30.40` and proxy port `8080` is up to you.

   </details>
2. Import as a Maven project into your favorite IDE
    - If you are using `IntelliJ IDEA`, you need to enable `Add dependencies with "provided" scope to classpath` in the Run Configuration dialog
4. Launch
   ```
   src/main/java/sample/Plugin.java
   ```
