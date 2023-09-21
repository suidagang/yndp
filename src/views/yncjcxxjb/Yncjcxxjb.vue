<template>
	<div id="container">
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
	top: 26px;
}
.left-two{
	position: absolute;
	left: 40px;
	top:315px;
}
.left-three{
	position: absolute;
	left: 40px;
	top:623px;
}
.right-one{
	position: absolute;
	right: 40px;
	top: 26px;
}
.right-two{
	position: absolute;
	right: 40px;
	top:251px;
}
.right-three{
	position: absolute;
	right: 40px;
	top:693px;
}
.center{
	position: absolute;
	width: 860px;
	height: 100%;
	left: 515px;
	top: 0px;
}
</style>
