<script setup lang="ts">
import { pageConfig } from "./config";
import PageContent from "@/components/PageContent.vue";

function handleEdit(row: any) {
  console.log(row);
  window.alert("已拿到数据");
}
</script>

<template>
  <div class="analysisoverview">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"> Vue3 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> Vue-Router </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> Pinia </el-card>
      </el-col>
    </el-row>
    <PageContent :pageConfig="pageConfig" @handleEdit="handleEdit">
      <template #title="scope">
        <span class="demo">{{ scope.row.title }}</span>
      </template>
    </PageContent>
  </div>
</template>

<style scoped>
.analysisoverview {
}

@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
}
.demo {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
