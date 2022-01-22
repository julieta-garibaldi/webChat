-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-06-2021 a las 13:16:40
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
-- Estructura de tabla para la tabla `usuariosChatWeb`
--

CREATE TABLE `usuariosChatWeb` (
  `id_usuario` int(11) NOT NULL,
  `name_usuario` varchar(60) NOT NULL,
  `lastname_usuario` varchar(60) NOT NULL,
  `user` varchar(60) NOT NULL,
  `password` varchar(200) NOT NULL,
  `mail_usuario` varchar(60) NOT NULL,
  `age_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuariosChatWeb`
--

INSERT INTO `usuariosChatWeb` (`id_usuario`, `name_usuario`, `lastname_usuario`, `user`, `password`, `mail_usuario`, `age_usuario`) VALUES
(1, 'Julieta', 'Garibaldi', 'juligari', '', 'juligari@gmail.com', 24),
(2, 'Maria', 'Lopez', 'marilopez', '', 'marialopez@gmail.com', 22),
(4, 'Camila', 'Perez', 'camiperez', '123456', 'camiperez@gmail.com', 18),
(6, 'Agustin', 'Lopez', 'aguslopez', '654321', 'aguslopez@gmail.com', 44),
(22, 'Maria', 'Roman', 'mariaroman', '123456', 'mariaroman@gmail.com', 22),
(23, 'Joaquin', 'Gomez', 'joaquingomez', '123456', 'joaquingomez@gmail.com', 26),
(24, 'Diego', 'Lopez', 'diegolopez', '123456', 'diegolopez@gmail.com', 21);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuariosChatWeb`
--
ALTER TABLE `usuariosChatWeb`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `mail_usuario` (`mail_usuario`),
  ADD UNIQUE KEY `user` (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuariosChatWeb`
--
ALTER TABLE `usuariosChatWeb`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
