<template>
	<div class="dingsuccess">
		<div class="dingsuccess1">
			<span>订单提交成功</span>
			<router-link :to="{name:'indexaddpaying'}">
				<p><a href="">进入支付界面</a></p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lmindexds'
	}
</script>

<style scoped="scoped">
.dingsuccess{
	width:100%;
	height:6.67rem;
	background: black;
	opacity:.8;
	position:fixed;
	left:0;
	top:0;
	display: none;
	
	}
.dingsuccess1{
	width: 1.8rem;
    height: 1.64rem;
    background: white;
    position: fixed;
    left: 26%;
    top: 33%;
    text-align: center;
	border-radius: 20px;
}
.dingsuccess1 span{
	font-size: 12px;
	color:black;
	font-family: "楷体";
	margin-top:20px;
}
.dingsuccess1 a{
	font-size: 12px;
	color:#ffab4b;
	font-family: "楷体";
}
.dingsuccess1 p{
	margin-top:-0.73rem;
	
	
}
	
</style>
