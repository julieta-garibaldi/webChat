-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: chatWeb
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(200) NOT NULL,
  `realm` varchar(60) DEFAULT NULL,
  `username` varchar(60) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(60) DEFAULT NULL,
  `additionalProp1` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('04c53735-4fe6-4eff-b596-6731e7f4adf2','Yamila Perez','yamilaperez','yamilaperez@gmail.com',NULL,NULL,NULL),('13259fd5-cfaf-411b-86ee-b056b70e04ac','Martina Fernandez','martufernandez','martifernandez@gmail.com',NULL,NULL,NULL),('19350dac-b833-4ca6-a44b-2afd4afee9ea','Angela Perez','angelaperez','angelaperez@gmail.com',NULL,NULL,NULL),('368cfd3a-f555-49d0-b54c-d74b886e2ed9','Belen Perez','belenperez','belenperez@gmail.com',NULL,NULL,NULL),('3ea09595-f1dc-4547-ac27-63ec8d966d8f','Pablo Perez','pabloperez','pabloperez@gmail.com',NULL,NULL,NULL),('40caa13d-6864-403d-bb9b-ba77529dc40c','Manuel Perez','manuelperez','manuelperez@gmail.com',NULL,NULL,NULL),('41331eaf-f93a-4414-a6ef-d127a18069fd','Maria Perez','mariaperez','mariaperez@gmail.com',NULL,NULL,NULL),('43187a35-9651-4b4f-9a48-9408d6e7aab1','Maria Pereyra','mariapereyra','mariapereyra@gmail.com',NULL,NULL,NULL),('49199719-d960-4059-96b9-26bae5b16b80','Sandra Perez','sandriperez','sandriperez@gmail.com',NULL,NULL,NULL),('49e72bf4-8fd1-4ca3-8f65-36bdd92041e8','Mariana','Lopez','marianalopez@gmail.com',NULL,NULL,NULL),('4e610234-da68-42d2-be0e-2ec17d7b1180','Martina Fernandez','martifernandez','martinafernandez@gmail.com',NULL,NULL,NULL),('73d30e90-98fd-4366-acd3-e6e2bee1e336','Diego Perez','diegoperez','diegoperez@gmail.com',NULL,NULL,NULL),('82e3a0a3-aa2e-4e6c-a059-264ec708cf58','Cecilia Perez','ceciliaperez','ceciliaperez@gmail.com',NULL,NULL,NULL),('8fb4d3d1-fbc2-4341-96ab-129da0a2355d','Marianella Lopez','marianellalopez','marianellalopez@gmail.com',NULL,NULL,NULL),('a9a1fa90-69b4-4141-8e36-d09f6ac34d12','Sandra Perez','sandraperez','sandraperez@gmail.com',NULL,NULL,NULL),('b0307c8b-80ae-4b58-90e6-8645e2dfefc6','Marcelo Perez','marceloperez','marceloperez@gmail.com',NULL,NULL,NULL),('ca0efccf-f9bc-4e5f-8f35-cbe501e12483','Fabian Perez','fabianperez','fabianperez@gmail.com',NULL,NULL,NULL),('df25a4df-6c5c-4609-b022-81fee40c09ab','Juan Perez','juanperez','juanperez@gmail.com',NULL,NULL,NULL),('fe849d22-dc7c-46d2-bc14-509b73e0d49e','Laura Fernandez','laurafernandez','laurafernandez@gmail.com',NULL,NULL,NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserCredentials`
--

DROP TABLE IF EXISTS `UserCredentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserCredentials` (
  `id` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `userId` varchar(200) NOT NULL,
  `additionalProp1` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserCredentials`
--

LOCK TABLES `UserCredentials` WRITE;
/*!40000 ALTER TABLE `UserCredentials` DISABLE KEYS */;
INSERT INTO `UserCredentials` VALUES ('06d77cae-174b-42fb-9c8e-96a231d129d6','$2a$10$mjsSLYD8x3NLrwOofZZ9Kudj0MKLRlvngmTpDPssPO.LKfFYBvXCa','49e72bf4-8fd1-4ca3-8f65-36bdd92041e8',NULL),('0f133943-cea8-4f20-a2e7-b6bfbe653bd6','$2a$10$z5VbJ9b4lpwfX7BDNDuajOR5DXsBRY0lP9kdHsvvZpCaRUqB3.ZAS','df25a4df-6c5c-4609-b022-81fee40c09ab',NULL),('17bfbbe0-8b58-40fe-a44c-c57c478f46c8','$2a$10$EQl5phaJtdXSpmehQp9Uve3NBEy9uUVVQNikeemyoVBcZfaFsznVi','1',NULL),('18a0cd45-a1be-412d-9b5a-8c13b565ee95','$2a$10$UUWeoYxGjDgLhZ5QSr12iOkpM3.N3PkbMqq9OKky7pKd3svgTUDAq','a7ff13a1-2d38-4ab9-ade5-b4859653ca94',NULL),('1cf23cf5-fabb-4dc9-9bf7-e6a208e7bc36','$2a$10$rzFzmyjFTSXe3JkXoCqlzeANN2jVGM382B5bHSwl/eRivwN5kmR9K','b04294ac-2ad1-4bf6-93e0-cfd92d103882',NULL),('2ff37f0b-be04-4d7a-8493-fb11f6ecf7ce','$2a$10$jJcsWzVLEX72JvfqvGKyh.w9AyvSIGhj/vhymnoyUbwxheWQuL.qC','19350dac-b833-4ca6-a44b-2afd4afee9ea',NULL),('374d0954-0c91-4ef7-9483-0741aede6fdf','$2a$10$MzB2NIY7/JwDopu5DM27.e0it4.FGc9cDCVfJtFASBb3TKxXdHh8e','b0307c8b-80ae-4b58-90e6-8645e2dfefc6',NULL),('37a236c2-af82-4ed7-8863-be20b05900a9','$2a$10$AN.biXFm8zGAcOFEw8VJJezQE3wWktxZ9vXGK0eZ/FsnTJ1FxF04y','04c53735-4fe6-4eff-b596-6731e7f4adf2',NULL),('42fde78c-161c-48bb-a058-3cbcd331563c','$2a$10$HYycdmkr.mc0ZPJlnSbQeOvxM598HGkGomP2y6gA7k9lRH4rR6JTm','fe849d22-dc7c-46d2-bc14-509b73e0d49e',NULL),('46f450fa-48a3-4eaf-9e89-5db41706d54c','$2a$10$YW3xSU5tB0XGtdZUA9ZixuV1syKEB2qRjJzwrHZu3SHvMF9gEgGA2','a3345e9a-b493-4318-b4be-c6565a695cef',NULL),('501b3dca-51c6-44b2-9374-c1ff38f0754d','$2a$10$F2XFjr.ehlNCSiemzyk/D.lqVJDKSgMxDK2OMLCXvflvPElPrBeqO','8fb4d3d1-fbc2-4341-96ab-129da0a2355d',NULL),('54306e2d-f75e-4fe7-b99f-166d11e02b6b','$2a$10$WjMMyn6SUQqsZxZ434M48uqZNco55gTo3jBVwtO6FWm8XOaTFiHjK','e0a969e1-8ff6-47fa-a057-450deed178dc',NULL),('54a0fc7f-937d-4d51-91c1-d90ab915da88','$2a$10$OiDjs7o5OcQXhCwNDcmAX.7sY2MfDlVNyeNR3CRxwe0Pe2Lbfg96W','691821ef-9bf3-45a6-bd6d-ed47f967532a',NULL),('584ac872-3db1-4ff8-9151-f72a1d58094c','$2a$10$JEiPK4hLfRdt4/VNxel7suDIrd.Lbk8nucWlmcVWqcgumqBLtBBO6','a9a1fa90-69b4-4141-8e36-d09f6ac34d12',NULL),('6382d9a3-02d1-4c0c-a21e-1089c2c1fa99','$2a$10$n7AjBNI8z2GmGykknxxxpedmD/AJjx8D7wk4fMu5n34KkJuB1FUOW','40caa13d-6864-403d-bb9b-ba77529dc40c',NULL),('68d22a81-4447-4250-b13a-f153f9a80f9f','$2a$10$NzNN1aO445nuKObz9ZmZ3OiJFxbKGGlOSSDn/Tq4jlg5dOhK1hmUy','5f6b596e-1b5b-46da-a958-55e2d64deccf',NULL),('7a329721-d7c9-4174-8acc-12a559395b3c','$2a$10$DvfhiFjbCDxrNW22TC2gwOlK6sFq.CEunXC9XYJTMHAE/eZoyXPk6','4e610234-da68-42d2-be0e-2ec17d7b1180',NULL),('9b53999a-02a1-4204-8389-1809ad10392b','$2a$10$rUc9M9LGuhgkDAnd.jv8kOwsnxuLYjIrV28SsEZFEKOwIEnDA2ogS','82e3a0a3-aa2e-4e6c-a059-264ec708cf58',NULL),('a0a2fcda-85e2-4d08-b565-327066294fc6','$2a$10$Lg8Vt8L6m3wgWcJaFadQ0.5dLAwxk6oCWWofiVYSYYU43.POF2bJS','73d30e90-98fd-4366-acd3-e6e2bee1e336',NULL),('b0c14013-bd84-4625-8d66-3a449fb5b827','$2a$10$5/uPFyyippX5K.gypKS5NubTmOYyIFup0MJj676Mn5wBDrbUVNTQm','ca0efccf-f9bc-4e5f-8f35-cbe501e12483',NULL),('b35f3f91-e051-4fb3-b0af-a8d0b3a550ed','$2a$10$zNCz/sRYf5hnUE8CX12pXeAOkAzWczM2CLr4KSy6mk3IDwJ2pM4eq','3ea09595-f1dc-4547-ac27-63ec8d966d8f',NULL),('bcd1ab0d-6c84-46e0-a641-b55ba43d1053','$2a$10$vh4zoe2NKo6e5QQ93UEaZeep0yaFRpqhsR9TYfxoGU/ck1a8cY.ZC','0cfbd3f5-ae01-4e90-bc1f-f203aa2369bd',NULL),('bdbc000b-4735-46d3-ae32-1df8d0685d24','$2a$10$uf3f8UQi0KMxMvJX5TkuX.hidlHl3L6yeaQYJPD18mYJW1vKneYva','368cfd3a-f555-49d0-b54c-d74b886e2ed9',NULL),('cfa37870-14f5-40ee-b5af-a4e982965d4b','$2a$10$zY3vUMiPVjpaBVCzXJNRfef3ULdnq7Da.ArV4pq402lRDQWOEBrBa','49199719-d960-4059-96b9-26bae5b16b80',NULL),('d2724385-9907-42bc-bccd-f32989ff42c0','$2a$10$25ydZhhfrhkfntD6/WmD4uTNV1z0wpSWITHEkOV5IQyDMINtfLQbq','41331eaf-f93a-4414-a6ef-d127a18069fd',NULL),('e35494bd-dcc0-4355-95f1-af2188821b8d','$2a$10$sugmi/fhvjAcjEIp3YcYwemYsVYHjsBm0UzE4.s2i6UmcYZUEO8ue','db8fb176-4065-45b4-9d8e-7e7533fee6c7',NULL),('f4f5bc8c-1eae-48ec-bf34-b80c090fa6dc','$2a$10$NLD0fMPKQV1..jd2UOQMaO6IiC7eBau7trJ9W191vJBfXerRKsAAe','5958a92b-fe7d-4c9a-aa0f-25d5785752b8',NULL),('f7b348a4-1aec-4694-a7d1-4bab32a1f70b','$2a$10$mI.tweWjrz6PWDE5PorbLuihoMr0XMNCzMJMkwdqpcZ6zOiFHXH7u','43187a35-9651-4b4f-9a48-9408d6e7aab1',NULL),('faae9148-db67-4dae-a0a9-12e721125db4','$2a$10$CFbCDZ3kbw2KwLHefdMLJejAYWrdVMFdveoYDYveVbaLQ2RMswND6','8e9a005e-9538-488a-a8dc-4cde92f1ffea',NULL),('fd1d16b3-587f-4ae6-a607-a0eb10a9815b','$2a$10$qiPbaHJ2zP942fLPXg0F/.bJ7AB054SmFrV3HsR.ZZE8O71HRa6wW','13259fd5-cfaf-411b-86ee-b056b70e04ac',NULL);
/*!40000 ALTER TABLE `UserCredentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajesChatWeb`
--

DROP TABLE IF EXISTS `mensajesChatWeb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensajesChatWeb` (
  `id_mensaje` int NOT NULL AUTO_INCREMENT,
  `date_mensaje` datetime NOT NULL,
  `user_origen` varchar(60) NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `user_destino` varchar(60) NOT NULL,
  `mensaje_nuevo` tinyint(1) NOT NULL,
  `esTexto` tinyint(1) NOT NULL,
  `usuariosChatWebId` varchar(60) NOT NULL,
  PRIMARY KEY (`id_mensaje`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajesChatWeb`
--

LOCK TABLES `mensajesChatWeb` WRITE;
/*!40000 ALTER TABLE `mensajesChatWeb` DISABLE KEYS */;
INSERT INTO `mensajesChatWeb` VALUES (1,'2022-03-08 21:27:21','angelaperez','Hola','diegoperez',0,1,'1'),(2,'2022-03-08 22:01:32','angelaperez','Estas?','diegoperez',0,1,'19350dac-b833-4ca6-a44b-2afd4afee9ea'),(3,'2022-03-08 22:15:39','angelaperez','1646777739260-95647733854ea1798d606bff126ab1de.jpg','diegoperez',0,0,'19350dac-b833-4ca6-a44b-2afd4afee9ea'),(4,'2022-03-09 17:04:25','diegoperez','Hola','angelaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(5,'2022-03-09 17:04:41','diegoperez','Todo bien?','angelaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(6,'2022-03-09 17:04:44','diegoperez','jajaja','angelaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(7,'2022-03-09 18:56:13','diegoperez','Hola!!','ceciliaperez',1,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(8,'2022-03-09 18:56:26','diegoperez','1646852185968-95647733854ea1798d606bff126ab1de.jpg','ceciliaperez',1,0,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(9,'2022-03-10 05:49:54','angelaperez','Hola!!','marceloperez',0,1,'19350dac-b833-4ca6-a44b-2afd4afee9ea'),(10,'2022-03-10 06:52:46','angelaperez','Hola!!','mariaperez',0,1,'19350dac-b833-4ca6-a44b-2afd4afee9ea'),(11,'2022-03-11 15:03:57','angelaperez','1647011036388-95647733854ea1798d606bff126ab1de.jpg','diegoperez',0,0,'19350dac-b833-4ca6-a44b-2afd4afee9ea'),(12,'2022-03-11 18:25:00','diegoperez','Hola!! Todo bien?','mariaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(13,'2022-03-11 18:28:23','mariaperez','Hola!!','diegoperez',0,1,'41331eaf-f93a-4414-a6ef-d127a18069fd'),(14,'2022-03-11 18:30:50','mariaperez','Todo bien vos?','diegoperez',0,1,'41331eaf-f93a-4414-a6ef-d127a18069fd'),(15,'2022-03-11 18:46:18','diegoperez',':)','mariaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(16,'2022-03-11 18:47:24','diegoperez',':))','mariaperez',0,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336'),(17,'2022-03-11 18:48:32','mariaperez','jajaajaja','diegoperez',0,1,'41331eaf-f93a-4414-a6ef-d127a18069fd'),(18,'2022-03-11 18:57:22','diegoperez','ajajajajaj','mariaperez',1,1,'73d30e90-98fd-4366-acd3-e6e2bee1e336');
/*!40000 ALTER TABLE `mensajesChatWeb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariosChatWeb`
--

DROP TABLE IF EXISTS `usuariosChatWeb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariosChatWeb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `realm` varchar(60) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariosChatWeb`
--

LOCK TABLES `usuariosChatWeb` WRITE;
/*!40000 ALTER TABLE `usuariosChatWeb` DISABLE KEYS */;
INSERT INTO `usuariosChatWeb` VALUES (1,'Angela Perez','angelaperez','angelaperez@gmail.com'),(4,'Maria Perez','mariaperez','mariaperez@gmail.com'),(5,'Juan Perez','juanperez','juanperez@gmail.com'),(8,'Marcelo Perez','marceloperez','marceloperez@gmail.com'),(9,'Diego Perez','diegoperez','diegoperez@gmail.com'),(12,'Fabian Perez','fabianperez','fabianperez@gmail.com'),(14,'Cecilia Perez','ceciliaperez','ceciliaperez@gmail.com');
/*!40000 ALTER TABLE `usuariosChatWeb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-11 16:41:00
