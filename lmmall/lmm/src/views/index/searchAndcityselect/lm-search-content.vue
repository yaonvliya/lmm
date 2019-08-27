<template>
  <div>
    <lm-search-heade></lm-search-heade>
    <lm-colligate-search></lm-colligate-search>
  </div>
</template>
<script>
//引入两个组件
import lmSearchHeade from "../../../components/lmindex/lm-search-heade";
import lmColligateSearch from "../../../components/lmindex/lm-colligate-search";
export default {
	name:'searchcontent',
  components: {
    lmSearchHeade,
    lmColligateSearch
  }
};
</script>
<style scoped>
</style>