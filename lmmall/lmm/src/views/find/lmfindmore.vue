<template>
	<div>
		<lm-findtravel></lm-findtravel>
		<lm-findimpression></lm-findimpression>
		<lm-findtop></lm-findtop>
		<lm-findnotice></lm-findnotice>
		<lm-findpractical></lm-findpractical>
		<lm-findtraffic></lm-findtraffic>
		<lm-findconsume></lm-findconsume>
	</div>
</template>

<script scoped>
	import lmFindtravel from '../../components/lmFind/lmFindtravel'
	import lmFindimpression from '../../components/lmFind/lmFindimpression'
	import lmFindtop from '../../components/lmFind/lmFindtop'
	import lmFindnotice from '../../components/lmFind/lmFindnotice'
	import lmFindpractical from '../../components/lmFind/lmFindpractical'
	import lmFindtraffic from '../../components/lmFind/lmFindtraffic'
	import lmFindconsume from '../../components/lmFind/lmFindconsume'
	export default {
		name: 'findmore',
		components: {
			"lm-findtravel": lmFindtravel,
			"lm-findimpression": lmFindimpression,
			"lm-findtop":lmFindtop,
			"lm-findnotice":lmFindnotice,
			"lm-findpractical":lmFindpractical,
			"lm-findtraffic":lmFindtraffic,
			"lm-findconsume":lmFindconsume,
		}
	}
</script>

<style>
</style>
