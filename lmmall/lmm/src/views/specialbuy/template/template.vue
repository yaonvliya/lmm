<template>
<body class="type-1">
		<hear></hear>
		<banner></banner>
		<city3></city3>
		<banner2></banner2>
		<module0></module0>
		<module1></module1>
		<module2></module2>
		<module3></module3>
		<module4></module4>
		<module5></module5>
		<module6></module6>
		<foot></foot>
</body>
</template>

<script>
	import hear from "../../../components/template/hear"
	import banner from "../../../components/template/banner"
	import city3 from "../../../components/template/city3"
	import banner2 from "../../../components/template/banner2"
	import module0 from "../../../components/template/module0"
	import module1 from "../../../components/template/module1"
	import module2 from "../../../components/template/module2"
	import module3 from "../../../components/template/module3"
	import module4 from "../../../components/template/module4"
	import module5 from "../../../components/template/module5"
	import module6 from "../../../components/template/module6"
	import foot from "../../../components/template/foot"
	export default{
		name:"template",
		components:{
			"hear":hear,
			"banner":banner,
			"city3":city3,
			"banner2":banner2,
			"module0":module0,
			"module1":module1,
			"module2":module2,
			"module3":module3,
			"module4":module4,
			"module5":module5,
			"module6":module6,
			"foot":foot,
		}
	}
</script>

<style scoped>
.type-1{background: #6438c6;}
</style>
