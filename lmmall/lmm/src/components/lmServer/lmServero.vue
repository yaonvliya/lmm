<template>
		<div class="server_header">
			<ul>
				<li><span></span></li>
				<li><span>订单服务</span></li>
				<li><span>咨询服务</span></li>
				<li><img src="../../assets/img/client/phone.jpg" alt=""></li>
			</ul>
		</div>

</template>

<script>
	export default{
		name:'lmServero'
	}
</script>

<style scoped="scoped">
	.server_header{
		width:100%;
		height:0.5rem;
		background: white;
		border-bottom: 2px solid #919191;
	}
	.server_header ul{
		display: -webkit-flex;
		justify-content: space-around;
	}
	.server_header li{
		width:0.6rem;
		height:0.5rem;
	/* 	background: #007AFF; */
		/* border-bottom: 2px solid red; */
	}
	.server_header li img{
		width:0.4rem;
		height:0.4rem;
		margin-top:5px;
		margin-left:0.05rem;
	}
	.server_header li span{
		font-size: 14px;
		color:black;
		display: block;
		margin-top:0.15rem;
		
	}
</style>
