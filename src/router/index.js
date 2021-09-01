import Vue from "vue";
import VueRouter from "vue-router";
import mainPage from "../views/mainPage.vue";
import UserPage from "../views/UserPage.vue";
import Home from "../views/Home.vue";
import faqPage from "../views/faqPage.vue";
import calendarPage from "../views/calendarPage.vue";
import voteCard from "../views/voteCard.vue";
import userCard from "../views/userCard.vue";

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
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "faq",
    component: faqPage,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: calendarPage,
  },
  {
    path: "/voteCard/:voteIdProps",
    name: "voteCard",
    component: voteCard,
    props: true,
  },
  {
    path: "/userCard",
    name: "userCard",
    component: userCard,
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
