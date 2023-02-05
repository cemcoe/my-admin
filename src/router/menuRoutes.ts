import type { RouteRecordRaw } from "vue-router";

export const menusRoutes: RouteRecordRaw[] = [
  {
    name: "系统总览",
    path: "/main/analysis",
    redirect: "/main/analysis/overview",
    children: [
      {
        path: "/main/analysis/overview",
        name: "核心技术",
        component: () =>
          import("@/views/AnalysisOverview/AnalysisOverview.vue"),
      },
      {
        path: "/main/analysis/dashboard",
        name: "数据统计",
        component: () =>
          import("@/views/AnalysisDashboard/AnalysisDashboard.vue"),
      },
    ],
  },
  {
    name: "模板展示",
    path: "/main/template",
    redirect: "/main/template/page",
    children: [
      {
        path: "/main/template/page",
        name: "页面级别模板",
        component: () =>
          import("@/views/TemplateDemo/PostManage/PostManage.vue"),
      },
    ],
  },
  {
    path: "/gantt",
    name: "甘特图",
    component: () => import("../views/GanttView/GanttView.vue"),
  },
  {
    path: "/about",
    name: "关于",
    component: () => import("../views/AboutView.vue"),
  },
];
