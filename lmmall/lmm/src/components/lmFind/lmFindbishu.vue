<template>
	<div class="find">
		<div class="lmfind_bs">
			<div class="lmfind_bspic">
				<img class="pic3" src="../../assets/lmfind/img/shou.png"><span class="span_5">避暑好去处</span>
			</div>
		</div>
		<div class="jingqu" v-for="(scene,index) in bishus" :key="index">
			<div class="lmfind_box6" v-for="(sceneimg,indexs) in scene.bishuimg" :key="indexs">
				<router-link to="lmfind">
					<div>
						<img :src="sceneimg.img1">
					</div>
				</router-link>
				<div>
					<img :src="sceneimg.img2">
				</div>
				<div>
					<img :src="sceneimg.img3">
				</div>
				<div>
					<img :src="sceneimg.img4">
				</div>
				<div>
					<img :src="sceneimg.img5">
				</div>
				<div>
					<img :src="sceneimg.img6">
				</div>

			</div>
			<div class="banner">
				<div class="lmfind_box2"><span class="span_3">{{scene.findweigonglue}}</span></div>
				<span class="span_2">{{scene.findscenesaddress}}</span>
				<span class="span_4">{{scene.findscenestitle}}</span>
			</div>
			<div class="lmfind_box3">
				<div class="boxLeft">
					<i class="shanghai">{{scene.findscenesWord}}</i>
					<i class="waitan">{{scene.findscenesWords}}</i>
					<div class="box4">
						<a class="uzi">游记</a>
						<a class="deft">实用</a>
						<a class="deft">精华</a>
					</div>
				</div>
				<div class="boxRight">
					<img class="pic2" :src="scene.findscenespic2" />
					<span class="iconfont icondianzan">{{scene.findscenesdianzan}}</span>
					<span class="iconfont iconyanjing">{{scene.findscenesyanjing}}</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'lmFindbishu',
		data() {
			return {
				bishus: []
			}
		},
		created: function() {
			fetch("http://localhost:3000/bishus")
				.then((res) => {
					return res.json();
				})
				.then((req) => {
					return this.bishus = req;
				})
		},
	}
</script>

<style scoped="scoped">
	@import url("../../assets/lmfind/css/index.css");
	@import url("../../assets/lmfind/css/font_1347034_b5jykmliymc/iconfont.css");

	.find {
		background: #f4f4f9;
	}

	.lmfind_find_1 {
		width: 100%;
		height: 42px;
		/* background: red; */
	}

	.lmfind_box5 {
		text-align: center;
	}

	.lmfind_box5 img {
		margin-left: 107px;
	}

	.jingqu {
		width: 100%;
		height: 100%;
	}
</style>
