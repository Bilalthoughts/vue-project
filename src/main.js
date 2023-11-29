import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import routers from "./routers/routes.js";
import App from "./App.vue";
import { store } from "./store/store.js";
import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { page } from "./constants/pages";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import Pagination from 'v-pagination-3';


const app = createApp(App);
app.use(routers);
app.use(store);

app.use(Toast, {
  position: "top-right",
  duration: 3000,
  dismissible: true,
});
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('paginationWrapper', Pagination);

app.config.globalProperties.$page = page;

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
