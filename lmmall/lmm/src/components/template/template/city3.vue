<template>
	<div class="city3" @click="test">
		<div class="city2 banner-city2">
			<span class="font">
				选择出发地：
				<i class="i-city">华东</i>
			</span>
			<span class="span-city">其他城市</span>
		</div>
		<ul class="city-list">
				<li class="ovo">华东</li>
				<li>华南</li>
				<li>华北</li>
				<li>华西</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'city3',
		methods:{
			test(){
				if($(".city-list").css("display")=="none"){
						$(".city-list").show();
					}else{
						$(".city-list").hide();            
					}
			}
		}
	}
</script>

<style scoped>
.city3{ overflow: hidden;}
.city3 .city-list{ background: #fff; padding:10px; overflow: hidden; }
.city3 .city-list li{ width: 21%;  float: left; border: 1px solid #e6e6e6; margin-left: 2.6%; color: #999; font-size: 14px; text-align: center; height: 24px; line-height: 24px;}
.city3 .city-list li:nth-of-type(1){ margin-left: 0;}
.city3 .city-list li:nth-of-type(4n+1){margin-left: 0;}
.city-list{ display: none;}
.city-list{width: 100%;}
.city3 .city-list li.select{ color: #fff;}
.city3{ background: #3c2277;}
.ovo{background: #3c2277;}
.city2 .font{ float: left; background: url("//pics.lvjs.com.cn/mobile/zt/templates/template4/img/address.png")left center no-repeat; background-size:10px 12px; padding-left: 13px; font-size: 16px; color: white;}
.span-city{font-size: 16px; color: orange; float: right;padding-right: 17px;}
.span-city:after{content: "";position: absolute; top: 293px; right: 5px; width: 7px; height: 6px; border-left:2px solid orange;border-bottom:2px solid orange; -webkit-transform: rotate(-45deg);transform:rotate(-45deg);}
</style>
