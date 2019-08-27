<template>
	<div>
	<div class="lmIndexsearch">
		 <!-- <router-link :to="{name:'location'}"> -->
			<router-link to="city"><span class="city">上海<i class="iconfont icon-down"></i></span></router-link>
			<!-- </router-link> -->
		<router-link :to="{name:'searchcontent'}">
		<div class="searchbtn">
			<i class="iconfont icon-search"></i>
			 <input type="text" placeholder="搜索景区/目的地/酒店/游轮">
		</div>
			</router-link>
		<span class="tubiao">
			<i class="iconfont icon-saoyisao"></i>
			<i class="iconfont icon-xiazai16"></i>
		</span>
	</div>
	<div id="box">
		<div class="lmIndexsearch" >
			<span class="city">上海<i class="iconfont icon-down"></i></span>
			<div class="searchbtn">
				<i class="iconfont icon-search"></i>
				 <input type="text" placeholder="搜索景区/目的地/酒店/游轮">
			</div>
			<span class="tubiao">
			<i class="iconfont icon-saoyisao"></i>
			<i class="iconfont icon-xiazai16"></i>
			</span>
		</div>
    </div>
	</div>
</template>

<script>
	export default{
		name:'lmIndexSearch',
		created:function(){
			$(window).bind("scroll", function() {
				// console.log("1");
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if (sTop >= 5) {
					// console.log("1");
					if (!$("#box").is(":visible")) {
						try {
							$("#box").slideDown();
						} catch (e) {
							$("#box").show();
						}
					}
				} else {
					if ($("#box").is(":visible")) {
						try {
							$("#box").slideUp();
						} catch (e) {
							$("#box").hide();
						}
					}
				}
			})
		}
	}
</script>

<style scoped>
  @import "../../assets/img/search/css/iconfont.css";
 .lmIndexsearch{
	 width: 100%;
    height: 35px;
  /* background: yellow; */
    display: -webkit-box;

    display: flex;
    padding-top: .15rem;
		vertical-align: baseline;
		position:absolute;
		left:0;
		top:0;
		z-index: 800;
  }
  .city{
	  font-size:16px;
	  font-weight: 800px;
	  margin-left: 0.1rem;
	  color:white;
	  float: left;
  }
  .searchbtn{
	  width:2.2rem;
	  height:0.3rem;
	  background:white;
	  opacity:0.6;
	  display:flex;
	  margin: -0.06rem 0 0 0.2rem;
	  border-radius:20px;
  }
   .searchbtn input{
		border:none;
	   /* width:1.6rem; */
   }
    .searchbtn i{
		margin: 0.06rem 0.1rem 0;
		 color:#908F94;
	}
   .tubiao{
	   display:inherit;
   }
    .tubiao i{
   	  color:white;
	  font-weight: 800;
   }
   .tubiao i:nth-child(1){
	    margin:0 0.1rem;
   }
#box{
		width: 100%;
		height: 35px;
		background: orangered;
		padding-top: .15rem;
		vertical-align: baseline;
		position:fixed;
		left:0px;
		top:0px;
		display: none;
		z-index: 800;
	}
</style>
