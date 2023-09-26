import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import "@/style/reset.css";
import "@/style/elementReset.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts"; //引入echarts
import { get, post } from "./http/index";


//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.config.productionTip = false; //阻止vue启动生产消息
Vue.prototype.$echarts = echarts; //引入组件

Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
