-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 01-05-2016 a las 23:45:49
-- Versión del servidor: 5.5.42-37.1
-- Versión de PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `eliteonl_publinet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adm_usuarios`
--

CREATE TABLE IF NOT EXISTS `adm_usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(80) DEFAULT NULL,
  `apellidos` varchar(80) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `guid` varchar(60) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `adm_usuarios`
--

INSERT INTO `adm_usuarios` (`id`, `nombres`, `apellidos`, `email`, `password`, `guid`) VALUES
(1, 'Alex', 'Rojas', 'alexesteban_89@hotmail.es', '81dc9bdb52d04dc20036dbd8313ed055', '2615822b-de8a-4aff-ba72-1cc78b4690c5'),
(3, 'Esteban', 'Rojas', 'alexesteban89@gmail.com', '202cb962ac59075b964b07152d234b70', '67501559-136a-46e0-be76-3a8f0fc3a96c'),
(4, 'Esmeralda', 'Rojas', 'lady.g.97@hotmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '15e2f2c8-971f-4de7-8bba-b759d67bbe72');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apps_countries`
--

CREATE TABLE IF NOT EXISTS `apps_countries` (
  `id` int(11) NOT NULL,
  `country_code` varchar(2) NOT NULL DEFAULT '',
  `country_name` varchar(100) NOT NULL DEFAULT ''
) ENGINE=MyISAM AUTO_INCREMENT=247 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `apps_countries`
--

