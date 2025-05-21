---
layout: splash
permalink: /
title: "No Budget Security"
header:
  image: /assets/images/headers/header-image.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
intro:
  - excerpt: 'A blog dedicated to sharing knowledge about information security and technology, focusing on practical approaches and real-world experiences.'
feature_row:
  - title: "Information Security"
    excerpt: "Security Best Practices, Threat Intelligence, Incident Response."
  - title: "Technology"
    excerpt: "Security Tools, Automation, Cloud Security."
  - title: "Cybersecurity"
    excerpt: "Penetration Testing, Vulnerability Assessment, Security Architecture."
---

# Welcome to No Budget Security

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