<template>
  <div class="colligateSearch">
    <!-- 搜索推荐 -->
    <div class="colligate-recommend">
      <h3>搜索推荐</h3>
      <dl class="recommend-line">
        <dt class="icon-highlight">
          <img src="../../assets/img/searchaddress/icon1.png" />
          <span>推荐</span>
        </dt>
        <div class="recommend-line-right">
          <dd>三亚</dd>
          <dd>成都</dd>
          <dd>北京</dd>
          <dd>云南</dd>
          <dd>青岛</dd>
          <dd>华山</dd>
          <dd>青岛</dd>
          <dd>三亚</dd>
          <dd>成都</dd>
          <dd>北京</dd>
          <dd>云南</dd>
          <dd>青岛</dd>
          <dd>华山</dd>
          <dd>青岛</dd>
        </div>
      </dl>
      <dl class="recommend-line">
        <dt>
          <img src="../../assets/img/searchaddress/icon2.png" />
          <span>活动</span>
        </dt>
        <div class="recommend-line-right">
          <dd>暑期大促</dd>
          <dd>长隆特惠</dd>
        </div>
      </dl>
      <dl class="recommend-line">
        <dt>
          <img src="../../assets/img/searchaddress/icon3.png" />
          <span>打卡</span>
        </dt>
        <div class="recommend-line-right">
          <dd>游乐园</dd>
          <dd>动物园</dd>
          <dd>研学游</dd>
          <dd>亲子酒店</dd>
        </div>
      </dl>
    </div>
    <!-- 西安热搜 -->
    <div class="colligate-hot">
      <h3>西安热搜</h3>
      <div>
        <dd>秦始皇陵兵马俑</dd>
        <dd>西安华夏文旅水世界</dd>
        <dd>华清宫</dd>
        <dd>西安皇城豪门酒店</dd>
        <dd>西安成功国际酒店</dd>
      </div>
    </div>
    <!-- 搜索-banner -->
    <div class="colligate-banner">
        <img src="../../assets/img/searchaddress/search-banner.jpg">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.colligateSearch {
  padding: 0 0 0.2rem 0.12rem;
  margin-top: 0.5rem;
}
/* 搜索推荐 */
.colligate-recommend {
  position: relative;
  padding-bottom: 0.1rem;
}
.colligateSearch > div {
  padding-right: 0.12rem;
}
.colligateSearch h3 {
  font-size: 0.13rem;
  color: #666;
  line-height: initial;
  padding: 0.2rem 0 0.1rem;
}
.recommend-line {
  display: flex;
  margin-bottom: 0.13rem;
}
.recommend-line dt {
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(255, 207, 125, 0.25);
  border-radius: 0.05rem;
  position: relative;
  margin-right: 0.1rem;
}
.recommend-line dt img {
  width: 0.3rem;
  height: 0.3rem;
}
.recommend-line .icon-highlight {
  background-image: linear-gradient(270deg, #ff7800 0, #f90 100%);
}
.recommend-line .icon-highlight span {
  color: #fff;
}
.recommend-line dt span {
  width: 0.6rem;
  position: absolute;
  left: -0.15rem;
  bottom: -0.04rem;
  font-size: 0.18rem;
  transform: scale(0.5);
  text-align: center;
  color: #f80;
}
.colligateSearch dd {
  float: left;
  font-size: 0.13rem;
  color: #333;
  background: #f6f6fa;
  border-radius: 0.05rem;
  margin: 0 0.05rem 0.1rem 0;
  padding: 0.05rem 0.1rem;
  max-width: 100%;
}
.recommend-line .recommend-line-right {
  overflow: hidden;
  max-height: 0.35rem;
}
.colligate-hot div {
  max-height: 0.8rem;
}
/* search-banner */
.colligate-banner img{
    max-width: 100%;
}
</style>