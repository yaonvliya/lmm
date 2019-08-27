<template lang="">
    <div class="cy">
        <p>常用功能</p>
        <lm-mine-line></lm-mine-line>
        <div>
            <lm-mine-bt 
            v-for="(v,i) in arrs"
            :key="i"
            :title="v.title"
            :imgurl="v.imgurl"></lm-mine-bt>
        </div>
        
    </div>
</template>
<script>
    import lmMineLine from './lmMineLine';
    import lmMineBt from './lmMineBt';
    export default {
        name:"lmMineCy",
        components:{
            lmMineLine,lmMineBt
        },
        data() {
            return {
                arrs: [
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/wdsc.png",
                    title: "我的关注"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/hyjlb.png",
                    title: "会员俱乐部"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/benefits.png",
                    title: "领会员权益"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/checkIn.png",
                    title: "签到"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/cyxx.png",
                    title: "常用信息"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/xlbt.png",
                    title: "小驴白条"
                    },
                    {
                    imgurl: "../../../static/img/logimg/cxcx.png",
                    title: "我的游记"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/wdfp.png",
                    title: "我的发票"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/mdcx.png",
                    title: "门店查询"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/gyshz.png",
                    title: "供应商合作"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/aboutLvmm.png",
                    title: "关于驴妈妈"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/wenjuan.png",
                    title: "参与有奖问卷"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/kfzx.png",
                    title: "在线客服"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/credit.png",
                    title: "信用住"
                    },
                    {
                    imgurl: "https://pics.lvjs.com.cn/mobile/webapp/release/my/main/img/baodan.png",
                    title: "我的保单"
                    }
                ]
            };
        }
    }
</script>
<style scoped>
.cy {
    margin-top: 10px;
    background: #fff;
    overflow: hidden;
}
.cy>p {
    height: 41px;
    line-height: 41px;
    color: #333;
    margin-left: 4%;
	font-size: 14px;
}

</style>