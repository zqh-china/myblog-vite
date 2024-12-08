<template>
  <div class="right-sidebar">
    <h3>分类</h3>
    <div>
      <a-tag color="processing" v-for="category in categories" :key="category">{{ category }}</a-tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref(['技术分享', '生活感悟', '旅行见闻', '踩坑记录']);
</script>

<style scoped>
.right-sidebar {
  background-color: #f0f2f5;
  padding: 10px;
}

</style>