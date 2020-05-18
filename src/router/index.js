import Vue from "vue";
import VueRouter from "vue-router";
import { Payment } from "./router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Payment",
    component: Payment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
