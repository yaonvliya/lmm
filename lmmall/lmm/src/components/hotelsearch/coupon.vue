<template>
	<section class="coupon sec ba-wh">
		<p>
			<span class="fw-me cl-33 fs-16">— 优惠福利 —</span>
		</p>
		<div class="coupons po-re">
			<div class="left po-re">
				<p class="fs-14 cl-pr">
					<span class="fs-24">￥20</span>
				</p>
				<div class="back"></div>
				<p class="fs-10 cl-wh">
					<span>满699减</span>
				</p>
			</div>
			<div class="right">
				<p class="fs-14 cl-33 fw-me">【2019暑价好玩礼】酒店满699减20元</p>
				<p class="fs-10 cl-66">2019.07.01-2019.08.31</p>
				<button class="po-ab ba-wh cl-pr">立即领取</button>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name:'coupon'
	}
</script>

<style scoped>
.coupon{height:140px}
@media screen and (max-width:320px){.coupons>.right{padding-left:5px}}
.coupons>.right button{width:85px;height:28px;border-radius:28px;border:1px solid #f80;right:3px;top:23px}
.coupons>.right>p{max-height:40px;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.coupons>.right{padding:10px 0 0 15px;width:calc(100% - 200px)}
.coupons>.left p:last-child span{padding:0 5px;background-image:-webkit-linear-gradient(left,#ffb626,#ff9a26);background-image:linear-gradient(90deg,#ffb626,#ff9a26);border-radius:2px}
.coupons>.left p{position:relative;z-index:1;text-align:center}
.coupons>.left>.back:after{content:"\5238";width:50px;height:50px;border-radius:50px;position:absolute;top:-10px;left:-14px;font-size:35px;color:#ffddad;border:3px solid #ffe5c1;text-align:center;line-height:44px;box-shadow:0 0 0 4px #ffddad,inset 0 0 0 2px #ffddad}
.coupons>.left>.back{width:90px;height:70px;position:absolute;top:0;left:0;z-index:0;overflow:hidden}
.coupons>.left:after{top:auto;bottom:-5px;-webkit-transform:rotate(225deg);transform:rotate(225deg);box-shadow:inset -2px -2px 4px 0 #fdf5e6}
.coupons>.left:after,.coupons>.left:before{content:"";width:8px;height:8px;border-radius:50%;background-color:#fff;position:absolute;right:-5px;top:-4px;border-color:#f3ead8;border-width:0 1px 1px 0;border-style:solid;-webkit-transform:rotate(45deg);transform:rotate(45deg)}
.coupons>.left{width:90px;background-color:#ffe5c1;border-radius:5px;border-right:1px dashed #f3d3a6;padding-top:15px}
.coupons>div{display:inline-block;height:55px;vertical-align:top}
.coupons.received{-webkit-filter:grayscale(100);filter:grayscale(100)}
.coupons{height:70px;background-color:#fffaf2;border-radius:5px;border:1px solid #f3ead8;box-shadow:2px 2px 3px 0 #fdf5e6}
section.sec{margin-top:10px;padding:0 10px}
section.sec>p{text-align:center;position:relative;line-height:50px}
section.sec span:nth-child(2){position:absolute;right:0;top:0}
.ba-wh{background-color:#fff}
.fw-me{font-weight:700}
.fs-24{font-size: 24px;}
.fs-16{font-size: 16px;}
.fs-14{font-size: 15px;}
.fs-10{font-size: 10px;}
.cl-33{color: #333;}
.cl-66{color: #666;}
.cl-wh{color:#fff}
.po-re{position:relative}
.po-ab{position:absolute}
.cl-pr{color:#f63}
</style>
