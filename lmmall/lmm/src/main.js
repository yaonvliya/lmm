// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from "qs"
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

axios.interceptors.request.use(
  function(config) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      //   const token = localStorage.getItem("token");
      if (config.method === "post") {
          // post请求时，处理数据
          // token ? (config.headers.Authorization = token) : null;
          config.data = qs.stringify({
              ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
          })
      }
      return config
  },
  function(error) {
      loadinginstace.close();
      return Promise.reject(error)
  }
);
//添加响应拦截器
axios.interceptors.response.use(
  function(response) {
      return response
  },
  function(error) {
      return Promise.reject(error)
  }
);


//路由守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (JSON.parse(localStorage.getItem('token'))) { //判断本地是否存在access_token
          next();
      } else {
          next({
              path: '/hdloginphone'
          })
      }
  }
  else {
      next();
  }

  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath == "/hdloginphone") {
      if (JSON.parse(localStorage.getItem('token'))) {
          next({
              path: from.fullPath
          });
      } else {
          next();
      }
  }

})
// //next 下一步操作         
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  console.log(token);
  // let token = '1';
  if (to.path == "/hddetails") {
      if (token == null) {
          console.log("请登录");
          next("/hdloginphone");
          // this.$router.push("/hdloginphone");
      } else if (token !== null) {
          // alert("请登录");
          console.log("一登陆");
          next();
      }
  } else {
      // this.$router.push("/hdloginphone");
      next();
  }
})
