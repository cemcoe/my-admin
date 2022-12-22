import { createRouter, createWebHistory } from "vue-router";
import { mainRoutes } from "./mainRoutes";
import { menusRoutes } from "./menuRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: mainRoutes,
});

menusRoutes.map((route) => router.addRoute("main", route));

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = Boolean(token);
  if (to.path !== "/login" && !isAuthenticated) next({ path: "/login" });
  else if (to.path == "/main") {
    // '/' => '/main' => '/main/xxxx'
    next({ path: menusRoutes[0].path });
  } else next();
});

export default router;
