export default {
  // 获取本地存储的数据
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  // 设置本地存储中的数据
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // 清楚本地存储
  clear() {
    localStorage.clear();
  },
};
