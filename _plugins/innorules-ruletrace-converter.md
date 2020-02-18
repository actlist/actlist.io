---
title: Innorules Ruletrace Converter
excerpt: Drag and drop your rule trace files to convert special delimiters.
date: 2020-02-18
author: silentsoft
homepage: https://github.com/silentsoft/actlist-innorules-ruletrace-converter-plugin
download: https://github.com/silentsoft/actlist-innorules-ruletrace-converter-plugin/releases/download/v1.2.0/actlist-innorules-ruletrace-converter-plugin-1.2.0.jar
version: 1.2.0
required_actlist: 1.2.6
license_text: Apache License 2.0
license_link: https://github.com/silentsoft/actlist-innorules-ruletrace-converter-plugin/blob/master/LICENSE.txt
statistics_uuid: cc78cf69-c86c-3d13-994a-296c5df5d390
tags: [innorules, rule, trace, converter]
---

Drag and drop your rule trace files to convert special delimiters.

##### Features
  - Convert special delimiters on rule trace `.xml`.
    - replace `<>` to ""
    - replace `<CR><LF>` to `:`
    - replace `STX` and `ETX` to `:`
    - replace `&` to `&amp;`
  - Insert XML specification to first line if not exists.
  - Automatic conversion to specific directory every 5 seconds.
  - Automatic encoding detaction (`EUC-KR` or `UTF-8`)