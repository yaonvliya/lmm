<template>
	<div class="addclienth">
		<div class="addclienth1">
			<span @click="back()"><</span>
		</div>
		<div class="addclienth2">
			<span>西安七贤国际青年旅社</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lmIndexac',
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.addclienth{
		width:100%;
		height:0.45rem;
		/* background:yellow; */
		background:white;
		display: -webkit-flex;
	}
	.addclienth1{
		width:0.45rem;
		height:0.45rem;
	/* 	background:yellowgreen; */
		text-align: center;
		line-height: 0.45rem;
	}
	.addclienth1 span{
		font-size:20px;
		color:#3b3b3b;
		display: inherit;
	}
	.addclienth2 span{
		font-size: 0.16rem;
		color:#3b3b3b;
		display: inherit;
		margin-left:0.8rem;
		line-height: 0.45rem;
	}
</style>
