import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
//here we import our various pages
import home from "./components/Home.vue";
import login from "./components/Login.vue";
import register from "./components/Register.vue";
import aboutUs from "./components/AboutUs.vue";
import wasteMaterialPage from "./components/WasteMaterialPage.vue";
import mostSoldWasteProductPage from "./components/MostSoldWasteProductPage.vue";
import mostProducedWasteProductPage from "./components/MostProducedWasteProduct.vue";

// here we create routes to our various pages
const routes = [
  {
    name: "home", //this is a unique name for the route
    path: "/", //this is what you will see in the url
    component: home, //this is the vue component that should be rendered when the route is accessed
  },
  {
    name: "login",
    path: "/login",
    component: login,
  },
  {
    name: "register",
    path: "/register",
    component: register,
  },
  {
    name: "aboutUs",
    path: "/aboutUs",
    component: aboutUs,
  },
  {
    name: "WasteMaterialPage",
    path: "/WasteMaterialPage",
    component: wasteMaterialPage,
  },
  {
    name: "MostSoldWasteProductPage",
    path: "/MostSoldWasteProductPage",
    component: mostSoldWasteProductPage,
  },
  {
    name: "MostProducedWasteProductPage",
    path: "/MostProducedWasteProductPage",
    component: mostProducedWasteProductPage,
  },
];
//here we initialize the routes
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
/**The main App.vue component is mounted to the dom element with the ID "app" using the "createApp" function
 * The router instance is then passed to the app using the ".use(router)" method 
 before mounting it to the element with the ID "app"
*/
createApp(App).use(router).mount("#app");
