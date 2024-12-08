import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/LoginView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Bescherm routes die authenticatie vereisen
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/"); // Stuur naar de loginpagina als er geen token is
  } else {
    next();
  }
});

export default router;
