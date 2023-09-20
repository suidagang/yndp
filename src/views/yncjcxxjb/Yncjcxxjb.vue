<template>
	<div id="container">
		<comHeader />
		<leftOne class="left-one" />
		<leftTwo class="left-two" />
		<leftThree class="left-three" />
		<rightOne class="right-one" />
		<rightTwo class="right-two" />
		<rightThree class="right-three" />
		<center class="center" />
	</div>
</template>

<script>
import comHeader from '@/components/comHeader/index.vue';
import leftOne from './components/leftOne.vue'
import leftTwo from './components/leftTwo.vue'
import leftThree from './components/leftThree.vue'
import rightOne from './components/rightOne.vue'
import rightTwo from './components/rightTwo.vue'
import rightThree from './components/rightThree.vue'
import center from './components/center.vue'
export default {
	name: "Yncjcxxjb",
	components:{
		comHeader,
		leftOne,
		leftTwo,
		leftThree,
		rightOne,
		rightTwo,
		rightThree,
		center
	},
	data(){
		return{
			
		}
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
.left-two{
	position: absolute;
	left: 40px;
	top:395px;
}
.left-three{
	position: absolute;
	left: 40px;
	top:703px;
}
.right-one{
	position: absolute;
	right: 40px;
	top: 106px;
}
.right-two{
	position: absolute;
	right: 40px;
	top:331px;
}
.right-three{
	position: absolute;
	right: 40px;
	top:773px;
}
.center{
	position: absolute;
	width: 860px;
	height: 100%;
	left: 515px;
	top: 57px;
}
</style>
