<template>
  <a-layout>
    <!-- 头部区域 -->
    <a-layout-header style="background-color: #fff; padding: 0 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
        <!-- logo -->
        <a href="#" style="font-size: 20px; font-weight: bold;">My Blog</a>
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="menuItems" @click="toPage"/>
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
import {onMounted, ref} from "vue";
import { useRouter, useRoute } from "vue-router";
import {getAllCategories, getAllTags} from "./api/index.js";
import {useBlogStore} from "./store/index.js";
const store = useBlogStore();

const tags = ref([]);
const categories = ref([]);


onMounted(async () => {
  getAllTags().then((res) => {
    tags.value = res.data.result;
    store.tags = res.data.result;
  });
  getAllCategories().then((res) => {
    categories.value = res.data.result;
    store.categories = res.data.result;
  })
})
const router = useRouter();
const route = useRoute();
const menuItems = [
  {
    key: "home",
    label: "首页",
    title: "home",
    path: '/home',
  },
  {
    key: "about",
    label: "关于",
    title: "about",
    path: "/about",
  },
  {
    key: "contact",
    label: "联系我",
    title: "contact",
    path: "/contact",
  },
];

const current = ref(['home']);
onMounted(() => {
  router.push({ path: "/home" });
});
const toPage = (e) => {
  router.push({ path: `/${e.key}` });

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    background-color: #ecf0f1;
}
</style>