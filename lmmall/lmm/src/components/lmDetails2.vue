<template>
	<div>
		<div class="lm-scenicWithHotel">
				<div class="lm-title">
					<p class="title">酒+景套餐</p>
				</div>
				<div class="lm-navbar">
					<span class="lm-select">二日游</span>
					<span>三日游</span>
				</div>
				<div class="lm-prdList">
					<div class="lm-prdshow" v-for="(item,index) in scenes" :key="index">
						<div class="lm-prdpic">
							<img :src="item.scenesprdpic"/>
						</div>
						<div class="lm-foo">
							<p class="lm-prdName">{{item.scenesprdName}}</p>
							<div class="price">
								<span class="left">
										<i>￥</i>
										<i>{{item.scenesprice}}</i>起
								</span>
								<span class="right">{{item.scenesmanyi}}满意</span>
							</div>
						</div>
					</div>
				
				 </div>
				<div class="lm-seeAll">
				 <button>查看所有景+酒套餐</button>
				</div>
			</div>
			
	</div>
</template>

<script>
	export default {
	   name:'lmDetails1',
	   data(){
		   return {
			  scenes:[],
		   }
	   },
	   created:function(){
		   fetch("http://localhost:3000/scenes")
		   .then((res)=>{
			   return res.json();
		   })
		   .then((req)=>{
			   return this.scenes=req;
		   })
		},
	}
</script>

<style scoped>
	.lm-scenicWithHotel{
	    margin-top: .1rem;
	    padding: .15rem 0 0;
	    font-size: .14rem;
	    color: #333;
	    background-image: -webkit-linear-gradient(top,#fff,hsla(0,0%,100%,0) 40%);
	    background-image: linear-gradient(-180deg,#fff,hsla(0,0%,100%,0) 40%);
	}
	.lm-scenicWithHotel .lm-title{
	      padding: 0 .15rem .2rem;
	}
	.lm-scenicWithHotel .lm-title .title{
	    font-size: .16rem;
	    line-height: .16rem;
	    color: #333;
	    padding-left: .28rem;
	    background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/t_meal.png) no-repeat;
	    background-size: .2rem .17rem;
	}
	.lm-scenicWithHotel .lm-navbar{
	    padding: 0 .15rem .15rem;
	    font-size: 0;
	}
	.lm-scenicWithHotel .lm-navbar span{
	    font-size: .13rem;
	    color: #000;
	    text-align: center;
	    height: .26rem;
	    line-height: .26rem;
	    padding: 0 .15rem;
	    background: #f6f6f6;
	    border-radius: .15rem;
	    margin-right: .08rem;
	    display: inline-block;
	}
	.lm-scenicWithHotel .lm-navbar .lm-select{
	    color: #fff;
	    background: #f80;
	}
	.lm-scenicWithHotel .lm-prdList{
	    padding: 0 .1rem;
	    overflow: hidden;
	}
	.lm-scenicWithHotel .lm-prdList .lm-prdshow{
	    background: #fff;
	    float: left;
	    width: 49%;
	    margin-right: .03rem;
	    margin-bottom: .1rem;
	    border-radius: .08rem;
	    overflow: hidden;
	}
	.lm-prdpic img{
	  width: 100%;
	}
	.lm-prdshow .lm-prdName{
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    font-family: PingFangSC-Medium;
	    font-size: .14rem;
	    color: #333;
	    line-height: .18rem;
	    margin-bottom: .08rem;
	}
	.lm-prdshow .price{
	    font-size: 10px;
	    color: #999;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	}
	.lm-prdshow .price i{
	    display: inline-block;
	    color: #ff5a68;
	    font-family: "PingFangSC-Light";
	    font-size: 12px;
	}
	.lm-scenicWithHotel .lm-seeAll{
	    text-align: center;
	    padding: .1rem 0 .2rem;
	}
	.lm-scenicWithHotel .lm-seeAll button{
	    height: .3rem;
	    border: .5px solid rgba(92,162,248,.5);
	    border-radius: .2rem;
	    font-size: .13rem;
	    color: #5ca2f8;
	    padding: 0 .2rem;
	}
	.lm-hotel-list-around{
	    background: #fff;
	    margin-top: .1rem;
	}
	.lm-hotel-list-around .lm-common-title{
	      padding: .15rem .15rem .1rem .43rem;
	    background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/t_view.png) no-repeat 15px 15px;
	    background-size: .2rem .17rem;
	}
	.lm-common-title{
	      font-size: .16rem;
	    line-height: .16rem;
	    color: #333;
	}
	.lm-common-title span{
	    float: right;
	    font-size: .12rem;
	    padding-right: .1rem;
	    color: #666;
	}
	.lm-hotel-list{
	      padding-right: .05rem;
	      background: #fff;
	}
	.lm-hotel-list li{
	    position: relative;
	    min-height: 1.2rem;
	    padding: .1rem;
	    border-radius: .03rem;
	}
	.bdt-img {
	    border-style: solid;
	    border-width: 0;
	    border-top-width: .01rem;
	}
	.lm-hotel-list li img{
	    position: absolute;
	    top: .15rem;
	    left: .1rem;
	    width: 1rem;
	    height: 1rem;
	    border-radius: .03rem;
	    overflow: hidden;
	}
	.lm-hotel-list .list-info{
	    padding-left: 1.1rem;
	}
	.lm-hotel-list .list-name{
	    font-size: 15px;
	    line-height: 20px;
	    color: #333;
	}
	.text-over-1, .text-over-2 {
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.text-over-1 {
	    white-space: nowrap;
	}
	.fw-me {
	    font-weight: 700;
	}
	 .lm-hotel-list .list-type{
	    margin-top: .05rem;
	}
	 .lm-hotel-list .list-type span{
	  font-size: .12rem;
	}
	.hotel-list span{
	    font-size: .12rem;
	    color: #666;
	    display: inline-block;
	}
	.lm-hotel-list .list-addr{
	    position: relative;
	    font-size: .12rem;
	    margin-top: .1rem;
	}
	 .lm-hotel-list .list-type {
	    margin-top: .05rem;
	    line-height: .1rem;
	    margin-top: -0.25rem;
	}
	.text-over-1, .text-over-2 {
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.text-over-1 {
	    white-space: nowrap;
	}
	.lm-hotel-list .list-addr span {
	    display: inline;
	}
	.lm-hotel-list span {
	    font-size: .12rem;
	    color: #666;
	    display: inline-block;
	}
	.lm-hotel-list .list-price{
	    text-align: right;
	    right: .1rem;
	    bottom: .1rem;
	    margin-top: -0.56rem;
	}
	.lm-hotel-list .list-price p{
	    height: .2rem;
	}
	.lm-hotel-list .list-price i .yen{
	    font-size: .12rem;
	    margin: 0 .02rem;
	}
	.lm-hotel-list .list-price i{
	    color: #ff5a68;
	    font-size: .2rem;
	    margin-left: -0.3rem;
	}
	.lm-hotel-list .list-price .qi{
	    font-size: .1rem;
	    color: #999;
	    margin-left: -0.25rem;
	}
</style>
