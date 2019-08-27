<template>
	<div>
	<div class="server1"  v-for="(items,index) in travallist" :key="index">
		<div class="server1_title">
			{{items.travallistname}}
		</div>
		<div class="server1_content"  >
			<ul>
				<li v-for="(travallistxq,cindex) in items.travallistxq" :key="cindex">
					<!-- <img src="../../assets/img/client/g1.jpg" alt=""> -->
					<img :src="travallistxq.travallogourl" alt="">
					<span>{{travallistxq.travaltitle}}</span>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'lmServerh',
		data(){
			return{
					travallist:[
							{
							travallistname:"旅游度假",
							travallistxq:[
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/gty.png",
								  travaltitle:"周边跟团游"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/zyx.png",
								  travaltitle:"周边自由行"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/jdmp.png",
								  travaltitle:"景点门票"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/yl.png",
								  travaltitle:"游轮"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/gty.png",
								  travaltitle:"国内游"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/cjy.png",
								  travaltitle:"出境游"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/dzy.png",
								  travaltitle:"定制游"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/qz.png",
								  travaltitle:"签证"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/dhk.png",
								  travaltitle:"wifi"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/qzy.png",
								  travaltitle:"亲子游"
								},
							]
							},
							{
							travallistname:"交通住宿",
							travallistxq:[
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/jd.png",
								  travaltitle:"酒店"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/jp.png",
								  travaltitle:"国内机票"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/gjjp.png",
								  travaltitle:"国际机票"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/hcp.png",
								  travaltitle:"火车票"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/bs.png",
								  travaltitle:"汽车票"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/gnyc.png",
								  travaltitle:"国内用车"
								},
								
							]
							},
							{
							travallistname:"其他",
							travallistxq:[
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/hyzx.png",
								  travaltitle:"会员中心"
								},
								{
								  travallogourl:"https://m.lvmama.com/static/coding/v2/kefu/img/lpk.png",
								  travaltitle:"礼品卡"
								},
								
							]
							}
						],
	}
	}
	
	}
</script>

<style scoped="scoped">
	.server1{
		width:100%;
		height:273px;
		background:white;
	}
	.server1_title{
		width:100%;
		height:0.2rem;
		margin-top: 0.2rem;
		background: white;
		font-size: 14px;
		color:black;
		line-height: .2rem;
		margin-left: 10px;
	}
	.server1_content{
		width:100%;
		height:90%;
		margin-top: 0.1rem;
		background:white;
	}
	.server1_content ul{
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.server1_content li {
		width:0.93rem;
		height:0.6rem;
		text-align: center;
		margin:10px 0px;
	}
	.server1_content li span{
		width:100%;
		height:100%;
		font-size: 12px;
		color:black;
		display: block;
		margin-top: 0.1rem;
	}
	.server1_content li img{
		width:0.4rem;
		height:0.4rem;
	    margin-left: 0.26rem;
	}
		
</style>
