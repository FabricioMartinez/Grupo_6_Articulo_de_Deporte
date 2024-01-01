-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sportifybase
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

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
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `password_confirm` varchar(200) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_admin`),
  UNIQUE KEY `username` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'Fabricio Jorge','Martinez','fabri.martinez@gmail.com','','1645','1645','3884764530'),(2,'Nicolas','Heredia','.....','','1645','1645',' 388 5834889'),(4,'Cristina','Yurca','....','','1645','1645',' 388 5403493'),(6,'Maria','Jasmin','...','','1645','1645',' 388 5979096');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `opciones` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Accesorio Deportivo'),(2,'Ropa deportiva');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id_color` int(11) NOT NULL AUTO_INCREMENT,
  `colores` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'rojo'),(2,'verde'),(3,'azul'),(4,'morado'),(5,'negro'),(6,'blanco'),(7,'amarrillo'),(8,'naranja'),(9,'gris'),(10,'celeste'),(11,'rosa');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_color` int(11) NOT NULL,
  `id_tallas` int(11) NOT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_productos`),
  KEY `id_categoria` (`id_categoria`),
  KEY `id_color` (`id_color`),
  KEY `id_tallas` (`id_tallas`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`),
  CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`id_tallas`) REFERENCES `tallas` (`id_tallas`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (7,'Pelota Mundias Qatar 2022',28000,'Pelota del Mundias Qatar 2022',1,3,2,'products_1702308480606.webp'),(13,'Remera Musculosa Deportiva',6005,'REMERA MUSCULOSA DEPORTIVA ALPINA\r\n\r\n- Confeccionadas en set de Poliéster de primera calidad.\r\n- Útiles tanto para actividades indoor como outdoor.\r\n- Apta para usar con leggings\r\n- Cómodas y livianas',2,3,2,'products_1702448043389.webp'),(15,'Musculosa Deportiva Mujer Recortes 3 Colores',6150,'MUSCULOSA CON RECORTES EN 3 COLORES\r\n3 COMBINACIONES DIFERENTES\r\nEN ELASTANO, CON RECORTES QUE MODELAN TU FIGURA, SE ADAPTA AL CUERPO\r\nNO SE DEFORMA',2,5,3,'products_1702448245285.webp'),(16,'Musculosa de running de hombre Agile',11130,'Confeccionada en una tela altamente respirable y de secado rápido, mantiene el cuerpo seco, aún durante la práctica de actividades deportivas.\r\nEsta es una prenda muy confortable, gracias al “Mechanic',2,6,3,'products_1702448340687.jpg'),(17,'Campera de hombre Narvik Pro',8000,'Neja radial de bajomanga.\r\n\r\nManga ranglan\r\n\r\nBolsillos laterales con cierres.',2,5,4,'products_1702448534039.jpg'),(18,'Campera Deportiva Lycra Hombre - Calyu Gs',15000,'Campera gris para hombres, elastizada',2,9,2,'products_1702448709712.png'),(19,'Campera deportiva All Blacks gris',30000,'Campera Deportiva en Microfibra Livina Elastizada. \r\nEs una tela muy liviana y agradable al contacto con la piel. \r\nAbrigada pero liviana, lo que la hace ideal para media estación.\r\nTiene cierres reve',2,9,2,'products_1702448785963.jpg'),(20,'Campera de mujer Gala',15000,'Esta prenda, por su alto rango de elasticidad, es ideal para la práctica de actividades que requieren gran libertad de movimientos, brindando al mismo tiempo el soporte necesario para el alto impacto.',2,5,3,'products_1702448841435.jpg'),(23,'Campera de mujer Nylay',37600,'Esta prenda, por su alto rango de elasticidad, es ideal para la práctica de actividades que requieren gran libertad de movimientos.\r\nPosee una moldería anatómica, con líneas adherentes que destacan la',2,11,3,'products_1702448980671.jpg'),(24,'Zapatillas Head Ohio Deportivas Hombre',13000,'Nuevas Zapatillas deportivas HEAD Ohio , confeccionadas con una suela amortiguada para que te sientas tan bien como te ves.\r\n\r\nSKU gris HE HAHC01551H17\r\nblanco HE HAHC01540H17',2,5,6,'products_1702449054968.webp'),(27,'PANTALON HOMBRE UMBRO DEPORTIVO',23400,'Pantalón deportivo de poliéster frizado, con bolsillos y galon en laterales. Logo Umbro estampado. ALTURA: 1.82/PECHO:100/CINTURA: 78/CADERA: 87. TALLE M.',2,5,6,'products_1702449327973.webp'),(28,'Pantalon Deportivo Rústico Ely - Hombre',12640,'Pantalón Deportivo Rustico de Hombre - Jaspeado - Excelente Calidad, Marca Ely\r\nTalle: S al 3XL - Tiro Medio - Colores: Gris oscuro\r\nART - E576',2,9,6,'products_1702449394689.webp'),(29,'Shorts Futbol Equipos Pantalones Cortos',4250,'PODES SURTIR TALLES Y COLORES O TODOS EN 1 COLOR Y TALLE COMO PREFIERAS\r\nSOLO TENES QUE OFERTAR CUALQUIER TALLE Y COLOR Y ESCRIBIRNOS EL DETALLE EN MENSAJE DE COMPRA!\r\nNO TE PIERDAS ARMAR TU COMBO A P',2,5,6,'products_1702449454283.webp'),(30,'Short Kappa Deportivo Hombre Pantalon Corto Con Bo',6500,'----- SELENIO DEPORTES -----\r\nMERCADOLIDER – Local en CASEROS de Articulos Deportivos\r\n\r\nSHORT KAPPA DINO ORIGINAL\r\nShort de Entrenamiento con 2 bolsillos laterales. Cintura elastica, con cordón de aj',2,5,6,'products_1702449517338.webp'),(31,'Auriculares Inalambricos Qcy M10 Tws Bluetooth And',7000,'En la calle, en el colectivo, en la oficina o mientras haces deportes tené siempre a mano tus auriculares QCY y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta ',1,5,6,'products_1702449621479.webp'),(32,'Auriculares Inalámbricos Xiaomi Redmi AirDots',4000,'Auriculares tipo in-ear Xiaomi Redmi AirDots con tecnología TWS (True Wireless Stereo). Estos auriculares poseen una calidad superior para que puedas disfrutar de tus audios favoritos de manera instan',1,5,6,'products_1702449666412.jpeg'),(33,'Auriculares Inalámbricos Bluetooth Yamaha TW-E3BBL',12000,'Auricular | Intraural | Bluethooth 5| Cargador |Eq Inteligente| Ipx5 (Resistente Al Agua) |Cable Usb |Color Negro',1,5,6,'products_1702449719188.jpeg'),(34,'Soga Jalon Para Triceps Topes Reforzados',28700,'SOGA JALÓN PARA TRICEPS - ACCESORIO PARA POLEA - MULTIGYG\r\n\r\nSOGA DE NYLON DE 55 CM. DE ALTA CALIDAD: construida con una soga de nylon negro trenzada extra resistente con topes de goma duraderos.',1,5,6,'products_1702449793460.webp'),(35,'Par De Mancuernas Hexagonales De Caucho MIR',30000,'Par de mancuernas hexagonales de caucho.\r\n\r\nEjercicios para bíceps, tríceps y músculos pectorales.',1,5,6,'products_1702449861015.jpg'),(37,'Casco Suca Bikes S311 Mate',12000,'Marca Sbk Modelo S311 Mate Casco Para Adultos Regulable En Nuca, Con Aeroventilas Y Visera Talles M (54-58 Cm) L (58-62 Cm)\r\n\r\nMarca Sbk\r\n\r\nModelo S311 Mate\r\n\r\nCasco Para Adultos Regulable En Nuca, Co',1,3,6,'products_1702449982445.webp'),(38,'RAQUETA DE TENIS CLASH 100 V2',140000,'El modelo héroe de la innovadora e inmensamente popular línea Clash, el Clash 100 v2 revisa ligeramente la receta para obtener más consistencia, más sostenibilidad y un diseño más impactante. Un atrac',1,1,6,'products_1702450032833.webp'),(39,'Palo de glof G430',25000,'Palo de golf profecional',1,9,6,'products_1702478141760.webp'),(40,'Casco Freelife Deportivo Windsurf Kitesurf Bicicle',35000,'CASCO DEPORTIVO\r\nFREELIFE\r\n\r\nIdeal para deportes como wakeboard, kitesurf, kayak, rafting, windsurf, bicicleta, bmx, roller, skeatboard, longboard, etc\r\n\r\n* Material : Inyectados en ABS\r\n* Protección ',1,2,6,'products_1702513792255.webp'),(41,'Casco Tipo Cross Deportivo Para Moto Diseños Exclu',15000,'¡¡MOTOMARCAS OFICIAL!!\r\n===TU MOTO AL 100% ===\r\n°.°.°.°.VISITA NUESTRA TIENDA PARA MÁS PRODUCTOS.°.°.°.°\r\n\r\nCASCO CROSS NEGRO MATE LISO XL\r\n\r\n>> Pensando en las personas que disfrutan tomar riesgos cr',1,5,6,'products_1702516685896.webp');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tallas`
--

DROP TABLE IF EXISTS `tallas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tallas` (
  `id_tallas` int(11) NOT NULL AUTO_INCREMENT,
  `talles` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_tallas`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tallas`
--

LOCK TABLES `tallas` WRITE;
/*!40000 ALTER TABLE `tallas` DISABLE KEYS */;
INSERT INTO `tallas` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL'),(6,'sin talla');
/*!40000 ALTER TABLE `tallas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `password_confirm` varchar(200) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `rol` varchar(50) DEFAULT 'user',
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Fabricio','Martinez','fabri.martinez1645@gmail.com','products_1702422004454.jpg','$2a$10$oWIHm5YoE7QYvoSx2J4GUORmOy41omrYvp99WTCd9iiFCFIuLoasm',NULL,'+54 (54) 3884764530','admin'),(2,'Maria','Jazmin','mari.jaz23@gmail.com','products_1702442684976.png','$2a$10$c3lGVc.f07skujt3lZHJLO5lpVBqiwPd2tKa0ac75Uk0CbI2XGJZO',NULL,'3885 979096','admin'),(3,'Cristina','Yurca','cris.yur34@gmail.com','products_1702442759277.png','$2a$10$RLrxuwMIzyUOX6Kc0mk.peK.pwwvbKA0CKYBAhCQvxLHzoqqfx8iC',NULL,'3885 403493','admin'),(4,'Nicolas','Heredia','nico.here10@gmail.com','products_1702442821684.png','$2a$10$EyOsH3u2BEgte4H0/89iE.WQNQlf/dm7hobX3QcRRealiaoRqaR26',NULL,'3885 834889','admin'),(28,'joaquin','Martinez','fabrii.mar1645@gmail.com','products_1701833837205.png','$2a$10$eFcEYng6PrIfeHuBA.aNtOOzUFiyUNabwpIJjx02YRyMhtSwg8HW2',NULL,'388 476-4530','user'),(29,'Juan','torrez','enzo@gmail.com','products_1701834705388.jpg','$2a$10$cQyxVQ8/F6F/1k.ENBndJOovjYVvezkJyW8wvfLErYGo0EXU9SXr.',NULL,'+54 (54) 3884764530','user'),(34,'Tomas','Gutierrez','tomas.guti@gmail.com','products_1702443021652.webp','$2a$10$BEzfjxDpaSLpi0mOKvMBLufXInDkqvX8N.G2iiDzDohbeTUlF4DiG',NULL,'388 4230430','user'),(35,'Jonhatan','Cruz','joni.cruz28@gmail.com','products_1702477970818.jpg','$2a$10$GE0zpXnXoVbEY4kMawKmwei4BVmYhEhYWLr9zDJqB3kjBedXEjAnm',NULL,'388 4024939','user'),(36,'Pedro','Lllanos','pedro@gmail.com','products_1702516525836.jpg','$2a$10$vJJjk86yM3HUxRYt/v4wpOcNqePIqj5si6Wh/UJvkhgT9pOUiYnwy',NULL,'388 476-4530','user'),(37,'Camila','Llanes','cami@gmail.com','products_1702518950113.jpg','$2a$10$w6MAtbCY8n3HCBJx95noX.eNcxLF6rHwOblInrjXQSkPWUjR5C4O.',NULL,'388 476-4530','user');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-13 23:23:28
