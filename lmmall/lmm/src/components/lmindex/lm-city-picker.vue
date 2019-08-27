<template>
  <!-- 城市定位 -->
  <div class="city-picker">
    <!-- 头部搜索框 -->
    <div class="city-picker-header">
      <span class="search-head-back"></span>
      <input type="text" placeholder="出发城市" class="city-picker-search" />
    </div>
    <!-- 当前定位城市 -->
    <div class="city-picker-section">
        <h3>当前定位城市</h3>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.city-picker {
  width: 100%;
  /* padding: 0.1rem 0.14rem 0.1rem 0.45rem; */
  background: pink;
  background: #f6f6fa;
}
/* 头部搜索框 */
.city-picker-header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  height: 0.44rem;
  background: #fff;
  display: flex;
}
.search-head-back {
  position: absolute;
  top: 0.1rem;
  left: 0.05rem;
  width: 0.35rem;
  height: 0.3rem;
  background: url(../../static/back1.png) 50% no-repeat;
  background-size: 0.1rem;
}
.city-picker-search {
  margin-left: 0.45rem;
  height: 0.28rem;
  padding-left: 0.3rem;
  background: #eeeef5;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.14rem;
  flex: 1;
  margin-right: 0.1rem;
  vertical-align: middle;
  margin-top:0.1rem;
  outline: none;
}
/* 当前定位城市 */
.city-picker-section{
    height: 3rem;
    margin-top:0.5rem;
}
</style>