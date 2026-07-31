---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Mubai Coder"
  text: "Personal Notes"
  tagline: ""
  actions:
    - theme: brand
      text: Guide
      link: /guide
    # - theme: alt
    #   text: About me
    #   link: /aboutme

features:
  - title: Study Notes
    details: "Knowledge acquired through systematic learning"
  - title: Knowledge Points
    details: "Knowledge points summarized during work"
  - title: Other
    details: "Other things I want to share or record"
---
<script setup>
import ContactMeComponent from './../components/ContactMeComponent.vue'
</script>
<ContactMeComponent />
