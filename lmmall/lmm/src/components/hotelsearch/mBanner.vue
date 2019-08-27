<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/08/1566380394_67083.jpg">
		</div>
        <div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565687268_28503.jpg">
		</div>
        <div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565172855_78637.jpg">
		</div>
		<div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565172709_94878.jpg">
		</div>
		<div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/07/1564386421_97335.jpg">
		</div>
		<div class="swiper-slide">
			<img src="https://pics.lvjs.com.cn/pics/super/2019/07/1562810297_92353.jpg">
		</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		name: 'mBanner',
		data:()=>{
			return {
	
			}
		},
		mounted:function(){
			new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			autoplay: true,
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
			},
			autoplayDisableOnInteraction: false,
		});
		}
	}

</script>
<style scoped>
.swiper-container{
	width: 100%;
	height: 1.35rem;
}
img{
	width: 100%;
	height: 1.35rem;
}
</style>
