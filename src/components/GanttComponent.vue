<template>
  <div ref="ganttContainer" id="demo"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gantt } from "dhtmlx-gantt";
const props = defineProps({
  tasks: {
    type: Object,
    default() {
      return { data: [], links: [] };
    },
  },
});

const ganttContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  gantt.config.date_format = "%Y-%m-%d";

  gantt.init(ganttContainer.value as HTMLElement);
  gantt.parse(props.tasks);
});
</script>

<style>
@import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
</style>
