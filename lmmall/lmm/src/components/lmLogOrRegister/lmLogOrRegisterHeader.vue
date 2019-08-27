<template>
    <header>
        <span class="reg"></span>注册({{text}}/3)
    </header>
</template>
<script>
	export default {
		name:"lmLogOrRegisterHeader",
		data() {
			return {
				
			};
		},
		props:{
			text:String
		}
	}
</script>
<style scoped>
header {
   font-size: 18px;
	text-align: center;
	margin-bottom: 70px;
	margin-top: 10px;
}
</style>>
    