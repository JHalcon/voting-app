import Vue from "vue";
import VueRouter from "vue-router";
import mainPage from "../views/mainPage.vue";
import UserPage from "../views/UserPage.vue";
import about from "../views/About.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
