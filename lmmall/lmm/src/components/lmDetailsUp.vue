<template>
	<div class="class1" :itemdata="newdata">
	<div class="lm-head" >
				<div class="lm-header" >
					<img src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/head_back_1.png" alt="" class="lm-point"
					 @click="back()">
					<img src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/head_sc_gray.png" alt=""
					 class="lm-star">
					<img src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/head_more_gray.png" alt=""
					 class="lm-omit">
				</div>
				<div class="lm-info">
					<p class="lm-name">
						<span>{{arrb.hotel_name}}</span>
					</p>
					<div class="lm-intro">
						<div class="lm-left-img">
							<p class="lm-line1">
								<ul>
									<li>{{arrb.hotel_type}}酒店&nbsp;&nbsp;&nbsp;</li>
									<li>{{arrb.hotel_year}}</li>
								</ul>
								<span>酒店详情></span>
							</p>
							<p class="lm-line2">
								<ul>
									<li><img src="../assets/img/img/wifi.png" />免费wifi</li>
									<li><img src="../assets/img/img/parking.png" />免费停车场</li>
									<li><img src="../assets/img/img/swimming.png" />室内游泳池</li>
									<li><img src="../assets/img/img/medcine.png" />商务中心</li>
								</ul>
							</p>

							<div class="lm-right">
								<p>
									<i class="lm-score">{{arrb.hotel_rank}}</i>
									<i>分</i>
								</p>
								<span>好评></span>
							</div>
						</div>
					</div>
					<div class="lm-location">
						<div class="lm-left-one">
							<img src="../assets/img/img/location.png" />
							<p class="address">{{arrb.hotel_localtion}}</p>
							<p class="tip">距市中心驾车约28公里,时间约为7分钟</p>
							<p class="tip">距您直线约34.4公里,驾车42.2公里,约26分钟</p>
						</div>
						<div class="lm-right-one">
							<p>地图/周边></p>
						</div>
					</div>
				</div>
				<div class="lm-coupon">
					<p class="lm-quan">
						<img src="../assets/img/img/quan.png" alt="">
						<ul>
							<li>满699减20</li>
							<li>每满400减15</li>
						</ul>
						<span>可领2个></span>
					</p>
				</div>
				<div class="lm-choose">
					<div class="lm-time">
						<span>入住日期</span>
						<span>08月15日</span>
						<em>今天</em>--
						<span>08月16日</span>
						<em>明天</em>
						<span class="total">共1晚></span>
					</div>
					<div class="lm-filter">
						<ul>
							<li>含早</li>
							<li>双床</li>
							<li>可订</li>
							<li>立即确认</li>
							<li>促销</li>
						</ul>
						
							<span @click='select()'>筛选
								<img src="../assets/img/img/point.png" alt="" class="lm-bpoint">
							</span>
					
					</div>
				</div>
		<div  class="housesss">
			<div v-for="(hotel,index) in arrc" :key="index" class="houses">
				<div class="lm-guesslike" @click="houseulcx(index)" >
					<div>
						<span class="lm-guesstag">猜你喜欢</span>
						<img :src="hotel.room_type_img" alt="">
					</div>
					<div class="lm-info-area">
							<p class="name text-home">{{hotel.room_type_name}}
								<i>详情</i>
							</p>
							<p class="attr-1">
								<span>{{hotel.room_type_breakfast}}</span>
								<span>{{hotel.room_type_bed}}</span>
								<!-- <span>{{hotel.room_can_type_live}}</span> -->
							</p>
							<p class="attr-2">
								<span>{{hotel.room_type_window}}</span>
							<span>{{hotel.room_type_area}}</span>
							<!-- <span>{{hotel.room_type_float}}</span> -->
								
							</p>
							<p class="tags">
								<span>券</span>
							</p>
					</div>
					<div class="lm-price-area">
							<p class="lm-price-area_p">
								<span>
									<i>￥</i>
									<i class="price">{{hotel.room_type_price}} </i>
								</span>
								
							</p>
							<button class="lm-order-area">
							<router-link :to="{name:'lmIndexadd'}">
								<p class="bookup">预订</p>
							</router-link>
							<p class="bookdown">预付</p>
						     </button>
					</div>
				
				</div>
				<ul class="houseul">
					 <!-- v-for="(hotel1,index1) in arrc.room_type" :key="index1" -->
						<li class="lm-bdt-img" v-for="(hotel1,index1) in hotel.room">
							
							<div class="lm-guesslike lm-guesslike1" >
								<div>									
									<img :src="hotel1.room_img" alt="">
								</div>
								<div class="lm-info-area">
										<p class="name text-home">{{hotel1.room_name}}
											<i>详情</i>
										</p>
									
										<p class="attr-2">
										<span>{{hotel1.room_window}}</span>
										<span>{{hotel1.room_area}}</span>
										<span>{{hotel1.room_bed}}</span>
										<span>{{hotel1.room_can_live}}</span>	
										</p>
										<p class="tags">
											<span>券</span>
										</p>
									</div>
									<div class="lm-price-area">
										<p class="lm-price-area_p">
											<span>
												<i>￥</i>
												<i class="price">{{hotel1.room_price}} </i>
											</span>
											
										</p>
										<button class="lm-order-area">
										<router-link :to="{name:'lmIndexadd'}">
											<p class="bookup">预订</p>
										</router-link>
										<p class="bookdown">预付</p>
									</button>
									</div>
								</div>
						</li>
					</ul>
			</div>	
		</div>
		</div>
		


		<lm-details3></lm-details3>
		<lm-choose class="choose"></lm-choose>
		<lm-details1 class="tjhotel"></lm-details1>
		<!-- <lm-details2></lm-details2> -->

	</div>
