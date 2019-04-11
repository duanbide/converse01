/* Create by lixiangxiang*/

// 放大镜
function $1(str){
    return document.getElementById(str);
} 


        //绑定div
        var oSmall = $1("small");
        var oBig = $1("big");
        var oMask = $1("mask");
        //鼠标进入Small使big和mask显示出来

    oSmall.onmouseover = function(){
        oMask.style.display = "block";
        oBig.style.display = "block";

    }
    //鼠标出去使big和mask隐藏
    oSmall.onmouseout = function(){
        oMask.style.display = "none";
        oBig.style.display = "none";

    }
    
    oSmall.onmousemove = function(e){
        var left1 = e.clientX - oSmall.offsetLeft-oMask.offsetWidth/2;
        var top1 = e.clientY - oSmall.offsetTop-oMask.offsetHeight/2;

        //边界值判断  不能让mask到small外
        var maxLeft = oSmall.offsetWidth-oMask.offsetWidth;
        var maxTop = oSmall.offsetHeight-oMask.offsetHeight;
        if(left1<0){
            left1 = 0;
        }
        if(left1>maxLeft){
            left1 =maxLeft;
        }
        if(top1<0){
            top1 = 0;
        }
        if(top1>maxTop){
            top1 = maxTop;
        }

        oMask.style.left = left1+"px";
        oMask.style.top = top1+"px";

        //比例
        var x = left1*oBig.offsetWidth/oMask.offsetWidth;
        var y = top1*oBig.offsetHeight/oMask.offsetHeight;

        oBig.style.backgroundPositionX=-x + "px";
        oBig.style.backgroundPositionY=-y + "px";
    }





//商品详情

var r = window.location.search.substr(1);
    var arr = r.split("=");
    var id = arr[1];

$(function(){
    
    // console.log(r);
    $.get(
      "js/getGoodsinfo.php"
    ,
    {"goodsId":id},
    function(data){
      let arr=JSON.parse(data);

      $("#type").html(`【${arr.goodsType}】`);
      $("#product-name").html(`&nbsp;${arr.goodsName}`);
      $("#product-price").html(`价格&nbsp; &yen;${arr.goodsPrice}`);


      var r=arr.goodsImg;

      $("#small").css("background",`url(${arr.goodsImg}) no-repeat`);
      $("#small").css("backgroundSize","400px 400px");
      $("#big").css("background",`url(${arr.goodsImg}) no-repeat`);
      $("#big").css("backgroundSize","800px 800px");
      $("#suolue").attr("src",arr.goodsImg);




    }
    )
  

})  


$(function(){

$("#add").click(function(){

console.log($("#count").val());

    $.post(
        "js/addShoppingCart.php",
        {
        "vipName":getCookie("username"),
        "goodsId":id,
        "goodsCount":$("#count").val()

        },
        function(data){
            if(data=="1"){
                    alert("添加成功！");
                    location.href = "shoppingCart.html";


            }else{
                    alert("添加失败！");

            }

        }

        );

    })

})