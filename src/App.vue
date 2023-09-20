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
</style>
