import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia, PiniaVuePlugin } from "pinia";
import "@/style/reset.css";
import "@/style/elementReset.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/**
 * 引入echarts
 * */
 import * as echarts from "echarts"; //引入echarts
 /**
	* 阻止vue启动生产消息
	* */
 Vue.config.productionTip = false;
 Vue.prototype.$echarts = echarts; //引入组件

Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
	router,
	pinia,
	render: (h) => h(App),
}).$mount("#app");
