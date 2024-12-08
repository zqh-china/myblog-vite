<template>
    <div class="left-sidebar">
      <a-card title="标签" :bordered="false" style="margin-bottom: 30px;"  >
        <a-empty v-if="!tags||tags.length===0"/>
        <div v-else>
          <a-tag :color="tag.color" v-for="tag in tags" :key="tag.id" style="margin-bottom: 5px;">#{{ tag.name }}</a-tag>
        </div>
      </a-card>
      <a-card title="分类" :bordered="false">
        <a-tag :color="category.color" v-for="category in categories" :key="category.id" style="margin-top: 5px;">{{ category.name }}</a-tag>
      </a-card>
    </div>
  </template>
  
  <script setup>
  import {computed} from 'vue';
  import {useBlogStore} from "../store/index.js";

  const store = useBlogStore();
  const tags = computed(() => store.tags || []);
  const categories = computed(() => store.categories || []);
  </script>
  
  <style scoped>
  .left-sidebar {
    background-color: #f0f2f5;
    padding: 0 10px;
  }
  </style>