</template>
<script>
	import lmChoose from './lmChoose'
	import lmDetails1 from './lmDetails1'
	import lmDetails2 from './lmDetails2'
	import lmDetails3 from './lmDetails3'
	import lmDetailsroom from './lmDetailsrooml'

	export default {
		name: 'hoteldetail',
		data: {

		},
		components: {
			lmChoose,
			lmDetails1,
			lmDetails2,
			lmDetails3,
			lmDetailsroom



		},
		data() {
			return {
				newid: '',
				arrb: [],
				arrc: [],
				hotel:[],
				
			}
		},
// 		computed: {
// 					newdata() {
// 						console.log("////////////////////////");
// 						console.log(this.$route.params.hotelid);
// 						
// 						this.newid = this.$route.params.hotelid;
// 						console.log(this.newid);
		// 				console.log(this.arrb);
		// 				console.log(this.newid);
		// 				for (var i in this.arrb) {
		// 					if (this.arrb[i].hotelid == this.newid) {
		// 						console.log(this.arrb[i]);
		// 						console.log(this.arrb[i].hotelid);
		// 						this.arrc = this.arrb[i];//此时获取的数组由每一个元素组成，非对象
		// 						console.log(this.arrc.hotelname);
		// 						 // this.hotels=this.arrc.hotel;
		// // 						  console.log('.................');
		// // 						 console.log( this.hotels);
		// 						return this.arrc
		// 					}
		// 				}
// 					}
// 				},
		
				
		created: function() {
			this.newid = this.$route.params.hotelid;
			console.log(this.newid);
			fetch("http://39.100.241.148:8000/hotel/detail/?hid="+this.newid)
				.then((res) => {
					return res.json();
				})
				.then((req) => {
					console.log(req);
					this.arrb = req.hotel;
					this.arrc=req.room_type;
					this.hotel=req.room_type.room;
					console.log(req.room_type.room_type_name);
					console.log(this.arrb);
					console.log(this.hotel);
					return this.arrb,this.arrc;
				})
		},
		computed: {
			newdata() {
				console.log("////////////////////////");
				console.log(this.$route.params.hotelid);
				
				this.newid = this.$route.params.hotelid;
				console.log(this.newid);
// 				console.log(this.arrb);
// 				console.log(this.newid);
// 				for (var i in this.arrb) {
// 					if (this.arrb[i].hotelid == this.newid) {
// 						console.log(this.arrb[i]);
// 						console.log(this.arrb[i].hotelid);
// 						this.arrc = this.arrb[i];//此时获取的数组由每一个元素组成，非对象
// 						console.log(this.arrc.hotelname);
// 						 // this.hotels=this.arrc.hotel;
// // 						  console.log('.................');
// // 						 console.log( this.hotels);
// 						return this.arrc
// 					}
// 				}
			}
		},

		methods: {
			back() {
				this.$router.back();
			},
			select() {
				$(".choose").css({
					"display": "block"
				});
			},
			houseulcx(index){ 
				if($(".houseul").eq(index).css("display")=="none"){
						$(".houseul").eq(index).show();
						// $(".housesss").css({"height":height+200+"px"});
					}else{
						$(".houseul").eq(index).hide();            
					}
			}
		}
	}
	
