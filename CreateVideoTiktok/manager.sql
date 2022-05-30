use heroku_51261a15187b9d7;

CREATE TABLE `noti` (
  `idNoti` int NOT NULL AUTO_INCREMENT,
  `idNotiType` int DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idNoti`),
  KEY `FK_NotiContentType` (`idNotiType`),
  CONSTRAINT `FK_NotiContentType` FOREIGN KEY (`idNotiType`) REFERENCES `notiType` (`idNotiType`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `notiType` (
  `idNotiType` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idNotiType`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;

CREATE TABLE `song` (
  `songID` int NOT NULL AUTO_INCREMENT,
  `urlDownload` varchar(50) DEFAULT NULL,
  `author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `createAt` datetime DEFAULT NULL,
  PRIMARY KEY (`songID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `deviceIdentity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

CREATE TABLE `notiToken` (
  `idNotiToken` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `dateCreate` datetime DEFAULT NULL,
  PRIMARY KEY (`idNotiToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;


/* Query SELECT */
Select * from notiToken;
Select * from noti;
Select * from notiType;

/* OTHER QUERY */
alter table notiContent rename noti;

/* INSERT */
insert into noti(idNotiType,content) values (4,"Good day, open app and create video now")
