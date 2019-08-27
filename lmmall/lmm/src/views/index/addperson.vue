<template>
	<div class="addperson">
		<div class="addclienth">
			<div class="addclienth1">
				<span @click="back()"><</span>
			</div>
			<div class="addclienth2">
				<span>新增常用入住人</span>
			</div>
		</div>
		<div class="addperson2">
			<div class="addperson21">
				<img src="../../assets/img/hotels/wh.jpg" alt="">
				<span>姓名及证件信息</span>
			</div>
			<div class="addperson22">
				<p>中文姓名</p>
				<div class="addre">
					<input type="text" placeholder="与证件保持一致">
					<span>需包含汉字，生僻字可用拼音代替</span>
				</div>
			</div>
			<div class="addperson22">
				<p>手机号</p>
				<div class="addre">
					<input type="text" placeholder="接收确认消息">
					<span>请输入正确的手机号</span>
				</div>
			</div>
		</div>

		<div class="addperson3">
			保存
		</div>

		
		
	</div>
</template>

<script>
	export default{
		name:'lmindexaddperson',
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.addperson{
		width:100%;
		height:6.16rem;
		background: #eceff9;
	}
	.addclienth{
		width:100%;
		height:0.45rem;
		background:white;
		display: -webkit-flex;
		
	}
	.addclienth1{
		width:0.45rem;
		height:0.45rem;
	/* 	background:yellowgreen; */
		text-align: center;
		line-height: 0.45rem;
	}
	.addclienth1 span{
		font-size:20px;
		color:#3b3b3b;
		display: inherit;
	}
	.addclienth2 span{
		font-size: 0.16rem;
		color:#3b3b3b;
		display: inherit;
		margin-left:0.8rem;
		line-height: 0.45rem;
	}
	.addperson2{
		width:3.55rem;
		height:1.71rem;
	/* 	background: red; */
		margin-left: 10px;
		border-radius: 20px;
		margin-top: 0.1rem;
	}
	.addperson21{
		width:3.55rem;
		height:.46rem;
		background:white;
		line-height: .46rem;
		border-bottom: 2px solid #ededed;
		display: -webkit-flex;
	}
	.addperson21 span{
		font-size: 20px;
		color:black;
		display: inline;
	}
	.addperson21 img{
		width:0.41rem;
		height:0.43rem;
	}
	.addperson22{
		width:3.55rem;
		height:.60rem;
		background:white;
		border-bottom: 2px solid #ededed;
		display: -webkit-flex;
	}
	.addperson22 p{
		font-size: 14px;
		color:black;
		width:1rem;
		height:.60rem;
		text-align: center;
		line-height: .5rem;
	}
	.addre{
		width:2.55rem;
		height:.60rem;
		/* background: #0000FF; */
		
	}
	.addre input{
		width:2rem;
		height:.30rem;
		float:left;
		border:none;
		margin-top:10px;
	}
	.addre span{
		font-size: 12px;
		color:red;
		float:left;
	}
	
	/* 保存 */
	.addperson3{
		width:3.55rem;
		height:.47rem;
		background:#fe5f6d;
		margin-left: 10px;
		border-radius: 20px;
		font-size: 20px;
		color:white;
		text-align: center;
		line-height: .47rem;
		margin-top: 0.3rem;
	}
</style>

