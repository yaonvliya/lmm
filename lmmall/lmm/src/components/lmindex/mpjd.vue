<template>
	<div class="mpjd">
		<ul>
			<li>
				<a href="">
					<img src="../../../static/img/index/01cla001.png" alt="">
				
				</a>
			</li>
			<router-link :to="{name:'hotelsearchs'}">
			<li>
				<a href="">
					<img src="../../../static/img/index/01cla002.png" alt="">
				
				</a>
			</li>
			</router-link>
			<li>
				<a href="">
					<img src="../../../static/img/index/01cla003.png" alt="">
					
				</a>
			</li>
			<li>
				<a href="">
					<img src="../../../static/img/index/01cla004.png" alt="">
					
				</a>
			</li><li>
				<a href="">
					<img src="../../../static/img/index/01cla005.png" alt="">
					
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
			name:'lmIndexmp',

		}
</script>

<style scoped="scoped">
	.mpjd{
		width:100%;
		height:0.63rem;
		/* background: red; */
		/* margin-top:0.1rem; */
		margin-bottom: .2rem;
	}
	.mpjd ul{
		display:-webkit-flex;
		justify-content: space-around;
	}
	/* .mpjd li:nth-child(1){
		margin-left: 10px;
	} */
	.mpjd li{
		width:20%;
		height:0.63rem;
		text-align: center;
	}
	.mpjd img{
		width:0.7rem;
		height:0.7rem;
	}
	.mpjd span{
		font-size: 12px;
		color:#6b6b69;
		display: block;
		margin-top:0.05rem;
	}
	
</style>
