<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { menusRoutes } from "@/router/menuRoutes";
import MenuTree from "./MenuTree.vue";
import { isCollapse } from "./useMenu";

const route = useRoute();

const defaultActive = computed(() => {
  return route.path;
});
</script>

<template>
  <el-menu
    :default-active="defaultActive"
    :default-openeds="['/main/analysis']"
    :collapse="isCollapse"
  >
    <div class="logo">
      <span class="demo">logo</span>
    </div>
    <MenuTree :menusRoutes="menusRoutes"></MenuTree>
  </el-menu>
</template>

<style scoped>
.home {
  background-color: antiquewhite;
}

.logo {
  height: 100px;
  background-color: #e2e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes masked-animation {
  0% {
    color: #e2e1e1;
  }
  to {
    color: #f40;
  }
}
.demo {
  font-size: 24px;
  animation: 3s masked-animation infinite;
}
</style>
