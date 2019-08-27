<template>
	<div class="ma-ma" style="display: none;">
		<div class="pop-container">
			<p class="title fw-me">
				选择价格/星级
			</p>
			<i></i>
			<div class="price-filter">
				<p>
					<span class="fw-me cl-33 fs-14">价格</span>
					<span class="cl-pr fs-14">¥0-不限</span>
				</p>
				<article class="base_line">
					<section class="bl_title"></section>
				</article>
				<ul class="check-box lv-bd-bottom">
					<li class="select">
						<span>不限</span>
					</li>
					<li class="">
						<span>￥150以下</span>
					</li>
					<li class="">
						<span>￥150-300</span>
					</li>
					<li class="">
						<span>￥300-450</span>
					</li>
					<li class="">
						<span>￥450-600</span>
					</li>
					<li class="">
						<span>￥600-750</span>
					</li>
					<li class="">
						<span>￥750-900</span>
					</li>
					<li class="">
						<span>￥900以上</span>
					</li>
				</ul>
				<p>
					<span class="fw-me cl-33 fs-14">星级</span>
					<span class="fs-12 cl-99 fs-14">（可多选）</span>
				</p>
				<ul class="stars check-box">
					<li class="select">
						<span>不限</span>
					</li>
					<li class="">
						<span>二星/简约型</span>
					</li>
					<li class="">
						<span>三星/舒适型</span>
					</li>
					<li class="">
						<span>四星/品质型</span>
					</li>
					<li class="">
						<span>五星/豪华型</span>
					</li>
				</ul>
			</div>
			<div class="filter-btn wi-100">
				<button class="fs-16 cl-66 ba-wh">重置</button>
				<button class="fs-16 cl-wh ba-lv">确定</button>
			</div>
		</div>
		<div class="pop-container" style="display: none;">
			<p class="title fw-me">
				选择入住/离店日期
			</p>
			<i></i>
			<div class="container">
				<div class="outband">
					<p class="fw-li" style="display: none;">该时间为酒店当地时间</p>
					<ul class="week">
						<li class="select">日</li>
						<li>一</li>
						<li>二</li>
						<li>三</li>
						<li>四</li>
						<li>五</li>
						<li class="select">六</li>
					</ul>
				</div>
				<div class="main-area"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'maMa'
	}
</script>

