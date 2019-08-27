<template>
	<section class="button fw-li ba-wh">
	
		<div class="buttons flx flx-ali-cet">
			<button class="order lv-bd-right">
				<span>我的订单</span>
			</button>
			<button class="collect lv-bd-right">
				<span>我的收藏</span>
			</button>
			<button class="history">
				<span>浏览历史</span>
			</button>
		</div>
	</section>
</template>

<script>
	export default{
		name:'buTTon'
	}
</script>

<style scoped>
.button{height:1.1rem;padding:10px;box-shadow:0 3px 8px 0 rgba(0,0,0,.08);font-size:0}
.button>.search{height:45px;border-radius:45px;box-shadow:2px 2px 8px 0 #fecad8;}
.buttons{height:45px}
.buttons>button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:20px;color:#333}
.buttons span{padding-left:20px;background-repeat:no-repeat;background-size:18px;background-position:0}
.buttons>.order>span{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC/klEQVRYw82YSWgUQRSGf1c8KDKiIOrFeMjFBR1FDERcEC+CKIoHhUgUF1BCQMWT5uBkuscQF1AIwQUUD/HgQTSoh0RBERcCEXJ3QSGaeBAE1/Lv189hnOl9MuM0/Ex3VVe9r6pe9Xs1QIzL2NhmLFyjnlEv+PyE6uJ9A6p90fANGjY++kUdqx5MDvvEsI0R6oDpwAoqbU5jFZ9PUt+pn055tWbnkQJt9alv1/ozY2/cwnR2vJZqMhcwVctGxWAnZvgAbVCg+/Lcibmc1WbO4EpzBVOSgfRgAjs8Sn0t8I39CvRFnnPYSyO7SmQho0D9Ctid78PGB2czJFmW69rBb/72yTJ0YKYCfQpw6EI9NlkspbZQziYYytfl0BrHabcrzGfeN3rU79DtXqibfP82Dd8Rufe7qXSR2nSQ30w7Gk0bxkeZnbs6iubQd7NImQwWexj2lwPvDrhb26bCHHlYGpzHLN93DMaJs8YB+SsbhwqW1C1z+mKffkCyzoEwWdQlgnGBdqqNoaK6Ok+oUKCkMxMOJDMVC0h8phyYMCBXqUAg04VJ7OSybH83kD5PoIuRgRxHL9x9JUDOErkB05Sh4RgzlOYOnx24ZPwCz2dHeySwJlEG62MBWViSd3BPIMaxsn0nDpAjjZ3eQDbmVR2INoOA6v8DUL0/UBbrJAWJoiwNjgVQBgu9d5mNOZIBxtlVNq6WDcRMwRuoB5PZSS/LBiPqJXWwYkBSxumrug/5LVltOnXNbfta+jBKwm/hrObW/ZHlBuMjiYCCQocsV/Kg+jQRUGhwtbCI2kwdZoPWSLLQwqC8JjZQWPpRCwnaD2nQh4kVSmGbFGgwWgprY0CPQcsqlOSfUqBb0ZJ8G+c0HvX6HU0SH4Ocw6GFdzrgE9GOQfwTgQ3e6ygeUhulAY/SJcphAetXS0YYpBw28b3jNP5G+x3ggJdHOiiqHzVQr8vMo/0ygVcySG7tSEfpf77OzrRauCfTbONjRI3oXzajvHdl4S31QGbpEqb5Lk/R9QfIwkgrBAfh/gAAAABJRU5ErkJggg==)}
.buttons>.collect>span{background-image:url(https://pics.lvjs.com.cn/mobile/webapp/release/hotel/pages/main/img/collect.png)}
.buttons>.history>span{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAADhElEQVRYw7VYPWhUQRAetfQHrwt4WqTwGlEkEPQSJRB/SmPvD0FQksLGRhBEJN69uxhPRG3lSm0sbIx4pFELLSJC0EMLwSJBKwn+xIOsM7uzL3t3773dt+/uYHjv9u3MfDszOzO7AB4/8RByYhbOiADqSAtITaRVpiaP1eUcnAv9/okKTKDCBlILSThSS/Igb+8BBVBEwa8NZWtI8zg2jVYZE3OwVzyAbfh/u3ynMfpGc9RcxadkFLMDegJbUFjNELyMzylxD3Y4y8C5kkfxajk1ku0HqgY7ecUk6K+ownW0xFbvRSKvlEGyFMB50uEDaokFrKDQwz0LC5QlZSrZS87gpPu0pQL4gCvMW3kEbOIYyyMVxC3YJ8pwUBK90xh9ozk0dw52S9naci5uNWJqxQZK3IDN6J4BnHsA596WVIahRKK5imdPaDnUad99OqYs7kMlObTGfkNhS5INmCbFe8KIuWKStVRKwCBNdNsd2BVhCbXjXIFpqsKsTiVJyVOlhJjdJ0GVYTDGRX7ASjCCfN9Z90SUGxssfCrWWlGWygpMgSszf6O79qkYWYtLnjKmkoPaH1gAR5H+SQxmbeWCTKZ8Hrv7zEDvNTCiCrxhDGdNN9Z5cDoSGG1v+6qzAQtCdz42gS3IQSy+kQFPuaffwKpwkWW8JZ0aWFMOYmfQBYyytduKswErw2n22lfSqYGtykE90J5G8qmAVWDc05WjLONXWHFCYNhPRQArOAr+yTK+eIFT+Yz4f5NOuytVQXbZVeMSlC+4AE6xxb6RTnvwqy5hqO/gSjDJfO9JpzVdpALWCS6Az/g+7MhX5c3zbANYQoJ1dmU7HZOgKJNX4LgjsFeM4dqGKxNKknPwdysadgalAv8Pzl9nixesRdw5XWQhajCV7kX+n7e2Pc4J1pfUGeAH674sxzrzaVSj6FyS/EvR/fBgoltvXZKMYj0S1Vo7FXG/PmySN8g66rvEQAecDyNObY9fCVrmFPEoPAegrlTHN2ujmB6YTlGLRq7LeR14E1trP3Dn5MmM3lF2piuC2MOIPSUcwudNpCsR3we7At7rUuVuiqRbgiPINxPGE8kwv5MX0oDq2q2d11AVeCkVUuepmrxRzkkncfw8Piv4fCEz+sbCPiFdMA68vbnU87q4o1QQwDukq21XBHG7LxPA+KtOqnd0H/ER6SkCmZEFveNSxUXHf/qNMqM6dVLRAAAAAElFTkSuQmCC)}
.fw-li{font-weight:400}
.ba-wh{background-color:#fff}
.wi-100{width: 100%}
.ba-lv{background-image:-webkit-gradient(linear,right top,left top,from(#fe686c),to(#fd3c71));background-image:-webkit-linear-gradient(left,#fe686c,#fd3c71);background-image:linear-gradient(90deg,#fe686c,#fd3c71)}
.cl-wh{color:#fff}
.fw-me{font-weight:700}
.fs-16{font-size: 16px;}
.flx{display:-webkit-box;display:-webkit-flex;display:flex}
.flx-ali-cet{-webkit-box-align:center;-webkit-align-items:center;align-items:center}
.lv-bd-right{position: relative;}
button{border: none;background: transparent;}
</style>
