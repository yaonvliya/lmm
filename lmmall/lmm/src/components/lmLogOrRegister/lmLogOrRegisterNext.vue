<template>
    <div>
       <a class="loginbtn" data-type="phone" href="#">下一步</a> 
    </div>
</template>
<script>
export default {
	name:"lmLogOrRegisterNext",
    data() {
        return {
            
        };
    },
}
</script>
<style scoped>
.loginbtn{
	background-image: linear-gradient(156deg,#ff7f6a 0,#fd3c71 100%);
	box-shadow: 0 2px 6px 0 rgba(253,60,113,.4);
	color: #fff;
	height: .2rem;
	line-height: .2rem;
	text-align: center;
	font-size: .18rem;
	display: block;
	padding: .1rem 0;
	border-radius: 20px;
	margin: 1rem .2rem 0;
}
</style>