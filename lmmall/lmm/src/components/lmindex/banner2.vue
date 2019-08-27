<template>
	<div class="swiper-container" id="parent">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565319763_44050.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/08/1564640820_48946.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1562064573_85348.jpg" alt=""></div>
			<div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565166587_42055.jpg" alt=""></div>
			<div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/08/1565088371_65997.jpg" alt=""></div>
			<div class="swiper-slide"><img src="https://pics.lvjs.com.cn/pics/super/2019/07/1562666696_95511.jpg" alt=""></div>
	    </div>
		 <!-- Add Pagination -->
		<div class="swiper-pagination" slot="pagination"></div>
	    
	    <!-- 如果需要导航按钮 -->
	   <!-- <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div> -->
	    
	</div>
</template>

<script>
import Swiper from 'swiper';//模块化的使用。
export default{
	name:"banner2",
	data:function(){
		return {
			
		}
	},
	mounted:()=>{
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项(到头也能走)
			spaceBetween: 30,
			centeredSlides: true,
		    autoplay: {
		    	delay: 2500,
				speed:3000,
		    	stopOnLastSlide: false,
		    	// disableOnInteraction: true,
				disableOnInteraction: false // 手动切换之后继续自动轮播
		    },
		    // 如果需要分页器
		   pagination: {
		  el:'.swiper-pagination',
          clickable:true,
  
		   },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    }
		  })        

	}
}	
</script>

<style scoped="scoped">
@import '../../assets/css/swiper.min.css';

.swiper-container{
	width: 360px;
    height: 100px;
	/* background-color: hotpink; */
	border-radius: 10px;
	position:absolute;
	left:8px;
	top:84px;
/* 	background: turquoise; */
}	

img{
	width: 360px;
    height: 90px;
}

div{
	font-size:12px;
}
	
</style>
<style>
	.swiper-pagination{
		width:100px; 
		 height:20px;
		/* background:yellow; */
		 margin-top:30px; 
	}
	.swiper-pagination span{
		width: 8px;
		height: 8px; 
		border-radius: 100%;
	}
	.swiper-pagination .swiper-pagination-bullet{
		width: 15px;
		height: 4px; 
		border-radius: 20px;
		background: white;
	}
	
</style>
