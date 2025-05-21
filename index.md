---
layout: splash
title: "No Budget Sec"
subtitle: "Security without breaking the bank"
permalink: /
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/headers/header-image.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  actions:
    - label: "Latest Articles"
      url: "/posts/"
excerpt: "A blog dedicated to sharing practical cybersecurity knowledge and insights, demonstrating that effective information security doesn't require excessive budgets—just expertise, creativity, and the right approach."
---

<div class="posts-container">
  <h1 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h1>

  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
