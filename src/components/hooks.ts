import type { gantt } from "dhtmlx-gantt";
type IGantt = typeof gantt;

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

function styleWeekEnd(gantt: IGantt) {
  // 周末标注
  gantt.config.work_time = true;
  gantt.templates.timeline_cell_class = function (task, date) {
    if (!gantt.isWorkTime(date)) return "week_end";
    return "";
  };
}

function configGantt(gantt: IGantt) {
  // 配置甘特图
  gantt.config.date_format = "%Y-%m-%d";
  // gantt.config.subscales = [{ unit: "day", step: 1, date: "%j" }];
  gantt.config.scales = [
    { unit: "day", step: 1, format: "%d日" },
    { unit: "month", step: 1, format: "%Y年%F" },
    // { unit: "year", step: 1, format: "%Y" },
  ];
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
}

function installPlugins(gantt: IGantt) {
  // 安装插件
  gantt.plugins({
    tooltip: true,
    marker: true,
    fullscreen: true,
  });
}

function markerToday(gantt: IGantt) {
  // 标注今天
  const dateToStr = gantt.date.date_to_str(gantt.config.task_date);

  const todayMarker = gantt.addMarker({
    start_date: new Date(),
    css: "today",
    text: "今天",
    title: dateToStr(new Date()),
  });
  setInterval(function () {
    const today = gantt.getMarker(todayMarker);
    today.start_date = new Date();
    today.title = dateToStr(new Date());
    gantt.updateMarker(todayMarker);
  }, 1000 * 60);
}

function i18nGannt(gantt: IGantt) {
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
}

export { styleWeekEnd, configGantt, installPlugins, markerToday, i18nGannt };
