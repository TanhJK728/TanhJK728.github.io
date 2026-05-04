---
layout: home
title: Latent Dynamics
---

# Latent Dynamics

A research notebook on JEPA, stochastic differential equations, machine learning, and trading systems.

This site documents my research notes, technical experiments, and trading reviews.
Topics may include machine learning, stochastic processes, market dynamics, robotics, and other research ideas I am currently exploring.

---

## Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <small>{{ post.date | date: "%Y-%m-%d" }} · {{ post.categories | join: ", " }}</small>
{% endfor %}
