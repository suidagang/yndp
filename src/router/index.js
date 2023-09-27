import Vue from "vue";
import VueRouter from "vue-router";

// 解决重复点击路由报警告问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

import Login from "../views/Login.vue"; // 引入 Home页面组件
import Layout from "../views/Layout.vue";

// 注册路由插件
Vue.use(VueRouter);

//
const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    redirect: '/layout/yncjcxxjb',
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: '/layout/yncjcxxjb',
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
            name: "牛舍管理",
            fullPath: "/layout/zyncgl/nsgl",
            component: () => import("../views/nsgl/nsgl.vue"),
          },
          {
            path: "ncgl",
            name: "牛场管理",
            fullPath: "/layout/zyncgl/ncgl",
            component: () => import("../views/ncgl/index.vue"),
          },
          {
            path: "sygl",
            name: "饲养管理",
            fullPath: "/layout/zyncgl/sygl",
            component: () => import("../views/sygl/sygl.vue"),
          },
          {
            path: "pzgl",
            name: "配种管理",
            fullPath: "/layout/zyncgl/pzgl",
            component: () => import("../views/pzgl/index.vue"),
          },
          {
            path: "cwgl",
            name: "财务管理",
            fullPath: "/layout/zyncgl/cwgl",
            component: () => import("../views/cwgl/index.vue"),
          },
          {
            path: "fygl",
            name: "防疫管理",
            fullPath: "/layout/zyncgl/fygl",
            component: () => import("../views/fygl/index.vue"),
          },
          {
            path: "ncjk",
            name: "牛场监控",
            fullPath: "/layout/zyncgl/ncjk",
            component: () => import("../views/ncjk/index.vue"),
          },
          {
            path: "qtgl",
            name: "其他管理",
            fullPath: "/layout/zyncgl/qtgl",
            component: () => import("../views/qtgl/index.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/test",
    name: "测试页面",
    component: () => import("../views/Test.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
