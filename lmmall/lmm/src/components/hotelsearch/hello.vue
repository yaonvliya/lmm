<template>
	<div class="keysearch" style="display: none;">
		<div class="k-head">
			<img src="https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/back.png" alt="" class="back" @click="back()">
			<form method="get">
				<div class="search">
					{{x}}
					<input type="search" placeholder="关键字/酒店名/位置/品牌" id="searchBox" class="">
					<a class="clear" style="display: none;"></a>
				</div>
				<a class="cancel" style="display: none;">取消</a>
			</form>
		</div>
		<div class="contain">
			<div class="recommend-key">
				<div style="display: none;">
					<p class="title history">历史记录
						<span>清空历史</span>
					</p>
					<ul></ul>
				</div>
				<div class="down" style="display: none;">
					<p class="title hot">热门关键词{{x}}</p>
					<ul></ul>
					<p class="add-white"></p>
				</div>
				<div class="down" v-for="(title,index) in hotelkeyword" :key="index">
					<p class="title view">
						<span>{{title.title}}</span>
					</p>
					<ul>
						<li v-for="(titles,indexs) in title.scene" :key="indexs" @click="getKeyWords(indexs)" class="lilist">
							<span class="text-over-2">{{titles}}</span>
						</li>
					</ul>
					<p class="add-white"></p>
				</div>

				<div class="down">
					<p class="title buy">商圈
						<span></span>
					</p>
					<ul>
						<li>
							<span class="text-over-2">钟鼓楼回民街城中心</span>
						</li>
						<li>
							<span class="text-over-2">大雁塔曲江旅游区</span>
						</li>
						<li>
							<span class="text-over-2">小寨省体育场</span>
						</li>
						<li>
							<span class="text-over-2">高新技术开发区</span>
						</li>
						<li>
							<span class="text-over-2">火车站城中心</span>
						</li>
						<li>
							<span class="text-over-2">火车北站市政府</span>
						</li>
						<li>
							<span class="text-over-2">北关龙首村</span>
						</li>
						<li>
							<span class="text-over-2">西京医院康复路</span>
						</li>
						<li>
							<span class="text-over-2">南门城中心</span>
						</li>
						<li>
							<span class="text-over-2">朱雀门</span>
						</li>
						<li>
							<span class="text-over-2">南大街</span>
						</li>
						<li>
							<span class="text-over-2">南院门</span>
						</li>
						<li>
							<span class="text-over-2">省体育场</span>
						</li>
						<li>
							<span class="text-over-2">小雁塔</span>
						</li>
						<li>
							<span class="text-over-2">和平门建国门</span>
						</li>
						<li>
							<span class="text-over-2">文艺路</span>
						</li>
					</ul>
					<p class="add-white"></p>
				</div>
				<div class="down">
					<p class="title land">地标
						<span></span>
					</p>
					<ul>
						<li>
							<span class="text-over-2">中大国际</span>
						</li>
						<li>
							<span class="text-over-2">小雁塔</span>
						</li>
						<li>
							<span class="text-over-2">开元商城</span>
						</li>
						<li>
							<span class="text-over-2">李家村万达广场</span>
						</li>
						<li>
							<span class="text-over-2">钟鼓楼广场</span>
						</li>
						<li>
							<span class="text-over-2">秋林公司李家村商厦</span>
						</li>
						<li>
							<span class="text-over-2">民生百货骡马市店</span>
						</li>
						<li>
							<span class="text-over-2">民生百货解放路店</span>
						</li>
						<li>
							<span class="text-over-2">民乐园万达广场</span>
						</li>
						<li>
							<span class="text-over-2">安定门广场</span>
						</li>
						<li>
							<span class="text-over-2">太白商厦</span>
						</li>
						<li>
							<span class="text-over-2">宏府大厦</span>
						</li>
						<li>
							<span class="text-over-2">百盛小寨店</span>
						</li>
						<li>
							<span class="text-over-2">大兴善寺</span>
						</li>
						<li>
							<span class="text-over-2">莲湖公园北门</span>
						</li>
						<li>
							<span class="text-over-2">西北工业大学</span>
						</li>
					</ul>
					<p class="add-white"></p>
				</div>
				<div class="down">
					<p class="title plane">机场/火车站/汽车站
						<span></span>
					</p>
					<ul>
						<li>
							<span class="text-over-2">西安咸阳国际机场</span>
						</li>
						<li>
							<span class="text-over-2">西安站</span>
						</li>
						<li>
							<span class="text-over-2">西安火车站</span>
						</li>
						<li>
							<span class="text-over-2">西安北站</span>
						</li>
						<li>
							<span class="text-over-2">西安北火车站</span>
						</li>
						<li>
							<span class="text-over-2">西安南火车站</span>
						</li>
						<li>
							<span class="text-over-2">西安汽车站</span>
						</li>
						<li>
							<span class="text-over-2">西安南关汽车站</span>
						</li>
						<li>
							<span class="text-over-2">丰庆路长途汽车站</span>
						</li>
						<li>
							<span class="text-over-2">三府湾客运站</span>
						</li>
						<li>
							<span class="text-over-2">红庙坡客运站</span>
						</li>
						<li>
							<span class="text-over-2">康复路客运站</span>
						</li>
						<li>
							<span class="text-over-2">西安城东客运站</span>
						</li>
						<li>
							<span class="text-over-2">西安城北客运站</span>
						</li>
						<li>
							<span class="text-over-2">万寿路汽车站</span>
						</li>
						<li>
							<span class="text-over-2">西安城西客运站</span>
						</li>
					</ul>
					<p class="add-white"></p>
				</div>
				<div class="down">
					<p class="title subway">地铁站
						<span></span>
					</p>
					<ul>
						<li>
							<span class="text-over-2">永宁门</span>
						</li>
						<li>
							<span class="text-over-2">钟楼</span>
						</li>
						<li>
							<span class="text-over-2">五路口</span>
						</li>
						<li>
							<span class="text-over-2">南稍门</span>
						</li>
						<li>
							<span class="text-over-2">朝阳门</span>
						</li>
						<li>
							<span class="text-over-2">北大街</span>
						</li>
						<li>
							<span class="text-over-2">洒金桥</span>
						</li>
						<li>
							<span class="text-over-2">体育场</span>
						</li>
						<li>
							<span class="text-over-2">安远门</span>
						</li>
						<li>
							<span class="text-over-2">玉祥门</span>
						</li>
						<li>
							<span class="text-over-2">龙首原</span>
						</li>
						<li>
							<span class="text-over-2">小寨</span>
						</li>
						<li>
							<span class="text-over-2">劳动路</span>
						</li>
						<li>
							<span class="text-over-2">康复路</span>
						</li>
						<li>
							<span class="text-over-2">长乐公园站</span>
						</li>
						<li>
							<span class="text-over-2">小寨站</span>
						</li>
					</ul>
					<p class="add-white"></p>
				</div>
			</div>
			<div class="complement" style="display: none;">
				<div style="display: none;">
					<p class="tag first-tag">当前城市查询结果（酒店起价为参考价）</p>
					<ul></ul>
				</div>
				<div style="display: none;">
					<p class="tag">其他城市查询结果（酒店起价为参考价）</p>
					<ul></ul>
				</div>
			</div>
		</div>
		<div class="ma-ma" style="display: none;">
			<div class="his-ask" style="display: none;">
				<div class="bdb-img">是否清空历史记录？</div>
				<p class="btns">
					<span class="btn-left">清空</span>
					<span class="btn-right bdl-img">取消</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		props:["getKeyWords","x"],
		data() {
			return {
				hotelkeyword: []
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
		mounted() {
			this.$emit('getKey', 1996699);
		},
		methods: {
			searchName(indexs) {
				console.log(this.$emit)
				this.$emit('getKey', 8000);
// 				 
// 				for (var i = 0; i < $(".lilist").length; i++) {
// 					if (i == indexs) {
// 						console.log("1");
// 						console.log($(".lilist").eq(i).children('span').html());
// 
// 						var search = $(".lilist").eq(i).children('span').html();
// 						
// 						$(".keysearch").css({
// 							"display": "none"
// 						});
// 					}
// 				}


			},
			// 			back(){
			// 				this.$router.go(-1);
			// 			}

		}
	}
</script>

<style scoped>
	.keysearch {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background-color: #efeff7
	}

	.k-head {
		position: fixed;
		background: #fff;
		height: 50px;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, .1)
	}

	.k-head img.back {
		height: 30px;
		width: 30px;
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 10
	}

	.k-head .search {
		height: 50px;
		width: 100%;
		padding-left: 45px;
		padding-right: 10px;
		position: relative
	}

	.k-head .search input {
		position: relative;
		font-size: 12px;
		color: #bbb;
		height: 25px;
		width: 100%;
		line-height: 25px;
		margin-top: 13px;
		margin-bottom: 12px;
		border-radius: 25px;
		padding-left: 25px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAr1JREFUOBGllT1oU2EUhntvmkajUhGtVdFFcHFRQQjRhJqfxSWLWSoOrbt0kToILlW0ghQddBDdpBRcNGrBNAFDqkuxHToFCnZRELEqJpjmx+e9vTfcpglt9MDJ+b5z3vPe8/2cL0ZXG0mn08fq9XqC8Fn0IOozDOMLdh6bikQiOWydeUsxmr0zMzNHa7XaLZKSEG+IO3jiHxmPxmKxt47PbdclZjKZ89Vq9RmAXhJLEE96PJ5pxkuVSuUP9hCxAfyD2MPMVfFYNBq9YY+ZrkmD2CZ9idtEp3w+30g4HP5s49aZQqHgW15eHuEDY2g3pONUPuoGWcT28ucI9KI34/H4dTeo3ZhziEH8CmIvmqByFWaJquvSnmJEOrVVUuVRZRrCq5Ab6JNsNrtNfomp0yeYREta/pp767+Q3wf9AeK9FJh0Mk0cCfuLk+321AG3sxT1SDF4hh2MiTOkiU7fcXZqWekLO+eEk6uKD2jCB5YcZ6c2FAp9J/8XXLvZ553K1+H5NNA9lf0P+a1cVr5LVluhNlXFuvz/JAsLCzuotp/kItVbfKp43mYbsG3HZmVl5YiSKK6AWu+HKk7JyRcH1VEadypcMxGOm6bZ6D5dbIPOm8OeJHCN7rnTKXErvCpW6daXIB9Tm7YCtvLNzs7uAX9ZtjlutbSePqq1HhTIU6xgqBnYPAdzqlgsaqWPse+QfW5M43UDoC2ZwF4RgJW852MTfr9/OhAI/JSPO9pN/Ax7Ooy9iMsDrsJYL9xiT0/PObr3q7ANYk0kkF8CeBfdr7m9Vd8Y6p734ffKj1SJ3fN6vQ9WV1ff4D/uJt9ArAx1Dw0zBPAC09MkbZcfqaGL+F+jDznoT3JqG8rlctZN3pJYYEcAG7lcrp9/ljpvwo9gMFhyYm6bz+f7SqVSRuT4n25K7E7ebCxyDvI2uOd/AdZwVMrkeFU9AAAAAElFTkSuQmCC) no-repeat 8px 6px #eeeef5;
		background-size: 12px
	}

	.k-head .width-90 {
		width: 85% !important
	}

	.k-head .cancel {
		position: absolute;
		right: 14px;
		bottom: 0;
		height: 50px;
		line-height: 50px
	}

	.k-head .clear {
		position: absolute;
		right: 16%;
		top: 15px;
		width: 20px;
		height: 20px;
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/clear.png) no-repeat;
		background-size: 20px
	}

	.contain {
		margin-top: 60px
	}

	.recommend-key {
		font-size: 12px;
		color: #333
	}

	.recommend-key div {
		background: #fff;
		margin: 10px 0;
		padding: 0 15px;
		min-height: 85px
	}

	.recommend-key .title {
		position: relative;
		font-size: 14px;
		line-height: 14px;
		padding-top: 15px;
		padding-left: 20px
	}

	.recommend-key .down .title span,
	.recommend-key .up .title span {
		position: absolute;
		right: 0;
		bottom: 0;
		height: 14px;
		width: 14px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA4dJREFUSA21ls1LlFEUxmdGbRpcVKRp0zYIt4IrI5iYBEmb/IQQdBe50toZtQhFiYi0RbaohUMgqaNMhKtACG2T6H8gbTK/yoKsTMfp9wxzbd7Xd3TGpoE79+s5z3POvee997pdGf6mpqaOrq2tVcbj8RK32+2XGe1F2stFRUUzgUDgVyZU7oNAIyMjVyBtgzxIPQd+SUKySwqX0i+n/YZ6qLm5+dV+nGkFI5HIhVgs1otxocfj6ae8rq+v/+xENj4+fnJnZ6eG0sn8Rl5e3u2Ghoa3TlhHQaJqB3wHERmG8T7uZGwfI0I3jrYiLEd7iHbQjtkjODo62o1hC15WIvbJbpBJPxqN+jc3Nz/iaE9TU9PdVBuL4NjY2A28GywoKDhRV1f3NRWYbXtiYuL41taW9vxBaqS7gsk9G/Z6vRWhUCiRFNmK2PFwniYPZlmta2ZPPQZEZH0sQVeuxMSrLVEeJJPPSLlc7FuIMqdN/zuam5Y4ScJ5fV5iNBG2Et1AptmYjSvi1GdF3Sa7fJ0gq6urQdb5eiZEs7OzBQsLCy/B/qa0kBCxg+z0DW9vbz+WlkfHFepz6T7qVDIM8hEbZsyLTRH1s0y2QdzSkJaHximMllOJndpg5FyYuWPFxcUN9K9iW8beP3LCO4zpSCzx8OfHcN/PAIwb4ufUZ3w+X0gHNUv5nXY1xBdJiHsOApYhbHXQ+03SWCbtHQ6EJ4ydo1yura39YeZramrWaVdRWsDcNOP71VrSRUWZDoT3/cxXMF+tqOw4xpY4mYJgbvGhC+f4U3SKUku6AqLUCcUy9gIMMFcF8TcnjMY4Bj/AU0Y5i2gwDa4UrmVPYWHhNI1yXTEOwCOQBBH74jBnGUpGv8CJ9dAyQUfc8JTrok7MEUmEPUh8mHZwLvriloa4TNKE8aCD8l+ONqLuhHvI4jwezFBaLYM56Cg6Em/aUJkIXRw/XXjRpyvFTP5rrYuY6Hr15DBcu4K6rxDt5ip5p8vTAA5bi0O3PvY95i4U166gOo2NjU/J2Bfc1OvyTmOH+WmV4JiHa8+7xiIocr1BiLQd795rT7NJJGFlo1sejvv294z402YlXl5g/fvA+PB0AIIDn4kIdoD/CbYrdRklZH5pBQ0Aj0O0lb2XIEw8hHEgcdjT18FfQp14CIMJE1XU2DrVBwoao8nJSe/GxsZ5BHSdJfZXwrRXsnnq/wFY2dysbsx5FQAAAABJRU5ErkJggg==) no-repeat;
		background-size: 14px
	}

	.recommend-key .down .title span {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA5VJREFUSA21lstLlFEYxp1RsTLoZjnZJuY/SIwWRSDYRqzB8QJudFGLdKPRIhSjhaIEUbmqrZIEXps0BRsaCF1ZSisJ2nZRJ6rFYNOk0+8Z5kwzX9/4OWUDZ875znne53nfc3uPK2+Hv1AotCccDp+Nx+OlLperTGa0P9BeLSkpWaisrPy+EyqXE2hkZOQSpC2QV1Evgf8kIdklhT18l9MOUg82NjY+3Y4zq+D4+Pj5zc3NPoyL3W73fcq03+//bEc2MTFxZGtrq4bSwXgkPz+/q66u7qUd1laQqFoBdyMiwyG8j9sZW/uI0IWjzQjL0V6ifWDF/CE4Ojrag2F3UVHRCZ/Pl5g6q5HTN6LHmZ0FHB1uaGi4mY7PEBwbG7uKdzcKCwtP1dbWfk0H5tqenJw8GIvFvmDXlh5pSjC5Zo+Z/wqm8WOuAnb4QCBQFo1GF+FsMmvqNkAi62cKOndLTLxaEu2D5OYzUnl5rJuPsqRF/927Oy1xsgmXdbzEaCJsJrqBne7GXFwRp44VdUtCUDcIXlTpnFmJiPoOnh219mf7ZtOdweaNdVzc0pCWW9cV6ktZDvUPxoKIHraSWL/B7KfPC/l165i4pSEtN41jqK9aQfrmDHUxFqI5B+EBO4z6OAIn4VmhvGPTBbPgdCWWuvkrA5j1gHOGOhhfhGQ2GUUGH30ezlsQzF3EhLP9oaOLvsxsGluQ6ayvr2+j/ZbybGpqap/pn56ePkR7jjIM5p7p364uUHScwdPbgcDgYPwym+LRxsZGgMW/uL6+XkB7FrsXzMKt7ew1pujgeK0pXePbswODLfJeM7hviI1D8ATbFdb5mpNtctyDzaq7uLh4nka5UoyTIUn2p9frbQIXRSxMfQVbx0wibvDlStQF1dXVUc7Oc6a1BoJBJ9GKiooYGL8TLn1c3DgW1KvAbJohPGin/JerDcEOuDODIcoFitZoV39stBaOzrwhNRHmcUN04kW/UooZ/NdaiZjo+vTkMFwpQeUrRHvIX++VPA3gb2txKOtj3ytuw5MSVAeH9yGL28vNsSzvDCjXWrOkbA/XcHq2F0+GoDr0BiHS23j3Smuay0YSVjbK8nC0Wt8z4s+6K/XkYP77wezF0wEIHJ+JCLaD3wCrl0NqGiVkflkFDQCPfbS1ey9AmHgI40DisudbF38pdeIhDGaIqALG1q52FDRGMzMzRZFI5BwCSmeJnSxh2mu5PPV/Adwx3nstj5geAAAAAElFTkSuQmCC) no-repeat;
		background-size: 14px
	}

	.recommend-key .title.history {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAz9JREFUSA21VktoFEEQfT2OPwwYQRN/iHfxHgl+UBEJRNEETx4iHgweFj8kEbwERHETUMlBEBEjeNJEkaDoQUMOgh7FWwQNkSx+QASTaHST9lXNzLo7mZ2ddTcNvT3TW++97p7qqjJI0OxtLMNn7IHBTlhsIGS9D8twboJzI6jHc3MMv0rRmTgDexWb8RvdtGkl6QrfdpJjxn8W4Rp9NpjiOIAl6DanMaZzET+RgvYeYWO4iDmkiHHZh7iTh1iOJyaFr/k8tg9r8BNNXNAhzjezZ+Ggj0s9b45wuaE2T9D2oo5CD0jQSJGnHDvNObwN4SJf7WVsJaaHmP0cX1L4sOnAl3zjAkFf7BUNNvlCV/KNkz5T+IwKA+MUbcgXdQISPUbZmYg5aOGuiorx29ZKD7DhUbHkUC5yKrdvlBPUbybHKEfYgUdhkoL3GdyH9JimHOQiX6Ny+7YqqN4oDsJvFrezPP5VfJYe25RL/IDcqkFrb4ee67uyu1iG//nT43T96wVHL7XcM7o+V5TIG8vR9TmHiGkVLUcjiFxquWcL1YRbNBitHB7qLtXhpV4oPQkYys3Q6FBZYuNkOIJUU9znlpC4URxlHR+C2JhUp56fwLUWjjH0wWQtI1r/7mEykGdl8I7gtUjjlogmghoieCvEWHYXpJtEWF6evTTsZ29LLCoLNPjk8GeCwBqN+nxI0vQYu3Cctv3sbejF9TicxmhgJW0+itOMqLGkmDJaTtTBDXLsKAHdp/9bDLuSqZlApgiSfHanBLDgb99h2gsmo17mGMgNo28thh2/LBigXbPmsyhABXPk3EL4Qfa75gSmPQ9jWcCJLFfRw7G6zUvIs6whLgmxCmoNImUBM7UmzypJ2jROkbOJKteo8V5ocxlfk+QHvOBcAw1aSubEEoui1y/FNL7T7A0T2XYe5x+B5C6tFjysQTg3ztgxWOlOGc5myH4Ui3AgEBPB3A7lRVpFRVSapwO0k/Wx6YyuCOYJqmg5ZaJUebPYTZEUv9c24rPsJ5kHbwpXuEUKBkZaFhQvhMWrV1OkTu0Nq1OLQSzGBXMWowFHeIwVDIwLSn2mGBJLhnEp+I19lO+v+f7MdOFHgCk2/gW1jAtfQe6GDgAAAABJRU5ErkJggg==) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .history span {
		display: inline-block;
		font-size: 12px;
		color: #5ca2f8;
		position: absolute;
		right: 0;
		bottom: 0;
		padding-left: 17px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAddJREFUSA3tVT1I5EAUfm+ym4ieHu42CpaClcIVXmF31amdjYgaQQXB4jjsLWwOtFZQhAPZxGY7UREEG7FT7MTCQkRYEAT/1yQ7mXczyq57YYIQbERfk3nf+973mG/CDEJM5PNkrHv+JgH8jKE8wwg7rS1W98wP5DpeSgcqbIPz70ocAX4jw0sdjwQ2EomF0wLvkvVdHSd2gBQ3VYNpWGt/h/BM1zzhUHOR/IVQgKWrKwxHXK9HVxSEHUA0i8BGkYkLHUe2Z4UgR+5wGoEOdRy0c35IQExXfAssZdSbWSUUPpQGSIjFesPKPNaCdChZ8PvgkiFOsbq085+CvRrYwzmPZMhzTR7Djs/tXDBeVog95F8uNdwCb2/IpA7me9FXDWOO11ZKI3MGrGOVz+TJPA14J9aljlb68Fph0Yj1/prxb6EI94pX0FRuKgH+gRLMlfOCD1nF4fe8s4xFv7EDosSk+eeAV537tOgDWBR7VRgUFkKAJUjD3YsPuC1vQaOSW1BED5YMQ5xXsMgidsDKUM2J5E5W8x3bXK7Ol/vxJsqprqv1+/9NKxYhUaBeGdsNBkdcP/GDQwIQGT1d78qiyoCvYG5dYbAv32FXJJaXioiHX9DcVOIq/gFxdqTc2a3ueAAAAABJRU5ErkJggg==) no-repeat 0 100%;
		background-size: 12px
	}

	.recommend-key .title.hot {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_hot.png) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.view {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAudJREFUSA3tlktIVUEYx//jI8pIiuhlYhRFUdLDhdFGaJFgRC1qU66kByFkUJktoqSgfGFlEEVREfQuXLRop5uIVr2RkChbCUHUJnpdnX5zvOd6zz335r0nokUNDDPf6/+fb2a+OccoYrMdmqOYrsioSHnaahr1PBeovFycA74x7UWuktVyDetwwJaFEJ04X6/j+AWQD2TBFXCJTjykeQkkozJr2fQcWiRi26qdcOym36WfJuNNatWRHHhzW6UDhrSBoZP+RIWccam+663uQV6D7piadNAYpDFa1ttjz3F7P+kEkDtY7iNu8gZu8nuHz2ImMdzAtpaxW8Xc8np9dLZMbUxi7+w6VKshtQAyG9KrmgBwg74lg+KXpza1Q74H/Qf8mlWps2Y1RZemZSSmThcTshmAWsDmEjvAvNE06U4anISK7NcgdBJTzjhIzHXl6xrF9zj5CALEtl1Lyew8ziUElsbRXpDLJY3XmdQsE2wpE3sLqgHVUd/bMK30zMY7ln6wu8x+3Q4SH2c7DddD6oesl8AeRr9eU+CzFPNJIMYuWK0iogK8BxBXBYlbvUyf4jAtS9hc3dx5rzcHdD9A7FBsF6RfVE3mExFXkLWr2VOstM/ZA23kIk3G91BA7wSrWfRmbDfpPWhiYDw0+/Qq5JuqsG3aaFtkGatTbU7G1stl6k9r43J6sSN1H3KJ9HKFUCIo/hNH2LRoIf/eVhdk2ihKaAF1uCxur0AON6sp+BSlLbdhlcUDFvIUl/Mle5kMEHpAfCP1OQjoTF/+rdHoh6ar2NTpq4+TMWNemxpemi18NBqZH6U/84MSo3uZrKbityuhG52U8uqdRLyI/UIy6ahLhhlb+JdeLks+rvlj6gKz+MVJDfHl0BmT5TqItscdxjFfxFb1Mab7kyjBr5D+zgdMjIbDGeZnwOgNus+e3qibT+JlNw+fsdV89JXO6DW3NMt39NdtRsjs9mokrSVJtrQflCT7n5/+BBa40KpECyDzAAAAAElFTkSuQmCC) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.brand {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_brand.png) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.buy {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA1RJREFUSA2tVk1oU0EQ/jYJaSr1r7a2oKda8Q9Rbx4sKIKKB0GvoqIigooo2la8+HNqam1tTyqIUvAgeBAKXgQVD4KKQUTQWxURGhGqRWybmqzf7Hv7ftqXtJK3Yd/Mzs7MNzM7b18U/mPoa9iLEg7SZD00MlD4Qv4x6tCvTuL3XFypuSjpATRiHDcJso8gU6QfaDfKuYlzMWXDSOCIasdzriuOWQEJVkOwtwRZQ6e9WIhL6jj+WK86iz3kb3F/KWmbuoCXdi+Kzg6YRReddRLskOrAYJQT3Y1mlvo9M/2JRdgYDGi6fmK6ILjmmUnU5zmHyoGJPvdGSE4xsJX4hWMiKzcqAtLBds4kI39QzoEnb8Ej8gXq7/RkEcyMkuoerMZf1BPkM/UP0EEX+bVIY5K/5ggfTJFAHcihG2+4n2b5N6OIDQy1iAXIscRT1i5lGaG6F600/ejKhunoHgHFxTjln8jVuHthIjpZ7OdzjDbLeJ795I8SDjzVy3xe4TQjBEinK4xUYYD0Pucus9aMMIHdBF9u1tMfJVomMUQA5/xSBCjiBfVvc7YG1cOACTQxOinRQzbCa3afAyiidjwNGkbxusuRqnP4Sm6Qr8xV+moK6oabRnubI/oZUgTfZpQLaAsaRfH6hrFdxYyadB9aXJ08aQVAu5lBHq9wmMpbOSXnO4x2Pmn5MYk+ZiNNVcfmumsUNf34SRhRVIYT6rQ5/HqjofCNjmp5hrVmXf4h+hOco9S3tnnyDVrT2h0eY9ZSb8WoZKR5XSk8YYQZrjp5ht+NvNxD4SJ1pbPHqHLGVZMMk+hBgzULN41TUgOozrKhgR1WcTbKJstRZ11IT4KXV6ZoztEEHM5Q6i11j2uUXF9Jv3E8QFNn1tsraRygCRewFAFo6iz1RowZWsBAp3oZunWWlz6+ks5zfcmF4g4f0NbZ1t1qVEHVCfOvQL4gEYC2zrYMVQCFTJV5nbyvjJ+hjSJuQKfrIzJ0riXA1j0UZhUL512MAHQyLLh1rwJhhqk0YSNfO/Ox90vqXGuVr68ZvuYgcEqawnUsEW0fUK61OG8ZG0vC/MEC/7aYsvp3qeafXYLyI/rD6sZCncsfvFLEPz+ydijeNRpb7DI2Kpe3fEFSeCc+/wFDhuDJ8j3/7wAAAABJRU5ErkJggg==) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.land {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_land.png) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.plane {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_plane.png) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key .title.subway {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAptJREFUSA3tlk+IjVEYxp8zZkSYBoNCGjUoYqNEImWtlM0sJAvT1KjRJHfGxpprJkNqzIYyJUmjJFulJGVnR6P83ShXg8aM8R2/c7vn63bPd7+5892blVOnc75znvd53vc9/z6jhGJHtE6z6lakbTJalACpZegHoGfKadwYmErF+I5v7RV1aEYv+V6N2LSs/vi5BbZLwDfD8RDRo4haZ98ckMyqnzEndgzgAw8McPMM2EtagcQ16kkNaQ/wF86kKcGuE7HPZkATWcUcJ/bfCedWkT9Sp9cJI7RqZ7IND+94UOZ2TmuKtkatniMUFGtotJRUHPGgzK1RS3HlIu3wHKGg20ZWkRlkDeosNq/TcF0ngHhzJq1hnTLp5v8F0/OTYfafpzTcpc5ro6aGnMNIWyuTkCRYANTekHPobzKjT144SXASseWcw40elLXlHB7gnXgK3zvPkSTo52Qvay0GEwzsIs2jJqeBeLKiUys2fdNE6sW7/dQCwjk7HK5JrFsjNl1QmiwRbqKd4ob9EguEnZqwoaDl+TVaZsfUwhMzTv8EdZhr+JDpJdIqJRFrtbIEn/Fm8aXqBzgOfaTwKiKPaR/xYmZ78SOtgrObuh6uLTj00WmEghaJvG4wdwrBYN4Z1VyMvoLtQey+t6lKyL9NGxtlM6Jh2r11ejvNA/fG9Oh3OawqmenXN5J5GNHbxNmKsPtHmb9G2onNTf71bKWYE64e4ZAOIvgkc4RG78nNdnNOP8sjTDz4xf/SX7oLsIBLF6hVd2c5Wdy32oujfUQ6xtjxeJxOEKG9RzLe6jlzu/FwFMPX5QYL6Hdhuw+Oi9xQ571dKJjXGTwb8YAGtBFnuMOc1QfHFabU6BXjeS1ms0T4WF/ZoDl1sU+nPM1fJSS99fPJPpQAAAAASUVORK5CYII=) no-repeat 0 100%;
		background-size: 14px
	}

	.recommend-key ul {
		padding: 15px 0;
		font-size: 0;
		position: relative;
		overflow: hidden;
		max-height: 214px
	}

	.recommend-key .up ul {
		max-height: 214px
	}

	.recommend-key .down ul {
		max-height: 110px
	}

	.recommend-key .down .add-white {
		width: 100%;
		height: 10px
	}

	.recommend-key li {
		font-size: 12px;
		float: left;
		width: calc(25% - 16px);
		height: 36px;
		margin: 5px;
		text-align: center;
		position: relative;
		color: #333;
		border: 1px solid #e4e4e4;
		border-radius: 3px
	}

	.recommend-key li:first-child,
	.recommend-key li:nth-child(4n+1) {
		margin: 5px 5px 5px 0
	}

	.recommend-key li:nth-child(4n) {
		margin: 5px 0 5px 5px
	}

	.recommend-key li span {
		display: -webkit-box;
		line-height: 13px;
		top: 50%;
		left: 50%;
		width: 100%;
		padding: 0 5px;
		text-align: center;
		transform: translateY(-50%) translateX(-50%);
		-webkit-transform: translateY(-50%) translateX(-50%);
		position: absolute;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical
	}

	.text-over-2 {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical
	}

	.complement li.brand {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_brand_gray.png) no-repeat 0;
		background-size: 18px
	}

	.complement li.buy {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA2xJREFUWAntmM9LFVEUx30/eliCCKauQ6hwI4LgRgj1bd8y2tUfoLS0rLUELqX25aaidi19/ughjwRD3Egbo8Aw34NAMlDerz5nuldm5t07M+85LgIHrnfuOd/zPd8599wZtaPj8gquQCLYbfeura2lq9Xq/UQikWs0GoOC5H6P+w/pdHppYmKiao+2e9oSlM/nh0j8CtpRRg0hXyQFtttMKcYWtgfZbHZX7K1cLQtaXV0dq9VqH0lYQcBsf3//0vDw8B9JurOz01UqlaRqC/iupFKpO5OTk5sXJoht6mSbtknYxxibmpraMyVbWVkZRNAmo8z2jbB9JyacyZY0GW02KjOLT7Zl2iZGYpVvRrAqRsyRrpYEwXiPynyjN96GsYN5A/a7xIRh3f7Igih/knGL4M9ugpD7LYmR2BDcmTsycH19vZsoOUHGvjlj9N4INqVivR7LKrIgmlOfyIaFy2R2sK5YE8ZjS3tWvgXvm2lMQ4wjTteidqtT9JC1Lb5K/yyyVU5IJpPpWV5efoLtGoZd+uuF5vLPNkL9TnkuARD9TiaTr3UwiUYZIla20HTVMBa14/j4+AYcM8R0io331Uv97tIYPVsFlcvlAQFB9JRj/GxjY6NHB8kpg/yduLXNNzeIq1PhEbFToe3x8fEuKvuYuHnF/dUX4yyDekgLOoC8qW8kIUM+G6ZR9ydT+ANld7j9GFlHEXQowEqlcldmrhxv7LNq/TM1/1SYnHh0LKIcLkztCyL4sFAo9NXrdWnEE0o+RIM/4j7wEoxgAZ1IrHBwf35B8lQ8YQYyaeB91tIfcloCL8EIFtA+IyUcrM8viK95iab+AdkcoxfyT8wLgWpwKoxgexlzwiFcKs66ZVZeTsh7xi8roE2HcAq3Ldx67Nl/eQpdYlt8y3Z4hdNaobBTFrsg9ZD/uaBisXiVJ+nmcxF7hRRnt8rRtOXGLTs9PdUljV2Q2rIOVw6PKKMg1dACvDBBrhzhgkBceIVcOcIFafXMPz3oeBZO1XUOP6Vxy/j2OBUiKPYtg9t5SJ0jkiBAjiB+9dSven9c22sXp24LD5exQnx7BHzUyh94HtaAheI8UjmakEZBoAYIiH27dHbFbayQ7Vt2nf65yUewokninOFOI8r43xGjIALmEZBljlOHhwvuvMdwuYhYgb+Ya3MRQ6ofNAAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 18px
	}

	.complement li.land {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_land_gray.png) no-repeat 0;
		background-size: 18px
	}

	.complement li.plane {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_plane_gray.png) no-repeat 0;
		background-size: 18px
	}

	.complement li.subway {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA1dJREFUWAntl0toU0EUhpubGGuw0I0ggWIrZhWoVYutwUWfuhYVqaAWcdGKu4JKF+LKLhQU0YWgoDt3Cl0ofYWUGlCq4CKLFhEjFBTxAVIT8/SbmEB6M/fOTIkLoQPDzJxz/v/+c+7M3LkNDRvlP8uAR0fv9PT0HuImqHupm3UwDjGfPR7Pk0AgcDUSiaRkMT6ZsdoWi8XastlsrFgsFiCL4vtd7Tfst8BzcXV1tQXcSRlWKSiXy52GpMnr9Xb09fW9lZGY2GZmZh7AdzYej18gS9/sWMtusI8Bt2HL1ENMmfuVaFOpVGt5vKZRZojoRl6VxczOrEGuf9DtBlUKIkO7IRBxD92ITH0+n68VzBs7TikIgI8MFakH7eD1jAuFwhVwhzOZTKMMryOohOvv74/LCExtvPovZN0RplzUjsh/5NgQpErsRoZUGdLeZbOzsxEVmY6fbb/NLU5HUI5t6qG+cCMy9fn9/rQMoxTEgSg+qLuo52QE67D1MLlhPtofZFilIEBpCAqDg4OPBAF97/z8/M5gMPgxFAopryLRaHS7wPX29n4SLQejuE8Ni76sGO0yrgxbWEsvOfaXk8nk0sLCQlBGWrHx8PNkYkVU0a/Y3VojQVysDpGhfbzGOO2OdDo95EZOzCX8K6KW+27hJZ+RIC5p70AVqAcEGmHLonUqZb+4HbbQX3KKq7brrKE8ZBYz9NIm5ubmjuTz+WP0Y3xwJ6vJ7H0mcIptPi7slmVdEy04P1xiLCZWU5SXfN79GAQ3IBrjAbdZnLkaFk2DWHO85qeEdzRTOjs7f9mhSkGQNHHdfA0whKgU4rJ2EoPxVmIteMYHBgbEX0xNUQoSiLKoEYjaGW6qYdE3fCV0EjHP9SGKyMXFxYAiROoms1qT1wqqPGFqamqExXiH8Ri1dNBVfIr2KP5u1mA7a/CHW6zOLivhxQ8jB9xNdo0Xwy03Uicf2Hv4Tjj5hV0rQ6Rb/AbFWENdzHKUbf/ejdTBNwrPcTiGWEOPHWL0BPFvfxmCCciuU+86kbnZyU4A7DNENfPaw5xh4gSvKcoMkZl2SMT/k3hVdSkIS5KlVhmZcg0B3g/wJ6Lu0/8uIzG09RDflUgk/OFwOGOI/RvOFUIp3IS43nwmzzaO/QOC5DqC6vHc0QAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 18px
	}

	.complement li.train {
		background: url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/k_train_gray.png) no-repeat 0;
		background-size: 18px
	}

	.complement li.view {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAtpJREFUWAntljuIE1EUhncyw5oHC3FBRGGL7VTUQtIYTRGSKFis2Ag+kGUttLAwiBYWaqEiCmohuxZqoewWgqYQguRpYmSLxc64hdqsShrRzpi3340ZyKyTxEziZooMnJx77/znP/+cOfdORkaG1xpUIJlMurAt/Uhl6ZUkGo3eKpfLS5VK5X08Hp/ula9nQQg4KklSDl+sVqtHBi4IMa9rtdombB1ikgMVhAiZqqxHVK0hZONABcVisbuI2YeIq/hn+LOsnepFlOEeopnPk/gM9tTn8112Op0nEPWW+b1EIjFlVFTXgtjeCmLmSHgTe+NwOKbFK3O5XD+tVqsQ8oUdF6JS54yIkroJSqVSk6VS6SG94yVuQVGUk16v91czRzqd3lAoFJ6zthehj+12e9Dtdn9vxrQb/5OgTCYzls/nL0IUxBQSXfL7/ddbEWez2dFcLjeH8BmwP8BdkWV5FvHlVjHqektBkEmUfQ/AY9hhbBzyGMRBiN+pBO08veRjF96Gaye4z9g8VZ1vF68RFIlENpPwAAS7sQAEE1gVISnsDs37gnlXFzwywmbwp7FdjeBli8USo9cWbTbbS4/HI6pYvzSCaNYVVidILkq7BEGIwAWEfP0D7+2XHtxaLBZFxafIsR1+kX85EAhsU5kVddDwrwAeZxwC/A0/yVPcQGiJsaZ5G/i6AztGXEcMYlRMhpgPxBzCLzZzaQQBCAIYB3AQGxVA1oRrexnEFMkVJvZCW3JxE6CEycJo7BW+4mF1rucNYnSfVPdgRHUNqwhDgBAoKlWf63mDGPX7pymQriANYo0nQ0GdCj6s0LBCnSrQ6b7pekj3tBRPwel7DbefQ28HPs+B+FGs613dYsDP8kF9pMdlugrpidSsib8kVCusWVw16RdG0JquQqYTpPk/tOpN1Kc08xOa8JPePXWtXxjB99cuU3eXmux/eh7kPn+PHzTnMN0raxZnivFvhICasafWJYoAAAAASUVORK5CYII=) no-repeat 0;
		background-size: 18px
	}

	.complement li.hotel {
		padding-top: 15px;
		padding-bottom: 15px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAptJREFUWAntVT1oU1EUfu+Z8LbyMhRBIyKCLqUgZjMhQxJcMjmI4KLgYPcOrYPWoU6dVZxcBMfOJoE2CdTGgq2LgziI6NKfIYHmP/E7lx647yXv9SavlFebB/edv++ee+65556raZNvkgF/GdBVp/f7fT2fz3/Udf266hzGYe5eJBK5F4vFDlnnRg03g1NfLpct6O5jRJ02LxnBTMN+t1ar3fDCsS3EzAj0fTqdXlDF53K5OWBfq+KVM6Tq0C9uEtBxGRynhoTPQqEwj4J94LHANmrtiYd9qClwRzZ2hlKp1Aq2SONEv+BnCN14EbVxxbntRqNhOnUqMnxNobtrnU5nET1p3znHMIxVZPsT621Hhm58qV6vv2KjCxXPDYr6Mha75YLRwuHwz2Qy+R3BXDzCUJcf+OBjBsrhAbXbbXGEcPICUS/LsyuVilWtVveg65Mejt5iZGWMzMPXH8j0zPwgvWmatxOJxA7x/GFT38BfYJmoLUNswEI9BNVlmWipVOrJMuxPIXtmSMZ3u90BnygPsTkZNzQgGeDGI4OUARon+rkGhOhnsdIbDBMZ+wL6zO/KKOoPyOxN+DkEfQy/Ay6Df+05ZLR9Krg7LKOGIswTHefpyGQyD2UfOAVZFPzZydBxNTTO03G+amjg8BUU/1cNKWxYQFBrz8FcZTx6y29kYonlUalrY1RxVCwWp5vN5ktg6VnoIRi6tQYe6XfxePyvig8nxte1b7VaYj6CWUbfCoMu0QL8SDsXU5F9BaSywKgYW0DRaHQXDraw0y2nIxxBFfoNjE22WZZ1AH4TOnrrNJpH/JEfAYO8jbETCoV+CYX9twZx3a4KmKRzPLgtK+AfsXzaFBfiM25nVr5lX6G8dtqB8Hp03MwHiv4Dq1vt0kAf29sAAAAASUVORK5CYII=) no-repeat 0;
		background-size: 18px
	}

	.complement li div {
		padding-right: 84px;
		position: relative
	}

	.complement em {
		color: #fe3c71
	}

	.complement li span {
		font-size: 13px;
		color: #999;
		position: absolute;
		right: 15px;
		top: 0
	}

	.complement li.hotel .hotel-name {
		height: 14px;
		line-height: 14px
	}

	.complement li.hotel .hotel-tips {
		height: 20px;
		padding-top: 8px;
		line-height: 12px
	}

	.complement li.hotel .hotel-tips span {
		position: relative;
		display: inline-block;
		font-size: 12px;
		color: #999;
		line-height: 12px;
		border-left: 1px solid #999;
		right: 0;
		padding-left: 5px;
		padding-right: 5px
	}

	.complement li.hotel .hotel-tips span:first-child {
		border-left: 0;
		padding-left: 0
	}

	.complement li.hotel .hotel-price {
		position: absolute;
		text-align: right;
		top: 0;
		right: 15px;
		width: 74px;
		font-size: 14px;
		color: #f60;
		top: 50%;
		transform: translateY(-50%);
		-webkit-transform: translateY(-50%)
	}

	.complement .hotel-price i {
		font-size: 10px;
		color: #3f3f3f
	}

	.complement .hotel-price i.yel {
		font-size: 12px;
		color: #f60
	}

	.his-ask {
		text-align: center;
		font-size: 14px;
		color: #333;
		width: 247px;
		height: 95px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		-webkit-transform: translateY(-50%) translateX(-50%);
		border-radius: 14px
	}

	.his-ask div {
		height: 56px;
		line-height: 56px
	}

	.ma-ma {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0
	}

	.btns {
		line-height: 38px;
		position: relative
	}

	.btn-left,
	.btn-right {
		width: 50%;
		display: inline-block;
		text-align: center;
		position: absolute
	}

	.btns .btn-left {
		color: #999;
		left: 0
	}

	.btns .btn-right {
		color: #f80;
		right: 0
	}

	input {
		font-family: inherit;
		color: #666;
		font-size: inherit;
		display: block;
		border: none;
	}

	input[type="search"] {
		-webkit-appearance: textfield;
	}

	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none
	}

	.recommend-key .down .title span[data-v-3504c4f4],
	.recommend-key .up .title span[data-v-3504c4f4] {
		position: absolute;
		right: 279px;
		left: 20px;
		/* bottom: 0; */
		height: 14px;
		width: 73px;
		/* display: inline-block; */
		/* float: left; */
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR…MJE1XU2DrVBwoao8nJSe/GxsZ5BHSdJfZXwrRXsnnq/wFY2dysbsx5FQAAAABJRU5ErkJggg==) no-repeat;
		background-size: 14px;
	}
</style>
