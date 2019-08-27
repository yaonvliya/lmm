<template>
	<div>
		<lm-specialheader></lm-specialheader>
		<lm-specialbanner></lm-specialbanner>
		<lm-specialnav></lm-specialnav>
		<lm-specialhot></lm-specialhot>
		<lm-speciladestination></lm-speciladestination>
		<lm-specilarecommend></lm-specilarecommend>
	</div>
</template>

<script>
	import lmspecialheader from '../../components/lmspecial/lmspecialheader'
	import lmspecialbanner from '../../components/lmspecial/lmspecialbanner'
	import lmspecialnav from '../../components/lmspecial/lmspecialnav'
	import lmspecialhot from '../../components/lmspecial/lmspecialhot'
	import lmspeciladestination from '../../components/lmspecial/lmspeciladestination'
	import lmspecilarecommend from '../../components/lmspecial/lmspecilarecommend'
	export default {
		name: 'lmspecial',
		components: {
			"lm-specialheader": lmspecialheader,
			"lm-specialbanner":lmspecialbanner,
			"lm-specialnav":lmspecialnav,
			"lm-specialhot":lmspecialhot,
			"lm-speciladestination":lmspeciladestination,
			"lm-specilarecommend":lmspecilarecommend,
		}
	}
</script>

<style scoped>
</style>
