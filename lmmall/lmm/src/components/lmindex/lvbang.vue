<template>
    <div class="box">
        <!-- 签到+5驴镑模块 -->
        <div class="content" v-for="(v,i) in arr" :key='i' :style="{backgroundImage:'url('+v.imgurl+')'}">
            <router-link :to="v.linkto"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'lvbang',
		props:{
			arr:Array,
		}
}
</script>

<style scoped>
    .box{
        display: flex;
        /* width: 100%; */
        /* margin-top: 0.22rem; */
        margin: 0.22rem 10px;
    }
    .content{
        /* width:33.33%; */
        flex: 1;
        height: 0.44rem;
        background-size: contain;
        background-repeat: no-repeat;
    }
    a{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>