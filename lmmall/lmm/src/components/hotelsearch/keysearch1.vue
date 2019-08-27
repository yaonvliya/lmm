<template>
	<div class="keysearch1">
		<div class="k1-head">
			<img src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/back.png" >
			<input type="text" placeholder="请输入关键字/城市 ">
			<span @click="close()">取消</span>
		</div>
		<div class="k2-head">
			<div class="down1" v-for="(title,index) in hotelkeyword" :key="index">
				<p class="titles">
				
					<span>{{title.title}}</span>
				</p>
				<ul class="uls">
					<li v-for="(titles,indexs) in title.scene" :key="indexs" @click="searchName(indexs,index)" class="lilist">
						<span class="text">{{titles}}</span>
					</li>
				</ul>
			<!-- <p class="add-white"></p> -->
		       </div>
		</div>
	</div>
</template>

<script>
		export default {
			name: 'keysearch1',
			// props:["getKeyWords","x"],
			data() {
				return {
					hotelkeyword: [],
				
				}
			},
			created: function() {
				fetch("http://localhost:3000/hoelkeyword")
					.then((res) => {
						return res.json();
					})
					.then((req) => {
						this.hotelkeyword = req;
						console.log(this.hotelkeyword);
						return this.hotelkeyword;
					})
			},
// 			mounted() {
// 				this.$emit('getKeyWords', 1996699);
// 			},
			methods: {
				close(){
					$(".keysearch1").css({
						"display": "none"
					});
				},
				searchName(indexs,index) {//点击哪个传送查找酒店关键字
				
					console.log(this.$emit)
				for (var j = 0; j< $(".down1").length; j++){
					for (var i = 0; i < $(".lilist").length; i++) {
						if (i == indexs&&j==index) {
							console.log(j);
							console.log(i);
							// console.log($(".down1").eq(j).siblings().html());
// 							console.log($(".down1").eq(j).siblings().children('li.lilist').html());
// 							console.log($(".down1").eq(j).siblings('ul').children('li.lilist').eq(i).html());
// 						 console.log($(".down1").eq(j).siblings('ul').children('li.lilist').eq(i).children('span').html());
							
							var search = $(".lilist").eq(i).children('span').html();
							this.$emit('getKeyWords', search);
							$(".keysearch1").css({
								"display": "none"
							});
						}
					}
				}
					
	
	
				},				
			}
		}
</script>

<style scoped>
	.keysearch1{
		background: #f7f3f3;

	}
	.k1-head {
		/* position: fixed; */
		background: white;
		height: 50px;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display:flex;
		align-items: center;
	}
	.k1-head img{
		width: 30px;
		height: 30px;
	}
	.k2-head {
		/* position: fixed;
		/* margin-top:20px; */
	}
	.k1-head input{
		font-size: 15px;
		color:silver;
		width:2.7rem;
		border:none;
		}
	.k1-head span{
		font-size: 14px;
		color:silver;
	}
    .down1{
		width:100%;
		/* height:232px; */
		background: white;
		margin-top:10px;
		overflow: hidden;
	}
	.titles{
		font-size: 16px;
		color:black;
		font-weight: bolder;
		padding: 10px 10px;
	}
	 .uls{
		width:100%;
		/* display: flex; */
	}
	.uls li {
		width: 75px;
		height: 41px;
		/* line-height: 0px; */
		/* background: yellowgreen; */
		border: 1px solid #000000;
		float: left;
		/* margin-left: 15px; */
		margin: 5px 8px 5px 8px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text{
		font-size: 14px;
		color:black;
		float: left;
		
	}
</style>
