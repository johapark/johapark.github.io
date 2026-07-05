---
layout: page
permalink: /news/
title: news
description:
nav: false
---
<!-- This page shows all news entries.
Not shown in the nav bar but accessible from the link (all news) that presents
under the recent news section in the front page.-->

<div class="news">
  {% include news_table.html limit=site.news.size %}
</div>
