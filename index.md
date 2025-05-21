---
layout: splash
permalink: /
title: "No Budget Sec"
subtitle: "Security without breaking the bank"
author_profile: true
classes:
  - home
  - landing
  - page__header-show
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/headers/header-image.jpg
  actions:
    - label: "Latest Articles"
      url: "/posts/"
excerpt: "A blog dedicated to sharing practical cybersecurity knowledge and insights, demonstrating that effective information security doesn't require excessive budgets—just expertise, creativity, and the right approach."
---

<div class="archive">
  <h1 class="page__title">Recent Posts</h1>
  
  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
