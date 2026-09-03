---
layout: default
title: Blog
permalink: /blog/
slug: blog
description: Research notes and technical writing by Jiaqi Tang.
---
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Blog</p>
    <h1>Research notes &amp; technical writing</h1>
    <p class="lead">A place for future notes on research, mathematics, machine learning, and technical ideas.</p>
  </div>
</section>

<section class="content-section">
  <div class="container narrow">
    {% if site.posts.size > 0 %}
      <div class="blog-list">
        {% for post in site.posts %}
          <article class="blog-item">
            <div class="blog-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.categories %} · {{ post.categories | join: " · " }}{% endif %}</div>
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            {% if post.description %}<p>{{ post.description }}</p>{% endif %}
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="empty-state">
        <h2>No posts yet.</h2>
        <p>The blog is intentionally empty for now. New research notes can be added later as Markdown files in <code>_posts/</code>.</p>
      </div>
    {% endif %}
  </div>
</section>
