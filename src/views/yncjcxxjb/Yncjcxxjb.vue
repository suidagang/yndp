<template>
	<div id="container">
		<comHeader />
		<leftOne class="left-one" />
	</div>
</template>

<script>
import comHeader from '@/components/comHeader/index.vue';
import leftOne from './components/leftOne.vue'
export default {
	name: "Yncjcxxjb",
	components:{
		comHeader,
		leftOne
	},
	mounted() {},
	methods: {},
};
</script>
<style lang ="less" scoped>
#container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.left-one{
	position: absolute;
	left: 40px;
	top: 106px;
}
</style>
