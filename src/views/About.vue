<script setup>

</script>

<template>
  <a-row style="margin-top: 10px; width: 100%;">
    <a-col :span="3"></a-col>
    <a-col :span="18" style="width: 100%; display: flex; justify-content: center;">
<!--      <a-card style="margin-top: 10px; width: 100%;" title="Hello World">-->
        <a-timeline>
          <a-timeline-item style="text-align: left">
          <h3>2024年12月08日 2</h3>
          <a-card title="" :bordered="false" style="width: 100%;">
            <p style="color: #666">
              事实证明，上一次更新是一个错误，引入的layui与jquery冲突了。在我把后端项目nest引入后，先是发现不能使用jquery发送ajax请求，只好改用原生，然后又发现不能通过jquery更新页面，连原生也无效，最终只好放弃，还是使用vue3重构了这个项目。
            </p>
          </a-card>
          </a-timeline-item>
          <a-timeline-item style="text-align: left">
            <h3>2024年12月08日 1</h3>
            <a-card title="" :bordered="false" style="width: 100%;">
              <p style="color: #666">
                史诗级更新！！！引入了layui，以前很多残缺的逻辑现在完善啦（之前用的bootstrap不知道为啥很多官网上的案例复现不了）！还添加了contact me页面。
                之前也搭建过类似的博客html借助github部署（现成的模板换一下内容），这次是先通过豆包生成，然后再做一些个性化的调整，一点点完善，感觉很不一样。
                还是尝试一下使用flask之类的框架，因为相同的html太多了，要改的话也要一起改，很麻烦，如果使用蓝图应该方便很多吧。
              </p>
            </a-card>
          </a-timeline-item>
          <a-timeline-item style="text-align: left">
            <h3>2024年12月07日</h3>
            <a-card title="" :bordered="false" style="width: 100%;">
              <p style="color: #666">
                刚部署网站能访问的时候，发现加载巨卡，尤其是图片，今天看了一下，原来第二篇博客里的唯一一张图片足足有13MB（使用iphone拍摄再转过来的png），
                今天通过豆包写了个python脚本，把图片都压缩到几百kb了。
              </p>

            </a-card>
          </a-timeline-item>
          <a-timeline-item style="text-align: left">
            <h3>2024年12月05日</h3>
            <a-card title="" :bordered="false" style="width: 100%;">
              <p style="color: #666">
                以上就是这个网站出现的原因，目前这两个页面都是用豆包生成的（感谢douyin的大力支持），目前主要使用的是tailwind、bootstrap和jquery，
                这个周末计划引入layui，并完善一些页面操作逻辑，以及about和contact两个页面，以后会慢慢完善的。。。
              </p>
            </a-card>
          </a-timeline-item>
          <a-timeline-item style="text-align: left">
            <h3>初心</h3>
            <a-card title="" :bordered="false" style="width: 100%;">
              <p style="color: #666">
                早就在筹备建设博客网站的事，刚开始技术调研，看了nestjs、pear admin flask、vben-admin vue，规划好分为博客、博客管理后台、博客后端服务接口三部分开发，
                好不容易抽出两个周末，把后端接口开发完了（使用nestjs），试着用vben-admin vue搭建博客的后台，页面倒是精美，但是封装度太高，理解和改造起来难度很大，卡在菜单处无法推进，
                又搁置了一周，最后决定先用html把博客页面先搭起来，因为前期数据量不大，暂时不用数据库也行，还可以顺便练习一下html和css，也记录一下我这一路的成长！
              </p>
            </a-card>
          </a-timeline-item>
        </a-timeline>
<!--      </a-card>-->

    </a-col>
    <a-col :span="3"></a-col>
  </a-row>
</template>

<style scoped>

</style>