---
layout: default
title: Posts
---

<h1>Some posts I made</h1>

{% assign postsByMonth = site.posts | group_by_exp:"p","p.date | date: '%B %Y'" %}

{% for month in postsByMonth %}

<h2>{{ month.name }}</h2>

<ul>
{% for post in month.items %}
  <li>
    <a href="{{ post.url | relative.url}}" class="post-links">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

{% endfor %}
<br>
