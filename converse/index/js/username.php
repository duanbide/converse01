<?php

header("Content-type:text/html;charset=utf-8");
//接收数据
$username = $_GET['username'];




//1、创建连接

$conn = mysql_connect('localhost','root','root');
if(!$conn){
	echo "服务器连接失败";
}else{

//连接数据库
mysql_select_db("shoppingcenter",$conn);

$sqlstr = "select * from userinfo where username = '$username'";

$result = mysql_query($sqlstr,$conn);

mysql_close($conn);

if(mysql_num_rows($result)==1){
	echo "0";
}else{
	echo "1";
}

}

?>
 