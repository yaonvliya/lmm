<template>
	<div>
		<div class="lmspecial_box8">
			<i>主题推荐</i>
			<li>精选</li>
			<li>美食</li>
			<li>美景</li>
			<li>亲子</li>
			<li>海岛</li>
		</div>
		<div class="lmspecial_box9" v-for="(item,index) in topics">
			<div class="box9Left">
				<img :src="item.topicsimg" />
			</div>
			<div class="box9Ringht">
				<i>{{item.topicword}}</i>
				<a>好评率：&nbsp;{{item.topicgood}}</a>
				<span>{{item.topicprice}}</span>
				<b>起</b>
			</div>
		</div>
	</div>
</template>

<script>
		export default {
		name: 'lmspecilarecommend',
		data(){
			return {
				topics:[
				{
					topicsimg:require("../../assets/lmfind/img/IMG_0301_031.jpg"),
					topicword:"河南老君山",
					topicgood:"100%",
					topicprice:"￥288"
				},
				{
					topicsimg:"https://pics.lvjs.com.cn//uploads/pc/place2/2017-05-11/59f2852f-18f7-4c70-86b4-df2186aa4c68_480_320.jpg",
					topicword:"上海长风海洋公园",
					topicgood:"96.1%",
					topicprice:"￥140"
				},
				{
					topicsimg:"https://pics.lvjs.com.cn//uploads/pc/place2/2014-10-11/1413030443068_480_320.jpg",
					topicword:"上海靖江乐园",
					topicgood:"96.3%",
					topicprice:"￥57"
				},
				{
					topicsimg:"https://pics.lvjs.com.cn//uploads/pc/place2/2019-06-28/119880f5-97e7-490c-8080-0f4df4ddcf11_480_320.jpg",
					topicword:"白鹿原影视城景区直通车1日半自助跟团游",
					topicgood:"100%",
					topicprice:"￥55"
				}
			]
				}
				
		}
	}
</script>

<style>
	@import url("../../assets/lmfind/css/special.css");
</style>
