<template>
    <!-- 左侧标签区域（引入新组件） -->
    <a-col span="6">
          <LeftSidebar />
        </a-col>
        <!-- 中间博客列表卡片区域（占3/4宽度） -->
        <a-col span="16">
            <div v-for="article in articles" :key="article.id" style="margin-bottom: 10px;">
              <a-card :title="article.title" hoverable style="width: 100%;height: 200px;" >
                  <template #extra>
                    <a @click="toArticleDetail(article.id)">More</a>
                  </template>
                  {{ article.desc }}
              </a-card>
            </div>
          
        </a-col>
        <a-col span="2"></a-col>
  </template>
  
  <script setup>
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import LeftSidebar from '@/components/LeftSidebar.vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import {getAllArticles, getAllTags} from "../api/index.js";
  const articleList = ref([]);


  // const getArticleList = async () => {
  //   return await axios.get('/api/articles');
  // }


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
  const articles = ref([]);
  // const articles = ref([
  //   {
  //     id: 1,
  //     title: '第一篇博客文章',
  //     content: '这是第一篇博客文章的内容摘要哦~',
  //     cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  //   },
  //   {
  //     id: 2,
  //     title: '第二篇博客文章',
  //     content: '这是第二篇博客文章的内容摘要呀~',
  //     cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  //   }
  // ]);

  onMounted(async () => {
    getAllArticles().then((res) => {
      articles.value = res.data.result;
    });
  });

  const toArticleDetail = (id) => {
    router.push({ path: `/article/${id}` });
  }
  </script>
  
  <style scoped>
  
  </style>