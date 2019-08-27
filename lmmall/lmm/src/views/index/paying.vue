<template>
	<div class="paying">
		<div class="addclienth">
			<div class="addclienth1">
				<span @click="back()"><</span>
			</div>
			<div class="addclienth2">
				<span>订单支付</span>
			</div>
		</div>
		<div class="onlinepay">
			<div class="onlinepay1">
				<p>在线支付：<span>￥56</span></p>
				<p>剩余支付时间 <img src="../../assets/img/hotels/table.jpg" alt=""><span>28：43</span></p>
			</div>
			<div class="onlinepay2">
				<span>></span>
			</div>
		</div>
		<div class="onlinepay">
			<div class="onlinepay1">
				<p class="xiao1">小驴白条</p>
				<p class="xiao2">小驴白条最小支付金额为100元</p>
			</div>
			<div class="onlinepay2">
				<span><img src="../../assets/img/hotels/checkbox1.jpg" alt=""></span>
			</div>
		</div>
		<div class="parsents">
			<span>礼品卡</span>
			<span>请选择使用礼品卡></span>
		</div>
		<div class="paymethods">
			<div class="paymethods1">
				<img src="../../assets/img/hotels/zfb.jpg" alt="">
				<span>支付宝支付</span>
				<img src="../../assets/img/hotels/checkbox2.jpg" alt="">
			</div>
			<div class="paymethods1">
				<img src="../../assets/img/hotels/snzf.jpg" alt="">
				<div class="paymethods1sn">
					<p>
						<span>苏宁快捷</span><span class="tuijian">推荐</span><span class="huodong">活动</span>
						<img src="../../assets/img/hotels/wh.jpg" alt="">
					</p>
					<p>最高立减15元</p>
				</div>
				<img src="../../assets/img/hotels/checkbox3.jpg" alt="" class="imgcheck">
			</div>
			<div class="paymethods1">
					<img src="../../assets/img/hotels/ysf.jpg" alt="">
					<div class="paymethods1sn">
						<p>
							<span>银联支付</span>
							<span class="tuijian">推荐</span>
							<img src="../../assets/img/hotels/bank.jpg" alt="" class="bank">
							<span class="huodong">活动</span>
							<img src="../../assets/img/hotels/wh.jpg" alt="">
						</p>
						<p>农行享立减</p>
					</div>
					<img src="../../assets/img/hotels/checkbox3.jpg" alt="" class="imgcheck">
		    </div>
			<div class="paymethods1">
					<img src="../../assets/img/hotels/hb.jpg" alt="">
					<span>花呗</span>
					<img src="../../assets/img/hotels/checkbox3.jpg" alt="" class="checkbox3">
			</div>
		</div>
		<lm-indexfk></lm-indexfk>
	</div>
</template>

<script>
	import lmIndexfk from '../../components/hotel/addclientfk'
	export default{
		name:'lmindexpaying',
		components:{
			 'lm-indexfk':lmIndexfk
		},
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.paying{
		width:100%;
		height:6.16rem;
		background: #eceff9;
	}
	.addclienth{
		width:100%;
		height:0.45rem;
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
		margin-left:1.2rem;
		line-height: 0.45rem;
	}
	.onlinepay{
		width:100%;
		height:0.64rem;
		background: white;
		display: -webkit-flex;
		margin-top: 0.1rem;
	}
	.onlinepay1{
		width:2.3rem;
		height:0.64rem;
		/* background: yellowgreen; */
		padding-left: .1rem;
	}
	.onlinepay1 p:nth-child(1){
		font-size: 14px;
		color:black;
	}
	.onlinepay1 p:nth-child(1) span{
		font-size: 18px;
		color:#861051;
	}
	.onlinepay1 p:nth-child(2) span{
		font-size: 18px;
		color:#de7443;
		display: inline;
	}
	.onlinepay1 p:nth-child(2) img{
		display: inline;
		
	}
	.onlinepay1 p:nth-child(2){
		font-size: 14px;
		color:#828284;
		margin-top: 5px;
	}
	.onlinepay2{
		width:1.35rem;
		height:0.64rem;
		background: white;
	}
	.onlinepay2 span{
		font-size: 20px;
		color:#828284;
		margin-left: 1.1rem;
		float: left;
		margin-top:0.22rem;
	}
	.onlinepay .onlinepay1 .xiao1{
		font-size: 14px;
		color:#dadada;
	}
	.onlinepay .onlinepay1 .xiao2{
		font-size: 12px;
		color:#e0e0e0;
	}
	/* 礼品卡 */
	.parsents{
		width:100%;
		height:0.37rem;
		background: white;
		margin-top: 0.1rem;
		line-height: .37rem;
	}
	.parsents span:nth-child(1){
		font-size: 14px;
		color:black;
		margin-left: 0.1rem;
		float:left;
	}
	.parsents span:nth-child(2){
		margin-left: 1.9rem;
		font-size: 14px;
		color:#999999;
		float:left;
	}
	/* 支付方式 */
	.paymethods{
		width:100%;
		height:2.87rem;
		/* background: cyan; */
		margin-top: 0.1rem;
		
	}
	.paymethods1{
		width:100%;
		height:.68rem;
		background:white;
		margin-top: 0.05rem;
		border:2px solid #e9e9e9;
		display: -webkit-flex;
		align-items: center;
	}
	.paymethods1 span{
		font-size: 14px;
		color:#6d6d6d;
		margin-left: 0.1rem;
	}
	.paymethods1 img:nth-child(1){
		width:0.4rem;
		height:0.43rem;
	}
	.paymethods1 img:nth-child(3){
		width:0.3rem;
		height:0.3rem;
		margin-left: 2.1rem;
	}
	.paymethods1sn{
		width:2.79rem;
		height:.63rem;
		/* background: yellow; */
		
	}
	.paymethods1sn p:nth-child(1){
		font-size: 14px;
		color:#d20064;
		display: -webkit-flex;
		margin-top:10px;
	}
	.paymethods1sn p:nth-child(1) img{
		margin-left: 0.1rem;
		width:0.2rem;
		height:0.2rem;
	}
	.paymethods1sn p:nth-child(2){
		font-size: 12px;
		color:#d20064;
		margin-left: 0.1rem;

	}
	.paymethods .paymethods1 .imgcheck{
		width:0.3rem;
		height:0.3rem;
		margin-left: 0.1rem;
		
}
     .paymethods .paymethods1 .bank{
		width: 0.4rem;
		height: 0.25rem;
		margin-left: 0.6rem;
	 }
	.tuijian{
		font-size: 14px;
		color:white;
		background: #d20064;
		height:0.2rem;
	}
	.huodong{
		font-size: 14px;
		color:white;
		background: #ff1d6f;
		height:0.2rem;

	}
	.paymethods .paymethods1 .checkbox3{
		margin-left: 2.5rem;
	}
</style>
