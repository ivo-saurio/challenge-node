-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: challenge_node
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `character_movie`
--

DROP TABLE IF EXISTS `character_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_movie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `character_id` int(10) unsigned NOT NULL,
  `movie_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_movies_id_idx` (`movie_id`),
  KEY `fk_character_id_idx` (`character_id`),
  CONSTRAINT `fk_character_id` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_movies_id` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character_movie`
--

LOCK TABLES `character_movie` WRITE;
/*!40000 ALTER TABLE `character_movie` DISABLE KEYS */;
/*!40000 ALTER TABLE `character_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `character_serie`
--

DROP TABLE IF EXISTS `character_serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_serie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `character_id` int(10) unsigned NOT NULL,
  `serie_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_characters_id_idx` (`character_id`),
  KEY `fk_series_id_idx` (`serie_id`),
  CONSTRAINT `fk_characters_id` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_series_id` FOREIGN KEY (`serie_id`) REFERENCES `series` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character_serie`
--

LOCK TABLES `character_serie` WRITE;
/*!40000 ALTER TABLE `character_serie` DISABLE KEYS */;
/*!40000 ALTER TABLE `character_serie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `characters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int(10) NOT NULL,
  `image` varchar(500) NOT NULL,
  `history` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (3,'Ralph El Demoledor ',20,'undefined-1619658740160.png','Ralph está cansado de interpretar el papel de un chico malo y se embarca en un viaje para convertirse en un héroe de los videojuegos. Pero Ralph suelta accidentalmente a un enemigo mortal que amenaza a toda la sala de juegos.','2021-04-28 19:08:27','2021-04-29 01:12:20',NULL),(4,'Vanellope von Schweetz',0,'undefined-1619639755819.jpg','Vanellope von Schweetz es la deuteragonista del largometraje animado de Disney de 2012, Wreck-It Ralph y su secuela de 2018. Es una joven corredora de lengua afilada que se origina en el juego de carreras con temática de dulces, Sugar Rush. Debido a que era un \"fallo técnico\", a Vanellope se le prohibió correr por orden del Rey Candy.','2021-04-28 19:55:55','2021-04-28 19:55:55',NULL),(5,'Lilo Pelekai',0,'undefined-1619639865623.png','Lilo Pelekai is one of two main protagonists of Lilo & Stitch and its subsequent sequels and television series. She is the younger sister of Nani Pelekai and was orphaned along with her sister after the death of their parents.','2021-04-28 19:57:45','2021-04-28 19:57:45',NULL),(6,'',4,'undefined-1619805505077.png','Stitch, también llamado Experimento 626, es el protagonista de la película Lilo & Stitch y sus siguientes apariciones en la franquicia. Es un extraterrestre que se hace pasar por un perro. Tiene cuatro brazos y antenas que puede ocultar','2021-04-28 20:12:00','2021-04-30 17:58:25',NULL),(7,'Remy',0,'undefined-1619640852904.jpg','Remy se enamora del mundo culinario, y sueña con convertirse en un gran chef francés a pesar de la oposición de su familia, su padre y su hermano Emile, sin olvidar del problema evidente que supone ser una rata en una profesión que detesta a los roedores.','2021-04-28 20:14:12','2021-04-28 20:14:12',NULL),(8,'Alfredo Linguini',0,'undefined-1619641804590.png','Lingüini es nuevo en el Restaurante Gusteau, además es el hijo de Renata Lingüini que fue novia de Gusteau, que ha muerto y le pide al Chef Skinner (mediante una carta) que le dé un trabajo a Alfredo. Cuando Lingüini empieza a trabajar estropea una sopa después de tirarla al suelo, y al intentar arreglarla la estropea aún más, pero Remy la arregla y todos piensan que ha sido Lingüini el que ha preparado esa sopa.','2021-04-28 20:30:04','2021-04-28 20:30:04',NULL),(9,'Cruella de Vill',0,'undefined-1619642134412.png','Un largometraje de acción en vivo que sigue las malvadas hazañas de Cruella de Vil, la villana de la película de Disney \"101 Dálmatas\".','2021-04-28 20:35:34','2021-04-28 20:35:34',NULL),(10,'Pongo',0,'undefined-1619642391941.png','Pongo es el protagonista masculino del largometraje animado de Disney de 1961 Cien y un dálmatas. Es compañero de Perdita, padre de 15 cachorros dálmatas y padre adoptivo de 84 cachorros más.','2021-04-28 20:39:51','2021-04-28 20:39:51',NULL),(11,'Ariel',0,'undefined-1619642521430.png','La sirena Ariel está fascinada por el mundo de los humanos, pero su padre le prohíbe relacionarse con ellos. En un viaje secreto, se enamora de un humano y recurre a una perversa hechicera para que, mediante un conjuro, su amor triunfe.','2021-04-28 20:42:01','2021-04-28 20:42:01',NULL),(12,'Ursula',0,'undefined-1619642663206.jpg','Úrsula es la villana de la película de Walt Disney, La sirenita. Úrsula es la malvada bruja del mar','2021-04-28 20:44:23','2021-04-28 20:44:23',NULL),(13,'La Bella Durmiente',18,'undefined-1619642845145.jpg','Tres hadas madrinas y un apuesto príncipe salvan a la princesa Aurora de la maldición de la bruja Maléfica.','2021-04-28 20:46:39','2021-04-28 20:47:25',NULL),(14,'Malefica',0,'undefined-1619643314622.jpg','La joven Maléfica crece para proteger su pacífico reino de los invasores, pero una terrible traición transforma su corazón puro en una piedra y la convierte en una criatura en busca de venganza.','2021-04-28 20:55:14','2021-04-28 20:55:14',NULL),(15,'Mulan',0,'undefined-1619644426457.jfif','Es una pelicula de animacion y aventura, inspirad en el poerma chino Balada de Fa Mu Lan ','2021-04-28 21:13:46','2021-04-28 21:13:46',NULL),(16,'Li Shang',0,'undefined-1619644585058.jpg','Fuente El General Li Shang es un personaje de la película Mulan y su secuela Mulan II.','2021-04-28 21:16:25','2021-04-28 21:16:25',NULL),(17,'Hannah Montana',0,'undefined-1619644705552.jpg','Aunque ella parece ser una adolescente común y corriente para sus compañeros de estudio y profesores, Miley Stewart tiene una vida doble, la joven se transforma en una famosa cantante de música pop, que se llama Hannah Montana, ella lo hace en la noche, para interpretar sus canciones.','2021-04-28 21:18:25','2021-04-28 21:18:25',NULL),(18,'Lilly Truscott',0,'undefined-1619644916771.jpg','Lillian \"Lilly\" Truscott es un personaje de ficción de la serie Hannah Montana, el cual está interpretado por Emily Osment','2021-04-28 21:21:56','2021-04-28 21:21:56',NULL),(19,'Zack Martin',0,'undefined-1619653446951.png','Es el hermano gemelo de Cody Martin. Es un fanático de los Red Sox de Boston. Le encanta andar en monopatín, jugar baloncesto y al fútbol, molestar a su hermano y meterse en problemas. Generalmente viste con ropa casual y es muy desordenado (mientras su hermano es lo contrario). Le gusta Maddie, aunque también a tenido otros amores, pero ninguno con éxito. Quiere ser piloto de automóviles algún día, y también jugador de fútbol. Es mayor que Cody por 15 minutos. ','2021-04-28 23:44:06','2021-04-28 23:44:06',NULL),(20,'Cody Martin',0,'undefined-1619653492134.png','Es el hermano gemelo de Zack Martin. Cody viste de manera formal, a menudo con chaleco. Muestra menos interés por las chicas que su hermano, pero es más inteligente y maduro, y a veces es culpado por los problemas en los que se mete Zack. Al igual que su gemelo, es un gran fanático de los Red Sox y odia a los Yankees. Le gusta la magia, el estudio (le encanta las matemáticas), la cocina, la mímica y un poco el baile','2021-04-28 23:44:52','2021-04-28 23:44:52',NULL),(21,'Alex Russo',0,'undefined-1619653584230.jpg','Es la hija mediana de la familia Russo. Al igual que sus hermanos Justin y Max, Alex es maga y trabaja en la bocatería de su padre. Es muy traviesa y constantemente usa la magia para sus caprichos. Su mejor amiga es Harper, una chica muy buena que al principio no sabía que Alex era maga, hasta que se lo contó','2021-04-28 23:46:24','2021-04-28 23:46:24',NULL),(22,'',18,'undefined-1619655179251.jpg','Es el hermano mayor de Alex y Max. Entre los tres hermanos, a él es a quien se le da mejor la magia. Harper está enamorada de él, pero él no le hace ni el menor caso. Es un estudiante sobresaliente tanto en la escuela como en la escuela de magia. No soporta que su hermana Alex se meta en problemas, y mucho menos que lo incluya en ellos.','2021-04-28 23:47:19','2021-04-29 00:12:59',NULL),(23,'Max Russo',0,'undefined-1619653675154.png','Es el menor de los hermanos Russo, y el más travieso. Sus hermanos lo tratan como el más \"tonto\", y entre la competencia por quedarse con sus poderes mágicos, lo excluyen porque cree cosas como que \"las palomitas se hacen por arte de mágia\". Siempre se involucra en \"situaciones malas para su beneficio\", a vexes ayudando a su hermana en sus escapes o travesuras. Cuando sus hermanos compiten, él siempre cambia al bando que más le interese.\r\n\r\n','2021-04-28 23:47:55','2021-04-28 23:47:55',NULL),(24,'Phineas Flynn',0,'undefined-1619653785710.png','Phineas Flynn es un personaje ficticio protagonista de la serie original de Disney Channel Phineas y Ferb, creado por Dan Povenmire y Jeff \"Swampy\" Marsh.​ Phineas junto con su medio hermano Ferb Fletcher, protagonizan la trama principal de cada episodio de la serie.','2021-04-28 23:49:45','2021-04-28 23:49:45',NULL),(25,'Ferb Fletcher',0,'undefined-1619653841758.png','Ferb Fletcher es un personaje ficticio hecho para la serie animada de Disney Channel, Phineas y Ferb. Fue creado por Dan Povenmire y Jeff \"Swampy\" Marsh, su voz es doblada por Marco Portillo en Latinoamérica. Ferb es el hermanastro de Phineas, el lo acompaña en todas sus aventuras, es británico.','2021-04-28 23:50:41','2021-04-28 23:50:41',NULL),(26,'Jake Long',0,'undefined-1619653905142.jfif','Descripción. Jake en su forma de dragón. Es un joven patinador de skate honrado y algo flojo en materia de estudios (sobre todo en algebra), pero que en secreto es un dragón.','2021-04-28 23:51:45','2021-04-28 23:51:45',NULL);
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Comedia',NULL,NULL,NULL),(2,'Aventura',NULL,NULL,NULL),(3,'Infantil',NULL,NULL,NULL),(4,'Musical',NULL,NULL,NULL),(5,'Drama',NULL,NULL,NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `image` varchar(200) NOT NULL,
  `rating` decimal(3,1) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `genre_id` int(10) unsigned DEFAULT NULL,
  `release_date` date NOT NULL,
  `history` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_moviesgenre_id_idx` (`genre_id`),
  CONSTRAINT `fk_moviesgenre_id` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (3,'Wifi Ralph','undefined-1619808494909.jfif',5.0,'2021-04-28 18:02:13','2021-04-30 18:48:14',NULL,1,'2021-04-30','Después de 6 años, Ralph y Vanellope se embarcan en una nueva aventura a las profundidades de Internet para encontrar la pieza que necesitan para reparar un videojuego.'),(4,'Wreck it Ralph','undefined-1619633099638.jfif',5.0,'2021-04-28 18:04:59','2021-04-28 18:04:59',NULL,1,'2012-11-30','Después de años de perder ante su adversario, Ralph, un personaje de un juego de arcade, se cansa de ser el chico malo y toma el asunto en sus propias manos para finalmente convertirse en un héroe, pero un enemigo mortal es liberado.'),(5,'Lilo and Stitch','undefined-1619633272435.jfif',5.0,'2021-04-28 18:07:52','2021-04-28 18:07:52',NULL,1,'2002-06-21','Una niña solitaria adopta a un perro que en realidad es un extraterrestre travieso que se esconde de unos cazadores intergalácticos.'),(6,'The little mermaid','undefined-1619633469904.jfif',4.0,'2021-04-28 18:11:10','2021-04-28 18:11:10',NULL,4,'1989-11-28','La sirena Ariel está fascinada por el mundo de los humanos, pero su padre le prohíbe relacionarse con ellos. En un viaje secreto, se enamora de un humano y recurre a una perversa hechicera para que, mediante un conjuro, su amor triunfe.'),(7,'The sleeping beauty','undefined-1619633772138.jpg',4.0,'2021-04-28 18:16:12','2021-04-28 18:16:12',NULL,3,'1959-01-29','Tres hadas madrinas y un apuesto príncipe salvan a la princesa Aurora de la maldición de la bruja Maléfica.'),(8,'Ratatouille','undefined-1619633963303.jpg',5.0,'2021-04-28 18:19:23','2021-04-28 18:19:23',NULL,1,'2007-06-29','Remy es un residente de París que aprecia la buena comida y tiene un paladar bastante sofisticado. Él desea convertirse en un chef para crear y disfrutar de diversas obras de arte culinarias. El único problema es que Remy es una rata. Y cuando termina en las alcantarillas debajo de uno de los restaurantes más finos de París, el roedor se siente en el lugar perfecto para convertir su sueño en una realidad.'),(9,'The beauty and the beast','undefined-1619634168989.jpg',4.0,'2021-04-28 18:22:48','2021-04-28 18:22:48',NULL,3,'2017-03-17','Belle, una joven hermosa y brillante, asume el lugar de su padre como prisionero en el castillo de una bestia. Poco a poco, la valiente Belle irá dándose cuenta de que el príncipe bestia no es el malvado ser que todos creen que es y tiene, en realidad, un gran corazón.'),(10,'101 Dalmatas','undefined-1619634279332.jpg',5.0,'2021-04-28 18:24:39','2021-04-28 18:24:39',NULL,1,'1961-01-25','Dos perros británicos tratan de rescatar a sus cachorros que fueron secuestrados por Cruella de Ville.'),(11,'Mulan','undefined-1619635145483.jfif',3.0,'2021-04-28 18:39:05','2021-04-28 18:39:05',NULL,2,'2020-03-25','El emperador chino emite un decreto que exige reclutar a un varón de cada familia para luchar con el ejército imperial. Para salvar a su anciano padre de este deber, su única hija Fa Mulán se hace pasar por soldado y toma su lugar.');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `release_date` date NOT NULL,
  `end_date` datetime NOT NULL,
  `image` varchar(200) NOT NULL,
  `genre_id` int(10) unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `history` varchar(500) NOT NULL,
  `rating` decimal(3,1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_seriesgenre_id_idx` (`genre_id`),
  CONSTRAINT `fk_seriesgenre_id` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (3,'Hannah Montana','2021-04-28 18:46:34','2021-04-28 18:46:34','2006-03-24','0000-00-00 00:00:00','undefined-1619635594530.jpg',1,NULL,'Aunque ella parece ser una adolescente común y corriente para sus compañeros de estudio y profesores, Miley Stewart tiene una vida doble, la joven se transforma en una famosa cantante de música pop, que se llama Hannah Montana, ella lo hace en la noche, para interpretar sus canciones. ',5.0),(4,'The Suite Life of Zack and Cody','2021-04-28 18:49:39','2021-04-28 18:49:39','2005-03-18','0000-00-00 00:00:00','undefined-1619635779799.jfif',1,NULL,'La vida es dulce, al menos en la suite para los gemelos Zack y Cody Martin, luego de que su madre, Carey, consigue un trabajo dirigiendo el hotel de cinco estrellas \"Tipton Hotel\" en Boston, incluyendo una suite en el piso de arriba. Desde ese lugar, los gemelos transforman el hotel en su parque de diversiones, aunque las bromas son usualmente instigadas por la chica obsesionada con Zack, quien no es tan maduro e intelectual que Cody.',5.0),(5,'Wizards of Waverly Place','2021-04-28 18:51:14','2021-04-28 18:51:14','2007-10-12','0000-00-00 00:00:00','undefined-1619635874441.jfif',1,NULL,'Alex Russo y sus hermanos Justin y Max provienen de una línea legendaria de hechiceros y ahora tienen que aprender a usar sus poderes correctamente. Su padre, Jerry renunció a sus poderes al casarse con una mujer mortal. El negocio familiar es la Subestación Waverly en la transitada Manhattan, y los tres magos jóvenes terminan en toda clase de situaciones locas mientras maduran, enfrentando retos típicos de los adolescentes como el colegio, los amigos, la familia y un reto no muy común, la magia',5.0),(6,'Phineas and Ferb','2021-04-28 18:53:28','2021-04-28 18:53:28','2007-01-01','0000-00-00 00:00:00','undefined-1619636008860.jfif',1,NULL,'Phineas y Ferb dos hermanastros que quieren disfrutar de las vacaciones de verano haciendo cosas creativas cada día.',5.0),(7,'American Dragon: Jake Long','2021-04-28 18:54:57','2021-04-28 18:54:57','2005-05-04','0000-00-00 00:00:00','undefined-1619636097966.jpg',1,NULL,'Jake Long es un adolescente asiático-americano de 13 años de edad que se esfuerza en encontrar el equilibrio en su vida como aficionado a la patineta en Nueva York mientras aprende a dominar sus poderes místicos como dragón americano.',5.0);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Camilo','Rojas','ivo@gmail.com','$2b$12$sO//gkdcEwlYgUpkqRgWEuUCfQDQRMHPhmj49ThsXxAmE5oqSvsB6','2021-04-25 17:03:28','2021-04-25 17:03:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-30 17:23:16
