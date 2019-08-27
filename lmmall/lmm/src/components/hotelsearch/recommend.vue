<template>
	<section class="recommend sec ba-wh">
		<p>
			<span class="fw-me cl-33 fs-16">— 主题推荐 —</span>
		</p>
		<ul>
			<li>
				<img src="https://pics.lvjs.com.cn/pics/super/2019/04/1556611494_64901.jpg" alt="">
				<br>
				<span class="fs-12 cl-33 fw-li">恒大酒店</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics/super/2019/05/1559093668_23495.jpg" alt="">
				<br>
				<span class="fs-12 cl-33 fw-li">悦榕集团</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics/super/2019/01/1548926517_22135.png" alt="">
				<br>
				<span class="fs-12 cl-33 fw-li">长隆</span>
			</li>
			<li>
				<img src="https://pics.lvjs.com.cn/pics/super/2019/07/1561961069_50436.jpg" alt="">
				<br>
				<span class="fs-12 cl-33 fw-li">亚朵集团</span>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'recommend'
	}
</script>

<style scoped>
	.recommend img {
		width: 36px;
		height: 36px;
		display: inline-block;
	}

	.recommend ul {
		font-size: 0
	}

	.recommend li {
		display: inline-block;
		width: 25%;
		height: 65px;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 12px
	}

	section.sec {
		margin-top: 10px;
		padding: 0 10px
	}

	section.sec>p {
		text-align: center;
		position: relative;
		line-height: 50px
	}

	section.sec span:nth-child(2) {
		position: absolute;
		right: 0;
		top: 0
	}

	.ba-wh {
		background-color: #fff
	}

	.fw-me {
		font-weight: 700
	}

	.fs-12 {
		font-size: 12px;
	}

	.fs-16 {
		font-size: 16px;
	}

	.cl-33 {
		color: #333;
	}

	.fw-li {
		font-weight: 400
	}
</style>
