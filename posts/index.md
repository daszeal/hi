---
layout: default
title: Posts
---

<h1>Some posts I made</h1>
<ul class="post-links">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
<br>
<br>
