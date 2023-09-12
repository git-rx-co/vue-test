import pt from "../components/HelloWorld.vue";
import NavBar from "../components/Global/NabBar.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: NavBar },
  { path: "/1", component: <tamplete> <h1>Hellow tamp</h1> </tamplete> },

  { path: "/pt", component: pt, props: { msg: "Props is come" } },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default Router;
