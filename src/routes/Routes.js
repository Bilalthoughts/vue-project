import { createRouter, createWebHistory } from "vue-router";
import {store} from '../store/store'
// import HomePage from "../pages/Home.vue";
// import SignIn from "../pages/SignIn.vue";
// import DashboardComp from "../pages/Dashboard.vue";
// import FormPage from "../pages/Form.vue";
import LayoutWrapper from "../layouts/Layout.vue";
const routes = [
  {
    path: "/",

    component: () => import("../pages/Home.vue"),
    meta: { layout: LayoutWrapper },
    
  },
  {name:'signin', path: "/signin", component: () => import("../pages/SignIn.vue") },
  {
    path: "/DashboardComp",
    component: () => import("../pages/Dashboard.vue"),
    meta: { layout: LayoutWrapper },
  },
  { path: "/FormPage", component: () => import("../pages/Form.vue") },
];

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

routers.beforeEach((to) => {
const isAuth = store.state.isAuth

  if (!isAuth && to.name !== 'signin') {
    return ('/signin')
  } 
  else if (isAuth && to.name == 'signin') {
    return ('/')
  } 
})

export default routers;
