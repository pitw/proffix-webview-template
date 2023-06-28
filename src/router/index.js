import { createRouter, createWebHashHistory } from "vue-router";

import WebView from "../views/WebView.vue";

const routes = [{ path: "/", component: WebView }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
