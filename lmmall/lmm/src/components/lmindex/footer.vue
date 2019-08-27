<template>
	<div class="indexf">
	<!-- 	<ul>
			<router-link :to="{name:items.name}" v-for="(items,index) in lilist" :key="index"  >
			<li class="lilist" @click="handleTogglePage(index)">
				<img :src="items.img1" alt="" class="footimg1">
				<span class="footspan"><img :src="items.img2" alt="" class="footimg">
				{{items.title}}</span>
			</li>
			</router-link>
		</ul> -->
		<ul>
			<router-link :to="{name:'index'}" class="lilist">
			<li>
				<img src="../../../static/img/footer/1big.png" alt="" class="footimg1">
				<span class="footspan"><img src="../../../static/img/footer/1small.png" alt="" class="footimg">
				首页</span>
			</li>
			</router-link>
			<router-link :to="{name:'lmspecial'}" class="lilist">
			<li>
				<img src="../../../static/img/footer/2big.png" alt="" class="footimg1">
				<span class="footspan"><img src="../../../static/img/footer/2small.png" alt="" class="footimg">
				特卖</span>
			</li>
			</router-link>
			<router-link :to="{name:'find'}" class="lilist">
			<li>
				<img src="../../../static/img/footer/3big.png" alt="" class="footimg1">
				<span class="footspan"><img src="../../../static/img/footer/3small.png" alt="" class="footimg">
				发现</span>
			</li>
			</router-link>
			<router-link :to="{name:'server'}" class="lilist">
			<li>
				<img src="../../../static/img/footer/4big.png" alt="" class="footimg1">
				<span class="footspan"><img src="../../../static/img/footer/4small.png" alt="" class="footimg">
				客服</span>
			</li>
			</router-link>
			<router-link :to="{name:'lmMine'}" class="lilist">
			<li>
				<img src="../../../static/img/footer/5big.png" alt="" class="footimg1">
				<span class="footspan"><img src="../../../static/img/footer/5small.png" alt="" class="footimg">
				我的</span>
			</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	 import $ from 'jquery'
	export default{
		name:'lmIndexf',
		data(){
			return{

			 };
		},
		mounted:function(){
			//点击
		       console.log("1");
			   for(let i=0; i<$('.lilist').length;i++){
				    console.log(i);
					console.log("。。。。。。。。。")
					 console.log($('.lilist').length);
				   $(".lilist").eq(i).click(function(){
					console.log(i);
					console.log($(".lilist").eq(i))
					console.log('.......span........');
					console.log($(".lilist").eq(i).children('li.span'));
					console.log($(".lilist").eq(i).children('li.span.footspan'));
					$(".lilist").eq(i).children('li').children('span.footspan').css({"display":"none"})
					$(".lilist").eq(i).children('li').children('img.footimg1').css({"display":"block"})
					console.log($(".lilist").eq(i).siblings().children('li').children('img.footimg1'));
					console.log($(".lilist").eq(i).siblings().children('li.span.footspan'));
					console.log("adwafewfe");
					$(".lilist").eq(i).siblings().children('li').children('img.footimg1').css({"display":"none"})
					$(".lilist").eq(i).siblings().children('li').children('span.footspan').css({"display":"block"})
					console.log("adwafewfe");
					})
			   }
			},
		}
	
</script>

<style scoped="scoped">
	.indexf{
		width:100%;
		height:0.77rem;
		background: white;
		position:fixed;
		left:0;
		/* top:5.9rem; */
		bottom:0px;
	}
	.indexf ul{
		width:3.75rem;
		height:0.77rem;
		/* background: red; */
		position:fixed;
		left:0;
		top:5.9rem;
	}
	.indexf li{
		width:0.5rem;
		height:0.77rem;
		text-align: center;
		position:relative;
	}
	.indexf ul{
		display:-webkit-flex;
		justify-content: space-around;
	}
	.indexf span{
		font-size:14px;
		display:inherit;
		margin-top:0.05rem;
		color:black;
	}
	.footimg{
		width:0.5rem;
		height:.46rem;
		margin-top:0.1rem;
		/* margin-left: -7px; */
		
	}
	.footimg1{
		width: 0.55rem;
		height: 0.55rem;
		position: absolute;
		left: -7px;
		top: 10px;
		display: none;
	}
</style>
