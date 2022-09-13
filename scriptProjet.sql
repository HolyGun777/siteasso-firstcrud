-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `test`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `test`;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `idarticle` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `text` longtext NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY (`idarticle`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (55,'Petit article','Logoden biniou degemer mat an penn ar bed moereb warnon frout, gontell ur piv servijañ galon a anal kloc’h Penmarc’h Brest, Ar Gall kichen e eta huñvre war naer antronoz daoudroad hevelep, sec’hed esaeañ c’heuz troc’hañ deskiñ ganit hennezh ehan mintin. Gwechall amzer tu se devezh c’hwezek paner lamp mantell dour an voutailh kriz Muzilheg, kaeraat gambr goullo yac’h evel evezh kas levr dreuz poultrenn sell koustañ pemzek pluenn, stad a hepken piv honnezh bleud brank kerc’hat ehan ur bered gwellañ. Dud e c’hezeg vi an paour broustañ stlakañ prenestr terriñ Perros-Gireg an delioù kromm, lezel Plougasnou Doue livet kazetenn anv disadorn bleunioù darev vamm genou warno ennoc\'h tachenn,,,,,,,,,',''),(56,'moyen article','Logoden biniou degemer mat an penn, ar bed Chrouer vrec’h. Da warnout eizhvet lann, Skrigneg Tregastell biskoazh gwrierez, gavr Baen-Veur. Merkañ trec’h gouez a e lies, bruzun Gwaien munutenn koant. Pont’n-Abad abred pe hennont diwezhat mui, Skos bloaz niverenn daou. Prenañ ganimp, ganeomp gwin Nazer Kemper hantereur, ar dirak  gwechall moulañ. Plouared geot merkañ sukr aes war, anavezout ur kilhog medisin. Eñ war piz kontrol bouzar Brieg, gomz tamall dirak pesketa. Kaol pakad jiletenn atav, korf soubenn loer ziskouez, egile forn. Kromm Montroulez eme gouren ivin warlene, c’harrez dirak vihanañ draonienn. Seblantout evidoc\'h Santeg ha, merc’her servijañ peogwir eoul, goulou da.Logoden biniou degemer mat an penn, ar bed Chrouer vrec’h. Da warnout eizhvet lann, Skrigneg Tregastell biskoazh gwrierez, gavr Baen-Veur. Merkañ trec’h gouez a e lies, bruzun Gwaien munutenn koant. Pont’n-Abad abred pe hennont diwezhat mui, Skos bloaz niverenn daou. Prenañ ganimp, ganeomp gwin Nazer Kemper hantereur, ar dirak  gwechall moulañ. Plouared geot merkañ sukr aes war, anavezout ur kilhog medisin. Eñ war piz kontrol bouzar Brieg, gomz tamall dirak pesketa. Kaol pakad jiletenn atav, korf soubenn loer ziskouez, egile forn. Kromm Montroulez eme gouren ivin warlene, c’harrez dirak vihanañ draonienn. Seblantout evidoc\'h Santeg ha, merc’her servijañ peogwir eoul, goulou da.,,,',''),(57,'gros article','Logoden biniou degemer mat an penn ar bed moereb warnon frout, gontell ur piv servijañ galon a anal kloc’h Penmarc’h Brest, Ar Gall kichen e eta huñvre war naer antronoz daoudroad hevelep, sec’hed esaeañ c’heuz troc’hañ deskiñ ganit hennezh ehan mintin. Gwechall amzer tu se devezh c’hwezek paner lamp mantell dour an voutailh kriz Muzilheg, kaeraat gambr goullo yac’h evel evezh kas levr dreuz poultrenn sell koustañ pemzek pluenn, stad a hepken piv honnezh bleud brank kerc’hat ehan ur bered gwellañ. Dud e c’hezeg vi an paour broustañ stlakañ prenestr terriñ Perros-Gireg an delioù kromm, lezel Plougasnou Doue livet kazetenn anv disadorn bleunioù darev vamm genou warno ennoc\'h tachenn, tamall plijadur an bez noazh divjod fourchetez Skrigneg hanternoz karantez kanañ mestr. Ar bihañ an kargañ huñvre gounez doñv neuze darn glin degemer Sant-Tegoneg bier bep, troad piz honnont dro Pornizhan biz e diwezhañ beuziñ benveg wastell walc’h Kastell-Paol penaos, ganto honnezh gwerzhañ stêr seiz skol lezel gouest ebrel dimeziñ gounit aketus. Gourc’hemenn ur dre onest dimeziñ e kalz gwenan war reolenn an unnek outi garantez, milin pemp sec’h talvoudus oas daeroù nec’h pod Arre da voutailh da bed gwaskañ, c’hoant arc’h hantereur amañ butun karr ne ken livañ debriñ niz pont. Skrabañ dleout tregont enni vouezh enor gwinizh kontrol c’hann diskiant Arzhal embann trizek skrivañ, aon ruilhañ dreñv disadorn pemp amzer here kazh c’hof c’higer da ar kastell kanañ, anavezout vrec’h Krouer harzhal c’hwezhañ dreist berr ouzh danvez egisti klevout gwriat. Pinvidik enep derc’hel Sant-Gwenole Mikael pesketa war muzell forn nann klevout benveg familh An Alre, war legumaj vro aotrou troad gwelloc’h stlakañ eget enno Liger nebeutoc’h war c’huzh jiletenn, Montroulez lipat sae evidomp prennañ neuiñ Brest soubañ warnomp dirak  pennad mui. Brezel c’hilpenn treut unan dan ganti gouelañ gwern ur diwar kelien tiegezh pe kotoñs, c’hafe Pleiber-Krist derc’hent gwriat c’hoarzhin gleb degas amañ stlakañ e pomper evel wouel deiz, ivez marennañ ret klask Muzilheg riskl talvoudus warlene kêr veaj ennomp mel. Gwenan goullo a ouzhit perak yac’h trugarez bodet redek ganto skrijañ noazh muzul kefe, stur chom golo tavañjer prenañ a dindan  koustañ lezenn doujañs skouarn Santeg ar beleg, stourm kav kerc’h foenn paot tour kustum banniel Plelann-Veur ahont betek tremen. Gwellañ Montroulez honnezh c’houlz tamm gwaskañ mat yalc’h abeg anezhañ kilhog honnont Plouezoc’h adaozañ, lost wirionez c’hwezek puñs sal izel bloavezh Oskaleg endervezh Brasparz tagañ keit iskis Mur, mousc’hoarzhin sec’hañ vihanañ pomper drezi atav kreisteiz evañ n’eus Ar Releg-Kerhuon gleb war.,,','');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('H4Jj0BG3e3BXD5tUhQlgHp58Nvy63bdR',1662208651,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":39,\"email\":\"ccc@ccc\",\"pseudo\":\"ccc\"}}'),('TaLZ1cwRZnJzIMqH2AWi5fAgdIMvYVM_',1662535135,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('w0q-b9K5hy-UeioOJKpDo6SvvUY_t3zy',1662216817,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stage`
--

DROP TABLE IF EXISTS `stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stage` (
  `titre` varchar(45) NOT NULL,
  `text` longtext NOT NULL,
  `idstage` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idstage`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stage`
--

LOCK TABLES `stage` WRITE;
/*!40000 ALTER TABLE `stage` DISABLE KEYS */;
INSERT INTO `stage` VALUES ('Stage du 28/09/2022 au 02/10/2022','Logoden biniou degemer mat an penn ar bed moereb warnon frout, gontell ur piv servijañ galon a anal kloc’h Penmarc’h Brest, Ar Gall kichen e eta huñvre war naer antronoz daoudroad hevelep, sec’hed esaeañ c’heuz troc’hañ deskiñ ganit hennezh ehan mintin. Gwechall amzer tu se devezh c’hwezek paner lamp mantell dour an voutailh kriz Muzilheg, kaeraat gambr goullo yac’h evel evezh kas levr dreuz poultrenn sell koustañ pemzek pluenn, stad a hepken piv honnezh bleud brank kerc’hat ehan ur bered gwellañ. Dud e c’hezeg vi an paour broustañ stlakañ prenestr terriñ Perros-Gireg an delioù kromm, lezel Plougasnou Doue livet kazetenn anv disadorn bleunioù darev vamm genou warno ennoc\'h tachenn,,,,,,,,',1),('STAGE DU 20/01/2023 AU 28/01/2023','Logoden biniou degemer mat an penn ar bed moereb warnon frout, gontell ur piv servijañ galon a anal kloc’h Penmarc’h Brest, Ar Gall kichen e eta huñvre war naer antronoz daoudroad hevelep, sec’hed esaeañ c’heuz troc’hañ deskiñ ganit hennezh ehan mintin. Gwechall amzer tu se devezh c’hwezek paner lamp mantell dour an voutailh kriz Muzilheg, kaeraat gambr goullo yac’h evel evezh kas levr dreuz poultrenn sell koustañ pemzek pluenn, stad a hepken piv honnezh bleud brank kerc’hat ehan ur bered gwellañ. Dud e c’hezeg vi an paour broustañ stlakañ prenestr terriñ Perros-Gireg an delioù kromm, lezel Plougasnou Doue livet kazetenn anv disadorn bleunioù darev vamm genou warno ennoc\'h tachenn,,,,,,,,,',2),('stage du 05/09/2023 au 09/09/2023','Logoden biniou degemer mat an penn ar bed moereb warnon frout, gontell ur piv servijañ galon a anal kloc’h Penmarc’h Brest, Ar Gall kichen e eta huñvre war naer antronoz daoudroad hevelep, sec’hed esaeañ c’heuz troc’hañ deskiñ ganit hennezh ehan mintin. Gwechall amzer tu se devezh c’hwezek paner lamp mantell dour an voutailh kriz Muzilheg, kaeraat gambr goullo yac’h evel evezh kas levr dreuz poultrenn sell koustañ pemzek pluenn, stad a hepken piv honnezh bleud brank kerc’hat ehan ur bered gwellañ. Dud e c’hezeg vi an paour broustañ stlakañ prenestr terriñ Perros-Gireg an delioù kromm, lezel Plougasnou Doue livet kazetenn anv disadorn bleunioù darev vamm genou warno ennoc\'h tachenn,,',15);
/*!40000 ALTER TABLE `stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stagiaire`
--

DROP TABLE IF EXISTS `stagiaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stagiaire` (
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `jourpresent` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `telportable` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stagiaire`
--

LOCK TABLES `stagiaire` WRITE;
/*!40000 ALTER TABLE `stagiaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `stagiaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `mail` varchar(60) NOT NULL,
  `numero` varchar(45) DEFAULT NULL,
  `pseudo` varchar(45) DEFAULT NULL,
  `motdepasse` varchar(60) NOT NULL,
  `isAdmin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (37,'aaa','aaa','aaa@aaa','777','aaa','aaa',NULL),(38,'bbb','bbb','bbb@bbb','777','bbb','bbb',1),(39,'ccc','ccc','ccc@ccc','07 789 654','ccc','$2b$10$yo7/AKZQS2Q5ImKQgLX0rO3pmfsXVsO/o1hMCidW0tONLmhNMjTY6',NULL),(40,'ddd','ddd','ddd@ddd','07 789 654','ddd','$2b$10$hy8FwFd94HDtta30TmX60u1wzVzHALmP328/Wo6A0CzyYeE9qRRYi',NULL),(41,'','','','','','$2b$10$FWHYvtLSybJmt.FaQ/QxFeQ0ahaILkYSrbD4/IbwEMhu/Bwge4Y5i',NULL),(42,'zzz','zzz','zzz@zzz','07 777 777','zzz','$2b$10$L7sfgfobOYWI9SjLSk0JIe0QGRaJhcoCOJWM/59lOKMPcVGUerJWq',NULL),(43,'zzz','zzz','zzz@zzz','07 789 654','zzz','$2b$10$m6CQEtTyIfip2bEF1SDYUOamMSgp6t0uKztvbzDXaXZzkk6NySMWG',NULL),(44,'Sarah','choun','ccc@ccc','07 789 654','Ayyhahaaaa','$2b$10$W8t1KORgICKM1cbXh4QkaOkzMW4jvE3WD/2bzinTI/vxzF4OuI6rO',NULL),(45,'Sarah','choun','ccc@ccc','07 789 654','Ayyhahaaaa','$2b$10$SpckpnBS9Pgo/T8rjiMO1.kC4h6Ju7FHHP5td2nKWFGkoBIfbJbiW',NULL),(46,'Choun','zzz','ccc@ccc','07 789 654','Ayyhahaaaa','$2b$10$xfGH.ENObc.6WsdZpV0sHO54LMucgkua6U7yrMAw6ET1AUwqxbbsW',NULL),(47,'Choun','zzz','ccc@ccc','07 789 654','Ayyhahaaaa','$2b$10$Fo/k/X/mtEdcZuWMp7w1N.rI07ya6mjaOrS5vIzoBlbL/0CsBdqNi',NULL),(48,'a','a','a@a.a','a','a','$2b$10$Hn2jo9qwyhOQk3g7yEOlh.VrY1hCMrj3WdUfe6aUNpKZvh.Xgxudu',NULL),(49,'me','you','aaa','07 789 654','aaa','$2b$10$aMbQBFxoZRv6rOOWXQo.NuQmTstUKMiiB5r0l7h3jkTVyahTOUj/W',NULL),(50,'me','you','ccc@ccc','aaa','Ayyhahaaaa','$2b$10$kDLr4VS3Z/67YRs0FgFQ/uGVGD9WAdSM/ggaKSHgF3krKmqIQdqzm',NULL),(51,'me','you','ccc@ccc','07 789 654','aaa','$2b$10$FsWMdaCT4qP28o7Dp/z1y.E/w0wfmkYLQPjy.OE515e7hYHaOEENi',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-07  9:30:59
