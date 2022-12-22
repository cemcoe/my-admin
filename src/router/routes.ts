const routes = [
  {
    path: "/main/analysis/overview",
    component: () => import("@/views/AnalysisOverview/AnalysisOverview.vue"),
  },
  {
    path: "/main/analysis/dashboard",
    component: () => import("@/views/AnalysisDashboard/AnalysisDashboard.vue"),
  },
];

export { routes };
