
function map(){
	window.BMap_loadScriptTime = (new Date).getTime();
	 document.write('<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=y1ofKbkG29hDYnRclct1qTAFRjthvyXb&services=&t=20190622163250"></script>');
};
export{
	map
}