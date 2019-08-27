<template>
	<div>
		<ul>
			<!--定制游--银行特惠模块  -->
			<li v-for="(v,i) in arr" :key='i' >
				<router-link :to='v.linkto'>
					<i class="small"   :style="{backgroundImage:'url('+v.smallimgurl+')'}"></i>
					<i :style="{backgroundImage:'url('+v.imgurl+')'}"></i>
					<p>{{v.desc}}</p>
				</router-link>
			</li>
		</ul>
	</div>

</template>

<script>
	export default{
		name:'lmindexarr',
		props:{
			arr:Array,
		}
	}
</script>

<style scoped>
	ul{
        padding: 0.09rem 0 0;
        display: flex;
        width: 100%;
    }
    li{
        width: 20%;
        text-align: center;
    }
    i{
        display: block;
        width: 0.3rem;
        height: 0.3rem;
        max-width: 100%;
        margin: 0 auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
   
    .small{
        position: relative;
        width: 0.21rem;
        height: 0.1rem;
        background-size: contain;
        background-repeat: no-repeat;
        top: 0.1rem;
        left: 34%;
    }
    p{
        font-size: .12rem;
        color: #666;
        padding-top: 0.02rem;
    }
	
</style>
