import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/LoginView.vue";
import OrderList from "../components/OrderList.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrderList,
    meta: { requiresAuth: true }, // Vereist een geldige token
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
    next("/"); // Redirect naar login als er geen token is
  } else {
    next();
  }
});

export default router;
