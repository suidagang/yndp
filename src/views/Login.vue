<template>
  <div class="login">
    <div class="login-form">
			<div class="login-form-title">账户登录</div>
			<div class="form-item">
				<input type="text" v-model="loginInfo.user" placeholder="请输入账号">
			</div>
			<div class="form-item">
				<input type="text" v-model="loginInfo.password" placeholder="请输入密码">
			</div>
			<div class="form-agree">
				<input type="checkbox" v-model="loginInfo.agree" />
				<span>记住密码</span>
			</div>
			<div class="form-submit">
				<div class="login-btn" @click="goPage">登录</div>
			</div>
		</div>
  </div>
</template>

<script>															
export default {
  name: "view-login",
  data() {
    return {
			loginInfo: {
          user: '',
          password: '',
					agree:false
        }
		};
  },
  mounted() {
	},
  methods:{
		goPage(){
			this.$router.push("/yncjcxxjb")
		}
	}
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
		box-sizing:border-box;
		&-title{
			font-size: 26px;					
      font-weight: 500;
			color: #A5CFFC;
			margin-top: 67px;
			text-align: center;
			margin-bottom:62px;
		}
  }
}
.form-item{
	text-align:center;
	height:88px;
	overflow: hidden;

	&>input{
		width: 336px;
		height: 52px;
		background: rgba(0,122,255,0.1);
		border: 2px solid #073683;
		border-radius: 2px;
		padding-left: 24px;
		box-sizing: border-box;
		outline: none;
		font-size: 17px;
		color: #FFFFFF;
		letter-spacing: 2px;
	}
	&>input:focus{
		border: 2px solid #007AFF;
	}
}
input::placeholder {
  font-size: 14px;
	font-weight: 400;
	color: #A2D1FF;
}
.form-agree{
	padding: 0 41px;
	box-sizing: border-box;
	font-size: 12px;
	font-weight: 400;
	color: #A2D1FF;
	vertical-align: top;
	input[type="checkbox"]{
		width:15px;
		height:15px;
		display: inline-block;
		text-align: center;
		vertical-align:baseline; 
		line-height: 15px;
		position: relative;
		outline: none;
		border: 1px solid #A2D1FF;
		color: #ff0;
		background: rgba(0, 0, 0, 0);
	}
	// input[type="checkbox"]::before{
	// 	content: "";
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	background: rgba(0, 0, 0, 0);
	// 	width: 100%;
	// 	height: 100%;
	// 	border: 1px solid #A2D1FF;
	// 	color: #fff;
	// }
	input[type="checkbox"]:checked::before{
		content: "\2713";
		background-color: #657AFE;
		border: 1px solid #657AFE;
		position: absolute;
		top: 0;
		left: 0;
		width:100%;
		color:#fff;
		font-size: 0.52rem;
	}
	input[type="checkbox"]:disabled::before{
			background: #eee;
			cursor: default;
	}
	&>span{
		margin-left: 8px;
		vertical-align: middle;
	}
}
.login-btn{
	width: 336px;
	height: 52px;
	background: #006FFF;
	border-radius: 2px;
	margin: 27px auto 0;
	text-align: center;
	line-height: 52px;
	font-size: 17px;
	font-weight: 400;
	color: #FFFFFF;
	letter-spacing: 2px;
	cursor: pointer;
}
</style>
