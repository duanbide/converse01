//淡入淡出的函数
//参数:
//出去的图片（淡出）
//进来的图片（淡入）
//时长

function fadeInOut(domObjOut,timeLong,domObjIn){

	var startValue=1;
	var endValue = 0;

	var direction = -1;

	//已知：时长，距离（Math.abs(startValue-endValue)）
	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;

	
	var value = startValue;

	var myTimer = setInterval(function(){
		//一、数据处理
		//1、改变数据
		value = value+direction*step;
		
		//2、边界
		//if(value>=endValue){
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		//二、改变外观
		domObjOut.style.opacity = value;
		domObjIn.style.opacity = (1-value);
		
	},timeSpace);

}
