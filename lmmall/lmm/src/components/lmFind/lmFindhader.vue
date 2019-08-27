<template>
	<div class="qhead">
		<div class="qh_seach">
			<span class="iconfont iconfanhui" @click="back"></span>
			<div class="lmfind-search">
				<span class="iconfont iconicon-"></span>
				<i>搜索目的地</i>
			</div>
			<span class="iconfont iconfangzi"></span>
			<span class="iconfont iconzhuanfa"></span>
		</div>
		<div class="lmfind-qhh">
			<h1>青海湖</h1>
			<div class="qhh_bottom">
				<span class="iconfont iconyouyinpin"></span>
				<b>3695正在旅行</b>
				<span class="iconfont iconpicture"></span>
				<b>1/11890</b>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lmFindheader',
		data() {
			return {
				
			
			}
		},
		methods: {
			back(){
				this.$router.push("/lmfindindex");
			}
		},
	}
</script>

<style scoped="scoped">
	@import url("../../assets/lmfind/css/particulars.css");
	@import url("../../assets/lmfind/css/font_1347034_207kbolw43f/iconfont.css");
</style>
