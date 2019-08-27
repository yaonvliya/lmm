<template>
	<div class="index">
		<router-view></router-view>
		<lm-indexf></lm-indexf>
		
	</div>
</template>

<script>
	import lmIndexf from '../components/lmIndex/footer'


	export default{

		name:'lmnewindex',
		components: {
			'lm-indexf':lmIndexf
		},
	}
</script>

<style scoped>
	@import '../assets/css/swiper.min.css';
	
</style>

