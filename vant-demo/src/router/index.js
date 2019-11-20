import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue"
import Store from "../views/login/ApplicationStore.vue"
import Taibao from "../views/login/Taibao.vue"

import Demo2 from "../views/demo2/Page1.vue"
import Demo3 from "../views/demo3/Page1.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/demo2",
    name: "demo2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      keepAlive: true
    },
    component: Demo2
  },
  {
    path: "/demo3",
    name: "demo3",
    meta: {
      keepAlive: true
    },
    component: Demo3
  },
  {
    path: "/store",
    name: "store",
    component: Store,
    meta: {
      keepAlive: false
    }
      
  },
  {
    path: "/taibao",
    name: "taibao",
    component: Taibao,
    meta: {
      keepAlive: false
    }
      
  }
];

const router = new VueRouter({
  routes
});

export default router;
