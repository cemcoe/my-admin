<script setup lang="ts">
import { useRoute } from "vue-router";
import { useLoginStore } from "@/stores/login";
import { changeMenuCollapseStatus } from "./useMenu";
const route = useRoute();

const loginStore = useLoginStore();
const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div @click="changeMenuCollapseStatus">
        <el-icon :size="24"><Fold /></el-icon>
      </div>

      <el-breadcrumb>
        <el-breadcrumb-item v-for="r in route.matched.slice(1)" :key="r.path">
          {{ r.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-dropdown>
      <div class="avatar-container">
        <el-avatar :size="40" :src="circleUrl" />
        <span>cemcoe</span>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="loginStore.logoutAction"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided disabled>修改信息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.el-breadcrumb {
  margin-left: 30px;
  display: flex;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.avatar-container span {
  margin-left: 10px;
}
</style>
