<template>
    <div>
        <div class="top">
            <img :src="close" @click="fun()">
            <div class="search">
                <img :src="search"><input type="text" placeholder="出发城市" class="inp" >
            </div>
        </div>
        <div class="main">
            <div class="present">
                <span class="tit">当前定位城市</span>
                <p><img :src="position"><span>{{city}}</span></p>
            </div>
            <Hot></Hot>          
           
            <Group></Group>
                
            <div class="right" >
                <p>当前历史热门</p>
                <div v-for="(v,i) in arr" :key="i">
                    <router-link to="">
                        <span>{{v.city_letter}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Hot from './hot'
import Group from './group'
export default {
    components:{
        Hot,
        Group
    },
    data(){
        return{ 
            close:"../../../static/img/index/city/close.png",
            search:"../../../static/img/index/city/search.png",
            position:"../../../static/img/index/city/position.png",
            city:"西安",
            arr:[]
            
        }
    },
    created(){
        // this.axios({
        //     url:"http://47.95.141.223:8083/loadAllCitys",
        //     method:"get"
        // }).then((data)=>{
        //     this.arr=data.data
        // })
        fetch("http://localhost:3000/city", {
        method: "get"
        }).then((res)=>{
            return res.json()
        }).then(res => {
            console.log(res) //Object {name: "typicode"}
        })
        
    },
    methods:{
        fun(){
            this.$router.back()
        }
        
    }
}
</script>

<style scoped>
    span,img,input{
        display: block
    }
    .top{
        display: flex;
        height: .62rem;
        align-items: center;
        background: #F5F5F8;
        padding-left: .18rem
    }
    .search{
        display: flex;
        align-items: center;
        background: #eef1f5;
        border-radius: .2rem;
        margin-left: .18rem;
        width: 2.9rem
    }
    .top img{
        width: .16rem;
        height: .16rem;
    }
    .top input{
        width: 2.6rem;
        height: .29rem;
        background: transparent;
        font-size: .14rem;
        color: #aaaaaa;
        border:0;
        outline: none;
        
    }
    .search img{
        margin: 0 .1rem;
        width: .14rem;
        /* height: .14rem; */
    }
    .main{
        background: #EFEFF7;
        font-size: .15rem
    }
    .present img{
        width: .13rem;
        height: .1.3;
        margin-right: .05rem
    }
    .main{
       position: relative;
        overflow: hidden;
    }
    .present,.hostory{
        padding-left: .16rem
    }
    .present p,.hostory p{
        width: 1rem;
        height: .32rem;
        background: white;
        border-radius: 5px;
        margin-bottom: .09rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .1rem
    }
    .present p{
        color: #FE3C71
    }

    .hostory div,.hot div{
        display: flex;
        flex-wrap: wrap;
    }
    
    .tit{
        margin: .1rem 0;
        font-size: .12rem;
    }
    .right{
        width: .3rem;
        position: absolute;
        right: 0;
        top: 0;
        background:white;
        font-size: .12rem;
        line-height: .22rem;
        text-align: center;
        padding-top: .17rem
    }

</style>
