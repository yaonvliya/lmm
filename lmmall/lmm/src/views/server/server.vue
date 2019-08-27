<template>
	<div class="server">
		<lm-servero></lm-servero>
		<lm-serverh></lm-serverh>
		<lm-serverf></lm-serverf>
		<!-- <lm-indexf></lm-indexf> -->
	</div>
</template>

<script>
	import lmServero from '../../components/lmServer/lmServero'
	import lmServerh from '../../components/lmServer/lmServerh'
	import lmServerf from '../../components/lmServer/lmServerf'
	// import lmIndexf from '../../components/lmIndex/footer'
	
	export default{

		name:'lmsever',
		components: {
			'lm-servero':lmServero,
			'lm-serverh':lmServerh,
			'lm-serverf':lmServerf,
			// 'lm-indexf':lmIndexf,
		},
	}
</script>
	
<style scoped>
	.server{
		background:#f1effb;
	}
</style>

