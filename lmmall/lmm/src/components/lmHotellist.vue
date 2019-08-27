<template>
  <div class="lm-hotel-list-search">
    <div class="lm-hotel-point">
      <img
        src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelList/img/back.png"
        alt
        class="lm-back" @click="back()"
      />
      <img
        src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelList/img/map.png"
        alt
        class="lm-map"
      />
      <img
        src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/hotelList/img/ls.png"
        alt
        class="lm-ls"
      />
      <p class="lm-search">
        <span>
          <span>
            住
            <i>08-12</i>
          </span>
          <br />
          <span>
            离
            <i>08-13</i>
          </span>
        </span>
        <span class="lm-s">
          <img src="../assets/img/img/1.png" />
          关键字/酒店名/位置/品牌
        </span>
      </p>
    </div>
    <div class="lm-dropdown">
      <div class="lm-menu">
        综合排序
        <span class="nabla"></span>
      </div>
      <div class="lm-menu">
        位置区域
        <span class="nabla"></span>
      </div>
      <div class="lm-menu">
        价格星级
        <span class="nabla"></span>
      </div>
      <div class="lm-menu">
        更多筛选
        <span class="nabla"></span>
      </div>
    </div>
    <div class="lm-free">
      <ul class="lm-free-li">
        <li>免费升房</li>
        <li>优惠</li>
        <li>立即确认</li>
        <li>大床</li>
        <li>双床</li>
        <li>免费</li>
        <li>窗户</li>
        <li>含早</li>
        <li>高评分</li>
      </ul>
    </div>
    <div class="lm-img">
      <img src="../assets/img/img/2.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "lmHotellist",
	methods:{
		back(){
			this.$router.back();
		}
	}
};
</script>

<style scoped>
i {
  font-style: normal;
  color: #74a0d1;
}
.lm-hotel-list-search {
  width: 100%;
  /* height: 1.76rem; */
}
.lm-hotel-point {
  width: 100%;
  height: 0.69rem;
  position: relative;
}
.lm-hotel-point img {
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.15rem;
}
.lm-back {
  left: 0.15rem;
}
.lm-map {
  right:0.45rem;
}
.lm-ls {
  right: 0.1rem;
}
.lm-search {
  position: absolute;
  width: 2.4rem;
  height: 0.35rem;
  left: 0.5rem;
  top: 0.1rem;
  background: #eeeff4;
  border-radius: 0.3rem;
}
.lm-search span {
  display: block;
  height: 0.01rem;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  position: relative;
}
.lm-s {
  position: absolute;
  left: 0.8rem;
  margin-top: 0.1rem;
}
.lm-s img {
  display: block;
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  left: -0.23rem;
  top: -0.16rem;
}
.lm-dropdown {
  height: 0.5rem;
  display: flex;
  flex: 1;
}
.lm-menu {
  font-size: 0.16rem;
  line-height: 0.5rem;
  padding-left: 0.22rem;
  font-family: "微软雅黑";
  margin-top: -0.22rem;
}
.nabla {
  width: 0px;
  height: 0px;
  border-top: 4px solid black;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  position: absolute;
  top: 0.69rem;
  margin-left: 0.7rem;
}
.lm-free {
  width: 100%;
  height: 0.6rem;
  margin-top: -0.38rem;
}
.lm-free ul {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  font-size: 0;
  line-height: 0;
  display: flex;
}
.lm-free li {
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  margin: 8px 0 8px 10px;
  color: #666;
  background: #f8f8fb;
  border-radius: 100px;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}
.lm-img {
  height: 0.5rem;
  background: paleturquoise;
  margin-top: -0.16rem;
}
.lm-img img {
  width: 100%;
}
.up {
  color: #ca0002;
}
</style>
