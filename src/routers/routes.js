import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/store";
// import HomePage from "../pages/Home.vue";
// import SignIn from "../pages/SignIn.vue";
// import DashboardComp from "../pages/Dashboard.vue";
// import FormPage from "../pages/Form.vue";
import LayoutWrapper from "../layouts/Layout.vue";
import { transRoutes } from "./transRouter";
import { pageRoute } from "../constants/pages";
const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
    meta: { layout: LayoutWrapper },
  },
  ...transRoutes,
  {
    ...pageRoute.SIGNIN,
    component: () => import("../pages/SignIn.vue"),
  },
  {
    ...pageRoute.ANALYTICS,
    component: () => import("../pages/Analytics.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.DOC_TRACKING,
    component: () => import("../pages/DocTracking.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.MOST_RECENT_DOCS,
    component: () => import("../pages/MostRecentDoc.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.DASHBOARD_PAGE,
    component: () => import("../pages/Dashboard.vue"),
    meta: { layout: LayoutWrapper },
  },
  {
    ...pageRoute.FORM_PAGE,
    component: () => import("../pages/Form.vue"),
  },
];

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

routers.beforeEach((to) => {
  const isAuth = store.state.isAuth;

  if (!isAuth && to.name !== "SIGNIN") {
    return "/signin";
  } else if (isAuth && to.name == "SIGNIN") {
    return "/";
  }
});

export default routers;
