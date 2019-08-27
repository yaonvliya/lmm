<template>
	<div class="add">
		<router-link :to="{name:'map'}">

		<div class="dest">
			<p class="city">西安</p>
			<i class="myplace">我的位置</i>
			<i class="arr1"></i>
		</div>
		</router-link>

		<div class="dest oversea" style="display: none;">
			<p class="fs-18 cl-33 lv-bd-bottom">
				<span class="spec"></span>
			</p>
			<i class="arr"></i>
		</div>
		<div class="date" style="font-size:0;height:auto;">
			<div class="inout flx lv-bd-bottom">
				<div>
					<i style="display: none;"></i>

					<p class="fs-10 cl-99">入住</p>
					<router-link :to="{name:'date'}">
					<p>
						<span class="fs-18 cl-33">08月13日</span>
						<span class="fs-12 cl-33 fw-li">今天</span>
					</p>
					</router-link>
				</div>
				<div class="count ta-ce flx-1 flx-jus-cet flx-ali-cet">
					<span class="fs-12 cl-33 fw-li">共1晚</span>
				</div>
				<div>
					<p class="fs-10 cl-99">离店</p>
					<p>
						<span class="fs-18 cl-33">08月14日</span>
						<span class="fs-12 cl-33 fw-li">明天</span>
					</p>
				</div>
			</div>
		</div>
		<div class="keyword" @click="hotelselect()">
			<i class="arr"></i>
			<p class="" id="hotelsnames" >关键字/位置/品牌/酒店名</p>
			
		</div>
		<div class="price">
			<p class="fs-16 fw-li cl-bb">价格星级</p>
			<i style="display: none;"></i>
			<i class="arr"></i>
		</div>
		<div>
			<router-link :to="{name:'lmhotels'}">
				<button class="searchhotels" @click="searchhotel()">查找酒店</button>
			</router-link>
			
		</div>
		<keysearch1  class="keysearch2":x="1" @getKeyWords="getKeyWord"></keysearch1>
	</div>
</template>

<script>
	import keysearch1 from "./keysearch1"
	import hello from "./hello"
	export default {
		name: 'add',
		components: {
			keysearch1,
			hello
		},
		data(){
			return{
				hotellists:[],
				searchkey:''
			}
		},
		
		created(){
// 			fetch("http://10.35.170.5:8000/hotel/search",{
// 			 　   method:"POST",
// 			 // 　   mode: 'cors',跨域请求
// 				　　headers: {
// 				　　　　'Content-Type': 'application/json'
// 				　　},
// 				　　body:JSON.stringify({
// 				 　　'search_key' : '$("#hotelsnames").html()',
// 				　　})
// 				　　})
// 				.then((response)=>{
// 					return response.json();
// 				})
// 				.then((res) => {
// 					console.log(res.data);
// 					this.hotellists=res.data;
// 					this.$router.push({
// 						name:'lmhotels',
// 						// path:"/lmDetailUp",
// 						params:{
// 							hotellists:this.hotellists
// 						}
// 					  })
// 				 })
// 				$axios({
// 					url:"http://localhost:8000/api/adduser",
// 					method:"post",
// 					data:{
// 						name:$("#hotelsnames").html(),
// 						
// 					}
// 				}).then(res=>{
// 					
// 				})
			
		},
		methods: {
			hotelselect() {
				$(".keysearch2").css({
					"display": "block"
				});

			},
			getKeyWord(status) {
				console.log('调用了子组件');
				$("#hotelsnames").html(status)
				this.searchkey=status;
				console.log($("#hotelsnames").html(status));
				console.log(this.searchkey);
				console.log(status);
			},
			searchhotel(){
				this.$router.push({
					name:'lmhotels',
					// path:"/lmhotels/",
					params:{
						searchkey:this.searchkey
					}
				  })
				console.log("1");
				
			}


		}
		
	}
</script>

