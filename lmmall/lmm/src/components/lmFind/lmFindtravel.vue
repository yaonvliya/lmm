<template>
	<div class="qqwee">
		<span class="iconfont iconfanhui" @click="back()"></span>
		<h3>旅行指南</h3>
	</div>
</template>

<script>
	export default {
		name: 'lmFindtravel',
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style>
	@import url("../../assets/lmfind/css/more.css");
	@import url("../../assets/lmfind/css/font_1347034_s53g4e07dq/iconfont.css");
</style>
