import type { RouteRecordRaw } from "vue-router";

export const menusRoutes: RouteRecordRaw[] = [
  {
    name: "系统总览",
    path: "/main/analysis",
    redirect: "/main/analysis/overview",
    meta: {
      icon: "Histogram",
    },
    children: [
      {
        path: "/main/analysis/overview",
        name: "核心技术",
        component: () =>
          import("@/views/AnalysisOverview/AnalysisOverview.vue"),
        meta: {
          icon: "Aim",
        },
      },
      {
        path: "/main/analysis/dashboard",
        name: "数据统计",
        component: () =>
          import("@/views/AnalysisDashboard/AnalysisDashboard.vue"),
        meta: {
          icon: "TrendCharts",
        },
      },
    ],
  },
  {
    name: "模板展示",
    path: "/main/template",
    redirect: "/main/template/page",
    meta: {
      icon: "Grid",
    },
    children: [
      {
        path: "/main/template/page",
        name: "页面模板",
        component: () =>
          import("@/views/TemplateDemo/PostManage/PostManage.vue"),
        meta: {
          icon: "CoffeeCup",
        },
      },
    ],
  },
  {
    path: "/gantt",
    name: "甘特图",
    component: () => import("../views/GanttView/GanttView.vue"),
    meta: {
      icon: "Calendar",
    },
  },
  {
    path: "/kanban",
    name: "看板",
    component: () => import("../views/KanBan/KanBan.vue"),
    meta: {
      icon: "Monitor",
    },
  },
  {
    path: "/about",
    name: "关于",
    component: () => import("../views/AboutView.vue"),
    meta: {
      icon: "Pear",
    },
  },
];
