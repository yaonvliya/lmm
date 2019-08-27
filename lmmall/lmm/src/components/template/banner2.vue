<template>
	<div class="banner2">
		<ul class="hongbao hongbao2 two" style="display: block;">
			<li style="margin-left: 8px; margin-top: 10px;">
				<img src="../../assets/img/template/1562758116011.jpg"alt="">
			</li>
			<li>
				<img src="../../assets/img/template/1562758193978.jpg"alt="">
			</li>
		</ul>
    </div>
</template>

<script>
	export default{
		name:'banner2'
	}
</script>

<style scoped>
.banner2 .hongbao2 img{ height: 85px;}
.banner2 .hongbao{overflow-x:auto; white-space: nowrap; font-size: 0;-webkit-overflow-scrolling:touch;}
.banner2 .hongbao li{position: relative; display: inline-block;}
.banner2 .hongbao li.select:after{ position: absolute; content: ""; left: 0; right: 0; height: 100%; top: 0; background: rgba(0,0,0,.7) url("//pics.lvjs.com.cn/mobile/zt/templates/template4/img/yi.png") center center no-repeat; background-size: 7rem;}
.banner2 .hongbao.two li{ width: 47%;}
.banner2 .hongbao.two li:nth-of-type(1){ margin-right: 3%;}
.banner2 .hongbao.three li{ width: 37%; margin-right: 3%;}
.banner2 .hongbao.three li:nth-last-of-type(1){margin-right: 0;}
</style>
