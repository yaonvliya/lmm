<template>
    <div>
        <ul>
            <!-- 周边游--自驾游--模块 -->
            <li v-for="(v,i) in arr" :key='i'>
                <router-link :to='v.linkto'>
                    <h3>{{v.title}}</h3>
                    <p>{{v.desc}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        arr:Array
    }

}
</script>

<style scoped>
    ul{
        /* width: 100%; */
		margin: 0 10px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.1rem;
        background: #fff;
        box-shadow: 0 0 0.06rem 0 rgba(0,0,0,.15);
        border-radius: 0.08rem;
        text-align: center;
    }
    ul li{
        width:25%;
        text-align: center;
        border-right: 1px solid #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
        padding-top: 0.1rem;
        padding-bottom: 0.09rem;
        box-sizing: border-box;
    }
    h3{
        font-weight: normal;
        font-size: 0.14rem;
        line-height: 0.20rem;
        color: #333;
        font-weight: 700;
    }
    p{  
        margin-top: 0.02rem;
        font-size: .12rem;
        color: #999; 
    }
    ul  li:last-child h3{
        margin-bottom: 0.02rem;
    }
     ul  li:last-child  p{
        height: 0.17rem;
        display: flex;
        align-items: center;
        width: 0.58rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 0.05rem;
        color: #fff;
        background-image: -webkit-linear-gradient(right,#fda569,#fd4b79);
        background-image: linear-gradient(-90deg,#fda569,#fd4b79);
        border-radius: 0.1rem;
    }
</style>