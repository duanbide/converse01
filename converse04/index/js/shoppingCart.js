// $(function(){
//     $.get(
//       "js/getShoppingCart.php"
//     ,
//     function(data){
//       console.log(data);
//       let arr=JSON.parse(data);
//       let htmlStr="";
//       for(var i=0;i<arr.length;i++){
//         htmlStr+=`<img class="pi" src="${arr[i].goodsImg}">
//        `;
//       }
//       $(".box1").append(htmlStr);
//     }
//     )

// })  




// $(function(){
//     $.get(
//       "js/getShoppingCart.php"
//     ,
//     function(data){
//       console.log(data);
//       let arr=JSON.parse(data);
//       let htmlStr="";
//       for(var i=0;i<arr.length;i++){
//         htmlStr+=`
//         <p><span>${arr.goodsType}</span>${arr.goodsName}</p>
//           <h5>库存：${arr[i].goodsCount}</h5>
//           <h5>颜色：黑色</h5>
//           <h5>尺码：36.5</h5>`;
//       }
//       $(".box").append(htmlStr);
//     }
//     )

// })  



// $(function(){
// var vipName=getCookie("username");
// $.get("getShoppingCart.php",
//      {"vipName":"1"},
//       function(data){
//       console.log(data);
//      let htmlstr = "";
//       for(let i=0;i<data.length;i++){
      
//       htmlstr += `<p><span>${arr.goodsType}</span>${arr.goodsName}</p>
//           <h5>库存：${arr[i].goodsCount}</h5>
//           <h5>颜色：黑色</h5>
//           <h5>尺码：36.5</h5>
     
//       `;
//       $(".box1").append(htmlstr);
//       }
//   )

// })
/* Create by lixiangxiang*/


$(function(){
    var vipName=getCookie("username")
    $.post(
      "js/getShoppingCart.php",
      {
        "vipName":vipName
      },
      function(data){
        var arr=JSON.parse(data);
        let htmlStr="";
        for(var i=0;i<arr.length;i++){
         
          htmlStr=`
          <img class="pi" src="${arr[i].goodsImg}">
        <div class="box1">
          <p><span>【${arr[i].goodsType}】</span>${arr[i].goodsName}</p>
           <h5>库存：${arr[i].goodsCount}</h5>
           <h5>颜色：黑色</h5>
           <h5>尺码：36.5</h5>
        </div>
       `
        }
        $("#box").append(htmlStr);
      }

    )

  })