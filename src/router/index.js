import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"; // 引入 Home页面组件
import Layout from "../views/Layout.vue"

// 注册路由插件
Vue.use(VueRouter);

//
const routes = [
	{
    path: '*',
    redirect: '/login',
  },
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/layout",
		name: "Layout",
		component: Layout,
		children: [{
			name: 'yncjcxxjb',
			path: 'yncjcxxjb',
			fullPath: '/layout/yncjcxxjb',
			component: () => import("../views/yncjcxxjb/Yncjcxxjb.vue"),
		},{
			path: "zyncgl",
			name: "Zyncgl",
			fullPath: '/layout/zyncgl',
			redirect: '/layout/zyncgl/nsgl',
			component: () => import("../views/Zyncgl.vue"),
			children: [
				{
					path: "nsgl",
					name: "nsgl",
					fullPath: '/layout/zyncgl/nsgl',
					component: () => import("../views/nsgl/nsgl.vue"),
				},
				{
					path: "ncgl",
					name: "ncgl",
					fullPath: '/layout/zyncgl/ncgl',
					component: () => import("../views/ncgl/ncgl.vue"),
				},
			]
		},]
	},
	// {
	// 	path: "/yncjcxxjb",
	// 	name: "About",
	// 	component: () => import("../views/yncjcxxjb/Yncjcxxjb.vue"),
	// },
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
