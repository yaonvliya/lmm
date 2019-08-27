<template>
    <div class="lm-ma">
        <div class="lm-pop-container">
            <p class="lm-me">
                更多筛选
            </p>
           <img src="../assets/img/img/error.png" alt="" @click="close()">
           <div class="lm-pop-filter">
               <div>
                   <p>早餐</p>
                   <p>
                       <span>含早</span>
                       <span>无早</span>
                   </p>
                </div>
               <div>
                   <p>床型</p>
                   <p>
                       <span>双床</span>
                   </p>
               </div>
               <div>
                    <p>窗户</p>
                   <p>
                       <span>有窗</span>
                   </p>
               </div>
               <div>
                    <p>宽带</p>
                   <p>
                       <span>免费宽带</span>
                   </p>
               </div>
               <div>
                       <p>支付方式</p>
                   <p>
                       <span>预付</span>
                   </p>
               </div>
               <div>
                       <p>退改规则</p>
                   <p>
                       <span>限时退改</span>
                   </p> 
               </div>
               <div>
                        <p>其它(可多选)</p>
                   <p>
                       <span>可订</span>
                       <span>立即确认</span>
                       <span>促销</span>
                   </p> 
               </div>
           </div>
           <div class="lm-pop-footer">
               <span class="clear">清空选择</span>
			   <router-link :to="{name:'lmIndexadd'}">
               <span class="sure">确定</span>
			   </router-link>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lmChoose',
	methods:{
		close(){
			$(".lm-ma").css({"display":"none"});
		}
	}
}
</script>
<style scoped>
.lm-ma{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
}
.lm-pop-container{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    z-index: 90;
    background-color: #fff;
    position: fixed;
    overflow-y: overlay;
    border-radius: .1rem .1rem 0 0;
    padding-top: .2rem;
}
.lm-me{
    font-size: .16rem;
    text-align: center;
    font-family: "微软雅黑";
    color: #333;
    position: relative;
    font-weight: 700;
}
.lm-pop-container img{
    width: .2rem;
    height: .2rem;
    position: absolute;
    right: .1rem;
    top: .15rem;
}
.lm-pop-filter{
    padding-bottom: .9rem;
    overflow: auto;
    height: 100%;
}
.lm-pop-filter div{
    margin: 0 .15rem;
    color: #333;
}
.lm-pop-filter div p:first-child{
    font-size: .14rem;
    line-height: .14rem;
    margin-top: .18rem;
    font-weight: 700;
}
.lm-pop-filter div p:last-child{
    font-size: .12rem;
    margin-top: .1rem;
}
.lm-pop-filter div p:last-child span{
    border: 1px solid #ccc;
    border-radius: .02rem;
    height: .3rem;
    line-height: .3rem;
    padding: 0.06rem .1rem;
    margin-right: .1rem;
}
.lm-pop-footer{
    margin-left: 0;
    width: 100%;
    text-align: center;
    font-size: .16rem;
    height: .5rem;
    line-height: .5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 0 .08rem 0 rgba(0,0,0,.1);
    overflow: hidden;
}
.lm-pop-footer span{
    display: inline-block;
    width: 50%;
    float: left;
}
.lm-pop-footer .clear{
        color: #666;
}
.lm-pop-footer .sure{
        color: #fff;
        background-image: linear-gradient(90deg,#fe686c,#fe3c71);
}
</style>