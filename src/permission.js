import router from "@/router";

//只加载一次路由
let registerRouteFresh = true;
const whiteList = ["/login", "/test"]; // no redirect whitelist
//路由拦截
router.beforeEach((to, from, next) => {
  const sysToken = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).sysToken
    : "";
  if (!sysToken) {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      //未登录，强制登录
      next(`/login?redirect=${to.path}`);
    }
  } else {
    //如果登录了，浏览器回退到登录页，默认重定向到登录主页
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  }
});
