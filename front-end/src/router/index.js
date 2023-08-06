import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TourView from "../views/TourView.vue";
import AdminView from "../views/AdminView.vue";
import ArticleView from "../views/ArticleView.vue";
import ArticleListView from "../views/ArticleListView.vue";

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
      path: '/admin',
      name: "admin",
      component: AdminView,
    },
    {
      path: '/blog',
      name: "blog",
      component: ArticleListView,
    },
    {
      path: '/article',
      name: "article",
      component: ArticleView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: "not-found",
      component: HomeView,
    },
  ],
});

export default router;
