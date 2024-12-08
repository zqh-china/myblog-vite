<script setup>
const linkMap = {
  'mail-qq': 'mailto:2270179571@qq.com',
  'gmail': 'mailto:zhangqihao628@gmail.com',
  'github': 'https://github.com/zqh-china',
}
const onIconClick = (type) => {
  window.open(linkMap[type], '_blank');
}
</script>

<template>
  <a-row style="margin-top: 10px; width: 100%;">
    <a-col :span="6"></a-col>
    <a-col :span="12" style="width: 100%; display: flex; justify-content: center;">
      <a-card title="联系我" :bordered="false" style="width: 100%; height: 240px;">
        <div style="display: flex; justify-content: space-between; padding: 30px;">
          <a-popover title="QQ" trigger="hover" placement="bottomLeft">
            <template #content>
              <a-image :width="300" src="qq.JPG"></a-image>
            </template>
            <svg class="icon" aria-hidden="true" data-target="qq">
              <use xlink:href="#icon-QQ"></use>
            </svg>
          </a-popover>
          <a-popover title="WeChat" trigger="hover" placement="bottomLeft">
            <template #content>
              <a-image :width="300" src="wechat.JPG"></a-image>
            </template>
            <svg class="icon" aria-hidden="true" data-target="wechat">
              <use xlink:href="#icon-Wechat"></use>
            </svg>
          </a-popover>
          <a-popover title="Github" trigger="hover" placement="bottomRight">
            <template #content>
              点击前往主页
            </template>
          <svg class="icon" aria-hidden="true" data-target="github" @click="onIconClick('github')">
            <use xlink:href="#icon-github"></use>
          </svg>
          </a-popover>
          <a-popover title="QQ Mail" trigger="hover" placement="bottomRight">
            <template #content>
              点击发送邮件
            </template>
          <svg class="icon" aria-hidden="true" data-target="mail-qq" @click="onIconClick('mail-qq')">
            <use xlink:href="#icon-mail-qq"></use>
          </svg>
          </a-popover>
          <a-popover title="Telegram" trigger="hover" placement="bottomRight">
            <template #content>
              <a-image :width="300" src="telegram.jpg"></a-image>
            </template>
            <svg class="icon" aria-hidden="true" data-target="telegram">
              <use xlink:href="#icon-telegram"></use>
            </svg>
          </a-popover>
          <a-popover title="GMAIL" trigger="hover" placement="bottomRight">
            <template #content>
              点击发送邮件
            </template>
          <svg class="icon" aria-hidden="true" data-target="gmail" @click="onIconClick('gmail')">
            <use xlink:href="#icon-gmail"></use>
          </svg>
          </a-popover>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6"></a-col>
  </a-row>
</template>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}
.icon:hover {
  transform: scale(2.4);
}
</style>