<template>
  <div id="app">
	  <loading v-if="isloading"></loading>
   <router-view v-else></router-view>
  </div>
</template>

<script>
	import loading from './components/common/loading'
	
export default {
  name: 'App',
  data () {
  	return {
  		isloading:true
  	}
  },
  	components: {
  	'loading':loading
  
  },
  created () {
  	this._pageData()
  },
  methods: {
  	_pageData(){
  		setTimeout(()=>{
  			this.isloading = false;
  		},3000)
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,input,select,textarea,td{
	margin:0;
	padding:0;
}
html{
	font-size: 26.67vw;
}
html,body{
	height: 100%;
}
body{
	font-family: "黑体","arial, helvetica, sans-serif";
}
a{
	text-decoration: none;
}
ul,ol,li{
	list-style: none;
}
img{
	border:0;
	display: block;
}
i{
	font-style: normal;
}
</style>
