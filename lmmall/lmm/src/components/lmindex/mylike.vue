<template>
	<div class="mylike">
		<div class="mylike_top">
			<span>猜你喜欢</span>
			<span>精挑细选热卖排行榜</span>
		</div>
		<div class="mylike_middle">
			<ul>
				<li>
					<span class="zby" @click="ZBY()">周边游</span>
				</li>
				<li>
					<span class="mp" @click="MP()">门票</span>
				</li>
				<li>
					<span class="jd" @click="JD()">酒店</span>
				</li>
				<li>
					<span class="gny" @click="GNY()">国内游</span>
				</li>
				<li>
					<span class="cjy" @click="CJY()">出境游</span>
				</li>
				
			</ul>
		</div>
		<div id="box1">
			<div class="mylike_middle" >
			<ul>
				<li class="lilists">
					<span class="zby" @click="ZBY()">周边游</span>
				</li>
				<li class="lilists">
					<span class="mp" @click="MP()">门票</span>
				</li>
				<li class="lilists">
					<span class="jd" @click="JD()">酒店</span>
				</li>
				<li class="lilists">
					<span class="gny" @click="GNY()">国内游</span>
				</li>
				<li class="lilists">
					<span class="cjy" @click="CJY()">出境游</span>
				</li>
				
			</ul>
		</div>
		</div>
		
		<div class="mylike_down Zby">
			
				<div class="mylike_downone" v-for="(items,index) in scenelist" :key="index">
					<img :src="items.sceneurl" alt="">
					<p class="xq">{{items.xq}}</p>
					<p class="price"><span class="price">{{items.price}}</span>起 <span>{{items.myd}}</span></p>
				</div>
				
		  
		</div>
		<div class="mylike_down Mp" style="display: none;">
			
				<div class="mylike_downone" v-for="(items,index) in mlist" :key="index">
					<img :src="items.sceneurl" alt="">
					<p class="xq">{{items.xq}}</p>
					<p class="price"><span class="price">{{items.price}}</span>起 <span>{{items.myd}}</span></p>
				</div>
				
		  
		</div>
		<div class="mylike_down Jd" style="display: none;">
			
				<div class="mylike_downone" v-for="(items,index) in jlist" :key="index">
					<img :src="items.sceneurl" alt="">
					<p class="xq">{{items.xq}}</p>
					<p class="price"><span class="price">{{items.price}}</span>起 <span>{{items.myd}}</span></p>
				</div>
				
		  
		</div>
		<div class="mylike_down Gny" style="display: none;">
			
				<div class="mylike_downone" v-for="(items,index) in glist" :key="index">
					<img :src="items.sceneurl" alt="">
					<p class="xq">{{items.xq}}</p>
					<p class="price"><span class="price">{{items.price}}</span>起 <span>{{items.myd}}</span></p>
				</div>
				
		  
		</div>
		<div class="mylike_down Cjy" style="display: none;">
			
				<div class="mylike_downone" v-for="(items,index) in clist" :key="index">
					<img :src="items.sceneurl" alt="">
					<p class="xq">{{items.xq}}</p>
					<p class="price"><span class="price">{{items.price}}</span>起 <span>{{items.myd}}</span></p>
				</div>
				
		  
		</div>
	</div>

</template>

