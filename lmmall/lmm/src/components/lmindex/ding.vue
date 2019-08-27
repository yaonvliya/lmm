<template>
	<div>
		<div  id="box">
			<span @click="down" class="down"><img src="../../assets/img/section/jiandown.jpg" alt=""><br/>推荐</span>
			<span @click="up" class="up"><img src="../../assets/img/section/jianup.jpg" alt=""></span>
		</div>
	</div>
</template>

<script>
	 import $ from 'jquery'
	export default{
		name:'lmindexding',
		methods:{
			down(){
				// console.log("1");
				$('html,body').animate({scrollTop:'0px'},800);
				$('.down').css({'display':'none'});
					// console.log("3");
				$('.up').css({'display':'block'});
				
		},
			up(){
				// console.log("2");
				$('html,body').animate({scrollTop:$(document).height()},800);
				$('.up').css({'display':'none'});
				$('.down').css({'display':'block'});
			}
	},
	}
</script>

<style scoped="scoped">
	#box{
		position:fixed;
		left:300px;
		top:500px;
		width:45px;
		height:45px;
		border-radius:100%;
		background:#fefdfb;
		/* background:yellow; */
		text-align: center;
	}
	#box span:nth-child(1){
		font-size: 12px;
		color:black;
		display: inherit;
	}
	#box span:nth-child(1) img{
		width:20px;
		height:10px;
		display: inline-block;
		margin-top: 10px;
	}
	#box span:nth-child(2){
		display: inherit;
		margin-top: 15px;
		margin-left: 10px;
		display: none;
	}
	#box span:nth-child(2) img{
		width:20px;
		height:10px;
		
	}
	
</style>
