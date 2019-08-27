<template>
	<header>
		<div class="xasearch">
			<span class="iconfont iconwhere">你想去哪里？</span>
		</div>
		<lm-findnavigation></lm-findnavigation>

	</header>
</template>

<script>
	import lmFindnavigation from './lmFindnavigation'
	export default{
		name:'lmFindsearch',
		components: {
			lmFindnavigation
		},
	}
</script>

<style>
	@import url("../../assets/lmfind/css/index.css");
	@import url("../../assets/lmfind/css/font_1347034_b5jykmliymc/iconfont.css");
</style>
