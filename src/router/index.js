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
import faqForCandidates from "../views/faqForCandidates.vue";
import calendarForCandidates from "../views/calendarForCandidates.vue";

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
    path: "/kandydatura",
    name: "newCandidate",
    component: newCandidate,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/faqForCandidates",
    name: "faqForCandidates",
    component: faqForCandidates,
  },
  {
    path: "/calendarForCandidates",
    name: "calendarForCandidates",
    component: calendarForCandidates,
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
  scrollBehavior () {
      return { x: 0, y: 0 }
  },
});

export default router;
