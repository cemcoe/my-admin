<script setup lang="ts">
import { menusRoutes } from "@/router/menuRoutes";
import MenuTree from "./MenuTree.vue";
</script>

<template>
  <div class="logo">logo</div>
  <MenuTree :menusRoutes="menusRoutes"></MenuTree>
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
