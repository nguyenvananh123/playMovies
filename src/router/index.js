import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/Views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage,
    },
    {
      path: "/Phim-Moi",
      name: "NewMovies",
      component: import("../pages/Views/NewMovies.vue"),
    },
    {
      path: "/Danh-Sach-Phim",
      name: "ListMovie",
      component: () => import("../pages/Views/ListMovie.vue"),
    },
    {
      path: "/Phim-Le",
      name: "SingleMovie",
      component: () => import("../pages/Views/SingleMovie.vue"),
    },
    {
      path: "/Phim-Bo",
      name: "SeriesMovie",
      component: () => import("../pages/Views/SeriesMovie.vue"),
    },
    {
      path: "/Chi-tiet-phim/:id",
      name: "MovieDetail",
      component: () => import("../pages/Views/MovieDetail.vue"),
    },
    {
      path:"/Play-Movie/:id",
      name:"MoviePlay",
      component:()=>import("../pages/Views/PlayMovie.vue")
    }


  ],
});

export default router;