</script>
<style scoped>
	.class1 {
		width: 100%;
	}
	.houses{
		width:100%;
		height:100%;
		/* background:darkorange */
         }
	
	.houseul{
	    display:none; 
		width:100%;
		
	}
	.tjhotel {
		margin-top: -137px;
	}

	.choose {
		display: none;
	}

	.lm-head {
		height: 100%;
		background: #efeff7;
	}

	.lm-header {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 58.66%;
		overflow: hidden;
		background: url(https://pics.lvjs.com.cn//uploads/pc/place2/2018-12-19/b7aaff67-8b7b-413f-a81e-647a234bbbb8_480_320.jpg) no-repeat;
	}

	.lm-header img {
		width: .35rem;
		height: .35rem;
		position: absolute;
		top: .1rem;
	}

	.lm-star {
		right: 0.5rem;
	}

	.lm-omit {
		right: 0.1rem;
	}

	.lm-info {
		position: relative;
		width: 3.75rem;
		height: 1.72rem;
		font-size: .12rem;
		color: #666;
		border-radius: 0.1rem 0.1rem 0 0;
		margin-top: -0.1rem;
	}

	.lm-name {
		font-size: .16rem;
		color: #333;
		line-height: .16rem;
		padding: .15rem 0 0;
	}

	.lm-intro {
		padding: .1rem 0 .15rem;
		position: relative;
	}

	.lm-left-img {
		line-height: .12rem;
		width: 80%;
	}

	.lm-line1 {
		height: .12rem;
		padding-right: .6rem;
	}

	.lm-line1 li {
		font-size: .12rem;
		float: left;
	}

	.lm-line1 span {
		position: absolute;
		top: .11rem;
		right: 1.1rem;
		width: .57rem;
		height: .12rem;
		padding-right: .09rem;
		color: #5ca2f8;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAAXNSR…ydb1REuxeo3SzLTsuyvGsntMbMH2ACnVvF++xZBf9n/Q0xHJv/6cg0rgAAAABJRU5ErkJggg==) no-repeat 100%;
		background-size: .07rem .12rem;
	}

	.lm-line2 li {
		float: left;
		padding: 0.12rem .08rem 0 .14rem;
		color: darkgray;
	}

	.lm-line2 img {
		width: .1rem;
		height: .1rem;
		position: absolute;
		top: .35rem;
		margin-left: -0.11rem;
	}

	.lm-right {
		position: absolute;
		right: 0;
		top: -0.05rem;
		width: 20%;
		color: #f80;
		text-align: center;
		display: inline-block;
	}

	.lm-score {
		font-size: .3rem;
		font-weight: 600;
	}

	i {
		font-style: normal;
	}

	.lm-right span {
		display: inline-block;
		font-size: .1rem;
		line-height: .16rem;
		height: .16rem;
		width: .48rem;
		border: 1px solid #f80;
		border-radius: .1rem;
		background: #fcf5e5;
		margin-top: .05rem;
		text-align: center;
	}

	.lm-location {
		position: relative;
		margin-top: .23rem;
		border-top: 1px solid #dbdbdb;
	}

	.lm-left-one {
		width: 100%;
		margin-top: .1rem;

	}

	.lm-left-one img {
		width: .15rem;
		height: .15rem;
	}

	.address {
		position: absolute;
		left: .35rem;
		margin-top: -0.14rem;
	}

	.lm-right-one {
		position: absolute;
		width: 1.06rem;
		height: 100%;
		right: 0;
		top: 0;
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelDetail/img/detail_map.png) no-repeat 100%;
		background-size: 1.06rem 1.3rem;
	}

	.tip {
		padding-top: .1rem;
	}

	.lm-right-one {
		width: 1.06rem;
		padding-right: .22rem;
		position: absolute;
		font-size: .12rem;
		line-height: 12px;
		text-align: right;
		color: #5ca2f8;
	}

	.lm-right-one p {
		margin-top: .36rem;
	}

	.lm-coupon {
		border-top: 1px solid #dbdcd6;
		margin-top: .1rem;
		padding: 0 .15rem;
		background: #fff;
		border-bottom: 1px solid #dbdcd6;
	}

	.lm-quan {
		height: .44rem;
		padding-left: .15rem;
	}

	.lm-coupon ul {
		overflow: hidden;
	}

	.lm-coupon li {
		float: left;
		position: relative;
		padding: 0 0.07rem;
		margin: 0.12rem 0.08rem 0.12rem 0;
		line-height: 0.2rem;
		background-color: #fff3f3;
		border-radius: 0.02rem;
		font-family: "PingFangSC-Regular";
		font-size: 0.12rem;
		color: #ff5a68;
	}

	.lm-quan img {
		width: .1rem;
		height: .15rem;
		position: absolute;
		margin-left: -0.16rem;
		margin-top: 0.14rem;
	}

	.lm-coupon span {
		font-size: 12px;
		color: #666;
		position: absolute;
		right: 0;
		padding-right: .1rem;
		margin-top: -30px;
	}

	.lm-choose {
		margin-top: .1rem;
		padding: 0 .15rem;
		background: #fff;
		box-shadow: 0 .03rem .03rem 0 rgba(0, 0, 0, .05);
	}

	.lm-time {
		position: relative;
		line-height: .44rem;
		font-size: .16rem;
		color: #333;
		border-bottom: 1px solid #cecece;
	}

	.lm-choose span {
		font-size: .14rem;
	}

	.lm-choose em {
		font-style: normal;
		font-size: .1rem;
		color: #b9b3b3;
	}

	.total {
		position: absolute;
		right: .05rem;
	}

	.lm-filter {
		height: .44rem;
		box-shadow: 0 .03rem .03rem 0 rgba(0, 0, 0, .05);
	}

	.lm-filter li {
		float: left;
		font-size: .1rem;
		margin-top: .11rem;
		margin-right: .08rem;
		padding: 0 .06rem;
		height: .22rem;
		line-height: .21rem;
		border: 1px solid #ccc;
		border-radius: .02rem;
	}

	.lm-filter span {
		position: absolute;
		right: .35rem;
		margin-top: .13rem;
	}

	.lm-filter img {
		float: right;
		width: .12rem;
		margin-left: .05rem;
		margin-top: .06rem;
	}

	.lm-guesslike {
		position: relative;
		background: #fff;
		/* background: darkgoldenrod; */
        display: flex;
		border-top: 1px solid #e4e4e4;
		/* padding: .15rem 0 0.5rem 0rem; */
		min-height: 1.04rem;
		border-bottom: 1px solid #dadada;
	}
	.lm-guesslike1 {
		background: none;
	}

	.lm-guesslike img {
		position: relative;
		left: .15rem;
		top: .15rem;
		width: .7rem;
		height: .74rem;
	}

	.lm-guesstag {
		font-size: .1rem;
		z-index: 8;
		color: #fff;
		position: absolute;
		width: .52rem;
		height: .15rem;
		text-align: center;
		line-height: .15rem;
		left: .19rem;
		top: .15rem;
		background-image: -webkit-linear-gradient(left, #ff9292, #ff5f5f 86%);
		background-image: linear-gradient(90deg, #ff9292, #ff5f5f 86%);
		border-bottom-left-radius: .05rem;
		border-bottom-right-radius: .05rem;
	}

	.lm-info-area {
	width: 150px;
    min-height: .74rem;
    /* left: .7rem; */
    /* right: -17px; */
    margin-left: .2rem;
    /* margin-top: .6rem; */
    /* background: red; */
	}

	.name {
		height: .16rem;
		line-height: .16rem;
		font-size: .14rem;
		padding-right: .36rem;
		color: #333;
		width: max-content;
		max-width: 100%;

	}

	.lm-info-area p {
	
		margin-left: 10px;
		
	}

	.text-home {
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 14px;
	}

	.lm-info-area i {
		display: inline-block;
		line-height: .12rem;
		width: .32rem;
		font-size: .12rem;
		padding-right: .08rem;
		color: #999;
		margin-left: .05rem;
	}

	.attr-1{
		line-height: .12rem;
		font-size: .12rem;
		color: #333;
		margin-top: .08rem;
	}
	.attr-2 {
		line-height: .12rem;
		font-size: .12rem;
		color: #333;
		margin-top: .08rem;
	}

	
	/* .attr-2 span,
	.tags span {
		padding-right: .02rem;
		position: relative;
	}
 */
	.attr-1 span {
		top: 1.25rem;
	}

	

	

	.tags {
		font-size: .1rem;
		color: #f80;
		height: auto;
		line-height: .13rem;
		margin-top: .1rem;
	}

	.tags span {
		border: 1px solid #ffca8e;
		border-radius: .02rem;
		padding: 0 .02rem;
		height: .13rem;
		line-height: .13rem;
		white-space: nowrap;
		display: block;
		float: left;
		margin-right: .04rem;
		margin-bottom: .05rem;
	}

	.lm-price-area {
		
	}

	.guide .lm-price-area i {
		color: #f80;
		font-size: .16rem;
		position: relative;
		top: 3.6rem;
		left: -0.2rem;
	}

	.lm-price-area i {
		color: #f80;
		font-size: .16rem;
		/* margin-left: 10px; */
	}
	.lm-price-area_p{
		height:117px;
		line-height:57px;
		
	}
	.lm-price-area .price {
		font-size: .21rem;
		font-weight: 500;
		margin-left: -23px;
	}

	.lm-price-area .qi {
		font-size: .15rem;
		position: relative;
		top: 3.6rem;
		color: #f80;
	}

	.lm-order-area {
		position: absolute;
		height: .42rem;
		width: .54rem;
		right: .15rem;
		top: 50%;
		-webkit-transform: translateY(-50%);
		border: 1px solid #ffca8e;
		border-radius: .03rem;
		top: .5rem;
	}

	.bookup {
		width: .52rem;
		height: .2rem;
		line-height: .22rem;
		font-size: .13rem;
		color: #fff;
		background-color: #f80;
		margin-left: -0.06rem;
		margin-top: -0.03rem;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	.bookdown {
		width: .52rem;
		height: .21rem;
		background: white;
		color: #f80;
		margin-left: -0.06rem;
		margin-top: .01rem;
	}

	.lm-bdt-img {
		border-bottom: 1px solid #fff;
	}

	.guide {
		position: relative;
		padding: .15rem;
		background-color: #fff;
		min-height: .9rem;
		border-bottom: 1px solid rgb(216, 213, 213);
	}

	.guide img {
		position: relative;
		width: .7rem;
		height: .74rem;
	}

	.guide .lm-info-area {
		margin-top: .43rem;
		background: yellow;
	}
	.guide .lm-price-area {
		/* margin-top: .43rem; */
		background: yellowgreen;
	}

	.guide .lm-price-area .price {
		font-size: .21rem;
		font-weight: 500;
		margin-right: -0.45rem;
	}

	.guide .qi {
		position: absolute;
		right: -0.4rem;
		top: 4.5rem;
	}

	.guide .lm-price-area img {
		width: .15rem;
		height: .15rem;
		position: absolute;
		top: 4.53rem;
		right: -0.6rem;
	}

	.lm-comment {
		background: #fff;
		margin-top: 10px;
		padding: .15rem;
		border-bottom: 1px solid rgb(231, 229, 229);
	}

	.lm-com-head {
		height: .2rem;
		line-height: .2rem;
		font-size: .12rem;
		color: #f80;
	}

	.rate {
		font-size: .2rem;
		margin-right: .05rem;
	}

	.num {
		font-size: .12rem;
		color: #666;
		float: right;
		padding-right: .1rem;
	}

	.score {
		margin: .15rem 0;
		width: 100%;
		height: .23rem;
		line-height: .23rem;
		background: #f6f6fb;
		border-radius: .21rem;
		font-size: .1rem;
		color: #7f8496;
	}

	.score li {
		position: relative;
		width: 25%;
		float: left;
		text-align: center;
	}

	.lm-comment .name {
		font-size: .14rem;
		line-height: .14rem;
		color: #333;
	}

	.lm-comment .star {
		margin-top: .05rem;
		height: .1rem;
		line-height: .1rem;
		font-size: .1rem;
		color: #999;
	}

	.lm-comment img {
		width: .8rem;
		height: .15rem;
		background-size: 100%;
		display: inline-block;
	}

	.lm-comment .commtext {
		font-size: .13rem;
		color: #333;
		margin-top: .1rem;
		max-height: .32rem;
		line-height: .16rem;
	}

	.lm-policy {
		background: #fff;
		margin-top: .1rem;
		padding: .29rem;
		color: #666;
		font-size: .12rem;
		border-bottom: 1px solid rgb(207, 204, 204);
	}

	.lm-policy .lm-commtitle {
		font-size: .16rem;
		line-height: .16rem;
		color: #333;
		position: absolute;
		/* top: 10px; */
		margin-top: -0.15rem;
	}

	.lm-policy img {
		margin-bottom: .2rem;
		width: .2rem;
		height: .17rem;
	}

	.lm-Htime img {
		width: .12rem;
		height: .1rem;
	}

	.lm-Htime p {
		position: relative;
		top: 0.1rem;
		left: .2rem;
	}

	.pet {
		position: absolute;
		/* right: -81px; */
		left: 1.9rem;
		margin-top: -0.3rem;
	}

	.forg {
		position: absolute;
		left: 1.9rem;
		margin-top: -0.3rem;
	}

	.lm-special-word {
		width: 100% !important;
		margin-bottom: 10px;
	}

	.lm-special-word p {
		padding-left: .15rem;
		font-size: .14rem;
		color: #333;
		margin-top: .2rem;
	}

	.lm-policy img {
		width: .12rem;
		position: absolute;
		height: .1rem;
		margin-top: .14rem;
	}

	.lm-add_height {
		width: 100%;
		height: .6rem;
	}

	.special_content {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		margin-left: .15rem;
		padding: 0 !important;
		line-height: .16rem;
		font-size: .12rem;
		color: #666;
		background: none;
	}

	.lm-special-word .special-more {
		font-size: .13rem;
		color: #5ca2f8;
		text-align: center;
		padding: 0;
		padding-top: .05rem;
	}

	.lm-other {
		width: 100%;
	}

	.lm-other p {
		margin-left: .15rem;
	}

	.other_cont {
		height: .58rem;
		overflow: hidden;
	}

	.lm-other .special-more {
		font-size: .13rem;
		color: #5ca2f8;
		text-align: center;
		padding: 0;
		padding-top: .05rem;
	}
</style>
