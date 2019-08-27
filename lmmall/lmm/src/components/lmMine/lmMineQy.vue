<template >
    <div class="qy">
        <div class="qytitle">
            <img src="../../../static/img/logimg/qyl.png" alt="">
            <div class="text">我的专属会员权益</div>
            <img src="../../../static/img/logimg/qyr.png" alt="">    
        </div>
        <lm-mine-bt 
        v-for="(v,i) in arrs"
        :key="i"
        :title="v.title"
        :imgurl="v.imgurl"></lm-mine-bt>
    </div>
</template>
<script>
import lmMineBt from './lmMineBt';
    export default {
        components:{
            lmMineBt
        },
        data() {
            return {
                arrs: [
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/zshd_has.png",
                    title: "专属活动"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/srlb.png",
                    title: "生日礼包"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/srlb.png",
                    title: "等级优惠券"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/djzxj.png",
                    title: "等级专享价"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/sftq.png",
                    title: "升房特权"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/lbfb.png",
                    title: "驴镑翻倍特权"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/static/my/main/img/wifi.png",
                    title: "WiFi特权"
                    }
                ]
            };
        }
    }
</script>
<style scoped>
.qy{
    overflow: hidden;
    background: white;
}
.qytitle{
    height: 46px;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.qytitle img{
    height: 1px;
    width: 11%;
}
.qytitle .text {
    font-size: 15px;
    color: #666;
    margin: 0 3%;
}

</style>