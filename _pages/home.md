---
layout: splash
permalink: /
title: "No Budget Security"
header:
  image: /assets/images/headers/header-image.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

# Welcome to No Budget Security

A blog dedicated to sharing knowledge about information security and technology, focusing on practical approaches and real-world experiences.

## Featured Topics

* **Information Security**
  * Security Best Practices
  * Threat Intelligence
  * Incident Response

* **Technology**
  * Security Tools
  * Automation
  * Cloud Security

* **Cybersecurity**
  * Penetration Testing
  * Vulnerability Assessment
  * Security Architecture

## Latest Posts

{% for post in site.posts limit:3 %}
  * [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## Connect With Me

Feel free to reach out through:
* [LinkedIn](https://www.linkedin.com/in/jnahuelperez/) 