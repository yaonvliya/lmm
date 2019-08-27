<template>
	<div>
		<lm-findsearch></lm-findsearch>
		<!-- <lm-findnavigation></lm-findnavigation> -->
		<lm-finddetails></lm-finddetails>
		<lm-findbishu></lm-findbishu>
	</div>
</template>

<script scoped>
	import lmFindsearch from '../../components/lmFind/lmFindsearch'
	import lmFindnavigation from '../../components/lmFind/lmFindnavigation'
	import lmFinddetails from '../../components/lmFind/lmFinddetails'
	import lmFindbishu from '../../components/lmFind/lmFindbishu'
	export default {
		name: 'findindex',
		components: {
			"lm-findsearch": lmFindsearch,
			"lm-findnavigation": lmFindnavigation,
			"lm-finddetails": lmFinddetails,
			"lm-findbishu":lmFindbishu,

		}
	}
</script>

<style>

</style>
