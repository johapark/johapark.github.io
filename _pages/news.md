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
  {% if site.news  %}
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
      {% assign news = site.news | reverse %}
      {% for item in news %}
        <tr>
          <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
          <td>
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              <a href="{{ item.url | relative_url }}" style="color: var(--global-text-color)">{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</a>
            {% endif %}
          </td>
        </tr>
      {% endfor %}
      </table>
    </div>
  {% else %}
    <p>No news so far...</p>
  {% endif %}
</div>
