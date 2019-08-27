<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" style="background-image:linear-gradient(0deg,#73a8c7 15%,#219ada 100%)"></div>
			<div class="swiper-slide" style="background-image:linear-gradient(0deg,#eace61 15%,#1b1a20 100%)"></div>
			<div class="swiper-slide" style="background-image:linear-gradient(0deg,#fff782 15%,#ffb11b 100%)"></div>
			<div class="swiper-slide" style="background-image:linear-gradient(0deg,#95cbed 15%,#feb92d 100%)"></div>
			<div class="swiper-slide" style="background-image:linear-gradient(0deg,#9ebcf9 15%,#294a8c 100%)"></div>
			<div class="swiper-slide" style="background-image:linear-gradient(0deg,#ff84a3 15%,#d34266 100%)"></div>
	    </div>
		 <!-- Add Pagination -->
		<!-- <div class="swiper-pagination"></div> -->
	    
	    <!-- 如果需要导航按钮 -->
	   <!-- <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div> -->
	    
	</div>
</template>

<script>
import Swiper from 'swiper';//模块化的使用。
export default{
	name:"banner1",
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
	width: 100%;
    height: 1.25rem;
	background-color: hotpink;
}	

/* img{
	width: 375px;
    height: 90px;
} */

div{
	font-size:12px;
}
	
</style>
<style>	
   .swiper-container{
   	  border-bottom-left-radius:20px;
	   border-bottom-right-radius:20px;
       }
</style>
