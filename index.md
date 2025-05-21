---
layout: splash
title: "No Budget Sec"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/headers/header-image.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  actions:
    - label: "Read More"
      url: "/posts/"
excerpt: "A blog dedicated to sharing knowledge about information security and technology, focusing on practical approaches and real-world experiences."
intro:
  - excerpt: 'Sharing security knowledge and practical approaches that work without breaking the bank.'
feature_row:
  - image_path: /assets/images/headers/header-image.jpg
    alt: "Information Security"
    title: "Information Security"
    excerpt: "Security Best Practices, Threat Intelligence, Incident Response."
    url: "/categories/#blog"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/headers/header-image.jpg
    alt: "Technology"
    title: "Technology"
    excerpt: "Security Tools, Automation, Cloud Security."
    url: "/tags/#cybersecurity"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/headers/header-image.jpg
    alt: "Cybersecurity"
    title: "Cybersecurity"
    excerpt: "Penetration Testing, Vulnerability Assessment, Security Architecture."
    url: "/posts/"
    btn_label: "Read More"
    btn_class: "btn--primary"
permalink: /
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

<div class="feature__wrapper">
  <div class="feature__item--left">
    <div class="archive__item">
      <div class="archive__item-body">
        <h2 class="archive__item-title">Contact</h2>
        <div class="archive__item-excerpt">
          <p>Feel free to reach out through <a href="https://www.linkedin.com/in/jnahuelperez/" target="_blank">LinkedIn</a></p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="feature__item--right">
    <div class="archive__item">
      <div class="archive__item-body">
        <h2 class="archive__item-title">Recent Posts</h2>
        <div class="archive__item-excerpt">
          {% for post in site.posts limit:3 %}
            <p><a href="{{ post.url }}">{{ post.title }}</a><br/>
            <small><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ post.date | date: "%B %d, %Y" }}</small></p>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div> 