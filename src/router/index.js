import { createRouter, createWebHistory } from "vue-router";

import baselayout from "../components/layout/views/baselayout.vue";
import baseLayoutadmin from "../components/layout/admin/baseLayoutadmin.vue";
import HomePage from "../pages/Views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage,
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/Phim-Le",
      name: "NewMovies",
      component: import("../pages/Views/SingleMovie.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/Phim-Bo",
      name: "ListMovie",
      component: () => import("../pages/Views/SeriesMovie.vue"),
      meta: {
        layout: baselayout,
      },
    },

    {
      path: "/quoc-gia",
      name: "quocgia",
      component: () => import("../pages/Views/SeriesMovie.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/Chi-tiet-phim/:id",
      name: "MovieDetail",
      component: () => import("../pages/Views/MovieDetail.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/Play-Movie/:id",
      name: "MoviePlay",
      component: () => import("../pages/Views/PlayMovie.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/loginPage",
      name: "loginPage",
      component: () => import("../pages/Views/loginPage.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/the-loai/:name",
      name: "afterSelectMovie",
      component: () => import("../pages/Views/afterSelectMovies.vue"),
      meta: {
        layout: baselayout,
      },
    },

    {
      path: "/request/:key",
      name: "request",
      component: () => import("../pages/Views/searchPage.vue"),
      meta: {
        layout: baselayout,
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../pages/admin/listMovie.vue"),
      meta: {
        layout: baseLayoutadmin,
      },
    },
    {
      path: "/admin/edit/:id",
      name: "uploadMovie",
      component: () => import("../pages/admin/upDateMovie.vue"),
      meta: {
        layout: baseLayoutadmin,
      },
    },
    {
      path: "/admin/create",
      name: "createMovie",
      component: () => import("../pages/admin/CreateMovie.vue"),
      meta: {
        layout: baseLayoutadmin,
      },
    },
  ],
});

export default router;
