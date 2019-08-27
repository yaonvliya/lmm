<template>
	<div class="class2">
		<div >
			<div class="lm-guesslike" @click='select()'>
				<span class="lm-guesstag">猜你喜欢</span>
				<img :src="arrc.hotel.roomtypesimgurl" alt="">
			
				<div class="lm-info-area">
					<p class="name text-home">{{arrc.hotel.roomtypesname}}
						<i>详情</i>
					</p>
					<p class="attr-1">
						<span>无早</span>
						<span>双床</span>
						<span>不可修改</span>
					</p>
					<p class="attr-2">
						<!-- <span>有窗</span>
					<span>35m²</span>
					<span>1-5</span> -->
						{{arrc.hotel.roomdetail}}
					</p>
					<p class="tags">
						<span>券</span>
					</p>
				</div>
				<div class="lm-price-area">
					<p>
						<i>￥</i>
						<i class="price">{{arrc.hotel.roomprice}} </i>
					</p>
				</div>
			
				<button class="lm-order-area">
					<router-link :to="{name:'lmIndexadd'}">
						<p class="bookup">预订</p>
					</router-link>
					<p class="bookdown">预付</p>
				</button>
			
			</div>
			<ul>
				<li class="lm-bdt-img" :hotelroom="arrc.hotel.roomtypessmall">
					<div class="guide">
						<img src="https://pics.lvjs.com.cn//uploads/pc/place2/20190115/images--200n0a0000004jijuD3E8-R-550-412-R20_180_120.jpg"
						 alt="" class="">
						<div class="lm-info-area">
							<p class="name text-home">{{arrc.hotel.hotelroom.roomtypesnamesname}}
								<i>详情</i>
							</p>
							<p class="attr-1">
								<!-- 	<span>无早</span>
							<span>双床</span>
							<span>不可修改</span> -->
								{{arrc.hotel.hotelroom.roomdetail}}
							</p>
							<p class="attr-2">
								<span>有窗</span>
								<span>35m²</span>
								<span>1-5</span>
							</p>
							<p class="tags">
								<span>券</span>
							</p>
						</div>
						<div class="lm-price-area">
							<p>
								<i>￥</i>
								<i class="price"><!-- {{arrc.hotel.hotelroom.roomprice}} --></i>
								<span class="qi">起</span>
								<img src="../assets/img/img/p.png" alt="">
							</p>
						</div>
					</div>
					<ul></ul>
				</li>
				
			</ul>
		</div>	
	</div>
	
	
	

</template>
<script>
	

	export default {
		name: 'hoteldetailroom',
		props:['arrc'],
		data() {
			return {
			}
		},
		
		methods: {
			back() {
				this.$router.back();
			},
			select() {
				$(".choose").css({
					"display": "block",
				});
				console.log(hotels);
		}
	},
	}
</script>
<style scoped>
	.class1 {
		width: 100%;
		height: 700px;
		background: #0000FF;
	}
	.tjhotel{
		margin-top:-137px;
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
		background: url(https://pics.lvjs.com.cn//uploads/pc/place2/20181117/images-2002050000000mb6q88DD-R-550-412-R20_480_320.jpg) no-repeat;
	}

	.lm-header img {
		width: .35rem;
		height: .35rem;
		position: absolute;
		top: .1rem;
	}

	.lm-star {
		right: 0.45rem;
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
		border-top: 1px solid #e4e4e4;
		padding: .15rem 0 -0.5rem 0rem;
		min-height: 1.04rem;
		border-bottom: 1px solid #dadada;
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
		/* width: 100%; */
		min-height: .74rem;
		/* left: .7rem; */
		/* right: -17px; */
		margin-left: .68rem;
		margin-top: .6rem;
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
		position: relative;
		margin-left: 30px;
		margin-top: -1.18rem;
	}

	.text-home {
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.lm-info-area i {
		position: absolute;
		right: 0;
		bottom: .02rem;
		display: inline-block;
		line-height: .12rem;
		width: .32rem;
		font-size: .12rem;
		padding-right: .08rem;
		color: #999;
		margin-left: .05rem;
	}

	.attr-1,
	.attr-2 {
		line-height: .12rem;
		font-size: .12rem;
		color: #333;
		margin-top: .08rem;
	}

	.attr-1 span,
	.attr-2 span,
	.tags span {
		padding-right: .02rem;
		position: relative;
	}

	.attr-1 span {
		top: 1.25rem;
	}

	.attr-2 span {
		top: 2.5rem;
	}

	.tags span {
		top: 3.72rem;
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
		position: absolute;
		text-align: right;
		right: .77rem;
		margin-top: -3rem;
		-webkit-transform: translateY(-50%);
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
		position: relative;
		top: 3.6rem;
		margin-left: -0.3rem;
	}

	.lm-price-area .price {
		font-size: .21rem;
		font-weight: 500;
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
		top: .4rem;
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
