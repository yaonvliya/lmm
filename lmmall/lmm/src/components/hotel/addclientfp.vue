<template>
	<div class="addclientfp">
		<div class="addclientfp1">
			<p class="roompeople"><span>发票</span></p>
			<div class="addclientfp11">
				<p>如需发票，请到酒店前台索取</p>
			</div>
		</div>
		<div class="addclientfp2">
			<div class="addclientfp21">
				<p>退改说明</p>
				<p>您所订购的酒店在2019年<span>08</span>年<span>14</span>日 18：00：00之前提供无损退改
					房间，如您在2019年<span>08</span>年<span>14</span>日 18：00：00之后剔除退改房间酒店将扣除您部分费用。</p>
			</div>
			<div class="addclientfp21">
				<p>扣款说明</p>
				<p>驴妈妈会根据您的付款方式进行订单全款勾出和预授权限定，
				如订单不确认将解除预授权或全额退款至您的支付账号。订单是否生效以驴妈妈最终通知为准。</p>
			</div>
			<div class="addclientfp21">
				<p>小驴提醒</p>
				<p>通常酒店14：00开始办理入住，早到可能需要稍作等待。请入住客人携带好相关身份证。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lmindexfp'
	}
</script>

<style scoped>
	.addclientfp{
		width:100%;
		height:3.7rem;
		background: #eceff9;
		/* background: yellow; */
		
		
	}
	.addclientfp1{
		width:3.54rem;
		height:.47rem;
		background: #ffffff;
		/* background: red; */
		margin-left:9px;
		margin-top:10px;
		padding-top:0.1rem;
		display:-webkit-flex;
	}
	.roompeople{
		font-size: 12px;
		font-weight:800;
		color:#707070;
		margin-left: 0.1rem;
	}
	.roompeople span:nth-child(1){
		font-size: 14px;
		color:black;
		margin-right: 20px;
	}
	.addclientfp11 p{
		font-size: 14px;
		color:#989898;
		margin-left: 1rem;
	}
	/* 详情 */
	.addclientfp2{
		width:3.54rem;
		height:2.97rem;
		background: #ffffff;
	/* 	background: red; */
		margin-left:9px;
		margin-top:10px;
		

	}
	.addclientfp21{
		width:3.54rem;
		height:.9rem;
		background: #ffffff;
		padding-top:0.1rem;
		border-bottom:2px solid #e6e9ec;
	}
	.addclientfp21 P:nth-child(1){
		color:black;
		font-size: 12px;
		margin-left: 0.1rem;
	}
	.addclientfp21 P:nth-child(2){
		color:#989898;
		font-size: 12px;
		margin-left: 0.1rem;
	}
	
</style>
