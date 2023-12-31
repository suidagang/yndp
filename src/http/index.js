/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import { Message } from "element-ui";
import router from "@/router";
import { userStore } from "@/store";

// 环境的切换
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "/";
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const { sysToken } = userStore();
    sysToken && (config.headers.Authorization = sysToken);
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.code === 200) {
        return Promise.resolve(response);
      } else {
        switch (response.data.code) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            router.push({
              path: "/login",
              query: { redirect: router.currentRoute.fullPath },
            });
            break;
          // 404请求不存在
          case 403:
            Message({
              showClose: true,
              message: "网络禁止请求",
              type: "error",
            });
            break;
          case 404:
            Message({
              showClose: true,
              message: "网络请求不存在",
              type: "error",
            });
            break;
          // 其他错误，直接抛出错误提示
          default:
            Message({
              showClose: true,
              message: response.data.msg,
              type: "error",
            });
            return Promise.reject(response);
        }
      }
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response.status) {
      Message({
        showClose: true,
        message: "网络请求失败，"+error.response.status,
        type: "error",
      });
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
