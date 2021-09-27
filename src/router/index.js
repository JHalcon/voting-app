import Vue from "vue";
import VueRouter from "vue-router";
import mainPage from "../views/mainPage.vue";
import UserPage from "../views/UserPage.vue";
import Home from "../views/Home.vue";
import faqPage from "../views/faqPage.vue";
import calendarPage from "../views/calendarPage.vue";
import voteCard from "../views/voteCard.vue";
import userCard from "../views/userCard.vue";
import contact from "../views/contact.vue";
import newCandidate from "../views/newCandidate.vue";
//import candidates from "../views/candidates.vue";
import page404 from "../views/404.vue";

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
    path: "/profile",
    name: "profile",
    component: userCard,
  },
  { 
    path: "/newCandidate",
    name: "newCandidate",
    component: newCandidate,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  /*
  {
    path: "/candidates",
    name: "candidates",
    component: candidates,
  },
  */
  { 
    path: "*",
    name: "page404",
    component: page404,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
