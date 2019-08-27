<template>
	
	<div class="index" >
		
		<lm-indexh></lm-indexh>
		<lm-indexmp :arr="classarr" :place="place"></lm-indexmp>
		<lm-indext :arr="tourarr"></lm-indext>
		<lm-indexarr :arr="morearr"></lm-indexarr>
		<lm-indexlb :arr="nowarr"></lm-indexlb>
		<lm-indexhc></lm-indexhc>
		<lm-indexha></lm-indexha>
		<lm-indexding></lm-indexding>
		<lm-indexml></lm-indexml>
		<!-- <lm-indexf></lm-indexf> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import lmIndexh from '../../components/lmIndex/lmIndexh'
	// import lmIndexf from '../../components/lmIndex/footer'
	import lmIndexmp from '../../components/lmIndex/mpjd'
	import lmIndext from '../../components/lmIndex/traval'
	import lmIndexarr from '../../components/lmIndex/arrive'
	import lmIndexlb from '../../components/lmIndex/lvbang'
	import lmIndexhc from '../../components/lmIndex/hotcity'
	import lmIndexha from '../../components/lmIndex/hotactivity'
	import lmIndexml from '../../components/lmIndex/mylike'
	import lmIndexding from '../../components/lmIndex/ding'
	

	export default{

		name:'lmindex',
		components: {
			'lm-indexh':lmIndexh,
			// 'lm-indexf':lmIndexf,
			'lm-indexmp':lmIndexmp,
			'lm-indext':lmIndext,
			'lm-indexarr':lmIndexarr,
			'lm-indexlb':lmIndexlb,
			'lm-indexhc':lmIndexhc,
			'lm-indexha':lmIndexha,
			'lm-indexml':lmIndexml,
			'lm-indexding':lmIndexding,
			// 'loading':loading

		},
		data() {
			return {
				classarr:[
					{"imgurl":"static/img/index/01cla001.png","linkto":"/entranceticket"},
					{"imgurl":"static/img/index/01cla002.png","linkto":"/scenichotel"},
					{"imgurl":"static/img/index/01cla003.png","linkto":"/scenichotel"},
					{"imgurl":"static/img/index/01cla004.png","linkto":"/find"},
					{"imgurl":"static/img/index/01cla005.png","linkto":"/find","title":"限量抢"}
				],
				tourarr:[
					{"title":"周边游","desc":"周末去哪儿","linkto":"/find"},
					{"title":"自驾游","desc":"随心度假","linkto":"/find"},
					{"title":"亲子游","desc":"夏令营特惠","linkto":"/find"},
					{"title":"火车票","desc":"含汽车票","linkto":"/find"},
					{"title":"国内游","desc":"美景如画","linkto":"/find"},
					{"title":"跟团游","desc":"省心出行","linkto":"/find"},
					{"title":"自由行","desc":"随心游玩","linkto":"/find"},
					{"title":"机票","desc":"轻松出行","linkto":"/find"},
					{"title":"出境游","desc":"玩遍全球","linkto":"/find"},
					{"title":"邮轮","desc":"豪华出游","linkto":"/find"},
					{"title":"签证","desc":"成功率高","linkto":"/find"},
					{"title":"先游后付","desc":"玩好再说","linkto":"/find"}
				],
				morearr:[
					{"imgurl":"static/img/index/01more001.png","desc":"定制游","linkto":"/find"},
					{"imgurl":"static/img/index/01more002.png","desc":"银行特惠","linkto":"/find"},
					{"imgurl":"static/img/index/01more003.png","smallimgurl":"../../static/img/index/01more006.png","desc":"借钱·分期","linkto":"/find"},
					{"imgurl":"static/img/index/01more004.png","desc":"长隆旅游","linkto":"/find"},
					{"imgurl":"static/img/index/01more005.png","desc":"更多","linkto":"/find"}
				],
				nowarr:[
					{"imgurl":"static/img/index/01now001.png","linkto":"/find"},
					{"imgurl":"static/img/index/01now002.png","linkto":"/find"},
					{"imgurl":"static/img/index/01now003.png","linkto":"/find"}
				],
			};
		},

	}
</script>

<style scoped>
	@import '../../assets/css/swiper.min.css';
	
</style>

