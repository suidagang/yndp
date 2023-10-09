import { defineStore } from "pinia";
export const userStore = defineStore("user", {
	state: () => {
		return {
			sysToken: '1111'
		};
	},
	persist: {
		enabled: true, // true 表示开启持久化保存
		storage: sessionStorage,
  },
	getters: {},
	actions: {
		async setToken(token) {
			this.sysToken = token;
		}
	},
});
