
// 注册
$(function(){
	// 手机号码
	$("#phone").blur(function(){
	
		var reg = /^1\d{10}$/;
		if(reg.test(this.value)){
			$(this).next("span").html("√");
		}else{
			$(this).next("span").html("请输入正确手机号码！");


		}
	})



	// 电子邮箱
	$("#email").blur(function(){
	
		var reg = /^\w+@\w+(\.\w+)+$/ ;
		if(reg.test(this.value)){
			$(this).next("span").html("√");
		}else{
			$(this).next("span").html("请输入有效的电子邮箱地址！");


		}
	})
	// 密码

	$("#mima").blur(function(){
		var reg = /^[A-Za-z0-9]+$/;
		// checkpw();
		if(reg.test(this.value)){
			$(this).next("span").html("√");
		}else{
			$(this).next("span").html("密码至少为8位字符");

		}
	})



	// 密码2
	$("#mima2").blur(function(){
		var a =  $("#mima").val();
		var b =  $("#mima2").val();
		if(a===b){
			$(this).next("span").html("√");

		}else{
			$(this).next("span").html("抱歉，两次输入的密码不匹配！");

		}
	
	})
	// 验证码
	$("#yanzheng").blur(function(){
		var a =  $("#yanzheng").val();
		var b =  "mnvc";
		if(a==b){
			$(this).next("span").html("√");

		}else{
			$(this).next("span").html("您填写的验证码有误，请重新输入！");


		}

	})


})


// 登录

$(function(){
	//邮箱/手机号
		$("#loginName").blur(function(){
		var reg = /^1\d{10}$/;
		var y =  /^\w+@\w+(\.\w+)+$/;
		// checkpw();
		if(reg.test(this.value)||y.test(this.value)){
			$(this).next("span").html("√");
		}else{
			$(this).next("span").html("请输入有效的电子邮箱/手机号码！");

		}
	})

$("#loginPWD").blur(function(){
		var reg = /^[A-Za-z0-9]+$/;
		// checkpw();
		if(reg.test(this.value)){
			$(this).next("span").html("√");
		}else{
			$(this).next("span").html("密码必须在6-12个字符之间！");

		}
	})

$("#validateCode").blur(function(){
		var a =  $("#validateCode").val();
		var b =  "mnvc";
		if(a==b){
			$(this).next("span").html("√");

		}else{
			$(this).next("span").html("您填写的验证码有误，请重新输入！");


		}

	})





})	


// 注册验证
$(function(){
	$("#phone").blur(function(){
		$.get(
	  	 "js/username.php",{username: $("#phone").val() }, function(data){
	  		 	if(data=="0"){
					alert("用户名已存在");		
				}else{	
					alert("用户名可以使用");		
			 	}
			} 

		);

	});
})



// 注册


$(function(){
	$("#btn_re").click(function(){
		var username = $("#phone").val();
		var useremail = $("#email").val();
		var userpass = $("#mima").val();
		// var usersex = "女";
		var sex = $("input[name='usersex']");
		// console.log(sex);

			let sexs = "男";
			if(sex[1].checked){
				sexs = "女";
			}
		var usersex = sexs;
		var userage = $("#userage").val();
			if(username!=""&&userpass!=""){
				$.ajax({
					type:"POST",
					url:"js/regSave.php",
					dataType:"JSON",
					data:{
						"username": username,
						"useremail":useremail,
						"userpass":userpass,
						"usersex":usersex,
						"userage":userage
					},
					success:function(data){
						if(data=="1"){
							alert("恭喜您创建成功");
						}else{
							alert("注册失败，请检查你的输入！");	
						}
					}
				})
			}else{
				alert("请检查你的输入！");
			}
	})
})

// 登录验证

$(function(){
	$("#btn").click(function(){
		var username = $("#loginName").val();
		var userpass = $("#loginPWD").val();
			if(username!=""&&userpass!=""){
				$.ajax({
					type:"POST",
					url:"js/login.php",
					dataType:"JSON",
					data:{
						"username": username,
						"userpass":userpass,
					},
					success:function(data){
						if(data=="1"){
							alert("恭喜您登录成功");
							window.location.href = "../index/index.html";
						}else{
							alert("登录失败，请检查你的输入！");	
						}
					}
				})
			}else{
				alert("请检查你的输入！");
			}
	})
})



// 效果

$(document).ready(function(){
  $("#down_a").click(function(){
    $("#dengxia").slideDown("slow");
    $("#chuxia").css("display","none");


  });

   $("#down_a2").click(function(){
    $("#chuxia").slideDown("slow");
    $("#dengxia").css("display","none");


  });


    $("#up").click(function(){
    $("#dengxia").slideUp("slow");
    $("#chuxia").slideUp("slow");
    
 

    
  });


  //   $("#qiehuan").click(function(){
  //   $("#dengxia").slideUp("slow");
  //   $("#chuxia").slideDown("slow");
    
 

    
  // });
    
 $("#qiehuan").click(function(){
    $("#dengxia").css("display","none");
    $("#chuxia").css("display","block");
     
  });


 $(document).click(function(){
    $(".header-expanded").hide();

});
 $(".header-expanded").click(function(event){
    event.stopPropagation();

});
    
});



// 顶部悬浮
// $(document).ready(function () {
// var stayBottom = function () {
// ///相对于浏览器的位置（浏览器的高度+滚动到上面看不到的高度-本身的高度=层顶部到浏览器最上面的高度）
// var offsetTop = $(window).height() + $(window).scrollTop() - $(".header").height() - 2 + "px";
// //$(".header").css("top", offsetTop);
// $(".header").animate({ top: offsetTop, "left": $(window).width() / 2 - $(".header").width() / 2 }, { duration: 500, queue: false });
// };
// $(window).scroll(stayBottom).resize(stayBottom);//在浏览器滚动条变化或大小改变时调用
// });
// < /script>
// < div id="header" style="position: absolute; border-style: solid; border-width: thin;
// border-color: Gray; height: 50px; bottom: 0;">
// 固定内容，实现层底部始终与浏览器底部相接，如果位置要往上移，offsetTop里面减去多少就是往上移多少 ，left里面加多少就是往右移多少
// </div>