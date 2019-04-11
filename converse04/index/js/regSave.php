<?php

header("Content-type:text/html;charset=utf-8");
//接收数据
$username = $_POST['username'];
$userpass = $_POST['userpass'];
$userage = $_POST['userage'];
$usersex = $_POST['usersex'];
$useremail = $_POST['useremail'];



//1、创建连接

$conn = mysql_connect('localhost','root','root');
if(!$conn){
	echo "失败";
}else{

//连接数据库
mysql_select_db("shoppingcenter",$conn);

$sqlstr = "insert into userinfo(username,userage,userpass,usersex,useremail) values('$username','$userage','$userpass','$usersex','$useremail')";

$result = mysql_query($sqlstr,$conn);

mysql_close($conn);

if($result=="1"){
	echo "1";
}else{
	echo "0";
}



}
?>