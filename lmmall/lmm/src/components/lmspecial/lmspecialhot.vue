<template>
	<div>
		<div class="lmspecial_box4">
			<i>爆款推荐</i>
		</div>
		<div class="lmspecial_box5" >
			<div class="lmspecial_smallBox" v-for="(items,index) in baokuan">
				<img :src="items.lmspecialimg" />
				<i>{{items.lmspecialword}}</i>
				<a>{{items.lmspecialprice}}</a><b>起</b>
				<span>立即抢购</span>
			</div>
		</div>
		</div>
</template>

<script>
	export default {
		name: 'lmspecialhot',
		data(){
			return{
				baokuan:[
					{lmspecialimg:require("../../assets/lmfind/img/IMG_0301_11.jpg"),
					lmspecialword:"探洞工厂",
					lmspecialprice:"￥888",
					},
					{lmspecialimg:require("../../assets/lmfind/img/IMG_0301_11.jpg"),
					lmspecialword:"北京欢乐谷",
					lmspecialprice:"￥216",
					},
					{lmspecialimg:require("../../assets/lmfind/img/IMG_0301_11.jpg"),
					lmspecialword:"北京欢乐谷",
					lmspecialprice:"￥216",
					},
					{lmspecialimg:require("../../assets/lmfind/img/IMG_0301_11.jpg"),
					lmspecialword:"北京欢乐谷",
					lmspecialprice:"￥216",
					},
					
				]
			}
			
		}
	}
</script>

<style>
	@import url("../../assets/lmfind/css/special.css");
</style>
