<template>
	<div>
		<lm-findheader></lm-findheader>
		<lm-findnav></lm-findnav>
		<lm-findguide></lm-findguide>
		<lm-findhotlist></lm-findhotlist>
		<lm-findwillplay></lm-findwillplay>
	</div>
</template>

<script scoped>
	import lmFindheader from '../../components/lmFind/lmFindhader'
	import lmFindnav from '../../components/lmFind/lmFindnav'
	import lmFindguide from '../../components/lmFind/lmFindguide'
	import lmFindhotlist from '../../components/lmFind/lmFindhotlist'
	import lmFindwillplay from '../../components/lmFind/lmFindwillplay'
	export default{
		name:'find',
		components:{
		"lm-findheader":lmFindheader,
		"lm-findnav":lmFindnav,
		"lm-findguide":lmFindguide,
		"lm-findhotlist":lmFindhotlist,
		"lm-findwillplay":lmFindwillplay,
		}
	}
</script>

<style>
	
</style>
