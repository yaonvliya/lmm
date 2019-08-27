<template lang="">
      <div class="loginhead">
            <div id="title">
             <!-- <div class="close" @click="close()">
               <img src="../../assets/img/logimg/close.png"/>
             </div> -->
               <div class="center"  @click="back()" >
                  <img src="../../../static/img/logimg/nologinlv.png" >
                  <span>登录/注册</span>
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
               <img src="../../../static/img/logimg/nologinlv.png" class="mine_pic" @click="back()">
               <div class="logsever">
                  <span>登录后享受更多优惠及服务</span>
                  <p @click="back()">登录/注册</p>
               </div>
            </div>
		</div>
</template>
<script>
   import $ from "jquery"
   export default {
      name:"lmMineHeader",
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
          this.$router.push("/lmLog");
        console.log("hahahahahaha");
      },
      close() {//退出
      this.$router.push("/");
      console.log("aaa");
    },

  }

}
</script>
<style scoped>
.loginhead{
	height: 214px;
   background: url(../../../static/img/logimg/bd-nologin.png) no-repeat;
   background-size: 100% 176px;
   position: relative;
	display: -webkit-flex;
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
	background: url(../../../static/img/logimg/bo-nologin-top.png);
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
	background: url(../../../static/img/logimg/bo-nologin-top.png);
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
.logsever span{
   font-size: 12px;
   color: #666;
}
.logsever p{
	margin-top: 10px;
   width: 145px;
   height: 34px;
   line-height: 34px;
   text-align: center;
   background-image: -webkit-linear-gradient(left,#ff7f6a,#fd3c71 62%);
   border-radius: 100px;
   font-size: 14px;
   color: #fff;
}
</style>