INSERT INTO `apps_countries` (`id`, `country_code`, `country_name`) VALUES
(1, 'AF', 'Afghanistan'),
(2, 'AL', 'Albania'),
(3, 'DZ', 'Algeria'),
(4, 'DS', 'American Samoa'),
(5, 'AD', 'Andorra'),
(6, 'AO', 'Angola'),
(7, 'AI', 'Anguilla'),
(8, 'AQ', 'Antarctica'),
(9, 'AG', 'Antigua and Barbuda'),
(10, 'AR', 'Argentina'),
(11, 'AM', 'Armenia'),
(12, 'AW', 'Aruba'),
(13, 'AU', 'Australia'),
(14, 'AT', 'Austria'),
(15, 'AZ', 'Azerbaijan'),
(16, 'BS', 'Bahamas'),
(17, 'BH', 'Bahrain'),
(18, 'BD', 'Bangladesh'),
(19, 'BB', 'Barbados'),
(20, 'BY', 'Belarus'),
(21, 'BE', 'Belgium'),
(22, 'BZ', 'Belize'),
(23, 'BJ', 'Benin'),
(24, 'BM', 'Bermuda'),
(25, 'BT', 'Bhutan'),
(26, 'BO', 'Bolivia'),
(27, 'BA', 'Bosnia and Herzegovina'),
(28, 'BW', 'Botswana'),
(29, 'BV', 'Bouvet Island'),
(30, 'BR', 'Brazil'),
(31, 'IO', 'British Indian Ocean Territory'),
(32, 'BN', 'Brunei Darussalam'),
(33, 'BG', 'Bulgaria'),
(34, 'BF', 'Burkina Faso'),
(35, 'BI', 'Burundi'),
(36, 'KH', 'Cambodia'),
(37, 'CM', 'Cameroon'),
(38, 'CA', 'Canada'),
(39, 'CV', 'Cape Verde'),
(40, 'KY', 'Cayman Islands'),
(41, 'CF', 'Central African Republic'),
(42, 'TD', 'Chad'),
(43, 'CL', 'Chile'),
(44, 'CN', 'China'),
(45, 'CX', 'Christmas Island'),
(46, 'CC', 'Cocos (Keeling) Islands'),
(47, 'CO', 'Colombia'),
(48, 'KM', 'Comoros'),
(49, 'CG', 'Congo'),
(50, 'CK', 'Cook Islands'),
(51, 'CR', 'Costa Rica'),
(52, 'HR', 'Croatia (Hrvatska)'),
(53, 'CU', 'Cuba'),
(54, 'CY', 'Cyprus'),
(55, 'CZ', 'Czech Republic'),
(56, 'DK', 'Denmark'),
(57, 'DJ', 'Djibouti'),
(58, 'DM', 'Dominica'),
(59, 'DO', 'Dominican Republic'),
(60, 'TP', 'East Timor'),
(61, 'EC', 'Ecuador'),
(62, 'EG', 'Egypt'),
(63, 'SV', 'El Salvador'),
(64, 'GQ', 'Equatorial Guinea'),
(65, 'ER', 'Eritrea'),
(66, 'EE', 'Estonia'),
(67, 'ET', 'Ethiopia'),
(68, 'FK', 'Falkland Islands (Malvinas)'),
(69, 'FO', 'Faroe Islands'),
(70, 'FJ', 'Fiji'),
(71, 'FI', 'Finland'),
(72, 'FR', 'France'),
(73, 'FX', 'France, Metropolitan'),
(74, 'GF', 'French Guiana'),
(75, 'PF', 'French Polynesia'),
(76, 'TF', 'French Southern Territories'),
(77, 'GA', 'Gabon'),
(78, 'GM', 'Gambia'),
(79, 'GE', 'Georgia'),
(80, 'DE', 'Germany'),
(81, 'GH', 'Ghana'),
(82, 'GI', 'Gibraltar'),
(83, 'GK', 'Guernsey'),
(84, 'GR', 'Greece'),
(85, 'GL', 'Greenland'),
(86, 'GD', 'Grenada'),
(87, 'GP', 'Guadeloupe'),
(88, 'GU', 'Guam'),
(89, 'GT', 'Guatemala'),
(90, 'GN', 'Guinea'),
(91, 'GW', 'Guinea-Bissau'),
(92, 'GY', 'Guyana'),
(93, 'HT', 'Haiti'),
(94, 'HM', 'Heard and Mc Donald Islands'),
(95, 'HN', 'Honduras'),
(96, 'HK', 'Hong Kong'),
(97, 'HU', 'Hungary'),
(98, 'IS', 'Iceland'),
(99, 'IN', 'India'),
(100, 'IM', 'Isle of Man'),
(101, 'ID', 'Indonesia'),
(102, 'IR', 'Iran (Islamic Republic of)'),
(103, 'IQ', 'Iraq'),
(104, 'IE', 'Ireland'),
(105, 'IL', 'Israel'),
(106, 'IT', 'Italy'),
(107, 'CI', 'Ivory Coast'),
(108, 'JE', 'Jersey'),
(109, 'JM', 'Jamaica'),
(110, 'JP', 'Japan'),
(111, 'JO', 'Jordan'),
(112, 'KZ', 'Kazakhstan'),
(113, 'KE', 'Kenya'),
(114, 'KI', 'Kiribati'),
(115, 'KP', 'Korea, Democratic People''s Republic of'),
(116, 'KR', 'Korea, Republic of'),
(117, 'XK', 'Kosovo'),
(118, 'KW', 'Kuwait'),
(119, 'KG', 'Kyrgyzstan'),
(120, 'LA', 'Lao People''s Democratic Republic'),
(121, 'LV', 'Latvia'),
(122, 'LB', 'Lebanon'),
(123, 'LS', 'Lesotho'),
(124, 'LR', 'Liberia'),
(125, 'LY', 'Libyan Arab Jamahiriya'),
(126, 'LI', 'Liechtenstein'),
(127, 'LT', 'Lithuania'),
(128, 'LU', 'Luxembourg'),
(129, 'MO', 'Macau'),
(130, 'MK', 'Macedonia'),
(131, 'MG', 'Madagascar'),
(132, 'MW', 'Malawi'),
(133, 'MY', 'Malaysia'),
(134, 'MV', 'Maldives'),
(135, 'ML', 'Mali'),
(136, 'MT', 'Malta'),
(137, 'MH', 'Marshall Islands'),
(138, 'MQ', 'Martinique'),
(139, 'MR', 'Mauritania'),
(140, 'MU', 'Mauritius'),
(141, 'TY', 'Mayotte'),
(142, 'MX', 'Mexico'),
(143, 'FM', 'Micronesia, Federated States of'),
(144, 'MD', 'Moldova, Republic of'),
(145, 'MC', 'Monaco'),
(146, 'MN', 'Mongolia'),
(147, 'ME', 'Montenegro'),
(148, 'MS', 'Montserrat'),
(149, 'MA', 'Morocco'),
(150, 'MZ', 'Mozambique'),
(151, 'MM', 'Myanmar'),
(152, 'NA', 'Namibia'),
(153, 'NR', 'Nauru'),
(154, 'NP', 'Nepal'),
(155, 'NL', 'Netherlands'),
(156, 'AN', 'Netherlands Antilles'),
(157, 'NC', 'New Caledonia'),
(158, 'NZ', 'New Zealand'),
(159, 'NI', 'Nicaragua'),
(160, 'NE', 'Niger'),
(161, 'NG', 'Nigeria'),
(162, 'NU', 'Niue'),
(163, 'NF', 'Norfolk Island'),
(164, 'MP', 'Northern Mariana Islands'),
(165, 'NO', 'Norway'),
(166, 'OM', 'Oman'),
(167, 'PK', 'Pakistan'),
(168, 'PW', 'Palau'),
(169, 'PS', 'Palestine'),
(170, 'PA', 'Panama'),
(171, 'PG', 'Papua New Guinea'),
(172, 'PY', 'Paraguay'),
(173, 'PE', 'Peru'),
(174, 'PH', 'Philippines'),
(175, 'PN', 'Pitcairn'),
(176, 'PL', 'Poland'),
(177, 'PT', 'Portugal'),
(178, 'PR', 'Puerto Rico'),
(179, 'QA', 'Qatar'),
(180, 'RE', 'Reunion'),
(181, 'RO', 'Romania'),
(182, 'RU', 'Russian Federation'),
(183, 'RW', 'Rwanda'),
(184, 'KN', 'Saint Kitts and Nevis'),
(185, 'LC', 'Saint Lucia'),
(186, 'VC', 'Saint Vincent and the Grenadines'),
(187, 'WS', 'Samoa'),
(188, 'SM', 'San Marino'),
(189, 'ST', 'Sao Tome and Principe'),
(190, 'SA', 'Saudi Arabia'),
(191, 'SN', 'Senegal'),
(192, 'RS', 'Serbia'),
(193, 'SC', 'Seychelles'),
(194, 'SL', 'Sierra Leone'),
(195, 'SG', 'Singapore'),
(196, 'SK', 'Slovakia'),
(197, 'SI', 'Slovenia'),
(198, 'SB', 'Solomon Islands'),
(199, 'SO', 'Somalia'),
(200, 'ZA', 'South Africa'),
(201, 'GS', 'South Georgia South Sandwich Islands'),
(202, 'ES', 'Spain'),
(203, 'LK', 'Sri Lanka'),
(204, 'SH', 'St. Helena'),
(205, 'PM', 'St. Pierre and Miquelon'),
(206, 'SD', 'Sudan'),
(207, 'SR', 'Suriname'),
(208, 'SJ', 'Svalbard and Jan Mayen Islands'),
(209, 'SZ', 'Swaziland'),
(210, 'SE', 'Sweden'),
(211, 'CH', 'Switzerland'),
(212, 'SY', 'Syrian Arab Republic'),
(213, 'TW', 'Taiwan'),
(214, 'TJ', 'Tajikistan'),
(215, 'TZ', 'Tanzania, United Republic of'),
(216, 'TH', 'Thailand'),
(217, 'TG', 'Togo'),
(218, 'TK', 'Tokelau'),
(219, 'TO', 'Tonga'),
(220, 'TT', 'Trinidad and Tobago'),
(221, 'TN', 'Tunisia'),
(222, 'TR', 'Turkey'),
(223, 'TM', 'Turkmenistan'),
(224, 'TC', 'Turks and Caicos Islands'),
(225, 'TV', 'Tuvalu'),
(226, 'UG', 'Uganda'),
(227, 'UA', 'Ukraine'),
(228, 'AE', 'United Arab Emirates'),
(229, 'GB', 'United Kingdom'),
(230, 'US', 'United States'),
(231, 'UM', 'United States minor outlying islands'),
(232, 'UY', 'Uruguay'),
(233, 'UZ', 'Uzbekistan'),
(234, 'VU', 'Vanuatu'),
(235, 'VA', 'Vatican City State'),
(236, 'VE', 'Venezuela'),
(237, 'VN', 'Vietnam'),
(238, 'VG', 'Virgin Islands (British)'),
(239, 'VI', 'Virgin Islands (U.S.)'),
(240, 'WF', 'Wallis and Futuna Islands'),
(241, 'EH', 'Western Sahara'),
(242, 'YE', 'Yemen'),
(243, 'YU', 'Yugoslavia'),
(244, 'ZR', 'Zaire'),
(245, 'ZM', 'Zambia'),
(246, 'ZW', 'Zimbabwe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_home`
--

CREATE TABLE IF NOT EXISTS `banners_home` (
  `id` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `link` varchar(100) DEFAULT NULL,
  `posicion` char(5) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `banners_home`
--

INSERT INTO `banners_home` (`id`, `imagen`, `link`, `posicion`, `orden`) VALUES
(1, 'pizza-hut.jpg', '#', 'TL', 1),
(2, 'subway.jpg', '#', 'TL', 2),
(3, '56c8d47fdcb0d.jpg', '#', 'TR', NULL),
(4, 'movistar.jpg', '#', 'BO', 2),
(5, 'coca-cola.jpg', '#', 'BO', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int(11) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `titulo` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `contenido` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `orden` int(11) DEFAULT NULL,
  `publicado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `blogs`
--

INSERT INTO `blogs` (`id`, `imagen`, `titulo`, `contenido`, `orden`, `publicado`) VALUES
(17, '5726a5ba70b88.jpg', 'CASTILLO MARROQUIN', 'Este lugar fue construido  a finales del siglo XIX por el  arquitecto Gastón lelarge, al antojo de JOSE MANUEL MARROQUIN  diseñado con características particulares como; torres circulares, capilla interior, cocinas para dobles servicios, amplios interiores para criados  y destinando una buena parte para residencia .\nActualmente el castillo Marroquín además de ser  reconocido por su belleza arquitectónica también se destaca por la variedad de servicios que ofrece como;  eventos empresariales, eventos sociales, jornadas pedagógicas, conciertos  y un  restaurante en un ambiente medieval. \nEl castillo Marroquín  se encuentra ubicado en la Autopista Norte, km 21 Vía la Caro.\nPublinet te lo recomienda!', NULL, 1),
(18, '5726a8947d2ce.jpg', 'FONTANAR', 'Un centro comercial nuevo ubicado en la sabana de bogotá  entre los municipios de cajicá y chia, con un diseño innovador, tecnología de  punta, iluminación natural y muchas más características  que buscan brindar comodidad a sus usuarios.\nDentro del centro comercial podrás encontrar tus marcas preferidas  y reconocidas como ; Bershka, Stradivarius, Pull & Bear, American Eagle, Nike, Adidas, Arturo calle, Tennis, Forever 21,FDS. Y muchas mas.\nAdemás de la variedad en marcas deportivas y de ropa, también  encontraras  36 variedades  gastronómicas,  sabores únicos y placenteros para tu paladar, restaurantes como;  wok, crepes and waffles, jungla kumba y más estarán dispuestos a saciar tu paladar en la plazoleta de comidas.\nTambién cuenta con una plazoleta bancaria! Un lugar donde puedes encontrar todos los bancos en una sola ubicación, y donde te vas a sentir confiado ya que  la plazoleta cuenta con un sistema de seguridad  especial para los usuarios.\nPublinet  te lo recomienda!', NULL, 1),
(19, '5726b03001973.jpg', 'CATEDRAL DE SAL', 'La catedral de sal es un templo construido en el interior de las minas de sal de Zipaquirá, conocida como la maravilla #1 de Colombia y séptima maravilla del mundo.\nBrinda un ambiente de profundo  sentido religioso ya que  entre sus corredores se puede encontrar  imágenes  religiosas talladas en roca salina, su cruz principal cuenta con una altura de 16 metros, la cual atrapa todas las miradas de los turistas.\nEl vía crucis es uno de los rituales que realizan los turistas nacionales e internacionales haciendo las 14 estaciones, como muestra de devoción\nLa mina de sal alberga en su interior uno de los depósitos más  grandes del mundo (el domo de sal de Zipaquirá)\nLos turistas podrán encontrar  una rica colección artística de esculturas de sal y de mármol.\nEste recorrido por la catedral tarda aproximadamente una  (1)   hora donde puedes contar  con la atención especializada  de guías bilingües.\nAdemás de este recorrido también podrás  encontrar  atracciones como;  el muro de escalar, la ruta del minero, la película en 3ra dimensión, la cámara de café, y el espejo de agua.\nDentro del parque podrás  encontrar  un parqueadero vigilado, cuenta con una tarifa de seis mil pesos el día y tu carro va a estar seguro.\nLa catedral de sal también cuenta con una plazoleta de comidas con una capacidad de 300 personas donde vas a poder  tener un ambiente tranquilo, al aire libre y por supuesto dándole gusto a tu paladar.\nPublinet te la recomienda!', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE IF NOT EXISTS `calificaciones` (
  `id` int(11) NOT NULL,
  `guid` varchar(60) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`id`, `guid`, `id_empresa`, `date`) VALUES
(2, 'ec77c0fe-5fc1-41f5-ac62-39ea89a6a9d6', 22, '2016-05-01 21:30:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(16) COLLATE utf8_spanish_ci NOT NULL,
  `icono` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `icono`) VALUES
(12, 'Consultoria', 'fa-file-o'),
(13, 'vidrieria', 'fa-trello'),
(14, 'abogados', 'fa-briefcase'),
(15, 'Salud', 'fa-ambulance'),
(16, 'Inmobiliarias', 'fa-building-o'),
(18, 'Restaurantes', 'fa-cutlery'),
(19, 'Hoteles', 'fa-map-marker'),
(20, 'Hogar', 'fa-home'),
(21, 'Moda', 'fa-tags'),
(22, 'Confiteria', 'fa-gift'),
(23, 'Fotografia', 'fa-camera'),
(24, 'Opticas', 'fa-eye'),
(25, 'Veterinaria', 'fa-github-alt'),
(26, 'Ferreterias', 'fa-wrench'),
(27, 'Colegios', 'fa-book'),
(28, 'Medicina', 'fa-user-md'),
(29, 'Mecanica', 'fa-gears'),
(30, 'Cafeteria', 'fa-coffee'),
(31, 'supermercados', 'fa-shopping-cart'),
(32, 'Viveros', 'fa-leaf'),
(33, 'eventos', 'fa-calendar-o'),
(34, 'Publicidad', 'fa-bullhorn'),
(35, 'Peluquerias', 'fa-scissors'),
(36, 'bar', 'fa-glass');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE IF NOT EXISTS `ciudades` (
  `idCiudad` int(11) NOT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  `idDepartamento` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=199 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`idCiudad`, `nombre`, `idDepartamento`) VALUES
(1, 'Bello', 1),
(2, 'Caldas', 1),
(3, 'Copacabana', 1),
(4, 'Envigado', 1),
(5, 'Guarne', 1),
(6, 'Itagui', 1),
(7, 'La Ceja', 1),
(8, 'La Estrella', 1),
(9, 'La Tablaza', 1),
(10, 'Marinilla', 1),
(11, 'Medellin', 1),
(12, 'Rionegro', 1),
(13, 'Sabaneta', 1),
(14, 'San Antonio de Prado', 1),
(15, 'San Cristobal', 1),
(16, 'Caucasia', 1),
(17, 'Barranquilla', 2),
(18, 'Malambo', 2),
(19, 'Puerto Colombia', 2),
(20, 'Soledad', 2),
(21, 'Arjona', 3),
(22, 'Bayunca', 3),
(23, 'Carmen de Bolivar', 3),
(24, 'Cartagena', 3),
(25, 'Turbaco', 3),
(26, 'Arcabuco', 4),
(27, 'Belencito', 4),
(28, 'Chiquinquira', 4),
(29, 'Combita', 4),
(30, 'Cucaita', 4),
(31, 'Duitama', 4),
(32, 'Mongui', 4),
(33, 'Nobsa', 4),
(34, 'Paipa', 4),
(35, 'Puerto Boyaca', 4),
(36, 'Raquira', 4),
(37, 'Samaca', 4),
(38, 'Santa Rosa de Viterbo', 4),
(39, 'Sogamoso', 4),
(40, 'Sutamerchan', 4),
(41, 'Tibasosa', 4),
(42, 'Tinjaca', 4),
(43, 'Tunja', 4),
(44, 'Ventaquemada', 4),
(45, 'Villa de Leiva', 4),
(46, 'La Dorada', 5),
(47, 'Manizales', 5),
(48, 'Villamaria', 5),
(49, 'Caloto', 6),
(50, 'Ortigal', 6),
(51, 'Piendamo', 6),
(52, 'Popayan', 6),
(53, 'Puerto Tejada', 6),
(54, 'Santander Quilichao', 6),
(55, 'Tunia', 6),
(56, 'Villarica', 6),
(57, 'Valledupar', 7),
(58, 'Cerete', 8),
(59, 'Monteria', 8),
(60, 'Planeta Rica', 8),
(61, 'Alban', 9),
(62, 'Bogota', 9),
(63, 'Bojaca', 9),
(64, 'Bosa', 9),
(65, 'Briceño', 9),
(66, 'Cajica', 9),
(67, 'Chia', 9),
(68, 'Chinauta', 9),
(69, 'Choconta', 9),
(70, 'Cota', 9),
(71, 'El Muña', 9),
(72, 'El Rosal', 9),
(73, 'Engativa', 9),
(74, 'Facatativa', 9),
(75, 'Fontibon', 9),
(76, 'Funza', 9),
(77, 'Fusagasuga', 9),
(78, 'Gachancipa', 9),
(79, 'Girardot', 9),
(80, 'Guaduas', 9),
(81, 'Guayavetal', 9),
(82, 'La Calera', 9),
(83, 'La Caro', 9),
(84, 'Madrid', 9),
(85, 'Mosquera', 9),
(86, 'Nemocon', 9),
(87, 'Puente Piedra', 9),
(88, 'Puente Quetame', 9),
(89, 'Puerto Bogota', 9),
(90, 'Puerto Salgar', 9),
(91, 'Quetame', 9),
(92, 'Sasaima', 9),
(93, 'Sesquile', 9),
(94, 'Sibate', 9),
(95, 'Silvania', 9),
(96, 'Simijaca', 9),
(97, 'Soacha', 9),
(98, 'Sopo', 9),
(99, 'Suba', 9),
(100, 'Subachoque', 9),
(101, 'Susa', 9),
(102, 'Tabio', 9),
(103, 'Tenjo', 9),
(104, 'Tocancipa', 9),
(105, 'Ubate', 9),
(106, 'Usaquen', 9),
(107, 'Usme', 9),
(108, 'Villapinzon', 9),
(109, 'Villeta', 9),
(110, 'Zipaquira', 9),
(111, 'Maicao', 10),
(112, 'Riohacha', 10),
(113, 'Aipe', 11),
(114, 'Neiva', 11),
(115, 'Cienaga', 12),
(116, 'Gaira', 12),
(117, 'Rodadero', 12),
(118, 'Santa Marta', 12),
(119, 'Taganga', 12),
(120, 'Villavicencio', 13),
(121, 'Ipiales', 14),
(122, 'Pasto', 14),
(123, 'Cucuta', 15),
(124, 'El Zulia', 15),
(125, 'La Parada', 15),
(126, 'Los Patios', 15),
(127, 'Villa del Rosario', 15),
(128, 'Armenia', 16),
(129, 'Calarca', 16),
(130, 'Circasia', 16),
(131, 'La Tebaida', 16),
(132, 'Montenegro', 16),
(133, 'Quimbaya', 16),
(134, 'Dosquebradas', 17),
(135, 'Pereira', 17),
(136, 'Aratoca', 18),
(137, 'Barbosa', 18),
(138, 'Bucaramanga', 18),
(139, 'Floridablanca', 18),
(140, 'Giron', 18),
(141, 'Lebrija', 18),
(142, 'Oiba', 18),
(143, 'Piedecuesta', 18),
(144, 'Pinchote', 18),
(145, 'San Gil', 18),
(146, 'Socorro', 18),
(147, 'Sincelejo', 19),
(148, 'Armero', 20),
(149, 'Buenos Aires', 20),
(150, 'Castilla', 20),
(151, 'Espinal', 20),
(152, 'Flandes', 20),
(153, 'Guamo', 20),
(154, 'Honda', 20),
(155, 'Ibague', 20),
(156, 'Mariquita', 20),
(157, 'Melgar', 20),
(158, 'Natagaima', 20),
(159, 'Payande', 20),
(160, 'Purificacion', 20),
(161, 'Saldaña', 20),
(162, 'Tolemaida', 20),
(163, 'Amaime', 21),
(164, 'Andalucia', 21),
(165, 'Buenaventura', 21),
(166, 'Buga', 21),
(167, 'Buga La Grande', 21),
(168, 'Caicedonia', 21),
(169, 'Cali', 21),
(170, 'Candelaria', 21),
(171, 'Cartago', 21),
(172, 'Cavasa', 21),
(173, 'Costa Rica', 21),
(174, 'Dagua', 21),
(175, 'El Carmelo', 21),
(176, 'El Cerrito', 21),
(177, 'El Placer', 21),
(178, 'Florida', 21),
(179, 'Ginebra', 21),
(180, 'Guacari', 21),
(181, 'Jamundi', 21),
(182, 'La Paila', 21),
(183, 'La Unión', 21),
(184, 'La Victoria', 21),
(185, 'Loboguerrero', 21),
(186, 'Palmira', 21),
(187, 'Pradera', 21),
(188, 'Roldanillo', 21),
(189, 'Rozo', 21),
(190, 'San Pedro', 21),
(191, 'Sevilla', 21),
(192, 'Sonso', 21),
(193, 'Tulua', 21),
(194, 'Vijes', 21),
(195, 'Villa Gorgona', 21),
(196, 'Yotoco', 21),
(197, 'Yumbo', 21),
(198, 'Zarzal', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL,
  `comentario` varchar(360) DEFAULT NULL,
  `id_usuario` varchar(60) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`, `id_usuario`, `id_empresa`, `fecha`) VALUES
(1, 'Excelentes precios y calidad', 'ec77c0fe-5fc1-41f5-ac62-39ea89a6a9d6', 22, '2016-05-01 21:42:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `confirmation`
--

CREATE TABLE IF NOT EXISTS `confirmation` (
  `id` int(11) NOT NULL,
  `merchant_id` varchar(80) DEFAULT NULL,
  `state_pol` varchar(25) DEFAULT NULL,
  `risk` varchar(40) DEFAULT NULL,
  `response_code_pol` varchar(25) DEFAULT NULL,
  `reference_sale` varchar(25) DEFAULT NULL,
  `reference_pol` varchar(25) DEFAULT NULL,
  `sign` varchar(40) DEFAULT NULL,
  `extraone` varchar(25) DEFAULT NULL,
  `extratwo` varchar(25) DEFAULT NULL,
  `payment_method` varchar(25) DEFAULT NULL,
  `payment_method_type` varchar(25) DEFAULT NULL,
  `installments_number` varchar(40) DEFAULT NULL,
  `value` varchar(25) DEFAULT NULL,
  `tax` varchar(25) DEFAULT NULL,
  `additional_value` varchar(25) DEFAULT NULL,
  `transaction_date` varchar(25) DEFAULT NULL,
  `currency` varchar(25) DEFAULT NULL,
  `email_buyer` varchar(50) DEFAULT NULL,
  `cus` varchar(25) DEFAULT NULL,
  `pse_bank` varchar(25) DEFAULT NULL,
  `test` varchar(25) DEFAULT NULL,
  `description` varchar(25) DEFAULT NULL,
  `billing_address` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(50) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `office_phone` varchar(25) DEFAULT NULL,
  `account_number_ach` varchar(25) DEFAULT NULL,
  `account_type_ach` varchar(25) DEFAULT NULL,
  `administrative_fee` varchar(25) DEFAULT NULL,
  `administrative_fee_base` varchar(25) DEFAULT NULL,
  `administrative_fee_tax` varchar(25) DEFAULT NULL,
  `airline_code` varchar(25) DEFAULT NULL,
  `attempts` varchar(25) DEFAULT NULL,
  `authorization_code` varchar(25) DEFAULT NULL,
  `bank_id` varchar(25) DEFAULT NULL,
  `billing_city` varchar(25) DEFAULT NULL,
  `billing_country` varchar(25) DEFAULT NULL,
  `commision_pol` varchar(25) DEFAULT NULL,
  `commision_pol_currency` varchar(25) DEFAULT NULL,
  `customer_number` varchar(25) DEFAULT NULL,
  `datec` varchar(25) DEFAULT NULL,
  `error_code_bank` varchar(25) DEFAULT NULL,
  `error_message_bank` varchar(25) DEFAULT NULL,
  `exchange_rate` varchar(25) DEFAULT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `nickname_buyer` varchar(25) DEFAULT NULL,
  `nickname_seller` varchar(25) DEFAULT NULL,
  `payment_method_id` varchar(25) DEFAULT NULL,
  `payment_request_state` varchar(25) DEFAULT NULL,
  `pseReferenceone` varchar(25) DEFAULT NULL,
  `pseReferencetwo` varchar(25) DEFAULT NULL,
  `pseReferencethree` varchar(25) DEFAULT NULL,
  `response_message_pol` varchar(25) DEFAULT NULL,
  `shipping_city` varchar(25) DEFAULT NULL,
  `shipping_country` varchar(25) DEFAULT NULL,
  `transaction_bank_id` varchar(25) DEFAULT NULL,
  `transaction_id` varchar(25) DEFAULT NULL,
  `payment_method_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `confirmation`
--

INSERT INTO `confirmation` (`id`, `merchant_id`, `state_pol`, `risk`, `response_code_pol`, `reference_sale`, `reference_pol`, `sign`, `extraone`, `extratwo`, `payment_method`, `payment_method_type`, `installments_number`, `value`, `tax`, `additional_value`, `transaction_date`, `currency`, `email_buyer`, `cus`, `pse_bank`, `test`, `description`, `billing_address`, `shipping_address`, `phone`, `office_phone`, `account_number_ach`, `account_type_ach`, `administrative_fee`, `administrative_fee_base`, `administrative_fee_tax`, `airline_code`, `attempts`, `authorization_code`, `bank_id`, `billing_city`, `billing_country`, `commision_pol`, `commision_pol_currency`, `customer_number`, `datec`, `error_code_bank`, `error_message_bank`, `exchange_rate`, `ip`, `nickname_buyer`, `nickname_seller`, `payment_method_id`, `payment_request_state`, `pseReferenceone`, `pseReferencetwo`, `pseReferencethree`, `response_message_pol`, `shipping_city`, `shipping_country`, `transaction_bank_id`, `transaction_id`, `payment_method_name`) VALUES
(2, '563818', '6', '', '19', 'COP1462152672395', '109597291', '6e4cfff8c5480c316640c45704c143a0', '', '', '', '', '', '550000.00', '0.00', '0.00', '2016-05-01 21:40:00', 'COP', 'alexesteban_89@hotmail.es', '', '', '0', '3e2a0447-3164-45de-afb8-6', '', '', '', '', '', '', '0.00', '0.00', '0.00', '', '1', '', '', '', '', '', '', '', '2016.05.01 09:40:00', '', '', '0', '186.115.55.226', '', '', '', 'C', '', '', '', 'ABANDONED_TRANSACTION', '', '', '', '6e56fc39-f054-4248-98c3-a', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE IF NOT EXISTS `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `nombre` varchar(80) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `nombre`) VALUES
(1, 'Antioquia'),
(2, 'Atlántico'),
(3, 'Bolívar'),
(4, 'Boyacá'),
(5, 'Caldas'),
(6, 'Cauca'),
(7, 'Cesar'),
(8, 'Córdoba'),
(9, 'Cundinamarca'),
(10, 'Guajira'),
(11, 'Huila'),
(12, 'Magdalena'),
(13, 'Meta'),
(14, 'Nariño'),
(15, 'Norte de Santander'),
(16, 'Quindío'),
(17, 'Risaralda'),
(18, 'Santander'),
(19, 'Sucre'),
(20, 'Tolima'),
(21, 'Valle del Cauca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE IF NOT EXISTS `empresas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `direccion` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `estrellas` bigint(20) DEFAULT NULL,
  `votantes` int(11) DEFAULT NULL,
  `plan` int(11) DEFAULT NULL,
  `id_ciudad` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `inner_score` int(11) DEFAULT NULL,
  `latitud` varchar(30) DEFAULT NULL,
  `longitud` varchar(30) DEFAULT NULL,
  `guid` varchar(60) DEFAULT NULL,
  `guid_usuario` varchar(60) DEFAULT NULL,
  `visitas` bigint(20) DEFAULT NULL,
  `nit` varchar(30) DEFAULT NULL,
  `web` varchar(255) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `etiquetas` varchar(500) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombre`, `logo`, `direccion`, `telefono`, `celular`, `email`, `descripcion`, `facebook`, `twitter`, `instagram`, `estrellas`, `votantes`, `plan`, `id_ciudad`, `id_categoria`, `inner_score`, `latitud`, `longitud`, `guid`, `guid_usuario`, `visitas`, `nit`, `web`, `activo`, `etiquetas`) VALUES
(22, 'Almacén de Colchones Visamar Chía', '5726b11b26ca7.png', 'Calle 9 No.10-42.', '310 299 5915', '310 872 9881', 'info@colchonesvisamar.com', 'CréditosPersonales\nExcelente Calidad para su Salud.\nColchones Semiortopédicos – Resortados – Cazata – Pillow Top – Lencería – Refacciones a Domicilio', '', '', '', 404, 101, 4, 67, 20, 0, '4.85857807575', '-74.0580224991', '3e2a0447-3164-45de-afb8-678c0b3c3cfa', 'ec77c0fe-5fc1-41f5-ac62-39ea89a6a9d6', 882, '', 'http://colchonesvisamar.com/', 1, 'Hogar,colchones,camas,colchon,cama,comodidad'),
(23, 'Arepas & Patacos', '5726c83a9d0ff.png', 'Av. Pradilla No. 4-120', '031 863 0452', '311 237 6054', 'lady.g.97@hotmail.com', 'Ven a Conocer La Nueva Cara del Sabor!\nCarnes, Patacos, Arepas, Ensaladas, Helados, Frutería Y Postres', '', '', '', 4, 1, 2, 67, 18, 78, '4.865034977', '-74.0535163879', 'bb107f26-6b37-4b05-a7fa-180aaaa21a76', '999-888-777', 756, '', '', 1, 'Restaurantes,arepas,comer,carnes,pollo,chia,hamburguesa,perro caliente,jugos,lasagna,empanadas,helados'),
(24, 'Asadero el buen sabor', '5726d14fcd03b.png', 'Cra. 6 No. 4-94', '', '313 879 9870', 'lady.g.97@hotmail.com', 'Pollo Broaster – Pollo Asado – Pescadería – Platos a la Carta\nCompartir Esto!', '', '', '', 4, 1, 1, 66, 18, 56, '4.86058784635', '-74.0543746948', '39ec7d62-85e3-4f85-bea2-c1683cb89198', '999-888-777', 1056, '', '', 1, 'Restaurantes,asaderos,pollo,broster,carnes,cajica,chia'),
(25, 'Asadero el fogon del pollo', '5726d31d125d1.png', 'Cra. 6 No. 4-136', '(57) (1) 866', '', 'lady.g.97@hotmail.com', 'Pollo Asado – Broaster – Pescados y Carnes – Platos a la Carta', '', '', '', 3, 1, 1, 66, 18, 44, '4.85973262555', '-74.0543746948', 'a6525415-3ddd-49d1-87d6-4cd65be80a1a', '999-888-777', 1032, '', '', 1, 'Restaurantes,pollo,asaderos,cajica,asado,broster'),
(26, 'Brackets Clínica Especializada en Ortodoncia', '5726d69e1c004.png', 'Av. Primcipal (Cra. 6) No. 8-100 Barrio Rocio', '(57) (1) 866', '310 877 5255', 'lady.g.97@hotmail.com', 'Ortodoncia\n- Odontología General\n- Blanqueamiento\n - Estética Dental\n- Rehabilitación', '', '', '', 5, 1, 2, 66, 28, 69, '4.85973262555', '-74.0571212769', 'bb946b8d-c33f-4cac-9744-49903a38b8b6', '999-888-777', 1862, '', '', 1, 'Medicina,ortodoncia,brakets,cajica,dientes,salud,clinica,limpieza,blanqueamiento dental,estetica dental'),
(27, 'Casa de la cortina y la confección', 'default.png', 'Calle 5 No. 6-66', '8830738', '312 3607123', 'lady.g.97@hotmail.com', 'Cortinas:- Blackout – Persianas – Enrolladas – Bambulita – Romanas – Austriacas – Panel Japones – Visillos', '', '', '', 4, 1, 2, 66, 20, 89, '4.86349558895', '-74.0509414673', '3fcaed8e-66ab-4100-b1c4-d0e3a3c45f1a', '999-888-777', 968, '', '', 1, 'Hogar,cortinas,persianas,Romanas,Austriacas,Visillos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE IF NOT EXISTS `favoritos` (
  `id` int(11) NOT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  `guid` varchar(60) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `id_empresa`, `guid`) VALUES
(4, 22, 'ec77c0fe-5fc1-41f5-ac62-39ea89a6a9d6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE IF NOT EXISTS `galeria` (
  `id` int(11) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id`, `imagen`, `descripcion`, `id_empresa`) VALUES
(4, '5726b1502f1a4.png', '', 22),
(5, '5726b15f12fab.png', '', 22),
(6, '5726b168c775b.png', '', 22),
(7, '5726b1742e0de.png', '', 22),
(8, '5726c8f8a2127.png', '', 23),
(9, '5726cc5886cfc.png', '', 23),
(10, '5726ce9c29977.png', '', 23),
(11, '5726ceb35175a.png', '', 23),
(12, '5726cf12e1fd2.png', '', 23),
(13, '5726d6b68f7fc.png', '', 26),
(14, '5726d6c51a66d.png', '', 26),
(15, '5726d6dc82e03.png', '', 26),
(16, '5726d6f98494a.png', '', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info`
--

CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telone` varchar(15) DEFAULT NULL,
  `teltwo` varchar(15) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `direccion` varchar(80) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `info`
--

INSERT INTO `info` (`id`, `email`, `telone`, `teltwo`, `celular`, `direccion`, `facebook`, `twitter`, `instagram`) VALUES
(1, 'alexesteban89@gmail.com', '(1) 870 7657', '(1) 870 7654', '300 745 5542', 'Av Pradilla No. 5-92 C.C. Plaza Chía Local 33 Of. 402 Chía - Cundinamarca', 'https://www.facebook.com/', 'https://www.twitter.com/', 'https://www.instagram.com/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lost_password`
--

CREATE TABLE IF NOT EXISTS `lost_password` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `guid` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE IF NOT EXISTS `pagos` (
  `id` int(11) NOT NULL,
  `guid_empresa` varchar(60) DEFAULT NULL,
  `fecha_pago` datetime DEFAULT NULL,
  `fecha_vencimiento` datetime DEFAULT NULL,
  `ref` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `guid_empresa`, `fecha_pago`, `fecha_vencimiento`, `ref`) VALUES
(15, '3e2a0447-3164-45de-afb8-678c0b3c3cfa', '2016-05-01 20:22:46', '2016-07-02 20:22:46', 'CORTESIA'),
(16, 'bb107f26-6b37-4b05-a7fa-180aaaa21a76', '2016-05-01 22:18:54', '2016-06-01 22:18:54', 'CORTESIA'),
(17, '39ec7d62-85e3-4f85-bea2-c1683cb89198', '2016-05-01 23:01:39', '2016-06-01 23:01:39', 'CORTESIA'),
(18, 'a6525415-3ddd-49d1-87d6-4cd65be80a1a', '2016-05-01 23:04:09', '2016-06-01 23:04:09', 'CORTESIA'),
(19, 'bb946b8d-c33f-4cac-9744-49903a38b8b6', '2016-05-01 23:21:08', '2016-06-01 23:21:08', 'CORTESIA'),
(20, '3fcaed8e-66ab-4100-b1c4-d0e3a3c45f1a', '2016-05-01 23:30:33', '2016-06-01 23:30:33', 'CORTESIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `panorama`
--

CREATE TABLE IF NOT EXISTS `panorama` (
  `id` int(11) NOT NULL,
  `swf` varchar(100) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE IF NOT EXISTS `planes` (
  `id` int(11) NOT NULL,
  `id_plan` int(11) DEFAULT NULL,
  `precio` varchar(15) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `planes`
--

INSERT INTO `planes` (`id`, `id_plan`, `precio`) VALUES
(1, 1, '120000'),
(2, 2, '280000'),
(3, 3, '550000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `random_map`
--

CREATE TABLE IF NOT EXISTS `random_map` (
  `id` int(11) NOT NULL,
  `id_ciudad` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `random_map`
--

INSERT INTO `random_map` (`id`, `id_ciudad`) VALUES
(1, 62),
(2, 67),
(3, 66);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `response`
--

CREATE TABLE IF NOT EXISTS `response` (
  `id` int(11) NOT NULL,
  `merchantId` varchar(30) DEFAULT NULL,
  `merchant_name` varchar(50) DEFAULT NULL,
  `merchant_address` varchar(60) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `merchant_url` varchar(100) DEFAULT NULL,
  `transactionState` int(11) DEFAULT NULL,
  `lapTransactionState` varchar(15) DEFAULT NULL,
  `message` varchar(15) DEFAULT NULL,
  `referenceCode` varchar(50) DEFAULT NULL,
  `reference_pol` varchar(20) DEFAULT NULL,
  `transactionId` varchar(40) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `trazabilityCode` varchar(20) DEFAULT NULL,
  `cus` varchar(20) DEFAULT NULL,
  `orderLanguage` char(5) DEFAULT NULL,
  `polTransactionState` int(11) DEFAULT NULL,
  `signature` varchar(50) DEFAULT NULL,
  `polResponseCode` int(11) DEFAULT NULL,
  `lapResponseCode` varchar(15) DEFAULT NULL,
  `risk` varchar(20) DEFAULT NULL,
  `polPaymentMethod` int(11) DEFAULT NULL,
  `lapPaymentMethod` varchar(25) DEFAULT NULL,
  `polPaymentMethodType` int(11) DEFAULT NULL,
  `lapPaymentMethodType` varchar(25) DEFAULT NULL,
  `installmentsNumber` int(11) DEFAULT NULL,
  `TX_VALUE` varchar(25) DEFAULT NULL,
  `buyerEmail` varchar(50) DEFAULT NULL,
  `pseBank` varchar(30) DEFAULT NULL,
  `pseReferenceo` varchar(30) DEFAULT NULL,
  `pseReferencet` varchar(30) DEFAULT NULL,
  `pseReferencetr` varchar(30) DEFAULT NULL,
  `authorizationCode` varchar(25) DEFAULT NULL,
  `processingDate` varchar(30) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripciones`
--

CREATE TABLE IF NOT EXISTS `suscripciones` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(80) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`id`, `tag`) VALUES
(1, 'Restaurantes'),
(2, 'Pizza'),
(3, 'Comida Rápida'),
(4, 'Domicilio'),
(5, 'Pizzas'),
(7, 'Tecnología'),
(9, 'Taxis'),
(11, 'helados'),
(12, 'Frutas'),
(13, 'salud'),
(14, 'ips'),
(15, 'consultorio'),
(16, 'apartamentos'),
(17, 'inmobiliaria'),
(18, 'casas'),
(19, 'terrenos'),
(20, 'proyectos'),
(21, 'fica raiz'),
(22, 'venta'),
(23, 'contadora'),
(24, 'impuestos'),
(25, 'asesoria'),
(26, 'moda'),
(27, 'medicina'),
(28, 'pan'),
(29, 'ropa'),
(30, 'publicidad'),
(31, 'eventos'),
(32, 'veterinaria'),
(33, 'vivero'),
(34, 'matas'),
(35, 'flores'),
(36, 'vidrios'),
(37, 'colchones'),
(38, 'decoracion'),
(39, 'ofas'),
(40, 'comida'),
(41, 'almuerzos'),
(42, 'juegos'),
(43, 'herramientas'),
(44, 'mecanica'),
(45, 'carros'),
(46, 'arreglo'),
(47, 'reparacion'),
(48, 'hotel'),
(49, 'colegios'),
(50, 'escuelas'),
(51, 'jardin infantil'),
(52, 'cuadernos'),
(53, 'celulares'),
(54, 'llamadas'),
(55, 'cafe'),
(56, 'confiteria'),
(57, 'fiestas'),
(58, 'oficinas'),
(59, 'tabio'),
(60, 'cajica'),
(61, 'zipaquira'),
(62, 'bogota'),
(63, 'tenjo'),
(64, 'cundinamarca'),
(65, 'abogados'),
(66, 'turismo'),
(67, 'universidades'),
(68, 'pollo'),
(69, 'asaderos'),
(70, 'carnes'),
(71, 'postres'),
(72, 'belleza'),
(73, 'peluquerias'),
(74, 'bar'),
(75, 'Impresiones'),
(76, 'seguros'),
(77, 'servicios'),
(78, 'mariachi'),
(79, 'supermercados'),
(80, 'peuquerias'),
(81, 'deporte'),
(82, 'fotografia'),
(83, 'opticas'),
(84, 'pasteleria'),
(85, 'agua'),
(86, 'alcaldia'),
(87, 'alfombras'),
(88, 'velas'),
(89, 'bicicletas'),
(90, 'ferreteria'),
(91, 'arepas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `textos`
--

CREATE TABLE IF NOT EXISTS `textos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `ubicacion` varbinary(20) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `textos`
--

INSERT INTO `textos` (`id`, `titulo`, `descripcion`, `ubicacion`) VALUES
(1, 'Solicita Cotizaciones', 'Puedes solicitar cualquier tipo de cotización GRATIS a las empresas registradas en publinet.co y ellos te enviarán los mejores \nprecios. Después sólo te queda escoger el mejor!', 0x636f74697a6163696f6e);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `avatar` blob NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `nacimiento` date NOT NULL,
  `pais` char(5) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `celular` varchar(12) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(40) NOT NULL,
  `plan` int(11) NOT NULL DEFAULT '0',
  `guid` varchar(60) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `avatar`, `nombres`, `apellidos`, `nacimiento`, `pais`, `email`, `password`, `telefono`, `celular`, `direccion`, `ciudad`, `plan`, `guid`) VALUES
(20, '', 'Alex Esteban', 'Rojas Gutierrez', '2016-06-20', 'CO', 'alexesteban_89@hotmail.es', '202cb962ac59075b964b07152d234b70', '', '', '', '', 1, 'ec77c0fe-5fc1-41f5-ac62-39ea89a6a9d6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adm_usuarios`
--
ALTER TABLE `adm_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `apps_countries`
--
ALTER TABLE `apps_countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banners_home`
--
ALTER TABLE `banners_home`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`idCiudad`), ADD KEY `idDepartamento` (`idDepartamento`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `confirmation`
--
ALTER TABLE `confirmation`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lost_password`
--
ALTER TABLE `lost_password`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `panorama`
--
ALTER TABLE `panorama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `random_map`
--
ALTER TABLE `random_map`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `response`
--
ALTER TABLE `response`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `textos`
--
ALTER TABLE `textos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adm_usuarios`
--
ALTER TABLE `adm_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `apps_countries`
--
ALTER TABLE `apps_countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=247;
--
-- AUTO_INCREMENT de la tabla `banners_home`
--
ALTER TABLE `banners_home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `idCiudad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=199;
--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `confirmation`
--
ALTER TABLE `confirmation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `lost_password`
--
ALTER TABLE `lost_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `panorama`
--
ALTER TABLE `panorama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `random_map`
--
ALTER TABLE `random_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `response`
--
ALTER TABLE `response`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=92;
--
-- AUTO_INCREMENT de la tabla `textos`
--
ALTER TABLE `textos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
