<template>
	<div id="app">
		<router-view />
	</div>
</template>
<style  lang="less">
@font-face {
	font-family: 'YouSheBiaoTiHei';  //指定你的字体
	src: url('./assets/fonts/YouSheBiaoTiHei-2.ttf')  format("truetype");
}
@font-face {
	font-family: 'PangMenZhengDao';  //指定你的字体
	src: url('./assets/fonts/庞门正道标题体.ttf')  format("truetype");
}
@font-face {
	font-family: 'Source Han Sans SC';  //指定你的字体
	src: url('./assets/fonts/SourceHanSans-Regular.ttc')  format("truetype");
}
html,
body {
	width: 100%;
	height: 100%;
}

#app {
	width: 1920px;
	height: 1080px;
}

.nav > a {
	margin-right: 10px;
	font-size: 18px;
}

  /*最外层透明*/
  .el-table, .el-table__expanded-cell{
    background-color: transparent!important;
  }
  /* 表格内背景颜色 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  /* 去除边框 */
  .el-table__row>td{ border: none; }
  .el-table::before { height: 0px; }
  .el-table td, .el-table th.is-leaf{
  border-bottom:none ;
  }

  /* 修改hover样式 */
  .el-table__body tr:hover > td {
    background-color: inherit !important;;
  } 
</style>
