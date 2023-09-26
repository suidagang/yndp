<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form-title">智慧养牛供应链平台</div>
      <div class="form-item">
        <input
          type="text"
          :class="{ error: userError }"
          @focus="userError = false"
          @blur="validate('user')"
          v-model="loginInfo.user"
          placeholder="请输入账号"
        />
      </div>
      <div class="form-item">
        <input
          type="text"
          :class="{ error: psdError }"
          @focus="psdError = false"
          @blur="validate('password')"
          v-model="loginInfo.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="form-agree">
        <div
          :class="loginInfo.agree ? 'checkbox-ok' : 'checkbox'"
          @click="changeAgree"
        ></div>
        <span :class="{ error: agreeError }">记住密码</span>
      </div>
      <div class="form-submit">
        <div class="login-btn" @click="goPage">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/http/config";
import { userStore } from "@/store";
import preventBack from 'vue-prevent-browser-back';//组件内单独引入
export default {
  name: "view-login",
  mixins: [preventBack],//注入
  data() {
    return {
      loginInfo: {
        user: "admin",
        password: "admin123",
        agree: true,
      },
      userError: false,
      psdError: false,
      agreeError: false,
    };
  },
  mounted() {
    //清空token
    const user = userStore(); 
    user.sysToken = '';
  },
  methods: {
    changeAgree() {
      this.loginInfo.agree = !this.loginInfo.agree;
      if (!this.loginInfo.agree) {
        this.agreeError = true;
      } else {
        this.agreeError = false;
      }
    },
    validate(flag) {
      if (flag === "user") {
        if (this.loginInfo.user) {
          this.userError = false;
        } else {
          this.userError = true;
        }
      } else {
        if (this.loginInfo.password) {
          this.psdError = false;
        } else {
          this.psdError = true;
        }
      }
    },
    goPage() {
      if(!this.loginInfo.user){
      	this.userError = true;
      	return;
      }
      if(!this.loginInfo.password){
      	this.psdError = true;
      	return
      }
      if(!this.loginInfo.agree){
      	this.agreeError = true;
      	return;
      }
      const params = {
        "code": 14,
        "password": this.loginInfo.password,
        "username": this.loginInfo.user,
        "uuid": "f7834f5174eb474e9d7a34626fd2b6b4"
      };
      const user = userStore(); 
      const { sysToken } = userStore();
      this.$post(config.login,params).then(res=>{
        user.setToken(res.token);
        this.$router.replace("/test");
        // this.$router.push("/layout/yncjcxxjb");
      })
      
    },
  },
};
</script>

<style scoped lang="less">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/img/login_bg.png") center no-repeat;
  overflow: hidden;
  &-form {
    position: absolute;
    top: 312px;
    right: 312px;
    width: 413px;
    height: 512px;
    background: url("../assets/img/login_form.png") center no-repeat;
    overflow: hidden;
    box-sizing: border-box;
    &-title {
      font-weight: 500;
      color: #a5cffc;
      margin-top: 67px;
      text-align: center;
      margin-bottom: 32px;
      color: #3997fc;
      line-height: 77px;
      font-size: 30px;
      background: linear-gradient(180deg, #ffffff 0%, #1a92eb 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.form-item {
  text-align: center;
  height: 88px;
  overflow: hidden;

  & > input {
    width: 336px;
    height: 52px;
    background: rgba(0, 122, 255, 0.1);
    border: 2px solid #073683;
    border-radius: 2px;
    padding-left: 24px;
    box-sizing: border-box;
    outline: none;
    font-size: 17px;
    color: #ffffff;
    letter-spacing: 2px;
  }
  & > input:focus {
    border: 2px solid #007aff;
  }
}
input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: #a2d1ff;
}
input.error::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: #ff7723;
}
.form-agree {
  padding: 0 41px;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 400;
  color: #a2d1ff;
  vertical-align: top;
  & > .checkbox {
    height: 15px;
    width: 15px;
    box-sizing: border-box;
    border: 1px solid #a2d1ff;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
  }
  & > .checkbox-ok {
    height: 15px;
    width: 15px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    background: url("../assets/img/agree.png") center no-repeat;
  }
  & > span {
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle;
    &.error {
      color: #ff7723;
    }
  }
}
.login-btn {
  width: 336px;
  height: 52px;
  background: #006fff;
  border-radius: 2px;
  margin: 27px auto 0;
  text-align: center;
  line-height: 52px;
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>
