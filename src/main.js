import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../sass/style.scss";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { VueMaskDirective } from "v-mask";
import VueMask from "v-mask";
Vue.use(VueMask);
Vue.directive("mask", VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
