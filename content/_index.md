---
title: ""
summary: ""
date: "2022-10-24"
type: "landing"
sections:
  - block: "resume-biography-3"
    content:
      username: "me"
      text: ""
      button:
        text: "Download CV"
        url: "uploads/resume.pdf"
      headings:
        about: ""
        education: ""
        interests: ""
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: "md"
      avatar:
        size: "medium"
        shape: "circle"
    ce: "section-23634243"
    As: "section-af406cbf"
  - block: "markdown"
    content:
      title: "📚 My Research"
      subtitle: ""
      text: |-
        I'm a PhD student at Helmholtz Munich, working on network inference for marine microbial time series. My research combines mathematical modelling, statistics, and machine learning to uncover interaction networks within microbial communities.

        Before my PhD, I completed a Master's in Mathematics at the Technical University of Munich, where my thesis focused on the mathematical modelling of bacterial quorum sensing.

        Feel free to reach out to collaborate 😃
    design:
      columns: "1"
    ce: "section-56f4819f"
    As: "section-866a2ce0"
  - block: "markdown"
    content:
      title: "🎓 Teaching"
      subtitle: ""
      text: |-
        - Übungsleiter, Analysis of High Dimensional Biological Data, LMU München
    design:
      columns: "1"
    ce: "section-teaching"
    As: "section-teaching"
  - block: "collection"
    content:
      title: "Featured Publications"
      filters:
        folders:
          - "publications"
        featured_only: true
    design:
      view: "article-grid"
      columns: 2
    ce: "section-papers"
    id: "papers"
    As: "section-88513e7f"
  - block: "collection"
    content:
      title: "Recent Publications"
      text: ""
      filters:
        folders:
          - "publications"
        exclude_featured: false
    design:
      view: "article-grid"
    ce: "section-530e9f36"
    As: "section-73b711ba"
  - block: "collection"
    content:
      title: "Recent & Upcoming Talks"
      filters:
        folders:
          - "events"
    design:
      view: "card"
    ce: "section-talks"
    id: "talks"
    As: "section-774d6fe2"
  - block: "collection"
    content:
      title: "Recent News"
      subtitle: ""
      text: ""
      page_type: "blog"
      count: 10
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: "desc"
    design:
      view: "card"
      spacing:
        padding:
          - 0
          - 0
          - 0
          - 0
    ce: "section-news"
    id: "news"
    As: "section-78a43cb9"
---
