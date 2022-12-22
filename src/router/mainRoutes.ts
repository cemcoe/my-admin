import type { RouteRecordRaw } from "vue-router";

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/views/LoginView/LoginView.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/MainView/MainView.vue"),
  },
  {
    path: "/:patchMatch(.*)",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
];
