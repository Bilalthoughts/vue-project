import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store/store';
// import HomePage from "../pages/Home.vue";
// import SignIn from "../pages/SignIn.vue";
// import DashboardComp from "../pages/Dashboard.vue";
// import FormPage from "../pages/Form.vue";
import LayoutWrapper from '../layouts/Layout.vue';
import { transRoutes } from './transRouter';
import { page } from '../constants/pages';
const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
    meta: { layout: LayoutWrapper,auth: true },
  },
  ...transRoutes,
  {
    ...page.SIGNIN,
    component: () => import('../pages/SignIn.vue'),
    meta:{public:true}

  },
  {
    ...page.ANALYTICS,
    component: () => import('../pages/Analytics.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.SIGNUP,
    component: () => import('../pages/SignUp.vue'),
    meta:{public:true}
  },
  {
    ...page.Detail_Data,
    component: () => import('../pages/DetailData.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.DOC_TRACKING,
    component: () => import('../pages/DocTracking.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.MOST_RECENT_DOCS,
    component: () => import('../pages/MostRecentDoc.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.DASHBOARD_PAGE,
    component: () => import('../pages/Dashboard.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.FORM_PAGE,
    component: () => import('../pages/Form.vue'),
  },
];

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

routers.beforeEach((to, from, next) => {
  const isAuth = store.state.isAuth;

  if (!isAuth) {
    if (to.meta.public) {
      next(); 
    } else {
      next('/signin'); 
    }
  } else {
    if (isAuth) {
      next(); 
    } else {
      next('/'); 
    }
  }
});

export default routers;
