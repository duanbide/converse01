// 轮播图


//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}


function linearMove01(domObj,attr,startValue,endValue,step,timeSpace){
	let currValue = startValue;
	var myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+step;
		
		//2、边界处理
		if(currValue>=endValue){
			currValue=endValue;
			window.clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";		
	},timeSpace);
}

//匀速运动(正向)
//参数：
//DOM元素
//样式属性
//起始位置
//终止位置
//时长(总路程/速度=总路程/步长*时间间隔)

//推导：时长/时间间隔 = 总路程/步长

function linearMove02(domObj,attr,startValue,endValue,timeLong){
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = (endValue-startValue)/(timeLong/timeSpace);
	//给当前值赋为初始值
	let currValue = startValue;
	var myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+step;
		
		//2、边界处理
		if(currValue>=endValue){
			currValue=endValue;
			window.clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";	
	},timeSpace);
}


//匀速运动(正反向都有)
//参数：
//DOM元素
//样式属性
//起始位置
//终止位置
//时长(总路程/速度=总路程/步长*时间间隔)

//推导：时长/时间间隔 = 总路程/步长

function linearMove03(domObj,attr,startValue,endValue,timeLong){
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
	
	//给当前值赋为初始值
	let currValue = startValue;
	//方向
	let direction = startValue<endValue?1:-1;
	var myTimer = setInterval(function(){
		//1、改变数据                  //currValue = 492 + 5 = 497
		currValue = currValue+direction*step;//502
		
		//2、边界处理
		if(Math.abs((currValue-direction*step)-endValue)<=step){
			currValue = endValue;//500
			window.clearInterval(myTimer);
		}
		/*
		if(direction==1){
			if(currValue>=endValue){
				currValue=endValue;
				window.clearInterval(myTimer);
			}			
		}else{
			if(currValue<=endValue){
				currValue=endValue;
				window.clearInterval(myTimer);
			}
		}*/
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;//497
		}else{
			domObj.style[attr] = currValue+"px";
		}
	},timeSpace);
}

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

//匀速运动(正反向都有)
//参数：
//DOM元素
//样式属性
//终止位置
//时长(总路程/速度=总路程/步长*时间间隔)

//推导：时长/时间间隔 = 总路程/步长

function linearMove04(domObj,attr,endValue,timeLong){
	
	let startValue = parseFloat(getStyle(domObj,attr));
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
	//给当前值赋为初始值
	let currValue = startValue;
	//方向
	let direction = startValue<endValue?1:-1;
	var myTimer = setInterval(function(){
		//1、改变数据                  //currValue = 492 + 5 = 497
		currValue = currValue+direction*step;//502
		
		//2、边界处理
		if(Math.abs((currValue-direction*step)-endValue)<=step){
			currValue = endValue;//500
			window.clearInterval(myTimer);
		}
		
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;//497
		}else{
			domObj.style[attr] = currValue+"px";
		}
	},timeSpace);
}


//抛物线运动
//dom元素
//起始位置
//结束位置
//时间长度
//开口方向（上下左右）
	
function parabola(domObj,startPoint,endPoint,timeLong){
	//起点和终点
	//let startPoint = {x:$("#startDiv").offsetLeft,y:$("#startDiv").offsetTop};
	//let endPoint = {x:$("#endDiv").offsetLeft,y:$("#endDiv").offsetTop};
	//平移到原点
	let x = endPoint.x-startPoint.x;
	let y = endPoint.y-startPoint.y;
	
	let p = y*y/(2*x);//y^2=2px;  p = y^2/(2x);//依赖于：开口方向决定
	
	let left = 0;//x
	let top1 = 0;//y;
	let direction = 1;//依赖于：起点和终点的位置，开口方向决定
	
	let timeSpace = 10;
	let step = Math.abs(startPoint.x-endPoint.x)/(timeLong/timeSpace);//依赖于：开口方向决定
	
	var myTimer = setInterval(function(){
		//1、改变数据		
		left=left+direction*step;
		//此处计算top时，要考虑正负值的问题（因为开方后都是正数），top的正负与方向的正负刚好相反。
		top1= Math.sqrt(2*p*left);//y^2=2px;
		
		//2、边界处理
		if(left>=(endPoint.x-startPoint.x)){
			left=endPoint.x-startPoint.x;
			window.clearInterval(myTimer);			
		}
		//3、改变外观
		domObj.style.left = left+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";		
	},timeSpace);
}



