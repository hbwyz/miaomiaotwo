import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movie/nowPlaying",
  },
  {
    path: "/movie",
    name: "Movie",
    component: () => import("../views/Movie"),
    children: [
      {
        path: "/movie/children",
        name: "Children",
        component: () => import("../views/Movie/Children"),
      },
      {
        path: "/movie/city",
        name: "City",
        component: () => import("../components/City"),
      },
      {
        path: "/movie/nowPlaying",
        name: "NowPlaying",
        component: () => import("../components/NowPlaying"),
      },
      {
        path: "/movie/comingSoon",
        name: "ComingSoon",
        component: () => import("../components/ComingSoon"),
      },
      {
        path: "/movie/search",
        name: "Search",
        component: () => import("../components/Search"),
      },
    ],
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/Mine"),
  },
  {
    path: "/cinema",
    name: "Cinema",
    component: () => import("../views/Cinema"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
