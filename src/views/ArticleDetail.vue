<template>
  <a-row style="margin-top: 10px; width: 100%;">
    <a-col :span="2"></a-col>
    <a-col :span="20" style="width: 100%; display: flex; justify-content: center;">
      <a-card :bordered="false"  style="width: 100%;">
        <a-typography>
          <a-typography-title style="text-align: left; margin-bottom: 30px;">{{ articleInfo.title }}</a-typography-title>
            <a-tag v-for="tag in articleTags" :key="tag?.id" :color="tag?.color">{{ tag?.name }}</a-tag>
            <span>
              创建于：{{ moment(articleInfo.create_time).format('YYYY-MM-DD HH:mm:ss') }}
            </span>
            <span>
              修改于：{{ moment(articleInfo.update_time).format('YYYY-MM-DD HH:mm:ss') }}| By {{ authorInfo.nickname }}
            </span>
<!--          <a-typography-paragraph v-for="para in paragraphList" :key="para.id"-->
<!--              style="text-align: left; margin: 15px; text-indent: 2em;">-->
<!--            {{ para.content }}-->
<!--          </a-typography-paragraph>-->
          <div v-for="para in paragraphList" :key="para.id" style="margin: 15px;">
            <a-typography-paragraph v-if="para.type === 'text'"  style="text-align: left; text-indent: 2em;">{{ para.content }}</a-typography-paragraph>
            <a-image v-if="para.type==='img'" :width="400" :src="'http://blog.coollt.cn/imgs/'+para.content"></a-image>
          </div>
        </a-typography>
      </a-card>
    </a-col>
    <a-col :span="2"></a-col>
  </a-row>
</template>

<script setup>
import axios from 'axios';
import {computed, onMounted, reactive, ref} from 'vue';
import { useRoute } from 'vue-router';
import { getArticle, getArticleParagraphs, getAuthor } from "../api/index.js";
import {useBlogStore} from "../store/index.js";
const props = defineProps(['article']);
import moment from "moment";
const route = useRoute();
let articleInfo = reactive({});
const paragraphList = ref([]);
const store = useBlogStore();
const allTags = computed(() => store.tags || []);

const articleTags = ref([]);
let authorInfo = ref({});

onMounted(() => {
  const article_id = route.params.id;
  if (!article_id) {
    return;
  }
  getArticle(article_id).then(response => {
    articleInfo = response.data.result;
    if (articleInfo) {
      articleTags.value = articleInfo.tag_id.split(",").map(tag_id => {
        return allTags.value.find(tag => tag.id === parseInt(tag_id));
      });
      getAuthor(articleInfo.author_id).then(response => {
        authorInfo.value = response.data;
      });
    }

  });
  getArticleParagraphs(article_id).then(response => {
    paragraphList.value = response.data.result;
  });


    
});


</script>