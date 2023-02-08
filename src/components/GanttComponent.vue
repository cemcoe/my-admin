<template>
  <el-button @click="handleFullScreen">全屏</el-button>
  <div class="container" ref="ganttContainer" id="demo"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gantt } from "dhtmlx-gantt";

import { customLightbox } from "./useLightbox";
import {
  styleWeekEnd,
  configGantt,
  installPlugins,
  markerToday,
  i18nGannt,
} from "./hooks";

const props = defineProps({
  tasks: {
    type: Object,
    default() {
      return { data: [], links: [] };
    },
  },
});

const ganttContainer = ref<HTMLElement | null>(null);

function handleFullScreen() {
  gantt.expand();
}

onMounted(() => {
  installPlugins(gantt);
  configGantt(gantt);
  styleWeekEnd(gantt);
  markerToday(gantt);

  gantt.templates.task_class = function (start, end, task) {
    return `milestone-${task.state}`;
  };

  customLightbox(gantt);
  gantt.init(ganttContainer.value as HTMLElement);
  gantt.parse(props.tasks);
  i18nGannt(gantt);
});
</script>

<style>
@import "dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css";

.container .gantt_task_line {
  border: none;
  background: rgba(232, 5, 5, 0.45);
}

.gantt_task_progress {
  border: none;
  background: rgba(126, 241, 10, 0.45);
}

.week_end {
  background-color: #e3dede;
}
</style>
