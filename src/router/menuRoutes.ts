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
        name: "商品统计",
        component: () =>
          import("@/views/AnalysisDashboard/AnalysisDashboard.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "关于",
    component: () => import("../views/AboutView.vue"),
  },
];
