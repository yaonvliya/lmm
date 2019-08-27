<template>
	<div class="hotelSearch">
		<lv-header></lv-header>
		<m-banner></m-banner>
		<Tab></Tab>
		<add></add>
		<buTTon></buTTon>
		<upgrade></upgrade>
		<coupon></coupon>
		<recommend></recommend>
		<endorsement></endorsement>
		<ma-ma></ma-ma>
		<location></location>
		
	</div>
</template>

<script scoped>
	import lvHeader from "../../components/hotelsearch/lvHeader"
	import mBanner from "../../components/hotelsearch/mBanner"
	import Tab from "../../components/hotelsearch/Tab"
	import add from "../../components/hotelsearch/add"
	import buTTon from "../../components/hotelsearch/buTTon"
	import upgrade from "../../components/hotelsearch/upgrade"
	import coupon from "../../components/hotelsearch/coupon"
	import recommend from "../../components/hotelsearch/recommend"
	import endorsement from "../../components/hotelsearch/endorsement"
	import maMa from "../../components/hotelsearch/maMa"
	import location from "../../components/hotelsearch/location"
	

	export default{
		name:"hotelsearch",
		components:{
			"lv-header":lvHeader,
			"m-banner":mBanner,
			"Tab":Tab,
			"add":add,
			"buTTon":buTTon,
			"upgrade":upgrade,
			"coupon":coupon,
			"recommend":recommend,
			"endorsement":endorsement,
			"ma-ma":maMa,
			"location":location,
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
.hotelSearch{background: #gary;}
</style>
