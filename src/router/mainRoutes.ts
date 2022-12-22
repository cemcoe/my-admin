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
    component: () => import("@/views/MainView/MainView.vue"),
  },
];
