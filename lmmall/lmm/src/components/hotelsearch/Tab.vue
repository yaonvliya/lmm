<template>
	<ul class="tab wi-100 po-re flx cl-33 ov-hi">
		<li class="fs-16 ta-ce flx-1">
			<span class="fw-me">国内酒店</span>
		</li>
		<li class="fs-16 ta-ce flx-1">
			<span class="">国际酒店</span>
		</li>
		<li class="underline po-ab ba-wh"></li>
	</ul>
</template>

<script>
	export default{
		name:'Tab',
	}
</script>

<style scoped>
.wi-100{width: 100%;}
.po-re{position:relative}
.flx{display:-webkit-box;display:-webkit-flex;display:flex}
.flx-1{-webkit-box-flex:1;-webkit-flex:1;flex:1}
.cl-33{color: #333;}
.ov-hi{overflow:hidden}
.fs-16{font-size: 16px;}
.ta-ce{text-align:center}
.fw-me{font-weight:700}
.active{font-weight:700}
.tab{height:42px;line-height:42px;z-index:10}
.po-ab{position:absolute}
.ba-wh{background-color:#fff}
.underline{width:50%;top:0;left:0;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;height:43px;line-height:43px;border-radius:0 5px 0 0;box-shadow:0 0 10px 0 rgba(0,0,0,.2);-webkit-transform:skewX(23deg) scaleX(1.1) translateX(0) translateZ(0);transform:skewX(23deg) scaleX(1.1) translateX(0) translateZ(0);will-change:transform;z-index:-1}
.tab li.underline{width:50%;top:0;left:0;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;height:43px;line-height:43px;border-radius:0 5px 0 0;box-shadow:0 0 10px 0 rgba(0,0,0,.2);-webkit-transform:skewX(23deg) scaleX(1.1) translateX(0) translateZ(0);transform:skewX(23deg) scaleX(1.1) translateX(0) translateZ(0);will-change:transform;z-index:-1}
.tab li.underline.for{-webkit-transform:skewX(-23deg) scaleX(1.1) translateX(100%) translateZ(0);transform:skewX(-23deg) scaleX(1.1) translateX(100%) translateZ(0);border-radius:5px 0 0 0}
</style>
