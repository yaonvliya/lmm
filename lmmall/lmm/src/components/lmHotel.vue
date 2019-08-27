<template>
  <div>
    <lm-hotellist></lm-hotellist>
    <lm-list></lm-list>
</div>
</template>
<script>
import lmHotellist from '../components/lmHotellist'
import lmList from '../components/lmList'

export default {
	name:'lmhotels',
components:{
  lmHotellist,
  lmList
}
}
</script>
<style scoped>

</style>