<script>
	export default{
		name:'lmIndexml',
		data(){
			return{
				allscene:[],
				scenelist:[],
				mlist:[],
				glist:[],
				clist:[],
				jlist:[],

				
			}
			
		},
		created:function(){
				fetch("http://localhost:3000/allscene")
				.then((res)=>{
					console.log(res);
					return res.json();
					console.log(res.json());
				})
				.then((obj)=>{
					console.log(obj);
// 					console.log(this);
// 					console.log(this.scenelist);
// 					
					this.allscene=obj;
					this.scenelist=this.allscene[0].scenelist;
					this.mlist=this.allscene[1].mlist;
					this.glist=this.allscene[2].glist;
					this.clist=this.allscene[3].clist;
					this.jlist=this.allscene[4].jlist;
					console.log("///////////////////");
					console.log(this.allscene);
					console.log(this.allscene[0].scenelist);
					console.log(this.allscene[2].glist);
					console.log(this.allscene[4].jlist);

					console.log(this.scenelist);
				})		
			
			$(window).bind("scroll", function() {
				console.log("1");
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if (sTop >= 950) {
					// console.log("2");

					if (!$("#box1").is(":visible")) {
						try {
							$("#box1").slideDown();
						} catch (e) {
							$("#box1").show();
						}
					}
				} else {
					if ($("#box1").is(":visible")) {
						try {
							$("#box1").slideUp();
						} catch (e) {
							$("#box1").hide();
						}
					}
				}
			})
		},
		mounted:function(){
			//点击
		       console.log("1");
			   for(let i=0; i<$('.lilists').length;i++){
				    console.log(i);
				   $(".lilists").eq(i).click(function(){
					console.log(i);
					console.log($(".lilists").eq(i))
					console.log($(".lilists").eq(i).children('span.footspan'));
					$(".lilists").eq(i).children('span').css({"border-bottom":"1px solid red"})
					$(".lilists").eq(i).siblings().children('span').css({"border-bottom":"none"})
					})
			   }
		},
		methods:{
			ZBY(){
				if($(".zby").css("font-weight")=="200"){
						$(".Zby").css({"display":"block"});
						$(".Mp").css({"display":"none"});
						$(".Jd").css({"display":"none"});
						$(".Gny").css({"display":"none"});
						$(".Cjy").css({"display":"none"});
						$(".zby").css({"font-weight":"800"});
						$(".mp").css({"font-weight":"200"});
						$(".jd").css({"font-weight":"200"});
						$(".gny").css({"font-weight":"200"});
						$(".cjy").css({"font-weight":"200"});
					}
				},
			MP(){
				if($(".mp").css("font-weight")=="200"){
						$(".Zby").css({"display":"none"});
						$(".Mp").css({"display":"block"});
						$(".Jd").css({"display":"none"});
						$(".Gny").css({"display":"none"});
						$(".Cjy").css({"display":"none"});
						$(".zby").css({"font-weight":"200"});
						$(".mp").css({"font-weight":"800"});
						$(".jd").css({"font-weight":"200"});
						$(".gny").css({"font-weight":"200"});
						$(".cjy").css({"font-weight":"200"});
					}
				},
			JD(){
				if($(".jd").css("font-weight")=="200"){
						$(".Zby").css({"display":"block"});
						$(".Mp").css({"display":"none"});
						$(".Jd").css({"display":"none"});
						$(".Gny").css({"display":"none"});
						$(".Cjy").css({"display":"none"});
						$(".zby").css({"font-weight":"200"});
						$(".mp").css({"font-weight":"200"});
						$(".jd").css({"font-weight":"800"});
						$(".gny").css({"font-weight":"200"});
						$(".cjy").css({"font-weight":"200"});
					}
				},
			GNY(){
				if($(".gny").css("font-weight")=="200"){
						$(".Zby").css({"display":"none"});
						$(".Mp").css({"display":"none"});
						$(".Jd").css({"display":"none"});
						$(".Gny").css({"display":"block"});
						$(".Cjy").css({"display":"none"});
						$(".zby").css({"font-weight":"200"});
						$(".mp").css({"font-weight":"200"});
						$(".jd").css({"font-weight":"200"});
						$(".gny").css({"font-weight":"800"});
						$(".cjy").css({"font-weight":"200"});
					}
				},
			CJY(){
				if($(".cjy").css("font-weight")=="200"){
						$(".Zby").css({"display":"none"});
						$(".Mp").css({"display":"none"});
						$(".Jd").css({"display":"none"});
						$(".Gny").css({"display":"none"});
						$(".Cjy").css({"display":"block"});
						$(".zby").css({"font-weight":"200"});
						$(".mp").css({"font-weight":"200"});
						$(".jd").css({"font-weight":"200"});
						$(".gny").css({"font-weight":"200"});
						$(".cjy").css({"font-weight":"800"});
					}
				},
		}
	}
</script>

<style scoped="scoped">
	.mylike{
		width:100%;
		height:100%;
	/* 	background: palevioletred; */
		margin-bottom: 0.2rem;
	}
	.mylike_top{
		width:100%;
		height:.5rem;
	/* 	background: gold; */
		line-height: .5rem;
	}
	.mylike_top span:nth-child(1){
		font-size: 14px;
		color:black;
		font-weight:800;
		float:left;
		margin-left: .14rem;
	}
	.mylike_top  span:nth-child(2){
		font-size: 12px;
		color:#bbbbbb;
		float:left;
		margin-left: 1.84rem;
	}
	.mylike_middle{
		width:100%;
		height:.4rem;
		/* background: red; */
	}
	.mylike_middle ul{
		display:-webkit-flex;
		justify-content: space-around;
		border-bottom:2px solid #f0f0f0;
	}
	.mylike_middle li{
		width:70px;
		height:.4rem;
		line-height:.4rem;
		text-align: center;
	}
	.mylike_middle li:nth-child(1){
		margin-left: 0.15rem;
	}
	.mylike_middle li span{
		font-size: 14px;
		font-weight: 200;
		float:left;
		/* border-bottom: 1px solid #dda9ad; */
	}
	.mylike_down{
		width:3.75rem;
		height:1;
		display: -webkit-flex;
		-webkit-flex-wrap: wrap;
		}
	.mylike_down1{
		display: -webkit-flex;
	}
	.mylike_downone{
		width:44%;
		height:2.07rem;
		/* background: gainsboro; */
		float:left;
		margin:0 10px;
		}
	.mylike_downone img{
		width:100%;
		height:1.13rem;
		}
	.xq{
		font-size: 12px;
		color:black;
		margin-top: 8px;
		line-height: 21px;
	}
	.price{
		font-size: 12px;
		color:#939393;
		margin-top: 15px;
	}
	.price span:nth-child(1){
		font-size: 14px;
		color:#e87582;
	}
	.price span:nth-child(2){
		margin-left: .6rem;
	}
	#box1{
		position:fixed;
		left:10px;
		top:50px;
		display:none;
		background: white;
	}
	#zby{
		font-weight: 800;
	}
</style>
