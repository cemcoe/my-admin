<script setup lang="ts">
import MainMenu from "./components/MainMenu.vue";
import MainHeader from "./components/MainHeader.vue";
import MainContent from "./components/MainContent.vue";
</script>

<template>
  <el-container class="main-view">
    <el-aside width="200px"><MainMenu /></el-aside>
    <el-container>
      <el-header><MainHeader /></el-header>
      <el-main><MainContent /></el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-view {
  width: 100vw;
  height: 100vh;
}

.el-aside {
  background-color: antiquewhite;
  box-shadow: rgba(13, 13, 13, 0.08) 0px 4px 12px;
}
.el-header {
  background-color: #fff;
}
.el-main {
  background-color: rgb(242, 241, 241);
}
</style>
