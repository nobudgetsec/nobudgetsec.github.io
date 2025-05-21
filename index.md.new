---
layout: splash
permalink: /
title: " "
subtitle: " "
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

<div style="position: fixed; top: 0; left: 0; right: 0; z-index: -1; height: 100vh; overflow: hidden; pointer-events: none;">
  <img src="/assets/images/headers/header-image.jpg" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;">
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5);"></div>
</div>

<style>
.page__hero--overlay {
  display: none !important;
}

.page__hero--overlay .page__lead {
  color: white !important;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
}

.header-content {
  position: relative;
  z-index: 1;
  padding-top: 10em;
  padding-bottom: 2em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
}

.header-content h2 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.header-content p {
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto 2em auto;
}

.btn--primary {
  background-color: #0092ca;
  color: white !important;
}
</style>

<div class="header-content">
  <h2>No Budget Sec</h2>
  <p>A blog dedicated to sharing practical cybersecurity knowledge and insights, demonstrating that effective information security doesn't require excessive budgets—just expertise, creativity, and the right approach.</p>
  <a href="/posts/" class="btn btn--primary btn--large">Latest Articles</a>
</div>

<div class="posts-container" style="margin-top: 3em; position: relative; z-index: 2;">
  <h1 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h1>

  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
