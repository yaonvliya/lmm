<template>
	<div class="background">
        <lmMineHeader></lmMineHeader>
        <lmMineOrder></lmMineOrder>
		<lmMineLine></lmMineLine>
        <lmMineSta></lmMineSta>
        <lmMineYhQb></lmMineYhQb>
        <lmMineCy></lmMineCy>
		<lmMineQy></lmMineQy>
		<lmMineFotter></lmMineFotter>
        
	</div>
</template>

<script>
    import lmMineHeader from '../../components/lmMine/lmMineHeader';
    import lmMineOrder from '../../components/lmMine/lmMineOrder';
    import lmMineLine from '../../components/lmMine/lmMineLine';
    import lmMineSta from '../../components/lmMine/lmMineSta';
    import lmMineYhQb from '../../components/lmMine/lmMineYhQb';
	import lmMineCy from '../../components/lmMine/lmMineCy';
	import lmMineQy from '../../components/lmMine/lmMineQy';
	import lmMineFotter from '../../components/lmMine/lmMineFotter';
	
	export default {
		name:"lmMine",
		data() {
			return {
                
			};
		},
		components:{
			lmMineHeader,lmMineOrder,lmMineLine,lmMineSta,lmMineYhQb,lmMineCy,lmMineQy,lmMineFotter
		}
	}
</script>

<style scoped>
.background{
	background: #edeef3;
}
</style>