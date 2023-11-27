import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import routers from "./routers/routes.js";
import App from "./App.vue";
import { store } from "./store/store.js";
import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { page } from "./constants/pages";

const app = createApp(App);
app.use(routers);
app.use(store);

app.use(Toast, {
  position: "top-right",
  duration: 3000,
  dismissible: true,
});

app.config.globalProperties.$page = page;

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
