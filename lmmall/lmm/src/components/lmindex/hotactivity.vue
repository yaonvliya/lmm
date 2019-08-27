<template>
	<div class="hotactivity">
		<div class="hotactivity_top">
			<span>热门活动</span>
			<span>虽然有钱也要精打细算</span>
		</div>
		<div class="hotactivity_middle">
			<div class="hotactivity_middle1">
				<a href=""><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1562321412_71451.jpg" alt=""></a>
				<a href=""><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1563330005_83941.jpg" alt=""></a>

			</div>
			<div class="hotactivity_middle2">
				<a href=""><img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565163966_98393.jpg" alt=""></a>
				<a href=""><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1563183667_60412.jpg" alt=""></a>
				<a href=""><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1561967221_89608.jpg" alt=""></a>
			</div>
		</div>
		<div class="hotactivity_down">
			<div class="hotactivity_downimg">
				<img src="https://pics.lvjs.com.cn/pics/super/2017/12/906551514425048_700x400.png" alt="">
			</div>
			<div class="hotactivity_downword">
				<p>为您推荐的当地门市</p>
				<h6>西安驴妈妈电子西街营业部</h6>
			</div>
			<div class="hotactivity_downmore">
				<p>更多门店</p>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		name:'lmIndexha',
		
	}
</script>

<style scoped>
	.hotactivity{
		width:100%;
		height:3.38rem;
	/* 	background: palevioletred; */
		margin-bottom: 0.2rem;
	}
	.hotactivity_top{
		width:100%;
		height:.5rem;
	/* 	background: gold; */
		line-height: .5rem;
		/* margin-top: 32px; */
	}
	.hotactivity_top span:nth-child(1){
		font-size: 14px;
		color:black;
		font-weight:800;
		float:left;
		margin-left: .14rem;
	}
	.hotactivity_top  span:nth-child(2){
		font-size: 12px;
		color:#bbbbbb;
		float:left;
		margin-left: 1.84rem;
	}
	.hotactivity_middle{
		width:100%;
		height:2.04rem;
		/* background: gold; */
		
	}
	.hotactivity_middle1{
		width:100%;
		height:1.00rem;
	/* 	background: red; */
		display: -webkit-flex;
		justify-content: space-around;
	}
	.hotactivity_middle1 a:nth-child(1) img{
		width:2.33rem;
		height:1.00rem;
		
	}
	.hotactivity_middle1 a:nth-child(2) img{
		width:1.15rem;
		height:1.00rem;
	}
	.hotactivity_middle2{
		width:100%;
		height:1.10rem;
		display: -webkit-flex;
		justify-content:space-around;
		margin-top: .1rem;
	}
	.hotactivity_middle2 a img{
		width:1.15rem;
		height:1rem;
		
	}
	.hotactivity_down{
		width:100%;
		height:.75rem;
		/* background:greenyellow; */
		margin-top: 20px;
		display:-webkit-flex;
		justify-content: space-around;
		}
	.hotactivity_downimg{
		width:.78rem;
		height:.75rem;
	}
	.hotactivity_downword{
		width:1.84rem;
		height:.75rem;
		/* background:green; */
	}
	.hotactivity_downmore{
		width:.9rem;
		height:.75rem;
	/* 	background:skyblue; */
	}
	.hotactivity_downimg img{
		width:.78rem;
		height:.75rem;
	}
	.hotactivity_downword p{
		font-size: 12px;
		color:#959595;
		margin-top: .2rem;
	}
	.hotactivity_downword h6{
		font-size: 14px;
		color:black;
	}
	.hotactivity_downmore p{
		width: 0.85rem;
		height: 0.45rem;
		font-size: 14px;
		color: black;
		background: #f0f0f0;
		border-radius: .2rem;
		margin-top: .2rem;
		text-align: center;
		line-height: 0.45rem;
	}
</style>