//抛物线运动
//dom元素
//起始位置
//结束位置
//时间长度
//开口方向（上下左右）
//回调函数（当运动做完后，要执行的代码）
	
function parabola02(domObj,startPoint,endPoint,timeLong,func){
	//起点和终点
	//let startPoint = {x:$("#startDiv").offsetLeft,y:$("#startDiv").offsetTop};
	//let endPoint = {x:$("#endDiv").offsetLeft,y:$("#endDiv").offsetTop};
	//平移到原点
	let x = endPoint.x-startPoint.x;
	let y = endPoint.y-startPoint.y;
	
	let p = y*y/(2*x);//y^2=2px;  p = y^2/(2x);//依赖于：开口方向决定
	
	let left = 0;//x
	let top1 = 0;//y;
	let direction = 1;//依赖于：起点和终点的位置，开口方向决定
	
	let timeSpace = 10;
	let step = Math.abs(startPoint.x-endPoint.x)/(timeLong/timeSpace);//依赖于：开口方向决定
	
	var myTimer = setInterval(function(){
		//1、改变数据		
		left=left+direction*step;
		//此处计算top时，要考虑正负值的问题（因为开方后都是正数），top的正负与方向的正负刚好相反。
		top1= Math.sqrt(2*p*left);//y^2=2px;
		
		//2、边界处理
		if(left>=(endPoint.x-startPoint.x)){
			left=endPoint.x-startPoint.x;
			window.clearInterval(myTimer);	
			func();
		}
		//3、改变外观
		domObj.style.left = left+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";		
	},timeSpace);
}

//抛物线运动
//dom元素
//起始位置
//结束位置
//时间长度
//开口方向（上下左右）
//回调函数（当运动做完后，要执行的代码）
	
