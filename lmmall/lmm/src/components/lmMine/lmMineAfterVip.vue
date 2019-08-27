<template lang="">
    <div class="kanglv">
        <span class="super-logo"></span>
        <span class="supertext">超级会员</span>
        <span class="allBenefit ">查看全部权益</span>
        <i class="arrow"></i>
    </div>
</template>
<script>
export default {
    name:"lmMineAfterVip",
}
</script>
<style scoped>
.kanglv{
	width: 90%;
	height: 36px;
	background: url(../../../static/img/logimg/kanglv.png);
	margin: 0 auto;
	position: relative;
	top: 62px;
	box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
   border-radius: 0 0 5px 5px;
}
.super-logo {
    width: 28px;
    height: 14px;
	 background: url(../../../static/img/logimg/vip.png) no-repeat;
    background-size: cover;
	 position: absolute;
    top: 54%;
    -webkit-transform: translateY(-54%);
    transform: translateY(-54%);
    left: 15px;
}
.supertext{
    color: #eacf74!important;
    margin-left: 50px!important;
	 font-size: 12px;
    letter-spacing: 0;
	 position: absolute;
	line-height: 12px;
	 top: 35%;
    
}
.allBenefit{
    position: absolute;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    right: 26px;
    top: 50%;
    font-size: 11px;
    color: #cba984;
    letter-spacing: 0;
    line-height: 11px;
}
.arrow{
    content: "";
    position: absolute;
    top: 55%;
    right: 15px;
    width: 5.4px;
    height: 9.4px;
    -webkit-transform: translateY(-55%);
    transform: translateY(-55%);
    background: url(../../../static/img/logimg/czright.png) no-repeat;
    background-size: 5.4px 9.4px;
    background-repeat: no-repeat;
}
</style>>
    