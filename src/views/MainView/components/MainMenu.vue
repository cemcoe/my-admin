<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { menusRoutes } from "@/router/menuRoutes";

const route = useRoute();

const defaultActive = computed(() => {
  return route.path;
});
</script>

<template>
  <div class="logo">logo</div>
  <el-menu :default-active="defaultActive">
    <!-- userMenu: [{ children: [{ id, path, url }], id, path, url }] -->

    <template v-for="item in menusRoutes" :key="item.path">
      <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <span>{{ item.name }}</span>
        </template>

        <el-menu-item
          v-for="itemj in item.children"
          @click="$router.push(itemj.path)"
          :index="itemj.path"
          :key="itemj.path"
          >{{ itemj.name }}</el-menu-item
        >
      </el-sub-menu>
      <template v-else>
        <el-menu-item :index="item.path" @click="$router.push(item.path)">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
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
