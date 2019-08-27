<template>
<div>
	<div id="module0" class="module-main module mshow0 product7"  v-for="(items,indexs) in module2" :key="indexs">
       	<img class="img-title csmc" :src="items.headurl2">
		<div class="tab-main type_COMMON_STYLE_5" data-type="COMMON_STYLE_5">
			<div class="tab-list">
				<ul class="list">
					<li style="display: block;"  v-for="(item,index) in items.modu2" :key="index">
						<a class="addStatistics addSensorsTrackProduct" href="#">
						<div class="load-img ztImgLoaded">
							<img :src="item.moduurl">
						</div>
							<div class="cot">
								<div class="name1">{{item.name}}</div>
								<div class="name2"></div>
								<div class="price">
									<span>￥
										<strong>{{item.price}}</strong>
										起/人
									</span>
								</div>
								<button class="state1">立即抢购</button>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'module2',
		data(){
			return{
				module2:[],
			}
		},
		created: function() {
				fetch("http://localhost:3000/module2")
					.then((res) => {
						return res.json();
					})
					.then((req) => {
						this.module2 = req;
						console.log(this.module2);
						return this.module2;
					})
			},
	}
</script>

<style scoped>
.img-title{width: 100%;height: 98px;}
.tab-list{width: 100%;height: auto;;margin:10px;}
.list li{width: 50%;height: 50%;float: left;}
.ztImgLoaded img{width: 170px;height: 111px;}
.cot{width: 170px;height: 60px;background: white;margin-bottom: 5px;}
.name1{font-size: 16px;text-overflow:ellipsis; white-space:nowrap; overflow:hidden; color: black;}
.name2{width:170px;height: 5px;}
.price{font-size: 12px;color: red;}
.state1{background: #de2500;border: none;color: white;font-size: 12px;float: right;}
.lab2{width: 6%; height: 5%; background: url("//pics.lvjs.com.cn/mobile/zt/templates/template4/img/label4.png") no-repeat center center / 100% 100%; font-size: 8px; color: #fff;}
.product7 .tab-main .tab-list label{ position: absolute;color:#fff; font-size: 10px; z-index: 1;}
.product7 .tab-main .tab-list .lab1{ top: 60px; left: 70px; background: rgba(0,0,0,.6); border-radius:6px;line-height: 12px; padding: 60px; max-width: 50%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }

</style>