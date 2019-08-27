<template>
	<!-- 搜索页面 -->
	<!-- 头部综合搜索 -->
	<div class="searchHead">
		<!-- 返回的箭头 -->

		<span class="search-head-back" @click="back()"></span>
		<div class="search-bar">
			<!-- 城市选择 -->
			<div class="search-city">
				<span>{{city}}</span>
			</div>
			<!-- 右边文本框搜索 -->
			<div class="search-right">
				<span class="split"></span>
				<input class="input" type="search" id="keyword" placeholder="搜索景区/目的地/酒店/邮轮" @blur="sendmsg()" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				city: "西安"
			}
		},
		methods: {
			back() {
				this.$router.back();
			},
			sendmsg() {
				var keyword = $('#keyword').val();
				console.log(keyword);
				this.$router.push({
					name: 'lmhotels',
					params: {
						searchkey:keyword
					}
				})
				console.log("1");

			}
		}
	};
</script>

<style scoped="scoped">
	/* 头部 */
	.searchHead {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		padding: 0.1rem 0.14rem 0.1rem 0.45rem;
		box-sizing: border-box;
	}

	/* 箭头返回 */
	.search-head-back {
		position: absolute;
		top: 0.1rem;
		left: 0.05rem;
		width: 0.35rem;
		height: 0.3rem;
		background: url(../../assets/img/searchaddress/back1.png) 50% no-repeat;
		background-size: 0.1rem;
	}

	.search-bar {
		height: 0.28rem;
		background: #eeeef5;
		border-radius: 0.3rem;
		padding: 0 0.08rem 0 0.12rem;
		display: flex;
	}

	/* 选择城市 */
	.search-city {
		padding-right: 0.12rem;
		margin-right: 0.08rem;
		position: relative;
	}

	.search-city span {
		height: 0.14rem;
		line-height: 0.14rem;
		margin: 0.08rem 0;
		display: block;
		font-size: 12px
	}

	.search-city::before {
		content: "";
		border-right: 1px solid #999;
		border-bottom: 1px solid #999;
		display: block;
		width: 0.05rem;
		height: 0.05rem;
		transform: rotate(45deg);
		position: absolute;
		top: 0.1rem;
		right: 0;
	}

	/* 右边文本框 */
	.search-right {
		position: relative;
		flex: 1;
		display: flex;
	}

	.search-right .split {
		width: 0.08rem;
		height: 0.16rem;
		top: 0.06rem;
		line-height: normal;
		position: relative;
		display: inline-block;
	}

	.search-right .split::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		border-left: 1px solid #ccc;
		width: 200%;
		height: 200%;
		/* 缩放 */
		transform: scale(0.5);
		/* 视图被放置X 0  Y 0 轴 */
		transform-origin: 0 0;
	}

	/* input框 */
	.search-right .input {
		border: none;
		background: #eeeef5;
		width: 100%;
		outline: none;
		padding-right: 0.2rem;
	}
</style>
