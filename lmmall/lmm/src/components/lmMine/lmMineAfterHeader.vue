<template lang="">
      <div class="afterhead">
            <div id="title">
               <div class="center"  @click="back()" >
                  <img src="../../../static/img/logimg/nologinlv.png" >
                  <span>{{telphone}}</span>
               </div>
               <div class="right">
                  <img src="../../../static/img/logimg/title11.png" class="home">
                  <img src="../../../static/img/logimg/title22.png" class="more">
               </div>
            </div>
            <div class="rightshow">
               <img src="../../../static/img/logimg/title1.png" class="homeback">
               <img src="../../../static/img/logimg/title2.png" class="moreback">
            </div>
            <div class="mine">
               <p class="transtop"></p>
               <p class="transbottom"></p>
               <img src="../../../static/img/logimg/default-photo.gif" class="mine_pic" @click="back()">
               <div class="logsever">
					   <span class="username">{{telphone}}</span>
                  <div class="hastwo">
                     <img src="../../../static/img/logimg/regvip.png" >
                     <i class="chengzhang">成长值0</i>
                  </div>
					   <span class="text">“旅行的意义，就在于不断发现新的世界和新的自己。”</span>
				   </div>
            </div>
            <lm-mine-after-vip></lm-mine-after-vip>
            <lm-mine-after-info></lm-mine-after-info>
		</div>
</template>
<script>
   import $ from "jquery";
   import lmMineAfterInfo from './lmMineAfterInfo';
   import lmMineAfterVip from './lmMineAfterVip';
   export default {
      name:"lmMineAfterHeader",
      data() {
         return {
            telphone:""
         };
      },
      components:{
         lmMineAfterVip,lmMineAfterInfo
      },
      mounted(){
        this.telphone=this.$route.query.tel;
        console.log(this.$route.query.tel)
    },
      created:function(){
			$(window).bind("scroll", function() {
				// console.log("1");
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if (sTop >= 50) {
					// console.log("1");
					if (!$("#title").is(":visible")) {
                  $("#title").show();
					}
				} else {
					if ($("#title").is(":visible")) {
                  $("#title").hide();
					}
				}
			})
      },
      methods: {
      back(){
          this.$router.push("/");
        console.log("hahahahahaha");
      }

  }

}
</script>
<style scoped>
.afterhead{
	height: 288px;
   background: url(../../../static/img/logimg/bd-zhuce.png) no-repeat;
   background-size: 100% 176px;
   position: relative;
}
#title{
	width: 100%;
   height: 50px;
   /* display: -webkit-flex;
   justify-content: center;
   align-items: center; */
   position: fixed;
   top: 0;
	z-index: 101;
   background: #fff;
   display: none;
   /* background:red; */
}
.center{
   display: -webkit-flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   /* text-align: center; */
}
.center img {
   height: 22px;
   width: 22px;
   margin-right: 5px;
   border-radius: 50%;
}
.center span {
   font-size: 16px;
   color: #333;
   display: block;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   width: 65px;
}
.right .home,.rightshow .homeback{
   width: 18px;
   height: 18px;
   position: fixed;
   top: 18px;
   right: 15%;
}
.right .more,.rightshow .moreback{
   width: 18px;
   height: 18px;
   position: fixed;
   top: 18px;
   right: 5%;
}
.mine{
   display: flex;
   width: 90%;
   height: 140px;
   justify-content: center;
   background: #fff;
   margin: 0 auto;
   position: relative;
   top: 64px;
   border-radius: 5px;
   z-index: 99;
}
.mine_pic{
	position: absolute;
	top: -30px;
	z-index: 100;
	width: 62px;
	height: 62px;
	border-radius: 50%;
}

.transtop{
	width: 100%;
	background: url(../../../static/img/logimg/bo-zhuce-top.png);
	position: absolute;
   height: 36px;
   overflow: hidden;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   background-size: 670px 100%;
   background-position: 10px;
   animation-duration: 7s;
   animation-fill-mode: forwards;
   animation-name: waveTopAni;
}
.transbottom{
	width: 100%;
	background: url(../../../static/img/logimg/bo-zhuce-top.png);
	position: absolute;
	height: 36px;
	overflow: hidden;
	border-top-left-radius: 5px;
	border-top-right-radius: 10px;
	background-size: 670px 100%;
	background-position: 82px;
   animation-duration: 7s;
   animation-fill-mode: forwards;
   animation-name:  waveBottomAni;
}
@keyframes waveBottomAni{
	from{background-position: -111px;}
	to{background-position: 111px;}
}
@keyframes waveTopAni{
	from{background-position: 211px;}
	to{background-position: -211px;}
}

.logsever{
	margin-top: 60px;
   display: -webkit-flex;
   flex-direction: column;
   align-items: center;
}
.username{
	text-align: center;
   font-size: 16px;
   display: inline-block;
   width: 100px;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   animation-delay: .3s;
   animation-duration: .5s;
   animation-name: opacityAni;
	margin-top: -10px;
}
.hastwo{
	margin: 10px;
	display: flex;
	justify-content: space-between;
}
.hastwo img{
	width: 79px;
   height: 22px;
   display: block;
}
.hastwo .chengzhang{
    animation-name: chengzhangAni2;
    animation-fill-mode: forwards;
	 border: 1px solid #ccc;
    border-radius: 100px;
    height: 20px;
    line-height: 20px;
    font-size: 11px;
    color: #666;
    padding-right: 7px;
    margin-left: 8px;
	 display: block;
}
.chengzhang:before {
    content: "";
    display: inline-block;
    background: url(../../../static/img/logimg/chengzhang.png);
    background-size: contain;
    width: 10px;
    height: 10px;
    margin: 0 3px 0 7px;
}
.text {
    font-size: 11px;
    color: #666;
}


</style>
