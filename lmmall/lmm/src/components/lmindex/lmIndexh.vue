<template>
	<div class="indexh">
		<lm-index-search class="search"></lm-index-search>
		<lm-index-search-banner1>
		</lm-index-search-banner1>
		<lm-index-search-banner2 class="banner2"></lm-index-search-banner2>

	</div>
</template>

<script>
	import lmIndexSearch from './lmIndexsearch'
	import banner1 from './banner1'
	import banner2 from './banner2'
	export default{
		name:'lmIndexh',
		components: {
			'lm-index-search':lmIndexSearch,
			'lm-index-search-banner1':banner1,
			'lm-index-search-banner2':banner2
		},
	}
</script>

<style scoped>
	.indexh{
		position:relative;
		height:1.76rem;
		/* background: pink; */
	}
	
	
</style>
