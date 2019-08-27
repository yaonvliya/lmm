<template>
	<div class="addclientsr">
		<div class="addclientsr1">
			<p><span class="big">大床房-大床房></span></p>
			<p><span>无早|大床|有窗|免费宽带|限时退改</span></p>
			<p><span>08.14</span>(今天)-<span>08.15</span>&nbsp;&nbsp;共<span>1</span>晚</p>
			<p>房间数 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>3</span>间 <img src="../../assets/img/section/jiandown.jpg" alt=""></p>
		</div>
		<div class="addclientsr2">
			<p class="roompeople"><span>入住信息</span>请选择<span>3</span>位入住人</p>
			<div>
				
			</div>
			<div class="addclientsr21">
				<router-link :to="{name:'addperson'}">
				<p><span>+</span> 选择入住人</p>
				</router-link>
			</div>
		</div>
		<div class="addclientsr3">
			<p>联系方式</p>
			<div class="telephone">
				<span class="phone">手机号</span>
				<input type="text" placeholder="用于接收通知短信" id="tele">
				<img src="../../assets/img/hotels/telephone.jpg" alt="">
			</div>
			<div class="telephone">
				<span>校验码</span>
				<input type="text" placeholder="请输入右侧校验码" id="jynum">
				<span class="randoms">qqqq</span>
			</div>
			<div class="telephone">
				<span>验证码</span>
				<input type="text" placeholder="请输入短信验证码" id="ynum">
				<span class="getxx">获取验证码</span>
			</div>
		</div>
		<div class="addclientsr4">
			<p class="roompeople"><span>优惠促销</span></p>
			<div class="addclientsr41">
				<p><span>劵</span> 登录享账户内优惠 <span>></span></p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'lmindexsr'
	}
</script>

<style scoped>
	.addclientsr{
		width:100%;
		height:5.82rem;
		background: #eceff9;
		/* background: red; */
		margin-top:35px;
	}
	.addclientsr1{
		width:3.54rem;
		height:1.28rem;
		background: #ffffff;
		/* background: cyan; */
		margin-left:9px;
		padding-top:6px;
	}
	.addclientsr1 p{
		margin-left: 7px;
		margin-top:8px;
	}
	.addclientsr .addclientsr1 p:nth-child(1){
		font-size: 14px;
		color:black;
		margin-top:15px ;
	}
	.addclientsr1 p:nth-child(2){
		font-size: 12px;
		color:#b4b4b4;
	}
	.addclientsr1 p:nth-child(3){
		font-size: 14px;
		color:#707070;
	}
	.addclientsr1 p:nth-child(3) span{
		font-size: 14px;
		color:black;
	}
	.addclientsr1 p:nth-child(4){
		font-size: 14px;
		color:#707070;
	}
	.addclientsr1 p:nth-child(4) img{
		display: inline-block;
		width:20px;
		height:13px;
		margin-top: 10px;
	}
	.addclientsr2{
		width:3.54rem;
		height:1.10rem;
		background: #ffffff;
		/* background: red; */
		margin-left:9px;
		margin-top:10px;
		padding-top:0.1rem
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
	.addclientsr21 p{
		width:1.55rem;
		height:0.3rem;
		border:1px solid #b1e3f5;
		border-radius: 20px;
		font-size: 14px;
		color:#5b8dbe;
		margin-left: 27%;
		margin-top: 56px;
		text-align: center;
		line-height: .3rem;
	}
	.addclientsr21 span{
		width:.15rem;
		height:.15rem;
		border:1px solid #b1e3f5;
		border-radius: 100%;
	}
	.addclientsr3{
		width:3.54rem;
		height:1.80rem;
		background: #ffffff;
		/* background: red; */
		margin-left:9px;
		margin-top:10px;
		padding-top: 10px;
	}
	.addclientsr3 p{
		font-size: 14px;
		color:black;
		margin-left: 0.1rem;
	}
	.telephone{
		width:3.38rem;
		height:0.40rem;
		/* background: #F0C78A; */
		margin-left: 8px;
		display: -webkit-flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #cecece;
		margin-top:8px;
	}
	.telephone .phone{
		margin-left: -9px;
	}
	.telephone #tele{
		margin-left: -19px;
	}
	.telephone #jynum{
		margin-left:0px;
	}
	.telephone #ynum{
		margin-left: 2px;
	}
	.telephone span{
		font-size: 12px;
		color:#848584;
	}
	.telephone input{
		width:1.8rem;
		height:0.3rem;
		font-size: 12px;
		color:#cecece;
		border:none;
		margin-left: 5px;
	}
	.randoms{
		width:0.5rem;
		height:0.2rem;
		border:1px solid #0077AA;
		text-align: center;
		line-height: 0.2rem;
	}
	.getxx{
		font-size:12px;
		color:#757575;
		
	}
	.addclientsr4{
		width:3.54rem;
		height:.86rem;
		background: #ffffff;
		/* background: red; */
		margin-left:9px;
		margin-top:10px;
		padding-top:0.1rem
	}
	.addclientsr41 p{
		font-size: 14px;
		color:#b7b7b9;
		margin-top: 0.3rem;
		margin-left: 0.1rem;
	}
	.addclientsr41 p span:nth-child(1){
		font-size: 14px;
		color:#b7b7b9;
		border:1px solid #f3d07d;
	}
	.addclientsr41 p span:nth-child(2){
		margin-left: 1.8rem;
	}
</style>
