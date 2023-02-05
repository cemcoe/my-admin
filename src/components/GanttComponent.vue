<template>
  <div class="container" ref="ganttContainer" id="demo"></div>
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

function getStatusText(progress: number) {
  if (progress > 0 && progress < 1) {
    return "进行中";
  } else if (progress === 1) {
    return "已完成";
  } else {
    return "未开始";
  }
}

const statusHTML = (progress: any) => {
  return `<div 
    style="
    color: #f40;
  ">
     <span style="
        background: ${progress > 0 ? "#4f4f25" : "red"};
        padding: 4px 6px;
        border-radius: 10px;
        color: #fff;
    ">${getStatusText(progress)}<span>
  
  </div>`;
};
onMounted(() => {
  gantt.config.date_format = "%Y-%m-%d";
  gantt.config.columns = [
    {
      name: "text",
      label: "标题",
      template: function (obj: any) {
        return `${obj.text}`; // 通过 template 回调可以指定返回内容值
      },
    },
    {
      name: "text",
      label: "状态",
      template: function (obj: any) {
        return `${statusHTML(obj.progress)}`; // 通过 template 回调可以指定返回内容值
      },
    },
    {
      name: "text",
      label: "负责人",
      template: function (obj: any) {
        return `${obj.admin}`; // 通过 template 回调可以指定返回内容值
      },
    },
    { name: "add", label: "" },
  ];

  gantt.plugins({
    tooltip: true,
    marker: true,
  });

  gantt.templates.task_class = function (start, end, task) {
    return `milestone-${task.state}`;
  };
  var dateToStr = gantt.date.date_to_str(gantt.config.task_date);

  const todayMarker = gantt.addMarker({
    start_date: new Date(),
    css: "today",
    text: "今天",
    title: dateToStr(new Date()),
  });
  setInterval(function () {
    var today = gantt.getMarker(todayMarker);
    today.start_date = new Date();
    today.title = dateToStr(new Date());
    gantt.updateMarker(todayMarker);
  }, 1000 * 60);

  gantt.init(ganttContainer.value as HTMLElement);
  gantt.parse(props.tasks);
});
</script>

<style>
@import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

.container .gantt_task_line {
  border: none;
  background: rgba(232, 5, 5, 0.45);
}

.gantt_task_progress {
  border: none;
  background: rgba(126, 241, 10, 0.45);
}
</style>
