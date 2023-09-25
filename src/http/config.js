let hostUrl = appConfig.requestUrl;
const config = {
    /* 登录 */
    loginSys:  "/uaa/oauth/token",//登录接口
    getLoginUserInfo:'/goods/plaUser/getLoginUserInfo', // 获取用户信息
};
export default config;