<style scoped>
	.searchhotels{
		width:350px;
		height:45px;
		background: rgba(239,5,84);
		border-radius: 20px;
		margin-left: 0px;
		border:none;
		font-size: 16px;
		color:white;
	}
	.add {
		/* padding: 10px; */
		z-index: 10;
		width: 350px;
		height: 200px;
		position: relative;
		background: #f7f3f3;
		margin-top: 10px;
		margin-left: 12px;
	}
	.dest{
		width:100%;
		height:50px;
		/* background: yellow; */
		line-height: 50px;
		display: flex;
		border-bottom: 1px solid lightgray;
	}
	 .city{
		font-size: 14px;
		color:black;
	}
	.myplace{
		font-size: 14px;
		color:black;
		margin-left: 230px;
	}
	.tab{
    height: 42px;
    line-height: 42px;
    z-index: 10;
    border-bottom: 1px solid lightgray;
}
	.flx{
    display: flex;
    border-bottom: 1px solid lightgray;
}
	.price{
		width:100%;
		height:50px;
		/* background: yellow; */
		line-height: 50px;
		/* display: flex; */
		border-bottom: 1px solid lightgray;
	}
	.keyword{
		width:100%;
		height:50px;
		/* background: red; */
		line-height: 50px;
		display: flex;
		border-bottom: 1px solid lightgray;
	}
	.keyword p{
		width:230px;
		height:50px;
		/* background: red; */
		line-height: 50px;
		/* display: flex; */
		border:none;
		border-bottom: 1px solid lightgray;
		font-size: 14px;
		color:black;
	}
	.inout{
		height:50px;
		}
	.keysearch2 {
		position: absolute;
		top: -234px;
		left: -12px;
		background: white;
		display: none;
		width: 375px;
	}

	/* .add>div {
		width:100%;
		position: relative;
		height: 0.5rem;
		/* line-height: 50px; */
		/* padding: 0 10px; */
		/* background: #f8f8fb
	} */ 

	.add>div>i.arr {
		width: 7px;
		height: 12px;
		position: absolute;
		right: 10px;
		top: 64%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAQAAABgzgTcAAAAyUlEQVQoz2NgoACsilp9a50ODsm1Sqsfr3q3yhKXXrlVN1Z/XeWBQ3qzyOrTq36ticQhvZF31d7V/1bl4JDexr5qzar/qxtw2c28ehZQesp/RlwK2oHSy86w4pIuAtq9fTMXDuk18av+rN6DQ3J1GVDvOiwS/5lWTwLaumA/C4bUfg6wd9qw6NoiuPrQqr+rs7CH8NVV31cFYnOh3qqnq96ttcYWsuKrPq56uE4Tm4E2G2RX1W2UwuqrVf/XJOHy8sXVnTiDmkwAAOlIXVUyCAXzAAAAAElFTkSuQmCC) no-repeat 0 0;
		background-size: 7px
	}

	.add>div>i.arr.cross {
		width: 30px;
		height: 50px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAZlBMVEUAAACrq6urq6vAwMCqqqqqqqqqqqq1tbWrq6urq6urq6urq6usrKyrq6urq6utra2srKytra2qqqqqqqqrq6urq6usrKysrKyrq6urq6urq6urq6usrKytra2srKy2trasrKyqqqpI/E1VAAAAIXRSTlMA9/EE7eOwCOm9jYJFNzMsIRjetpR7OyS6qZ5KQjAoCmv3yOeAAAAAjklEQVQY05XQ2w7CIAyA4TIOgnMbbPOwqdO+/0saQKyk8cL/huYL6UXhZ/MTqnoT4jPhsdJGJX64b+8a1QN8nPRe5p3Dlmn0S/ZTo4Ys5FFtVvIJ26zMhd2AdRC4cr0J63DPVW/SFKcN+gwQnWvymWn0hf5fhfZllqsJRUcPlH/vGZNSC6bLDgGqZCfhv15jnwfoik2YigAAAABJRU5ErkJggg==);
		background-size: 11px;
		background-position: 100%
	}

	.add>div.dest>i.arr {
		right: 70px
	}

	.add>div.oversea>i.arr {
		right: 10px
	}

	.add>div>p {
		padding-left: 20px;
		background-repeat: no-repeat;
		background-position: 0;
		background-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-right: 10px
	}

	.add>.date {
		height: 61px
	}

	.po-re {
		position: relative
	}

	.ba-wh {
		background-color: #fff
	}

	.dest>i.pos {
		right: 10px;
		top: 0;
		width: 50px;
		height: 23px;
		line-height: 12px;
		padding-top: 27px;
		box-sizing: content-box;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAB40lEQVRYw81YPW/CQAyleyV+RfkXLP192cnHwEjFAgOdEKGiCxXQFSoYUDdUsSAVUXVw70Wx5KLcJUBoHcnKKfE9v/h8tnOVSgmX7/uPkIqWq9FoEOTfibTb7dswDGtMCGM8+zMCRHQTRVE9CALPGF+aO2VJ+s6DLuZchYwBvzeGpjYSDnJTzC2NiAGtGtDusaFW64FGo2eazV5pPn9LBGM8w7sMYsCoXkSm2WzeGZCFAKXh8Ik2mw86HL6dAh3oYo4gtgDmWWQQoEa2DNbpdAsRySKGueKjtieTgmulZwaDmPb7r5PJsGAuMKSnTlo+GTMAOpfIsUhSsFF4N8llusQzWZ6Sy5e7+5AzeGsjGM+JmSIxxYEOW848lSa9RBk7JA98vX6n8fiF4jhOBGM8y5sHbOGluiuYPVZ0eWe3+6TJZEL9fj9T8A46Li+JAPdchFac9Fxf6CIjSbkwOHmizFgLJbNGtnUtUx4ZFtfywQbbyyzISISsgBJgA0KcFCUEXRsObIgUUPvVXHH7wAqoSzYgBG9RQtC14cAG22P7SZOnjFBP35KpDerUS0s1215lYlRXOtQVV3Xth8oGTWULq67JV/kbpPJHUeWvtO2wgbtLi6yuftig8jhG/YHV0ZFerwysHxDGjb9qfKg4AAAAAElFTkSuQmCC) no-repeat center 7px;
		background-size: 18px
	}

	.dest>p {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAACcklEQVQ4y6VUO08bQRDGBvE0SkAIIfHo3PgP8CgQBQ0FogDhhlDQQGHRJhJNQBSEngJR0FBRgWKkRASJjkATpAhomNk7zhyHjVAgCIkCNt/tnp27w3aKeCTf7Mx83+zMzm5Fxf/9nAaR5E0+pXu651PeFEmnoWSwjNIUOySDAsuUjBYJt+t5WwUccspM5BpzjWaCU3yobNt2fSjcquMDuHIiGSYSScoBcmDVBcy0DiNb8WJbteLMIFv3mXgY4Q9mwltNUppttvE/qS3Y3AMihvPFRvgYy5TawFv+Gij5C71RJCnoP2REM/bDdSGrlb4Bh80Tok208QSySN5QpNV0Ab1fA5YBWFKVDEL7RV2FyrqwkjSo9CUAljUArRMDSluBcdFfMC/CsqI2OwDtu+axSFrtyr0F43gAMA7LlupVO3JZGvCEDLXKvQb3XAAwB8uaylALwJMG4GB0S2nUZTGb8uFmE2VgGdWtdQ9WA76B5Z3X4F3ox0avjMqo0avavaubidOBrg9/Ftg9zZnpoBN1Ar8h7vck0+F1bA8bn1VqNsa3WHR7x1hD83zGz5Azmpc13kR1g/82G8uXtgCuHX+x2VjBqfl3AFj4O9otdAfDWKmbwmMgvLNb/EM8DcCV1Vx0Wpv5ClueDt62CO+DJe2NV8BDaZDtv/JcdvINeN6HAfQB4TeXnUVSG0P8ws9iJHDfRtCtF2OoVHHuIDyKnkJ4Dz+GhyUMWXUHQF9VK65u82rZd0lWuiXSudPqtNI5wj/Lyn8+ZXwEyE+I5KNyz1iVmKGPruAGXqs5uoamLGJGVr3uUV/4zfOL0Vcmg5JPkMLKn+EPHGISgjKful0AAAAASUVORK5CYII=);
		/* padding-right: 50px */
	}

	.fs-18 {
		font-size: 18px;
	}

	.cl-33 {
		color: #333;
	}

	.lv-bd-bottom {
		position: relative
	}

	.lv-bd-bottom:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		border-bottom: 1px solid #DDDDDD;
		width: 100%;
		transform: scaleY(0.5);
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		-webkit-transform-origin: 0 0;
	}

	.po-ab {
		position: absolute
	}

	.fs-12 {
		font-size: 12px;
	}

	.date {
		background: #fff;
		position: relative
	}

	.flx {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex
	}

	.flx-1 {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1
	}

	.flx-jus-cet {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center
	}

	.flx-ali-cet {
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center
	}

	.fs-10 {
		font-size: 10px;
	}

	.fs-16 {
		font-size: 16px;
	}

	.cl-99 {
		color: #999;
	}

	.cl-bb {
		color: #bbb
	}

	.fw-li {
		font-weight: 400
	}

	.keyword>p {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAQAAADR77dlAAABLUlEQVQ4y72TvUoDURCFT4IWYhlNYSUkjY3Yp7HM9j6CSGx0G/MCvoQ+hI8g+hApEsKZ2fygCwbsLET3WGwiIer+CDqnGS7nu3Pnzr1Qxc85tITKliUceqgK/CzPuiwPYQOKp6oiJ1T1DsUh7I3SGgqEqpQlsHcqf/80KOrfgVHLBjbzEAA8tJn1R61VIFkGbJDe+bgxbqSzsf53QGV5iaK87e1FXgiIgigoBESBHfHVkmjvYSsK7JIyzwQA71K8mXd0T9lxJhBv8skS2wcAP6TMtZ4JTDYmTd9N82lt0ozrX+ewcqTcwVG/AIA/AaY1yl4+gbjuJ5nq8JayuzkQ19nL/6D27AegqNRufbv+Wbyyi/HO4vX0KPYetwt3XsK+qFDYDpS0AyXtQEk7PgD/09mSTD//NgAAAABJRU5ErkJggg==)
	}

	.inout>.count>span {
		padding: 1px 5px;
		border-radius: 20px;
		background-color: #fff;
		border: 1px solid #bbb;
		white-space: nowrap
	}

	.inout>.count {
		line-height: 0.3rem
	}

	.ta-ce {
		text-align: center
	}

	.price-filter>p {
		padding-left: 10px
	}

	.price-filter {
		height: 100%;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}

	.price>p {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAuElEQVQ4y8WUMQrDMAxFBSaGdO3qO3Qq5AaFbhlykiw9TM7kG1g2xPQAHTNUlZKlQ6gtKK20yOI/W8OXASD16MMSqJAL+tSDyIvSt2SEbyccqYFCUIMjKz3IMGX5hshgIA9BZazafYAMGQUwt8gxt9VA7KQbu+8DeIoXBXA/hAefztVAdlLj8FuALE7hpgDSlTvPfKwGcJAquz8BZLLLThxEViqy4qq1MkW3frK3doHUK6r+BLTfzAufmOcbaA9/rAAAAABJRU5ErkJggg==)
	}

	.day i.count {
		top: -40px;
		border-radius: 3px;
		background-color: rgba(0, 0, 0, .6);
		font-size: 12px;
		height: 30px;
		width: 44px;
		line-height: 30px;
		padding: 0 5px
	}

	.day i.count,
	.day i.count:after {
		position: absolute;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%)
	}

	.day i.count:after {
		content: "";
		bottom: -6px;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 6px solid rgba(0, 0, 0, .6)
	}

	.date:last-child {
		margin-bottom: 100px
	}

	.date .title {
		text-align: center;
		font-size: 15px
	}

	.date .scroll-anchor {
		position: absolute;
		width: 1px;
		height: 0;
		top: -46px
	}

	.date {
		background: #fff;
		position: relative
	}

	@media screen and (max-width:320px) {
		.date ul li {
			font-size: 15px
		}
	}

	.data ul {
		white-space: normal
	}

	.date ul li {
		display: inline-block;
		width: 14.25%;
		text-align: center;
		font-size: 16px;
		color: #333;
		list-style: none;
		position: relative;
		height: 56px;
		line-height: 56px;
		vertical-align: middle
	}
</style>