function parabola03(domObj,startPoint,endPoint,timeLong,openDirection,func){
	//计算起点和终点所成夹角的度数，来决定开口的方向
	
	
	//起点和终点
	//let startPoint = {x:$("#startDiv").offsetLeft,y:$("#startDiv").offsetTop};
	//let endPoint = {x:$("#endDiv").offsetLeft,y:$("#endDiv").offsetTop};
	//平移到原点
	let x = endPoint.x-startPoint.x;
	let y = endPoint.y-startPoint.y;
	
	//let p = y*y/(2*x);//y^2=2px;  p = y^2/(2x);//依赖于：开口方向决定
	let p;
	switch(openDirection){
		case "左": p = Math.abs(y*y/(2*x));break; //y^2=-2px;
		case "上": p = Math.abs(x*x/(2*y));break; //x^2=2py;
		case "右": p = Math.abs(y*y/(2*x));break; //y^2=2px;
		case "下": p = Math.abs(x*x/(2*y));break; //x^2=-2py;
		default: p = Math.abs(y*y/(2*x));break;
	}
	
	let left = 0;//x
	let top1 = 0;//y;
	
	//let direction = 1;//依赖于：起点和终点的位置，开口方向决定
	let direction;
	switch(openDirection){
		case "左":  direction=-1;break;
		case "上":  direction=-1;break;
		case "右":  direction=1;break; 
		case "下":  direction=1;break; 
		default:direction=1;break;
	}
	
	let timeSpace = 10;
	
	//let step = Math.abs(startPoint.x-endPoint.x)/(timeLong/timeSpace);//依赖于：开口方向决定
	let dis;;
	switch(openDirection){
		case "左":; 
		case "右":dis = startPoint.x-endPoint.x;break; 
		case "上": 
		case "下":dis = startPoint.y-endPoint.y;break; 
		default:dis = startPoint.x-endPoint.x;break;
	}
	let step = Math.abs(dis)/(timeLong/timeSpace);
	
	var myTimer = setInterval(function(){
		//1、改变数据		
		switch(openDirection){
			case "左":
			case "右":{
						//纵向的方向
						let VDirection = endPoint.y>startPoint.y?1:-1;
						left=left+direction*step;
					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			          }
			case "上": 
			case "下":{
						//横向的方向
						let HDirection = endPoint.x>startPoint.x?1:-1;
						top1=top1+direction*step;
					    left= HDirection*Math.sqrt(2*p*Math.abs(top1));//x^2 = 2py
						break; 
			          } 
			default:{
						//纵向的方向
						let VDirection = endPoint.y>startPoint.y?1:-1;
						left=left+direction*step;
					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			        }
		}
				

		//2、边界处理 
		let isOver = false;
		switch(openDirection){
			case "左":if(left<=endPoint.x-startPoint.x){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;  
			case "右":if(left>=(endPoint.x-startPoint.x)){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;
			case "上": if(top1<=(endPoint.y-startPoint.y)){
							top1=endPoint.y-startPoint.y;
							isOver = true;
						}
						break;
			case "下":if(top1>=(endPoint.y-startPoint.y)){
							top1=endPoint.y-startPoint.y;
							isOver = true;
						}
						break;
			default:if(left>=(endPoint.x-startPoint.x)){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;
		}
		
		if(isOver){
			window.clearInterval(myTimer);	
			func();
		}
		
		//3、改变外观
		domObj.style.left = left+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";		
	},timeSpace);
}



function animate(domObj,attrObj,timeLong,func){
	
	//let startValue = parseFloat(getStyle(domObj,attr));
	let startObj = {};//起始值json对象
	for(let key in attrObj){
		startObj[key] = parseFloat(getStyle(domObj,key));
	}
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	//let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
	let stepObj = {};
	for(let key in attrObj){
		stepObj[key] = Math.abs(attrObj[key]-startObj[key])/(timeLong/timeSpace);
	}
	//给当前值赋为初始值
	//let currValue = startValue;
	let currObj = {};
	for(let key in attrObj){
		currObj[key] = startObj[key];
	}
	
	//方向
	//let direction = startValue<endValue?1:-1;
	let directionObj = {};
	for(let key in attrObj){
		directionObj[key] = startObj[key]<attrObj[key]?1:-1;
	}
	
	var myTimer = setInterval(function(){
		//1、改变数据                  //currValue = 492 + 5 = 497
		//currValue = currValue+direction*step;//502
		for(let key in currObj){
			currObj[key] += directionObj[key]*stepObj[key];
		}
		
		//2、边界处理		
		/*
		if(Math.abs((currValue-direction*step)-endValue)<=step){
			currValue = endValue;//500
			window.clearInterval(myTimer);
		}
		*/
		let isOver = false;
		for(let key in currObj){
			if(Math.abs((currObj[key]-directionObj[key]*stepObj[key])-attrObj[key])<=stepObj[key]){
				currObj[key] = attrObj[key];
				isOver = true;
			}
		}
		if(isOver){
			window.clearInterval(myTimer);
			func&&func(); //等价于 if(func){func()};			
		}
		//3、改变外观
		for(let key in currObj){
			if(key=="opacity"){
				domObj.style[key] = currObj[key];
			}else{
				domObj.style[key] = currObj[key]+"px";
			}
		}
	},timeSpace);
}

//淡入
//dom元素
//时长

function fadeIn(domObj,timeLong){
	linearMove03(domObj,"opacity",0,1,timeLong);
}


//淡出
//dom元素
//时长

function fadeOut(domObj,timeLong){
	linearMove03(domObj,"opacity",1,0,timeLong);
}

//两张图片的淡入和淡出
function fadeInOut(outDomObj,inDomObj,timeLong){	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = 1/(timeLong/timeSpace);	
	//给当前值赋为初始值
	let currOpacity = 0;
	//方向
	var myTimer = setInterval(function(){
		//1、改变数据                 
		currOpacity = currOpacity+step;
		
		//2、边界处理
		if(currOpacity>=1){
			currOpacity = 1;
			window.clearInterval(myTimer);
		}
		//3、改变外观
		inDomObj.style.opacity = currOpacity;
		outDomObj.style.opacity = 1-currOpacity;		
	},timeSpace);
}






function Slider(boxDom,width,height,imgs,btnColor,
				btnHighColor,btnSize,isCircle,timeSpace){
	this.boxDom = boxDom
	this.width = width;
	this.height = height;
	this.imgs = imgs;//要播放的图片数组
	
	this.btnColor = btnColor; //按钮的原始颜色
	this.btnHighColor = btnHighColor;//按钮的高亮颜色
	this.btnSize = btnSize;//按钮的大小
	this.isCircle = isCircle;//按钮是否为圆的
	
	this.currIndex = 0;
	this.timeSpace = timeSpace;
	this.myTimer = null;
	
	this.createUI = function(){
		this.boxDom.style.overflow="hidden";
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;top:172px;";
			if(i==0){
				imgDom.style.left = "0px";
			}else{
				imgDom.style.left = this.width+"px";
			}
			imgDom.style.width = this.width+"px";
			imgDom.style.height = this.height+"px";
			this.boxDom.appendChild(imgDom);
		}
		
		let ulDom = document.createElement("ul");
		ulDom.style.cssText = "position:absolute;list-style:none;right:50px;bottom:10px;z-index:1;";
		this.boxDom.appendChild(ulDom);
		
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText="margin-right:20px;float:left;";
			
			liDom.style.width = this.btnSize+"px";
			liDom.style.height = this.btnSize+"px";
			if(this.isCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor = this.btnHighColor;			
			}else{
				liDom.style.backgroundColor = this.btnColor;			
			}
			ulDom.appendChild(liDom);
		}
	}
	
	//添加事件
	this.addEvent = function(){
		//this;//是轮播图对象
		let that = this;
		
		this.boxDom.onmouseover = function(){
			//this 是事件源（boxDom）
			//this.stop();//这样写就不对了
			that.stop();
		}
		
		this.boxDom.onmouseout = function(){
			that.autoPlay();
		};
		
		let lis = this.boxDom.lastElementChild.children;
		for(var i=0;i<lis.length;i++){
			lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
			lis[i].onclick = function(){
				that.goImg(parseInt(this.getAttribute("index")));
			};
		}
	}
	
	//1、自动播放
	this.autoPlay = function(){	
		if(this.myTimer!=null){
			return;
		}
		this.myTimer = setInterval(()=>{
			//1、改变数据（图片序号）
			let outIndex = this.currIndex;//要出去的那张。
			this.currIndex=this.currIndex+1;
			//2、边界处理
			if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
				this.currIndex = 0;
			}
			//3、改变外观
			this.showImg(outIndex,this.currIndex);
		},this.timeSpace);	
	}

	//2、停止
	this.stop=function(){
		if(this.myTimer!=null){
			window.clearInterval(this.myTimer);
			this.myTimer = null;
		}
	}

	//3、跳转指定的图片
	//
	this.goImg=function(transIndex){//2
		//1、改变数据（图片序号）
		let outIndex = this.currIndex;
		this.currIndex=transIndex;//2
		//2、边界处理
		if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
			this.currIndex = 0;
		}
		//3、改变外观
		this.showImg(outIndex,this.currIndex);
	}

	//
	//参数：
	//outIndex:淡出的那张图片的序号
	//inIndex:淡入的那张图片的序号
	this.showImg=function(outIndex,inIndex){
		//3、改变外观
		//1)、改图片
		let imgs = this.boxDom.children;
		imgs[inIndex].style.left = this.width+"px";
		
		//让inIndex滑入
		linearMove03(imgs[inIndex],"left",this.width,0,300);
		//让outIndex滑出
		linearMove03(imgs[outIndex],"left",0,-1*this.width,300);
		
		//2)、改豆豆
		let lis = this.boxDom.lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor = this.btnColor;
		}
		lis[this.currIndex].style.backgroundColor = this.btnHighColor;
	}
	this.createUI();
	this.addEvent();
}
