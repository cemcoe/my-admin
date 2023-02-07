<template>
  <div class="container" ref="ganttContainer" id="demo"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gantt } from "dhtmlx-gantt";

import { customLightbox } from "./useLightbox";

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
  // gantt.config.subscales = [{ unit: "day", step: 1, date: "%j" }];
  gantt.config.scales = [
    { unit: "day", step: 1, format: "%d日" },
    { unit: "month", step: 1, format: "%Y年%F" },
    // { unit: "year", step: 1, format: "%Y" },
  ];

  // 周末标注
  gantt.config.work_time = true;
  gantt.templates.timeline_cell_class = function (task, date) {
    if (!gantt.isWorkTime(date)) return "week_end";
    return "";
  };

  // 编辑弹窗
  // gantt.templates.task_time = function (start, end, task) {
  //   return (
  //     gantt.templates.task_date(start) +
  //     " - " +
  //     gantt.templates.task_end_date(end)
  //   );
  // };

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
      align: "center",
      template: function (obj: any) {
        return `${statusHTML(obj.progress)}`; // 通过 template 回调可以指定返回内容值
      },
    },
    {
      name: "admin",
      label: "负责人",
      align: "center",
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

  gantt.config.reorder_grid_columns = true;

  customLightbox(gantt);

  gantt.init(ganttContainer.value as HTMLElement);
  gantt.parse(props.tasks);

  // 本地化，init之后调用
  gantt.i18n.setLocale({
    date: {
      month_full: [
        "1月",
        "2月",
        "3月",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    labels: {
      new_task: "新任务",
      gantt_save_btn: "保存",
      gantt_cancel_btn: "取消",

      /* grid columns */

      column_text: "标题",
      column_start_date: "开始时间",
    },
  });
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
