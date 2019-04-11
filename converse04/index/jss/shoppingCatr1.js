/* Create by lixiangxiang*/

function changeCount(btn,sign){
	var count = Number(btn.parentNode.children[1].innerHTML);
	sign=="+"?count++:count--;
	if(count<0){
		return;
	}
	btn.parentNode.children[1].innerHTML = count;
	var price = parseFloat(btn.parentNode.previousElementSibling.innerHTML);
	var money= price*count;
	var totalMoney = Number
	($1("#spanTotalMoney").innerHTML);
	sign=="+"?(totalMoney += price):(totalMoney -= price);
	$1("#spanTotalMoney").innerHTML = totalMoney.toFixed(2);
}
window.onload = function(){
	var addBtns = $1(".addcls");
	for(var i=0;i<addBtns.length;i++){
		addBtns[i].onclick = function(){
			changeCount(this,"+");
		}
	}
	var reduceBtns = $1(".reduceCls");
	for(var i=0;i<reduceBtns.length;i++){
		reduceBtns[i].onclick = function(){
			changeCount(this,"-");
		}
	}
	 var sc=$1(".shanchu");
	for(let i=0;i<sc.length;i++){
		sc[i].onclick = function(){
			var result=confirm("亲，您真的要删除此商品吗?");
			if (result==true){
				var sum=this.parentNode.parentNode;
				moveYun02(sum,"opacity",0,500,()=>{
					sum.remove();
					$1("#jianshu").innerHTML=$1(".box").length;
					$1(".gf")[i].innerHTML="亲,您所选物品已被删除删除。";	
					$1(".gf")[i].style.color="orange";
					$1(".gf")[i].style.fontWeight="normal";
					$1(".gf")[i].style.fontSize=14+"px";
				})
				
			}
		}
	}
}
function $1(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}