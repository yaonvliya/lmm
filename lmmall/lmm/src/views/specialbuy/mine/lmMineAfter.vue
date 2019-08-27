<template>
	<div class="background">
        <lmMineAfterHeader></lmMineAfterHeader>
        <lmMineOrder></lmMineOrder>
		<lmMineLine></lmMineLine>
        <lmMineSta></lmMineSta>
        <lmMineYhQb></lmMineYhQb>
        <lmMineCy></lmMineCy>
        <lmMineBanner></lmMineBanner>
        <lmMineQy></lmMineQy>
		<lmMineFotter></lmMineFotter>
        
        
	</div>
</template>

<script>
    import lmMineAfterHeader from '../../components/lmMine/lmMineAfterHeader';
    import lmMineOrder from '../../components/lmMine/lmMineOrder';
    import lmMineLine from '../../components/lmMine/lmMineLine';
    import lmMineSta from '../../components/lmMine/lmMineSta';
    import lmMineYhQb from '../../components/lmMine/lmMineYhQb';
    import lmMineCy from '../../components/lmMine/lmMineCy';
    import lmMineBanner from '../../components/lmMine/lmMineBanner';
    import lmMineQy from '../../components/lmMine/lmMineQy';
    import lmMineFotter from '../../components/lmMine/lmMineFotter';
    
	export default {
        name:"lmMineAfter",
		data() {
			return {
               
			};
		},
		components:{
			lmMineAfterHeader,lmMineOrder,lmMineLine,lmMineSta,lmMineYhQb,lmMineCy,lmMineBanner,lmMineQy,lmMineFotter
		}
	}
</script>

<style scoped>
.background{
	background: #edeef3;
}
</style>