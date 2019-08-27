<template>
	<div>
		<lm-indexdac></lm-indexdac>
		<lm-indexdsr></lm-indexdsr>
		<lm-indexdfp></lm-indexdfp>
		<lm-indexdfk></lm-indexdfk>
	</div>
</template>

<script scoped>
	import lmIndexac from '../../components/hotel/addclient'
	import lmIndexsr from '../../components/hotel/addclientsr'
	import lmIndexfp from '../../components/hotel/addclientfp'
	import lmIndexfk from '../../components/hotel/addclientfk'

	export default{
		name:'lmIndexadd',
		components: {
			'lm-indexdac':lmIndexac,
			'lm-indexdsr':lmIndexsr,
			'lm-indexdfp':lmIndexfp,
			'lm-indexdfk':lmIndexfk,
		},
	}
</script>

<style scoped="scoped">
</style>
