import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ArticleDetail from '../views/ArticleDetail.vue';
import BasicLayout from '../views/BasicLayout.vue';
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: true, // 用于传递路由参数到组件
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;