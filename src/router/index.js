import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
