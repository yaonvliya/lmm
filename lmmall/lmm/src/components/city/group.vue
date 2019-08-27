<template>
    <div>
       
        <div class="group" v-for="(v,i) in arr" :key="i">              
            <span class="tit">{{v.city_letter}}</span>
            <div>
                <p>{{v.city_name}}</p>
            </div>              
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            // A:""
        }
    },
    created(){
        this.axios({
            url:"/city",
            method:"get"
        }).then((data)=>{
            this.arr=data.data
            console.log(this.arr)

            // if(this.arr.city_letter=="A"){
            // this.A=this.arr.city_letter.charAt()
        // }
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
    .group p{
        width: 100%;
        height: .43rem;
        border-bottom: 1px solid #E4E4E4;
        background: white;
        line-height: .43rem;
        padding-left: .16rem
    }
</style>
