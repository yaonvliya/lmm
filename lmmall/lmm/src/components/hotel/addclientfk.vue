<template>
	<div class="addclientfk">
		<div class="addclientfk1">
			<p>应付：<span>￥414</span><img src="../../assets/img/section/jianup.jpg" alt=""></p>
		</div>
		<div class="addclientfk2" @click="success()" >
			提交订单
		</div>
		 <lmindexds class="success"></lmindexds>
	</div>
</template>

<script>
	import lmindexds from './dingsuccess'
	export default{
		name:'lmindexfk',
		components:{
			 lmindexds,
		},
		methods:{
			success(){
				if($(".success").css("display")=="none"){
						$(".success").show();
						// $(".success").css({"height":height+200+"px"});
					}else{
						$(".success").hide();            
					}
			}
		}
	}
</script>

<style scoped>
	.addclientfk{
		width:100%;
		height:0.52rem;
		background: cyan;
		display: -webkit-flex;
		position:fixed;
		left:0;
		top:616px;
	}
	.addclientfk1{
		width:2.25rem;
		height:0.52rem;
		background: white;
		
	}
	.addclientfk1 p{
		font-size: 12px;
		color:#919191;
		
	}
	.addclientfk1 span{
		font-size: 16px;
		color:#f36528;
		
	}
	.addclientfk1 img{
		width:.20rem;
		height:0.22rem;
		display: inline-block;
		margin-left: 1.2rem;
		margin-top:0.1rem;
	}
	.addclientfk2{
		width:1.5rem;
		height:0.52rem;
		background: #fe4b72;
		text-align: center;
		line-height: .52rem;
		font-size: 16px;
		color:white;
		
	}
</style>
