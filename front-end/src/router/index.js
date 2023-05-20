import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TourView from "../views/TourView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tour",
      name: "tour",
      component: TourView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: "not-found",
      component: HomeView,
    },
  ],
});

export default router;
