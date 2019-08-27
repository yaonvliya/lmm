<template>
	<div class="hotcity">
		<div class="hotcity_top">
			<span>当季热门城市</span>
			<span>这个城市从此多了一个你</span>
			<span>></span>
		</div>
		<ul class="hotcity_down">
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-12-26/eabfdeae-eece-4773-af31-5e55a01cb5dc_360_270.jpg" alt="">
				<h4>上海</h4>
				<span>都市观光</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-03-15/d2751a3b-2e70-46eb-8bbf-05abbe040286_360_270.jpg" alt="">
				<h4>北京</h4>
				<span>古迹遗址</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-03-15/22d09ab3-b138-49bb-b41d-2fa29c5b8cb6_360_270.jpg" alt="">
				<h4>广州</h4>
				<span>都市观光</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-03-21/2339c4ed-9bfd-418e-b894-fbef144886e5_360_270.jpg" alt="">
				<h4>成都</h4>
				<span>山水景观</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-03-21/f9268df5-5474-48ac-9b23-134ae5ff5d9a_360_270.jpg" alt="">
				<h4>深圳</h4>
				<span>都市观光</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-04-26/7af4a3ff-7d76-465a-be13-847ac5a4b075_360_270.jpg" alt="">
				<h4>武汉</h4>
				<span>美食</span>
			</li>
		</ul>
		<div class="hotcity_down2">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'lmIndexhc',
		
	}
</script>

<style scoped="scoped">
	.hotcity{
		width:100%;
		height:2.63rem;
		/* background: palevioletred; */
		
	}
	.hotcity_top{
		width:100%;
		height:.5rem;
	/* 	background: gold; */
		line-height: .5rem;
	}
	.hotcity_top span:nth-child(1){
		font-size: 14px;
		color:black;
		font-weight:800;
		float:left;
		margin-left: .14rem;
	}
	.hotcity_top span:nth-child(2){
		font-size: 12px;
		color:#bbbbbb;
		float:left;
		margin-left: 1.1rem;
	}
	.hotcity_top span:nth-child(3){
		font-size: 18px;
		width: 22px;
		height: 26px;
		color: white;
		font-weight: 800;
		background: #dedede;
		border-radius: 100%;
		float: left;
		margin-left: 5px;
		margin-top: 10px;
		text-align: center;
		line-height: 26px;
	}
	.hotcity_down{
		width:100%;
		height:1.2rem;
		display:-webkit-flex;
		overflow-x: auto;
	}
	.hotcity_down li{
		width:1.13rem;
		height:1.2rem;
		position:relative;
		margin-right: 10px;
		
	}
	.hotcity_down img{
		width:1.13rem;
		height:1.2rem;
	}
	.hotcity_down  h4{
		width:50px;
		height:20px;
		font-size: 14px;
		color:black;
		font-weight:800;
		position:absolute;
		text-align: center;
		left:14px;
		top:68px;
		/* background: white; */
		border-radius: 20px;
	}
	.hotcity_down  span{
		font-size: 14px;
		color:white;
		position:absolute;
		left:12px;
		top:100px;
	}
	.hotcity_down2{
		width:100%;
		height:0.63rem;
		background: url("https://pics.lvjs.com.cn/pics/super/2019/04/1554367145_56357.png");
		background-size:cover ;
		margin-top:0.25rem
	}
</style>
