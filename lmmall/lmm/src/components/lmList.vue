<template>
<div class="lm-list">
  
      <div class="lm-hotel-list" v-for="(hotel,index) in hotellists" :key="index" @click="func(hotel.id)" >
   <!-- <p>{{hotel.hotelid}}123</p> -->
		<img :src="hotel.hotel_list_img" alt="">
        <div class="lm-details">
            <h1>{{hotel.hotel_name}}</h1><br/>
            <p>{{hotel.hotel_type}}&nbsp;&nbsp;&nbsp;{{hotel.hotel_year}}</p>
            <i><span>{{hotel.hotel_rank}}分</span>&nbsp;&nbsp;&nbsp;{{hotel.hotel_rank_num}}条点评</i><br/>
            <b>{{hotel.hotel_localtion}}</b>
            <div class="confirm">
                <p class="first" >立即确认</p>
                <p class="second">主题乐园</p>
                <p class="third">亲子酒店</p>
                <div class="lmPrice"><span>￥</span><strong>{{hotel.hotel_baseprice}}</strong>起</div>
            </div>
        </div>
    </div>
 
   
 </div>

</template>
<script>
export default {
    name:'lmList',
	data(){
		return{
			hotellists:[],
			 hotelid:'',
			 hoteldetail:[],
			router:[],
		
		}
	},
	mounted(){//发起详情页的请求；
		console.log(this.$route.params.searchkey);
		 var searchkey=this.$route.params.searchkey;
		console.log(searchkey);
			fetch("http://39.100.241.148:8000/hotel/search/?search_key="+searchkey,{
			 　   method:"POST",
			 // 　   mode: 'cors',跨域请求
				　　headers: {
				　　　　'Content-Type': 'application/json'
				　　},
				　　body:JSON.stringify({
				 
				　　})
				　　})
				.then((response)=>{
					return response.json();
				})
				.then((res) => {
					console.log(res);
					this.hotellists=res;
					console.log(this.hotellists);
					console.log(this.hotellists.code);
					console.log(this.hotellists.search_result);
					this.hotellists=res.search_result;
					console.log(this.hotellists);

				 })
	},
	
	methods:{
		func(hotelid){
			this.$router.push({
				name:'hoteldetail',
				// path:"/lmDetailUp",
				params:{
					hotelid:hotelid
				}
			})
// 			// this.hotelid=hotel.hotelid;
// 			 console.log(hotelid);
// 			console.log(this.$route.params);
// 			// this.$route.push("/lmDetailUp/"+hotelid);
// 			var _this = this;
// 			console.log(_this);
// 			_this.$router.push({
// 				name:'hoteldetail',
// 				// path:"/lmDetailUp",
// 				params:{
// 					hotelid:hoteldetail
// 				}
			}
		}
	}
	

</script>
<style scoped>
.lm-hotel-list{
    height:1.65rem;
    border-bottom:1px solid #bebaba;
}
.lm-hotel-list img{
    width:.9rem;
    height: .9rem;
    margin-left: .13rem;
    padding-top: .25rem;
}
.lm-details{
   /* width: 4.9rem; */
    float: left;
    font-size:.35px;
    font-family: "微软雅黑";
    margin-top: -1rem;
    margin-left: 1.1rem;
}
.lm-details p{
    margin-top: -0.14rem;
    font-weight: lighter;
}
.lm-details h1{
    font-size: .19rem;
    font-weight: lighter;
}
.lm-details i{
    font-style: normal;
    font-weight: lighter;
}
.lm-details span{
    font-size: .16rem;
    color: #ff6400;
}
.lm-details b{
    font-weight: lighter;
}
.line{
        padding-top: .17rem;
}
.confirm p{
    width: .51rem;
    height:15px;
    margin-top: .03rem;
    float: left;
    margin-left: .05rem;
}
.first{
color: #e78c21;
border: 1px solid #e78c21;
}
.second{
    color: #729dd0;
    border: 1px solid #729dd0;
}
.third{
    color: #d40c82;
    border: 1px solid #d40c82;
}
.lmPrice{
    position: absolute;
    right: 5px;
}
.lmPrice span{
    color: red;
}
.lmPrice strong{
    font-size: .22rem;
    color: red;
}
.movie img{
    width:100%;
}
</style>
