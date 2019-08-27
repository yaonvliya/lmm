<template>
    <div class="progress ">
        <i class="icon"></i>
		<span class="txt">资料完成度<i>40%</i>，资料完善可以获得<i class="numbercolor">1000驴镑</i>;</span>
    </div>
</template>
<script>
export default {
    name:"lmMineAfterInfo",
}
</script>
<style scoped>
.progress{
	width: 90%;
   margin: 0 auto;
   height: 28px;
   background: #fff7df;
	position: relative;
	top: 74px;
	border-radius: 100px;
	line-height: 28px;
}
.progress .icon {
    background: url(../../../static/img/logimg/icon.png);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 12px;
    height: 12px;
    display: inline-block;
    left: 10px;
    background-size: cover;
}
.txt {
    font-size: 12px;
    color: #333;
    margin-left: 27px;
	 display: block;
}
.numbercolor{
	color: #f5a623;
}
</style>