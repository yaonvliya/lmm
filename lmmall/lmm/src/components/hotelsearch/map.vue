<template>
	<div class="map">
		 <div class="baidumap" id="allmap"></div>
		 <button @click="locationbtn()">点击按钮开始定位</button>
	</div>
</template>

<script>
	// import BMap from 'BMap'
	export default {
    name: 'map',
    components: {

    },
	data(){
		return{
			jd:'',
			wd:'',
			lng:'',
			lat:''
		}
	},
    mounted() {
        this.baiduMap()
    },
    methods: {
		 locationbtn(){
		               let map = new BMap.Map('allmap');
		                let point = new BMap.Point(this.jd, this.wd);
		                map.centerAndZoom(point, 12)
		                var geolocation = new BMap.Geolocation();
		                geolocation.getCurrentPosition((r) => {
		                if (r.point) {
// 		                    this.center.lng = r.longitude;
// 		                    this.center.lat = r.latitude;
		 					this.jd= r.longitude;
							this.wd=r.latitude;
		                   // alert('您当前经纬度：'+this.center.lng+','+ this.center.lat);//108.95309828,34.27779990
		                     var point = new BMap.Point( this.jd, this.wd);//用当前定位的经纬度查找省市区街道等信息
		 
		                     var gc = new BMap.Geocoder();
		                     gc.getLocation(point, function(rs){
		                     var addComp = rs.addressComponents; console.log(rs.address);//地址信息
		                     console.log(rs.address);//弹出当前所在地址
		                     });
		                    let markers = new BMap.Marker(r.point);
		                    map.addOverlay(markers);
		                    map.panTo(r.point);
		                    map.centerAndZoom(r.point, 16);
		                }
		                })
		            },
        baiduMap() {
            var map = new BMap.Map('allmap') // 创建地图实例

            // var point = new BMap.Point(116.331398, 39.897445) // 创建点坐标
			var point = new BMap.Point(this.jd, this.wd) // 创建点坐标
            map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(false) //开启鼠标滚轮缩放

            map.addControl(new BMap.NavigationControl())
            map.addControl(new BMap.ScaleControl())
            map.addControl(new BMap.OverviewMapControl())
            map.addControl(new BMap.MapTypeControl())
            //map.setMapStyle({ style: 'midnight' }) //地图风格

            var marker = new window.BMap.Marker(point) // 创建标注
            map.addOverlay(marker) // 将标注添加到地图中

            //提示信息
            var infoWindow = new BMap.InfoWindow('这是提示信息')
            // 鼠标移上标注点要发生的事
            marker.addEventListener('mouseover', function() {
                this.openInfoWindow(infoWindow)
            })

            // 鼠标移开标注点要发生的事
            marker.addEventListener('mouseout', function() {
                //this.closeInfoWindow(infoWindow)
            })
        }
    }
}

</script>

<style scoped="scoped">
	.map{
		height:100%;
	}
	.baidumap {
    /* width: 100%; */
    height: 667px;
    border: 1px solid red;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

/* 去除百度地图版权那行字 和 百度logo */
.baidumap > .BMap_cpyCtrl {
    display: none !important;
}
.baidumap > .anchorBL {
    display: none !important;
}
button{
	z-index: 800;
    position: absolute;
    left: 10px;
    top: 550px;
}
</style>
