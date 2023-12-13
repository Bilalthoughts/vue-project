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
    name:'HOME',
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
    ...page.NOT_FOUND,
    component: () => import('../pages/404Page.vue'),
  },
  {
    ...page.NO_RECORD,
    component: () => import('../pages/NoRecords.vue'),
  },
  {
    ...page.DETAIL_DATA,
    component: () => import('../pages/DetailData.vue'),
    meta: { layout: LayoutWrapper },
    beforeEnter: (to, from, next) => {
      const id = to.params.id;    
      const exist = store.state.ApiData.articles.some((item) => item.id === id);    
      if (!exist) {
        next({
          name: page.NO_RECORD.name,
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        });
      } else {
        next();
      }
    },
    
  },
  
  
  
  
  {
    ...page.DOC_TRACKING,
    component: () => import('../pages/DocTracking.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.PRODUCTS,
    component: () => import('../pages/Products.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.CREATE_PRODUCT,
    component: () => import('../pages/CreateProduct.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.EDIT_PRODUCT,
    component: () => import('../pages/EditProduct.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.SINGLE_PRODUCTS,
    component: () => import('../pages/SingleProduct.vue'),
    meta: { layout: LayoutWrapper },
    beforeEnter: (to, from, next) => {
      const id = to.params.id;    
      const exist = store.state.allProductsArray.some((item) => item._id === id);    
      if (!exist) {
        next({
          name: page.NO_RECORD.name,
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        });
      } else {
        next();
      }
    },
  },
  {
    ...page.DASHBOARD_PAGE,
    component: () => import('../pages/Dashboard.vue'),
    meta: { layout: LayoutWrapper },
  },
  {
    ...page.DASHBOARD_PAGE,
    component: () => import('../pages/Analytics.vue'),
    // meta: { layout: LayoutWrapper },
  },
  {
    ...page.FORM_PAGE,
    component: () => import('../pages/Form.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/404Page.vue'),
  },
  { path: '/detildata/:afterUser(.*)', 
  component: () => import('../pages/404Page.vue'),
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
