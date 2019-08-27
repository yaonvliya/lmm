import Vue from 'vue'
import Router from 'vue-router'


import lmindex from '@/views/index/index' //主页
import lmnewindex from '@/views/newindex' //footer
import searchcontent from '@/views/index/searchAndcityselect/lm-search-content' //主页搜索界面
import hotelsearch from '@/views/hotelsearch/hotelsearch' //主页酒店搜索
import lmsever from '@/views/server/server' //客服
import notfound from '@/views/notfound' //找不到
import lmspecial from '@/views/specialbuy/lmspecial' //特卖
import findindex from '@/views/find/lmfindindex' //发现
import template from '@/views/specialbuy/template/template' //国外网红地
import lmhotels from '@/components/lmHotel' //查询得到的酒店组
import hoteldetail from '@/components/lmDetailsUp' //查询得到的酒店详情
import lmIndexadd from '@/views/index/addclient' //查询得到的酒店页面添加人
import lmindexaddperson from '@/views/index/addperson' //添加人员
import location from '@/components/hotelsearch/location'//查询城市名称并定位
import lmindexpaying from '@/views/index/paying' //主页酒店支付界面
import keysearch1 from '@/components/hotelsearch/keysearch1' //查询得到的酒店详情
import lmfind from '@/views/find/lmfind' //青海湖
import lmfindmore from '@/views/find/lmfindmore' //更多
// import map from '@/components/hotelsearch/map'//查询得到的酒店地图
import lmMine from '@/views/mine/lmMine'; //我的
import lmLog from '@/views/mine/lmLog'; //登录
import lmResgiterOne from '@/views/mine/lmResgiterOne'; //注册一
import lmResgiterTwo from '@/views/mine/lmResgiterTwo'; //注册二
import lmResgiterThree from '@/views/mine/lmResgiterThree'; //注册三
import lmMineAfter from '@/views/mine/lmMineAfter' //登录后
import date from '@/components/hotelsearch/date' //日历
import city from '@/components/city/city'//城市
import map from '@/components/hotelsearch/map'//查询得到的酒店地图
Vue.use(Router)

export default new Router({


	routes: [{
			path: '/',
			name: 'indexs',
			component: lmnewindex, //主页
			children: [{
					path: '/',
					name: 'index',
					component: lmindex, //主页搜索
				},
				{
					path: '/lmspecial',
					name: 'lmspecial',
					component: lmspecial, //特卖
				},
				{
					path: '/server',
					name: 'server',
					component: lmsever, //客服
				},
				{
					path: '/lmfindindex',
					name: 'find',
					component: findindex, //发现
				},
				{
					path: '/lmMine',
					name: 'lmMine', //我的
					component: lmMine
				},
			]
		},

		//主页
		{
			path: '/searchcontent',
			name: 'searchcontent',
			component: searchcontent, //主页搜索页面
		},
// 						{
// 							path: '/location',
// 							name: 'location',
// 							component: location,//查询城市名称并定位
// 						},
		{
			path: '/hotelsearchs',
			name: 'hotelsearchs',
			component: hotelsearch, //主页酒店搜索
		},
		{
			path: '/date',
			name: 'date',
			component: date, //查询得到的酒店日历
		
		},
		{
			path: '/map',
			name: 'map',
			component: map, //查询得到的地图
		
		},
		
		{
			path: '/lmhotel',
			name: 'lmhotels',
			component: lmhotels, //查询得到的酒店组

		},
		{
			path: '/lmDetailUp/:hotelid',
			// path: '/lmDetailUp',
			name: 'hoteldetail',
			component: hoteldetail //查询得到的酒店详情
			// redirect:{name:"hoteldetail"}
		},
		{
			path: '/addclient',
			name: 'lmIndexadd',
			component: lmIndexadd, //查询得到的酒店页面添加人

		},
		{
			path: '/addperson',
			name: 'addperson',
			component: lmindexaddperson, //添加人

		},
		{
			path: '/indexaddpaying',
			name: 'indexaddpaying',
			component: lmindexpaying
		},
		{
			path: '/lmfind',
			name: 'lmfind',
			component: lmfind, //青海湖
		},
		{
			path: '/lmfindmore',
			name: 'lmfindmore',
			component: lmfindmore, //旅游指南
		},

		//特卖
		{
			path: '/template',
			name: 'template',
			component: template, //国外网红地
		},
		{
			path: '/lmLog',
			name: 'lmLog', //登录
			component: lmLog
		},
		{
			path: '/lmResgiterOne',
			name: 'lmResgiterOne', //注册一
			component: lmResgiterOne
		},
		{
			path: '/lmResgiterTwo',
			name: 'lmResgiterTwo', //注册二
			component: lmResgiterTwo
		},
		{
			path: '/lmResgiterThree',
			name: 'lmResgiterThree', //注册三
			component: lmResgiterThree
		},
		{
			path: '/lmMineAfter',
			name: 'lmMineAfter', //登录后
			component: lmMineAfter
		},

		{
			path: '/lmfind',
			name: 'lmfind',
			component: lmfind, //青海湖
		},
		{
			path: '/lmfindmore',
			name: 'lmfindmore',
			component: lmfindmore, //旅游指南
		},
		{
			path:"/city",
			name:"city",
			component:city
		  },


		{
			path: '*',
			component: notfound,
		},



		// 		 {
		// 		  path: '/',
		// 		  name: 'indexh',
		// 		  component: lmindexhotel
		// 		},
		// 	{
		// 		path: '/',
		// 		name: ' keysearch1',
		// 		component: keysearch1,//主页搜索
		// 	},




		



	]
})
