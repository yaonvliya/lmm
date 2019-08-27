<template>
    <div>
        <span class="tit">热门城市</span>
        <div class="hot flex">           
            <div v-for="(v,i) in hot" :key="i">
                <router-link :to="{path:'/index',query:{name:v.city_name}}" class="click" >
                    <p>{{v.city_name}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hot:[]
        }
    },
    props:{
        city:String
    },
    created(){
        // this.axios({
        //     url:"http://localhost:3000/hotCitys",
        //     method:"get"
        // }).then((data)=>{
        //     this.hot=data.data
        //     console.log(this.hot)
        // })
        fetch("http://localhost/hotcity", {
        method: "get"
        }).then((res)=>{
            return res.json()
        }).then(res => {
            console.log(res) //Object {name: "typicode"}
        })
        }
}
</script>

<style scoped>
    .tit{
        margin: .1rem 0;
        font-size: .12rem;
        padding-left: .16rem
    }
    .hot{
        margin-top: .1rem
    }
    .hot p{
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
    .click{
        color: black;
    }
    .flex{
        display: flex;
        align-items: center;
        flex-wrap: wrap
    }
</style>
