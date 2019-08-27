<template >
    <div class="bt"> 
        <router-link to="#" class="bta btb">
            <img :src="imgurl" alt />
            <span>{{title}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"lmMineBt",
    data() {
        return {
            
        };
    },
     props: {
            imgurl: String,
            title: String,
            }     
}
</script>
<style scoped>
.bt{
	width: 25%;
	display: -webkit-flex;
	flex-wrap:wrap;
	background: white;
	padding-top: .1rem;
    float: left;
}
.bta{
    text-align: center;
    width: 100%;
    /* display: -webkit-flex; */
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    color: #333333;
    font-size: 12px;
}
.qy .btb img{
    width: 40px;
    height: 40px;
    display: block;
	margin:.05rem auto .01rem;
}
.bta img{
	width: 22px;
    height: 22px;
	display: block;
	margin:.05rem auto .01rem;
}
/* .bt a{
	color: #333333;
	font-size:12px;
	width: 25%;
	text-align: center;
} */
.bta span{
	display: block;
	margin-bottom: .1rem;
   
}
</style>