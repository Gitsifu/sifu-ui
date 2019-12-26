import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入组件库
import SfUi from "./../packages/index";
import "./../packages/theme-default/default.scss";

Vue.config.productionTip = false;

// 注册组件库
Vue.use(SfUi);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
