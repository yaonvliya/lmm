<template>
	<header class="header zt">
		<div class="headFixed">
			<div>
				<span class="icon-back" onclick="window.history.back()"></span>
				<h1>驴妈妈暑期境外网红打卡地大搜罗</h1>
				<div class="out_address">
					<a href="#">
						<span class="header-icon-home"></span>
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		name:'hear'
	}
</script>

<style scoped>
.header{width: 100%;height: 45px;}
.header .headFixed{ width: 100%;top:0; left:0; font-size:20px; font-weight: normal; background: #ffffff; color:#000; text-align: center;line-height: 45px; z-index:1000}
.header .headFixed>div{ position: relative; width:100%; height:45px;}
.header h1{ margin:0 auto;font-size: 20px; width:80%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
.header a{color: #d30775;}
.header .icon-back{font-size: 32px; display: block; position: absolute;top:0px;  width:35px; height:45px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAlCAYAAABCr8kFAAAA1ElEQVRIx63WPQoCMRAF4IigJ7aws5WtV3vdG3kBSwUb8QA6AQMh5Gdm3iveNgsfYTeZvHDb7gKYlWSSPCUHBnaSfP/5MLGYMxO7StZULL6nYlZwiFlAFaYF1ZgGNGEj0Iz1QBfWAt1YDYSwEoSxHKxhFyuWQBqWwImFJfCVYXfJBhm68XEsVrigK4zfcGah+V+moOU+hNHaSYHQ1ll2o71p40JH89CMaia2CdXeKWrUcuupUOu9PEQ9zaGLertNE0XaVxVF++HM6oct9B2IHfsh2f8A1nheXWnsJKYAAAAASUVORK5CYII=) no-repeat 50%;background-size: 10px;}
.header .out_address{position: absolute;right:7px;top:4px;font-size: 14px; height:36px; line-height: 36px;}
.header .out_address span{ display: inline-block; overflow: hidden; vertical-align: middle; }
.header .header-icon-home{background-size: 36px; width: 36px; height: 36px; float: right; margin-left: 5px; background-image: url(//pics.lvjs.com.cn/mobile/img/visa/home.png); }
</style>
