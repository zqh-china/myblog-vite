<template>
    <a-layout>
      <!-- 头部区域 -->
      <a-layout-header style="background-color: #fff; padding: 0 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
          <!-- logo -->
          <a href="#" style="font-size: 20px; font-weight: bold;">My Blog</a>
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="menuItems" />
        </div>
      </a-layout-header>
      <!-- 内容区域 -->
      <a-layout-content style="padding: 20px; min-height: calc(100vh - 128px); display: flex;">
        <router-view></router-view>
      </a-layout-content>
      <!-- 页脚区域 -->
      <a-layout-footer style="text-align: center; background-color: #333; color: #fff;">
        &copy; 2024 My Blog. All rights reserved.
      </a-layout-footer>
    </a-layout>
  </template>
  
  <script setup>
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import LeftSidebar from '@/components/LeftSidebar.vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
import Home from './Home.vue';
  import {getAllTags} from "../api/index.js";
  const articleList = ref([]);


  const getArticleList = async () => {
    return await axios.get('/api/articles');
  }

  const router = useRouter();
  const menuItems = [
    {
        key: "home",
        label: "首页",
        title: "home",
    },
    {
        key: "about",
        label: "关于",
        title: "about",
    },
    {
        key: "contact",
        label: "联系我",
        title: "contact",
    },
  ];

  const current = ref(['home']);
  const tags = ref([]);
  
  const articles = ref([
    {
      id: 1,
      title: '第一篇博客文章',
      content: '这是第一篇博客文章的内容摘要哦~',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    {
      id: 2,
      title: '第二篇博客文章',
      content: '这是第二篇博客文章的内容摘要呀~',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }
  ]);

//   onMounted(async () => {
//     const data = (await getArticleList()).data.data;
//     articleList.value = data.list;
//     console.log(data);
//   });

  const toArticleDetail = (id) => {
    router.push({ path: `/article/${id}` });
  }


  </script>
  
  <style scoped>
  
  </style>