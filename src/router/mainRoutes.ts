export const mainRoutes = [
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
    redirect: "/main/analysis",
    component: () => import("@/views/MainView/MainView.vue"),
  },
];
