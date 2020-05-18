import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// mixins
import mxGlobal from "@/mixins/mxGlobal";

// plugins
import "@/plugins/Vuelidate";

// styles
import "@/stylus/index.styl";

Vue.config.productionTip = false;
Vue.mixin(mxGlobal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
