const config = {
  /* 登录 */
  login: "/appLogin", //登录接口
  yncjcxxjbCwhztj: "/cattle/basicInfoReport/costCount", //【养牛场基础信息简报】财务汇总统计
  farmList: "/cattle/farm/farmList", //【养牛场基础信息简报】查询自营牛场有哪些牛场
  farmSelfBriefing: "/cattle/farm/selfBriefing", //【养牛场基础信息简报】自营牛场简报 传对应的 （farmList）牛场id 参数:farmId
  cattleMillList: "/cattle/farm/cattleMillList", //【养牛场基础信息简报】查询合作农户列表
  cooperateBriefing: "/cattle/farm/cooperateBriefing", //【养牛场基础信息简报】合作农户简报 请求传cattleMillList接口的id参数名： cooperateId
  environmenMonitoring: "​/cattle​/farm​/environmenMonitoring", //【养牛场基础信息简报】环境监测
  todayPrice: "/cattle/farm/todayPrice", //【养牛场基础信息简报】今日行情
  tipsTotal: "/cattle/farm/tipsTotal", //【养牛场基础信息简报】提示信息汇总
  hznhcattleMillList: "/cattle/cattleMill/list", //【合作农户管理】农户列表
  feedTypeCount: "/cattle/feed/feedTypeCount", //【自营牛场管理-饲养管理】预计使用周期和饲料管理同一个接口
  shedCount: "/cattle/shed/shedCount", //【自营牛场管理-饲养管理】牛舍存栏量
  feedAvgUseCount: "/cattle/feed/feedAvgUseCount", //【自营牛场管理-饲养管理】每天消耗记录
  vetslist: "/cattle/vets/list", //【自营牛场管理-防疫管理】兽医管理
  treatmentlist: "owncattle/treatment/list", //【自营牛场管理-防疫管理】普通诊疗记录
  immunelist: "owncattle/immune/list", //【自营牛场管理-防疫管理】防疫记录和检疫记录
  selfSta: "/cattle/cattle/selfSta", //【自营牛场管理-牛舍管理】（自营牛场牛种类统计）
  selfCattleSta: "/cattle/cattle/selfCattleSta", //【自营牛场管理-牛舍管理】（自营牛场牛状态统计）
  costCount: "/cattle/farm/costCount", //【自营牛场管理-财务管理】（成本统计）
  incomeCount: "/cattle/farm/incomeCount", //【自营牛场管理-财务管理】（收入统计）
};
export default config;
