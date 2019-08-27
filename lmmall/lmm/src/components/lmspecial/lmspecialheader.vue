<template>
	<header class="lmspecial_header">
		<div class="lmspecial_box1">
			西安∨｜<span class="span_1">输入关键词</span>
		</div>
		<div id="boxer">
		<div class="lmspecial_box1">
			西安∨｜<span class="span_1">输入关键词</span>
		</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'lmspecialheader',
		created:function(){
			$(window).bind("scroll", function() {
				// console.log("1");
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if (sTop >= 5) {
					// console.log("1");
					if (!$("#boxer").is(":visible")) {
						try {
							$("#boxer").slideDown();
						} catch (e) {
							$("#boxer").show();
						}
					}
				} else {
					if ($("#boxer").is(":visible")) {
						try {
							$("#boxer").slideUp();
						} catch (e) {
							$("#boxer").hide();
						}
					}
				}
			})
		}
	}
</script>

<style>
	@import url("../../assets/lmfind/css/special.css");
	#boxer{
		width:100%;
		height: 0.5rem;
		position:fixed;
		left:0;
		top:0;
		background:  #fd9558;
		display:none;
		z-index: 800;
	}
</style>
