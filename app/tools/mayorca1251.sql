-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-05-2024 a las 06:11:58
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.1.2-1ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mayorca1251`
--

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `sp_BuscarUsuario`$$
CREATE DEFINER=`mayorca1251_root`@`%` PROCEDURE `sp_BuscarUsuario` (IN `_USUARIO` VARCHAR(100))   BEGIN

SELECT USUARIO, CLAVE FROM usuario where USUARIO = _USUARIO;

END$$

DROP PROCEDURE IF EXISTS `sp_CrearUsuario`$$
CREATE DEFINER=`mayorca1251_root`@`%` PROCEDURE `sp_CrearUsuario` (IN `_NOMBRE` VARCHAR(100), IN `_USUARIO` VARCHAR(100), IN `_CLAVE` VARCHAR(500))   BEGIN

INSERT INTO usuario (nombre, USUARIO, CLAVE) VALUES
(_NOMBRE, _USUARIO, _CLAVE);

END$$

DROP PROCEDURE IF EXISTS `sp_ListarUsuario`$$
CREATE DEFINER=`mayorca1251_root`@`%` PROCEDURE `sp_ListarUsuario` ()   BEGIN

SELECT * FROM usuario;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `USUARIO` varchar(100) NOT NULL,
  `CLAVE` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `nombre`, `USUARIO`, `CLAVE`) VALUES
(1, 'MARIA', 'MARIA', ''),
(2, 'SOFIA', 'SOFIA', ''),
(3, 'VERONICA', 'VERONICA', ''),
(4, 'ANA', 'ANA', ''),
(5, 'maria', 'x', '$2b$04$ibwSVFREiu/4XnLIkS0Gc.hPSVBDbym7WM3LTmYg4uS/97EU3iaxG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
