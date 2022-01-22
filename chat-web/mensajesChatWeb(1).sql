-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 05-07-2021 a las 00:51:58
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuariosChatWeb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajesChatWeb`
--

CREATE TABLE `mensajesChatWeb` (
  `id_mensaje` int(11) NOT NULL,
  `date_mensaje` datetime NOT NULL,
  `user_origen` varchar(60) NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `user_destino` varchar(60) NOT NULL,
  `mensaje_nuevo` tinyint(1) NOT NULL,
  `esTexto` tinyint(1) NOT NULL,
  `usuariosChatWebId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mensajesChatWeb`
--

INSERT INTO `mensajesChatWeb` (`id_mensaje`, `date_mensaje`, `user_origen`, `mensaje`, `user_destino`, `mensaje_nuevo`, `esTexto`, `usuariosChatWebId`) VALUES
(75, '2021-07-02 22:29:10', 'aguslopez', 'Holaa', 'juligari', 1, 1, 4),
(76, '2021-07-02 22:39:37', 'aguslopez', 'Hola', 'juligari', 1, 1, 6),
(78, '2021-07-02 22:56:21', 'aguslopez', '1625266581387-450_1000.jpg', 'juligari', 1, 0, 6),
(79, '2021-07-02 23:20:05', 'aguslopez', '1625268005455-prueba2.txt', 'marilopez', 1, 0, 6),
(80, '2021-07-02 23:21:26', 'aguslopez', '1625268086794-450_1000.jpg', 'marilopez', 1, 0, 6),
(81, '2021-07-03 21:45:09', 'aguslopez', '1625348709689-prueba2.txt', 'mariaroman', 1, 0, 6),
(82, '2021-07-04 22:43:55', 'juligari', 'heyy', 'aguslopez', 1, 1, 1),
(83, '2021-07-04 22:44:19', 'juligari', '1625438659312-prueba2.txt', 'aguslopez', 1, 0, 1),
(84, '2021-07-04 22:44:44', 'juligari', 'hola', 'camiperez', 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajesChatWeb`
--
ALTER TABLE `mensajesChatWeb`
  ADD PRIMARY KEY (`id_mensaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajesChatWeb`
--
ALTER TABLE `mensajesChatWeb`
  MODIFY `id_mensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
