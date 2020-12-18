import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Template from "../views/Outcome_1/CreateProductTemplate.vue";
import Product from "../views/Outcome_2/Outcome_2_screen.vue";
import AddProduct from "../views/Outcome_2/AddProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/template",
    name: "Template",
    component: Template,
    meta: {
      title: "Add Template",
    },
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    meta: {
      title: "Product",
    },
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: AddProduct,
    meta: {
      title: "Add Product",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
