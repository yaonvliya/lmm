<template>
	<div class="ct-co po-ab he-100 wi-100 flx flx-dir-clo" style="display: none;">
		<div class="hd-co wi-100 ct-hd sld">
			<header class="hd-ma wi-100 po-fi ba-wh fs-18 cl-33 lvHeader-main" style="left: 0px; right: 0px; max-width: 640px; margin-left: auto; margin-right: auto;">
				<div class="hd-ct wi-100 flx flx-ali-cet flx-jus-cet">
					<span class="hd-ba po-ab"><i></i></span>
					<form action="" class="wi-100">
						<input type="search" autocomplete="off" placeholder="城市名称/行政区划/位置/酒店名称" class="ct-ip fw-li">
					</form>
					
					<span class="ct-can fw-li" @click="back()">取消</span>
					<span class="ct-del flx flx-ali-cet flx-jus-cet" style="display: none;"><i></i></span>
				</div>
			</header>
		</div>
		<div class="ct-ma flx flx-dir-clo" >
			<div class="ct-ta wi-100 flx">
				<span class="fw-li act fw-me">国内/港澳台</span>
				<span class="fw-li">国际城市</span>
			</div>
			<div class="ct-lis">
				<section id="当前li0" class="ct-hot ct-his">
					<ul class="ct-cur ct-all-ul">
						<li class="anch fw-li">当前位置</li>
						<li class="cur-adds lv-bd-bottom" style="display: none;">
							<p class="cl-red">
								<img src="" alt="">我的位置
							</p>
							<p class="fs-12 cl-99 fw-li addr"></p>
						</li>
						<li class="cur-ct ba-wh cl-bb">
							<span class="flx flx-jus-cet flx-ali-cet" style="display: none;">
								<i>正在为您定位…</i>
							</span>
							<p style="">定位失败，请开启手机定位功能</p>
							<p style="display: none;">正在为您定位…</p>
						</li>
					</ul>
				</section>
				<section class="ct-hot ct-his">
					<ul id="历史li0" class="ct-hot-ul flx po-re">
						<li class="anch fw-li">历史记录
							<span class="ct-clr po-ab fs-11">清空历史</span>
						</li>
						<li class="hot-li flx no-lef">
							<span>上海</span>
						</li>
						<li class="hot-li flx">
							<span>西安</span>
						</li>
						<li class="hot-li flx">
							<span>阿尔山市</span>
						</li>
						<li class="hot-li flx no-rit">
							<span>三亚</span>
						</li>
						<li class="hot-li flx no-lef no-bot">
							<span>杭州</span>
						</li>
					</ul>
				</section>
				<section class="ct-hot" style="">
					<ul id="热门li0" class="ct-hot-ul flx">
						<li class="anch fw-li">热门城市</li>
						<li class="hot-li flx no-lef">
							<span>上海</span>
						</li>
						<li class="hot-li flx">
							<span>杭州</span>
						</li>
						<li class="hot-li flx">
							<span>南京</span>
						</li>
						<li class="hot-li flx no-rit">
							<span>三亚</span>
						</li>
						<li class="hot-li flx no-lef no-bot">
							<span>苏州</span>
						</li>
					</ul>
				</section>
				<section class="ct-all">
					<ul id="Ali0" class="ct-all-ul">
						<li class="anch letter fw-li">A</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿坝</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿巴嘎旗
								<i>(锡林郭勒盟)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿坝县
								<i>(阿坝)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿城区
								<i>(哈尔滨)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿尔山市
								<i>(兴安盟)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿合奇县
								<i>(克孜勒苏)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">爱辉区
								<i>(黑河)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">爱民区
								<i>(牡丹江)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿克塞哈萨克族自治县
								<i>(酒泉)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿克苏</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿克苏市
								<i>(阿克苏)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿克陶县
								<i>(克孜勒苏)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿拉尔</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿拉山口市
								<i>(博尔塔拉)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿拉善盟</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿拉善右旗
								<i>(阿拉善盟)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿拉善左旗
								<i>(阿拉善盟)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿勒泰</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿勒泰市
								<i>(阿勒泰)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿里</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿莲乡
								<i>(高雄县)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿里山乡
								<i>(中国嘉义市)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿鲁科尔沁旗
								<i>(赤峰)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安次区
								<i>(廊坊)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安达市
								<i>(绥化)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安定区
								<i>(定西)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安定乡
								<i>(台南县)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安多县
								<i>(那曲)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安福县
								<i>(吉安)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">昂昂溪区
								<i>(齐齐哈尔)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">昂仁县
								<i>(日喀则)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安国市
								<i>(保定)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安化县
								<i>(益阳)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安吉县
								<i>(湖州)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安居区
								<i>(遂宁)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安康</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安乐区
								<i>(中国基隆市)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安龙县
								<i>(黔西南)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安陆市
								<i>(孝感)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安南区
								<i>(中国台南)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安宁区
								<i>(兰州)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安宁市
								<i>(昆明)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安平区
								<i>(中国台南)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安平县
								<i>(衡水)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安庆</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安丘市
								<i>(潍坊)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安仁县
								<i>(郴州)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安塞县
								<i>(延安)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">鞍山</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安顺</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安图县
								<i>(延边)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安县
								<i>(绵阳)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安乡县
								<i>(常德)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安新县
								<i>(保定)</i> 
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安溪县
								<i>(泉州)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安阳</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安阳县
								<i>(安阳)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安义县
								<i>(南昌)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安源区
								<i>(萍乡)</i> 
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安远县
								<i>(赣州)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安岳县
								<i>(资阳)</i> 
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">安泽县
								<i>(临汾)</i> 
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">敖汉旗
								<i>(赤峰)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">中国澳门</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">澳门半岛
								<i>(中国澳门)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">澳门离岛
								<i>(中国澳门)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿荣旗
								<i>(呼伦贝尔)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿图什市
								<i>(克孜勒苏)</i>
							</span>
						</li>
						<li class="fw-li lv-bd-bottom">
							<span class="tit">阿瓦提县
								<i>(阿克苏)</i>
							</span>
						</li>
					</ul>
					<ul id="Bli0" class="ct-all-ul">
						<li class="anch letter fw-li">B</li>
					</ul>
					<ul id="Cli0" class="ct-all-ul">
						<li class="anch letter fw-li">C</li>
					</ul>
					<ul id="Dli0" class="ct-all-ul">
						<li class="anch letter fw-li">D</li>
					</ul>
					<ul id="Eli0" class="ct-all-ul">
						<li class="anch letter fw-li">E</li>
					</ul>
					<ul id="Fli0" class="ct-all-ul">
						<li class="anch letter fw-li">F</li>
					</ul>
					<ul id="Gli0" class="ct-all-ul">
						<li class="anch letter fw-li">G</li>
					</ul>
					<ul id="Hli0" class="ct-all-ul">
						<li class="anch letter fw-li">H</li>
					</ul>
					<ul id="Jli0" class="ct-all-ul">
						<li class="anch letter fw-li">J</li>
					</ul>
					<ul id="Kli0" class="ct-all-ul">
						<li class="anch letter fw-li">K</li>
					</ul>
					<ul id="Lli0" class="ct-all-ul">
						<li class="anch letter fw-li">L</li>
					</ul>
					<ul id="Mli0" class="ct-all-ul">
						<li class="anch letter fw-li">M</li>
					</ul>
					<ul id="Nli0" class="ct-all-ul">
						<li class="anch letter fw-li">N</li>
					</ul>
					<ul id="Oli0" class="ct-all-ul">
						<li class="anch letter fw-li">O</li>
					</ul>
					<ul id="Pli0" class="ct-all-ul">
						<li class="anch letter fw-li">P</li>
					</ul>
					<ul id="Qli0" class="ct-all-ul">
						<li class="anch letter fw-li">Q</li>
					</ul>
					<ul id="Rli0" class="ct-all-ul">
						<li class="anch letter fw-li">R</li>
					</ul>
					<ul id="Sli0" class="ct-all-ul">
						<li class="anch letter fw-li">S</li>
					</ul>
					<ul id="Tli0" class="ct-all-ul">
						<li class="anch letter fw-li">T</li>
					</ul>
					<ul id="Wli0" class="ct-all-ul">
						<li class="anch letter fw-li">W</li>
					</ul>
					<ul id="Xli0" class="ct-all-ul">
						<li class="anch letter fw-li">X</li>
					</ul>
					<ul id="Yli0" class="ct-all-ul">
						<li class="anch letter fw-li">Y</li>
					</ul>
					<ul id="Zli0" class="ct-all-ul">
						<li class="anch letter fw-li">Z</li>
					</ul>
				</section>
			</div>
			<div class="ma-ma ct-mas" style="display: none;">
				<p class="no-res" style="display: none;">
					抱歉，暂不支持该地点
				</p>
				<ul class="ct-as-his ba-wh wi-100">
					<li class="fs-11 cl-66 fw-li" style="display: none;">最近搜索
						<span class="ct-clr po-ab fs-11">清空历史</span>
					</li>
				</ul>
			</div>
		</div>
		<ul class="ct-lt flx flx-dir-clo" style="display: none;">
			<li id="当前" class="fw-li flx flx-ali-cet flx-jus-cet">当前</li>
			<li id="历史" class="fw-li flx flx-ali-cet flx-jus-cet">历史</li>
			<li id="热门" class="fw-li flx flx-ali-cet flx-jus-cet" style="">热门</li>
			<li id="A" class="fw-li flx flx-ali-cet flx-jus-cet">A</li>
			<li id="B" class="fw-li flx flx-ali-cet flx-jus-cet">B</li>
			<li id="C" class="fw-li flx flx-ali-cet flx-jus-cet">C</li>
			<li id="D" class="fw-li flx flx-ali-cet flx-jus-cet">D</li>
			<li id="E" class="fw-li flx flx-ali-cet flx-jus-cet">E</li>
			<li id="F" class="fw-li flx flx-ali-cet flx-jus-cet">F</li>
			<li id="G" class="fw-li flx flx-ali-cet flx-jus-cet">G</li>
			<li id="H" class="fw-li flx flx-ali-cet flx-jus-cet">H</li>
			<li id="J" class="fw-li flx flx-ali-cet flx-jus-cet">J</li>
			<li id="K" class="fw-li flx flx-ali-cet flx-jus-cet">K</li>
			<li id="L" class="fw-li flx flx-ali-cet flx-jus-cet">L</li>
			<li id="M" class="fw-li flx flx-ali-cet flx-jus-cet">M</li>
			<li id="N" class="fw-li flx flx-ali-cet flx-jus-cet">N</li>
			<li id="O" class="fw-li flx flx-ali-cet flx-jus-cet">O</li>
			<li id="P" class="fw-li flx flx-ali-cet flx-jus-cet">P</li>
			<li id="Q" class="fw-li flx flx-ali-cet flx-jus-cet">Q</li>
			<li id="R" class="fw-li flx flx-ali-cet flx-jus-cet">R</li>
			<li id="S" class="fw-li flx flx-ali-cet flx-jus-cet">S</li>
			<li id="T" class="fw-li flx flx-ali-cet flx-jus-cet">T</li>
			<li id="W" class="fw-li flx flx-ali-cet flx-jus-cet">W</li>
			<li id="X" class="fw-li flx flx-ali-cet flx-jus-cet">X</li>
			<li id="Y" class="fw-li flx flx-ali-cet flx-jus-cet">Y</li>
			<li id="Z" class="fw-li flx flx-ali-cet flx-jus-cet">Z</li>
		</ul>
		<ul class="ct-lt flx flx-dir-clo" style="display: none;">
			<li id="当前" class="fw-li flx flx-ali-cet flx-jus-cet">当前</li>
			<li id="历史" class="fw-li flx flx-ali-cet flx-jus-cet">历史</li>
			<li id="热门" class="fw-li flx flx-ali-cet flx-jus-cet" style="display: none;">热门</li>
		</ul>
		<i class="ct-mk fs-18 cl-wh ta-ce" style="display: none;"></i>
	</div>
