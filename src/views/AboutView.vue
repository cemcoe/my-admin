<template>
  <div class="container">
    <GanttComponent class="left-container" :tasks="tasks"></GanttComponent>
  </div>
</template>

<script setup lang="ts">
import GanttComponent from "@/components/GanttComponent.vue";
const tasks = {
  data: [
    {
      id: 1,
      text: "编写文档",
      start_date: "2023-02-03",
      duration: 1,
      progress: 0,
      admin: "金先生",
    },
    {
      id: 2,
      text: "甘特图调研",
      start_date: "2023-02-04",
      duration: 3,
      progress: 0.7,
      admin: "木先生",
    },
    {
      id: 3,
      text: "集成到Vue3",
      start_date: "2023-02-05",
      duration: 2,
      progress: 0.3,
      admin: "水先生",
    },
    {
      id: 4,
      text: "甘特图集成到管理系统",
      start_date: "2023-02-06",
      duration: 4,
      progress: 0,
      admin: "火先生",
    },
    {
      id: 5,
      text: "上线测试",
      start_date: "2023-02-06",
      duration: 1,
      progress: 1,
      admin: "土先生",
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }],
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width: 100%;
}
.left-container {
  overflow: hidden;
  position: relative;
  height: 100%;
}
</style>
