/**
 * 合作农户管理
 * */ 
import { defineStore } from "pinia";
export const hznhglStore = defineStore("hznhgl", {
	state: () => {
		return {
      id: '',//农户id
      nhList:[],//农户列表
		};
	},
	persist: {
		enabled: true, // true 表示开启持久化保存
		storage: sessionStorage,
  },
	getters: {},
	actions: {
		async setId(id) {
			this.id = id;
    },
    setNhList(list) {
      this.nhList = list;
    }
	},
});
