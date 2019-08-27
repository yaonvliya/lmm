<template>
    <div class="order">
        <div class="ct">
            <div>我的订单</div>
            <div><a href="#">全部订单</a></div>
        </div>
        <lm-mine-line></lm-mine-line>
    </div>
</template>

<script>
    import lmMineLine from './lmMineLine';
	export default {
        name:"lmMineOrder",
		components:{
			lmMineLine
		},
		data() {
			return {
				
			};
		}
	}
</script>
<style scoped>
.order{
	background: white;
	width: 100%;
}
.order .ct {
   display: -webkit-flex;
   align-items: center;
   justify-content: space-between;
   height: 41px;
}
.order .ct div:first-of-type {
    color: #333;
    margin-left: 5.3%;
	 font-size: 14px;
}
.order .ct div:nth-of-type(2) a{
   color: #666;
}
.order .ct div:nth-of-type(2){
   font-size: 12px;
   color: #666;
	margin-right: 20px;
}
.order .ct div:nth-of-type(2):after {
   content: "";
   width: 7px;
   height: 7px;
   border-top: 1px solid #aaa;
   border-right: 1px solid #aaa;
   display: inline-block;
   transform: rotate(45deg);
	margin-left: 5px;
}

</style>