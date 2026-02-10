---
layout: default
title: Posts
---

<h1>Some posts I made</h1>
<ul>
{% for post in site.posts %}
  <li>
    {% for post in site.posts %}
  <div class="post-item">
    <span class="post-date">
      {{ post.date | date: "%b %d, %Y" }}
    </span>
    <a href="{{ post.url | relative_url }}" class="post-links">{{ post.title }}</a>
  </div>
  {% endfor %}
  </li>
{% endfor %}
</ul>
<br>