</template>

<script>
	export default{
		name:'location',
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
.po-ab{position:absolute}
.po-fi{position:fixed}
.po-re{position:relative}
.he-100{height: 100%;}
.wi-100{width: 100%;}
.ba-wh{background-color:#fff}
.fs-11{font-size: 11px;}
.fs-12{font-size: 12px;}
.fs-18{font-size: 18px;}
.cl-33{color: #333;}
.cl-99{color: #999;}
.cl-bb{color:#bbb}
.cl-red{color:#fe3c71}
.fw-li{font-weight:400}
.fw-me{font-weight: 700;}
.flx{display:-webkit-box;display:-webkit-flex;display:flex}
.flx-dir-clo{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}
.flx-ali-cet{-webkit-box-align:center;-webkit-align-items:center;align-items:center}
.flx-jus-cet{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}
.lv-bd-bottom{ position: relative;}
.lv-bd-bottom:after{content: ""; position: absolute; left: 0; bottom: 0; border-bottom: 1px solid #DDDDDD; width: 100%; transform: scaleY(0.5); transform-origin: 0 0; -webkit-transform: scaleY(0.5); -webkit-transform-origin: 0 0;}


.lvHeader-main{top:50px!important;position:absolute!important}
.ct-co{background-color:#eeeef5;top:0;left:0;z-index:100}
.ct-co>.ct-lt{position:absolute;right:0;top:95px;bottom:0;width:30px;padding:5px}
.ct-co>.ct-lt>li{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:20px;font-size:10px;color:#666}
.hd-co.sld{height:44px}
.hd-co.sld.hd-ios{height:64px}
.hd-co.sld.hd-ip-x{height:88px}
.hd-co-hid,.hd-hid{background-color:transparent!important;pointer-events:none}
.ct-hd{position:relative;box-shadow:0 0 3px 1px rgba(0,0,0,.1)}
.ct-hd .hd-ct{-webkit-transition:padding .2s ease;transition:padding .2s ease; margin-top: -40px;}
.ct-hd.foc .hd-ct{padding:0 45px 0 15px}
.ct-hd.asso{box-shadow:0 0 3px 1px rgba(0,0,0,.1)}
.hd-ma{top:0;left:0;z-index:11;-webkit-transition:background-color .2s ease;transition:background-color .2s ease}
.hd-ba{height:44px;width:45px;left:0;top:0;z-index:11}
.ct-ip{background-color:#eeeef5;border-radius:25px;border:none;padding-left:30px;height:25px;width:100%;font-size:12px;line-height:25px;-webkit-transition:width .2s ease;transition:width .2s ease;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcby8vLy8vLy8vL+/v729vb+/v+7u7ry8vLy8vMLCwry8vL6+vry8vLy8vLy8vL+/v7y8vLy8vL29vb29vb6+vr29vbu7uwXzSVYAAAAXdFJOUwC5+tYVXigBoPELmT/GkHYeSOGCTjNsXNuu9QAAAS1JREFUOMt9U1sChCAI1AzRSntu3P+mi1abmi0/SU3MMIIQv8BhNdIZD62ohjaWrnCAj+9t31AaaigLLPG1h3mAUUbwmAHmQCA/V9qtITcJk+YXdstIJUP6O2WKRee02DMErowTq0vpyFXsdHKwsO3Zfah88hgWWTNoJmqid8gyPzUEKqI9HAb2oe7yeBZfiXwdMbHWUwbUEcgNByHc1VxHCO4muOCIhheEOnp4ZxHcZfDMl9d4e8aGdPyEF8NuHy5kZeqI1nhw1+FZBI5fmca+zG7iv8S/EL7Ep/G63zG7IjK52s3mg2rCoCfeT31ciQSCPu7RHqeu2+LuNMW4w7FwVqnlWCnTmgLS+nTpHFNiCREtyFiocf6YyickaNB6upuKEPhvpnm9+B8Exu4LWmEW6eE4dTIAAAAASUVORK5CYII=);background-position:10px;background-size:12px;background-repeat:no-repeat}
.ct-ip::-webkit-input-placeholder{color:#bbb}
.ct-can{font-size:12px;padding-left:10px;right:10px;}
.ct-can,.ct-del{position:absolute}
.ct-del{width:30px;height:25px;right:45px;bottom:10px}
.ct-del>i{width:14px;height:14px;background-color:#ccc;border-radius:50%;position:relative}
.ct-del>i:after,.ct-del>i:before{content:"";width:7px;height:7px;position:absolute;border-bottom:1px solid #fff}
.ct-del>i:before{left:6px;top:1px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}
.ct-del>i:after{left:1px;top:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}
.ct-ma{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}
.ct-ta{height:30px;background-color:#fff;box-shadow:0 0 3px 1px rgba(0,0,0,.1);z-index:1}
.ct-ta>span{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:20px;font-size:15px;position:relative}
.ct-ta>span.act:after{content:"";width:60px;height:2px;background-image:-webkit-linear-gradient(left,#fe686c,#fd3c71);background-image:linear-gradient(90deg,#fe686c,#fd3c71);border-radius:100px;position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}
.ct-lis{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:scroll;-webkit-overflow-scrolling:touch;position:relative}
.ct-lis section .anch{background-color:#eeeef5;margin-left:0;height:35px;line-height:35px;font-size:11px;color:#666;width:100%}
.ct-hot-ul{padding:5px 30px 0 15px;-webkit-flex-wrap:wrap;flex-wrap:wrap}
.ct-hot-ul>.anch{padding-left:0}
.ct-hot-ul>.hot-li{width:calc(25% - 8px);height:35px;line-height:35px;text-align:center;font-size:14px;margin:0 5px 15px;position:relative}
.ct-hot-ul>.hot-li>span{width:100%;height:100%;background:#fff;border-radius:3px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.ct-as-his .ct-clr,.ct-hot-ul .ct-clr{color:#5ca2f8;right:30px;top:4px}
.ct-cur span{height:32px;width:calc(25% - 8px);border:1px solid #e4e4e4;border-radius:3px;margin-top:7px}
.ct-cur img{width:11px;height:13px;margin-right:5px}
.ct-all-ul>.cur-adds{height:55px;padding-top:7px}
.ct-all-ul{background-color:#fff}
.ct-all-ul>li{margin-left:15px;font-size:14px;height:45px;line-height:45px;border-width:0 0 1px}
.ct-all-ul>li:last-child{border:none}
.ct-all-ul span.tit{padding-right:5px}
.ct-all-ul span.sub{font-size:11px;color:#aaa}
.ct-all-ul>.anch{padding-left:15px}
.cur-adds>p{line-height:20px}
.cur-adds>p.addr{margin-left:16px}
.ct-as-his .ct-clr,.ct-hot-ul .ct-clr{color:#5ca2f8;right:30px;top:4px}
.ct-as-his .ct-clr{right:10px;top:0}
.ct-hot-ul>.hot-li{width:calc(25% - 8px);height:35px;line-height:35px;text-align:center;font-size:14px;margin:0 5px 15px;position:relative}
.ct-hot-ul>.hot-li>span{width:100%;height:100%;background:#fff;border-radius:3px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.hot-li.no-lef{margin-left:0}
.hot-li.no-rit{margin-right:0}
.hot-li.no-bot{margin-bottom:0}
.hot-li.hot-ct>span{padding-right:10px}
.hot-li.hot-ct i{position:absolute;right:10px;top:13px}
.hot-li.hot-ct i.ic-arr-tp{top:16px}
.ct-all-ul span.tit{padding-right:5px}
</style>
