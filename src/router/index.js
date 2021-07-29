import { createRouter, createWebHistory } from "vue-router";

import Formexamp from "../components/Formexamp.vue";
import Home from "../components/Home.vue";
import pricing from "../components/pricing.vue";
import about from "../components/about.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/user", name: "Formeaxmp", component: Formexamp },
  { path: "/pricing", name: "pricing", component: pricing },
  { path: "/about", name: "about", component: about },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
