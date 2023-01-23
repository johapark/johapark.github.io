---
layout: page
permalink: /publications/
title: publications
description:
years: [2023, 2021, 2018, 2015, 2013]
nav: true
---

*: co-first, #: co-correspondence
<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
