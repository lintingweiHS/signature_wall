import Vue from "vue";
import App from "./App.vue";

import signatureWall from "./../packages/index";
Vue.use(signatureWall);
new Vue({
  el: "#app",
  render: h => h(App)
});
