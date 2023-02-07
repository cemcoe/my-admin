<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { menusRoutes } from "@/router/menuRoutes";
import MenuTree from "./MenuTree.vue";

const isCollapse = ref(false);
const route = useRoute();

const defaultActive = computed(() => {
  return route.path;
});
</script>

<template>
  <div class="logo">logo</div>
  <el-menu
    :default-active="defaultActive"
    :default-openeds="['/main/analysis']"
    :collapse="isCollapse"
  >
    <MenuTree :menusRoutes="menusRoutes"></MenuTree>
  </el-menu>
</template>

<style scoped>
.home {
  background-color: antiquewhite;
}

.logo {
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
