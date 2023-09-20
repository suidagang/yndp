import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"; // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter);

//
const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/yncjcxxjb",
		name: "About",
		component: () => import("../views/yncjcxxjb/Yncjcxxjb.vue"),
	},
	{
		path: "/zyncgl",
		name: "Zyncgl",
		component: () => import("../views/Zyncgl.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
