import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia, PiniaVuePlugin } from "pinia";
import "@/style/reset.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
	router,
	pinia,
	render: (h) => h(App),
}).$mount("#app");
