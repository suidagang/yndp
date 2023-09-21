import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"; // 引入 Home页面组件
import Layout from "../views/Layout.vue";

// 注册路由插件
Vue.use(VueRouter);

//
const routes = [
  {
    path: "*",
    redirect: "/login",
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
    children: [
      {
        name: "养牛场基础信息简报",
        path: "yncjcxxjb",
        fullPath: "/layout/yncjcxxjb",
        component: () => import("../views/yncjcxxjb/Yncjcxxjb.vue"),
			},
			{
				path: "hznhgl",
				name: "合作农户管理",
				fullPath: "/layout/hznhgl",
        component: () => import("../views/hznhgl/index.vue"),
			},
      {
        path: "zyncgl",
        name: "自营牛场管理",
        fullPath: "/layout/zyncgl",
        redirect: "/layout/zyncgl/nsgl",
        component: () => import("../views/Zyncgl.vue"),
        children: [
          {
            path: "nsgl",
            name: "nsgl",
            fullPath: "/layout/zyncgl/nsgl",
            component: () => import("../views/nsgl/nsgl.vue"),
          },
          {
            path: "ncgl",
            name: "ncgl",
            fullPath: "/layout/zyncgl/ncgl",
            component: () => import("../views/ncgl/ncgl.vue"),
          },
          {
            path: "sygl",
            name: "饲养管理",
            fullPath: "/layout/zyncgl/sygl",
            component: () => import("../views/sygl/sygl.vue"),
          },
        ],
      },
    ],
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
