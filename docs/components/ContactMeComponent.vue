<template>
  <h2>Contact me</h2>
  <div class="contact-container">
      <div class="image-container">
        <img :src="wechat" alt="wechat" class="contact-image" />
      </div>
      <div class="image-container">
        <img :src="qq" alt="qq" class="contact-image" />
      </div>
  </div>
</template>
<script setup>
import wechat from './../public/contact-me-wechat.jpg'
import qq from './../public/contact-me-qq.jpg'
</script>
<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
}

.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
}

.contact-image {
  width: 80%;
  height: auto;
  object-fit: contain;
}
</style>
