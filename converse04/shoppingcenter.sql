# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-26 11:31:36
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `goodsName` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `goodsType` varchar(255) DEFAULT NULL,
  `goodsPrice` varchar(255) DEFAULT NULL,
  `goodsCount` varchar(255) DEFAULT NULL,
  `goodsDesc` varchar(255) DEFAULT NULL,
  `goodsImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES (1,'防水高帮运动鞋','男女同款','769','60','高帮','img/list/4.jpg'),(2,'防水高帮运动鞋','男女同款','769','60','高帮','img/list/5.jpg'),(3,'Chuck Taylor All Star','男女同款','333.00','60','低帮','img/list/1.jpg'),(4,'防水高帮运动鞋','男女同款','769','60','高帮','img/list/2.jpg'),(5,'Chuck Taylor All Star','男女同款','769','60','高帮','img/list/3.jpg');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` int(11) NOT NULL,
  `goodsId` varchar(255) NOT NULL DEFAULT '',
  `goodsCount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM AUTO_INCREMENT=2147483648 DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "userinfo"
#

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(20) NOT NULL,
  `usersex` char(2) NOT NULL,
  `userage` int(11) DEFAULT NULL,
  `useremail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "userinfo"
#

/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES ('123444444444','123','男',12,'mimi@qq.com'),('12345654321','12345','',19,'1234@qq.com'),('12345678909','12345','男',34,'12345@qq.com'),('12345678986','123','男',0,'mimi'),('18792534357','duanbi','女',21,'mimi@qq.com');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