<style scoped>
	button,
	input {
		border: none;
		background: transparent;
	}

	.ba-wh {
		background-color: #fff
	}

	.ba-lv {
		background-image: -webkit-gradient(linear, right top, left top, from(#fe686c), to(#fd3c71));
		background-image: -webkit-linear-gradient(left, #fe686c, #fd3c71);
		background-image: linear-gradient(90deg, #fe686c, #fd3c71)
	}

	.wi-100 {
		width: 100%;
	}

	.fw-me {
		font-weight: 700
	}

	.fs-16 {
		font-size: 16px;
	}

	.fs-14 {
		font-size: 14px;
	}

	.fs-12 {
		font-size: 12px;
	}

	.cl-33 {
		color: #333;
	}

	.cl-66 {
		color: #666;
	}

	.cl-99 {
		color: #999;
	}

	.cl-wh {
		color: #fff
	}

	.cl-pr {
		color: #f63
	}

	.ma-ma {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0
	}

	.pop-container {
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80%;
		z-index: 90;
		background-color: #fff;
		position: fixed;
		overflow: hidden;
		border-radius: 10px 10px 0 0;
		padding-top: 20px
	}

	.pop-container i {
		width: 40px;
		height: 40px;
		position: absolute;
		right: 0;
		top: 0;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAo5JREFUOBHFlMtrU1EQh5uHJq6yScClZuNaDCrVRW5SG5saYp7FhSs3RRAFVyJSKKW4ELFSwaU7IS9t1Sg+Gv+AICI+FmrsxgcmPhaxGNskflNyL7m3SZosxAPDnDNn5ju/Myc3Q0P/aJhUbjqdnjeZTG/i8fg1NTaIT6VSe8ifstlsk+Fw+JNZLW42mzsajcY8B5xTY/36TCbjQdRj8g/WarV1sRrY4XBMsPmUA2Y5/Xy/UHL3UvMIa1gslpFkMvlRajVwIBD4Zbfbx4ktYTMovyAJvQZK97H/EKtj/lgs9kzN18ASCIVCK7gjKH+CgmngU2qi0Wez2f20TqCrKPWj9Hl7jvZ47UGut431AnYIm6ZIdwAHDhN/wOE1s9ns58FfsNaNjmDJKBQK9kqlskDxKDeYSSQS661B6QGU3if+22q1+qLR6EsdsbXoClbh5XL5FvPDwGfxojLPfAXzofRVi7PB9QRLdj6ft1Wr1RzTIPYH+4H5aM9rfNehe7xOWcFgsEb8CgrX8Fvp6d3NoMLZFExPFaC3yS1jS/T3BI93SYp7jZ5gAP56vX6Pvv7kJ+UFNIYtsj7L3uVe4K49RukI0EWKv3N9hYd6K6BisbilVCqlmB7F5mjLGYkbR0fFqBkFeocWfKPAq0Kl2OPxrLrd7iR78qCnyb0qcePYAOYzDXBV+TjK/E69KHpnLBK40+mcIJ4h9xTwi8YcHZiEsRb0q/Q0Eom8Nxaoa0VR1lwu1zHWN6jZxde6Xd0Tr/WYjXGulyX2hUQFpR/aE3vNqd3Jfon667TtJL7ZrngO4OfW9fuGyoF87svAblI/mcvldktMA/PyYaAerr8sG4MMUcg4Ts0w/x26f7lBOP839y9QNRLqu7oy8QAAAABJRU5ErkJggg==) no-repeat 50%;
		background-size: 13px
	}

	.title {
		font-size: 16px;
		text-align: center;
		color: #333;
		position: relative
	}

	.price-filter {
		height: 100%;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}

	.price-filter>p {
		padding-left: 10px
	}

	.base_line {
		width: auto;
		padding: 10px
	}

	.check-box {
		margin: 10px;
		font-size: 0;
		padding: 10px 0
	}

	.check-box li {
		font-size: 12px;
		display: inline-block;
		width: calc(25% - 8px);
		min-height: 26px;
		line-height: 24px;
		margin: 8px 5px;
		text-align: center;
		position: relative;
		color: #333
	}

	.check-box li.select span {
		border-color: #f80;
		position: relative
	}

	.check-box li.select:before {
		content: "";
		width: 0;
		height: 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		border-width: 5px;
		border-color: #f80 transparent transparent #f80;
		border-style: solid;
		position: absolute;
		bottom: 0;
		right: 1px;
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}

	.check-box li.select:after {
		content: "";
		width: 2px;
		height: 4px;
		border-style: solid;
		border-width: 0 1px 1px 0;
		border-color: #fff;
		position: absolute;
		bottom: 2px;
		right: 2px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg)
	}

	.check-box li:nth-child(4n) {
		margin: 8px 0 8px 5px
	}

	.check-box li:first-child,
	.check-box li:nth-child(5n) {
		margin: 8px 5px 8px 0
	}

	.check-box span {
		display: block;
		border: 1px solid #ccc;
		border-radius: 3px
	}

	.check-box span {
		font-size: 10px !important
	}

	.lv-bd-bottom {
		position: relative;
	}

	.lv-bd-bottom:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		border-bottom: 1px solid #DDDDDD;
		width: 100%;
		transform: scaleY(0.5);
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		-webkit-transform-origin: 0 0;
	}

	.stars {
		margin-bottom: 60px
	}

	.filter-btn {
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 0;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, .1)
	}

	.filter-btn button {
		width: 50%;
		height: 50px;
		display: inline-block
	}

	.container {
		width: 100%;
		height: 100%
	}

	.outband {
		background-color: #fff;
		height: 60px
	}

	.outband p {
		font-size: 10px;
		text-align: center;
		color: #999;
		position: relative
	}

	.week {
		background-color: #f4f4f7;
		font-size: 0;
		color: #666;
		height: 30px;
		line-height: 30px;
		border-width: 0;
		margin-top: 10px
	}

	.week li {
		font-size: 11px;
		color: #666;
		height: 30px;
		line-height: 30px;
		display: inline-block;
		width: 14.25%;
		text-align: center;
		position: relative
	}

	.week li.select {
		color: #fe3c71
	}

	.main-area {
		height: 100%;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
</style>
