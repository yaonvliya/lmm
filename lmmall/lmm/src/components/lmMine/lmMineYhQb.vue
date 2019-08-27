<template>
    <div class="yh_qb">
        <div class="yh">
            <div  v-for="(v,i) in arr" :key="i">
                <p><img :src="v.imgurl"><span>{{v.title}}</span></p>
                <p><label>{{v.number}}</label></p>
            </div> 
        </div>
        <lm-mine-line></lm-mine-line>
        <div class="qb">
            <span></span>
            <span>我的钱包</span>
            <span>银贝/权益/奖金/礼品卡</span>
        </div>
    </div> 
</template>

<script>
import lmMineLine from './lmMineLine';
	export default {
		components:{
			lmMineLine
		},
		data() {
			return {
				arr: [
                    {
                        imgurl:"../../../static/img/logimg/yhq.png",
                        title: "优惠券",
                        number: "12张"
                    },
                    {
                        imgurl: "../../../static/img/logimg/jf.png",
                        title: "驴镑",
                        number: "0张"
                    }
                    ]
			};
		}
	}
</script>

<style scoped>
.yh_qb{
	background: white;
	margin: .1rem 0;
	width: 100%;
}
.yh{
	display: -webkit-flex;
	height: 50px;
	background: white;
}
.yh>div{
    flex: 1;
    width: 50%;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 4.3%
}
.yh>div:first-of-type {
    border-right: 1px solid #f2f2f2;
}
.yh>div p{
	display: -webkit-flex;
	align-items: center;
}
.yh>div p span {
    font-size: 14px;
    color: #333;
    margin-left: 7px;
	 display: block;
}
.yh>div p img {
    width: 18px;
    height: 18px;
}
.yh>div p label {
   font-size: 12px;
   color: #666;
}
.yh>div p label:after {
   content: "";
   width: 7px;
   height: 7px;
   border-top: 1px solid #aaa;
   border-right: 1px solid #aaa;
   display: inline-block;
   transform: rotate(45deg);
    margin-left: 5px;
} 
.qb{
   height: 50px;
   line-height: 50px;
    display: -webkit-flex;
}
.qb span:first-of-type {
   background-image: url(../../assets/img/logimg/qb.png);
   background-repeat: no-repeat;
   width: 18px;
   height: 18px;
   background-size: cover;
   -webkit-transform: translateY(4px);
   transform: translateY(4px);
   margin-left: 4.3%;
	margin-top: 12px;
}
.qb span:nth-of-type(2) {
   margin-left: 3px;
   color: #333;
    font-size: 14px;
    padding-left: 4px;
}
.qb span:nth-of-type(3) {
   font-size: 12px;
   color: #666;
	margin-left: 35%;
}
.qb span:nth-of-type(3):after {
   content: "";
   width: 7px;
   height: 7px;
   border-top: 1px solid #aaa;
   border-right: 1px solid #aaa;
   display: inline-block;
   transform: rotate(45deg);
   margin-left: 5px;
}
</style>