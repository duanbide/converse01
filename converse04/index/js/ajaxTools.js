/*功能：发送ajax请求，获取数据
参数：
1、请求方式
2、请求地址
3、请求参数 parameter
4、是否异步 asynchronization
5、回调函数------5合1  用json对象做参数   好处：1、不用考虑顺序问题  2、调用简单
*/

function ajax(method,url,param,isAsync,func){
	let xhr = new XMLHttpRequest();
	let urlAndparam = url;
	if(method.toLowerCase() == "get"){
		urlAndparam += "?"+param;
	}
	xhr.open(method,urlAndparam,isAsync);

	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4 && xhr.status == 200){
			func(xhr.responseText);
		} 
	}

	if(method.toLowerCase() == "post"){
		xhr.setRequestHeader("Content-type","appliction/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}

}










function ajaxByObj(obj) {
	let defaultObj = {
		"method":"get",
		"url":"#",
		"param":"",
		"isAsync":true,
		"func":null
	}
	for(let key in defaultObj){
		if(!obj[key]){
			obj[key] = defaultObj[key];
		}
	}

	let xhr = new XMLHttpRequest();

	let urlAndparam = obj.url;
	if(obj.method.toLowerCase() == "get"){
		urlAndparam +="?"+obj.param;
	}
	xhr.open(obj.method,urlAndparam,obj.isAsync);

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			obj.func&&obj.func(xhr.responseText);
		}
	}

	if(obj.method.toLowerCase() == "post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}


}