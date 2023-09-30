const config = {
  /* 登录 */
  login: "/appLogin", //登录接口
  yncjcxxjbCwhztj: "/cattle/basicInfoReport/costCount", //【养牛场基础信息简报】财务汇总统计
  farmList: "/cattle/farm/farmList",//【养牛场基础信息简报】查询自营牛场有哪些牛场
  farmSelfBriefing:"/cattle/farm/selfBriefing",//【养牛场基础信息简报】自营牛场简报 传对应的 （farmList）牛场id 参数:farmId
  cattleMillList:"/cattle/farm/cattleMillList",//【养牛场基础信息简报】查询合作农户列表
  cooperateBriefing:"/cattle/farm/cooperateBriefing",//【养牛场基础信息简报】合作农户简报 请求传cattleMillList接口的id参数名： cooperateId
  hznhcattleMillList:"/cattle/cattleMill/list",//【合作农户管理】农户列表
};
export default config;
