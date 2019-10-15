-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 19, 2019 at 08:34 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.26

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(127) COLLATE utf8_czech_ci DEFAULT NULL,
  `image_url` varchar(127) COLLATE utf8_czech_ci DEFAULT NULL,
  `description` text COLLATE utf8_czech_ci,
  `rating` float DEFAULT NULL,
  `released_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Truncate table before insert `games`
--

TRUNCATE TABLE `games`;
--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `image_url`, `description`, `rating`, `released_at`) VALUES
(1, 'Horizon Zero Dawn', 'http://static.metacritic.com/images/products/games/6/44c92310433887e421f9a12914eb571c-98.jpg', 'Horizon Zero Dawn is a PS4-exclusive action role playing game developed by Guerrilla Games, creators of the Killzone franchise. As Horizon Zero Dawn’s main protagonist Aloy, a skilled hunter, explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on an emotional journey to unravel mysteries of tribal societies, ancient artifacts and advanced technologies that will determine the fate of this planet, and of life itself.', 88, '2017-02-28 00:00:00'),
(2, 'For Honor', 'http://static.metacritic.com/images/products/games/3/ce3b9fbd1b16661e2f249628c530c518-98.jpg', 'For Honor is a competitive third-person melee title which mixes speed, strategy and team play with close range combat. The Chosen has survived a thousand years of wandering the southern deserts. Their journey should have wiped them out hundreds of years ago, but they survived thanks to the skill set and focus of their heroes. These individuals hoe to lead their followers to an improbable victory and to establish a new homeland. Striking fear in their enemies, The Warborn warriors sail across the Boiling Sea to raid the southern coast. Known for their fire and passion, they will seek to drive their enemies out of their ancestral lands. On the shoulders of great heroes, The Legions have driven out invaders, conquered any who wouldn\'t join them, and established hundreds of others to defend what is theirs. Facing invasion on two fronts, these heroes fight to protect their lands form the heathens who would take it.', 77, '2017-02-13 00:00:00'),
(3, 'Resident Evil 7', 'http://static.metacritic.com/images/products/games/8/60622e34f7a82fa43b6efa08537a3c35-98.jpg', 'Fear and isolation seep through the walls of an abandoned southern farmhouse. \"7\" marks a new beginning for survival horror with the Isolated View of the visceral new first-person perspective. Powered by the RE Engine, horror reaches incredible heights of immersion as players enter a terrifyingly new world of fear as they fight to survive.', 85, '2017-01-23 00:00:00'),
(4, 'The Walking Dead: The Telltale Series - A New Frontier Episode 1: Ties That Bind Part One', 'http://static.metacritic.com/images/products/games/8/7f3c3ff8151b0f280a7c08345d52141c-98.jpg', 'When family is all you have left…how far will you go to protect it? After society was ripped apart by undead hands, pockets of civilization emerge from the chaos. But at what cost? Can the living be trusted on this new frontier? As Javier, a young man determined to find the family taken from him, you meet a young girl who has experienced her own unimaginable loss. Her name is Clementine, and your fates are bound together in a story where every choice you make could be your last.', 83, '2016-12-20 00:00:00'),
(5, 'Space Hulk: Deathwing', 'http://static.metacritic.com/images/products/games/9/9cd805e3956363cecacef354cba4f424-98.jpg', 'Space Hulk: Deathwing is a first-person shooter experience that offers players the chance to experience a desperate battle against Genestealers in the claustrophobic tunnels of a Space Hulk, as they will gain skills, new abilities and new equipment thanks to experience earned during perilous missions.', 58, '2014-12-14 00:00:00'),
(6, 'Detention', 'http://static.metacritic.com/images/products/games/7/cb16c025f8efe693911bbfbab9b0a677-98.jpg', 'Detention is a survival horror game set in 1960s Taiwan under martial law. Incorporated religious elements based in Taiwanese/Chinese culture and mythology, the game provided players with unique graphics and gaming experience.', 82, '2017-01-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `game_genre`
--

DROP TABLE IF EXISTS `game_genre`;
CREATE TABLE `game_genre` (
  `game_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Truncate table before insert `game_genre`
--

TRUNCATE TABLE `game_genre`;
--
-- Dumping data for table `game_genre`
--

INSERT INTO `game_genre` (`game_id`, `genre_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 3),
(2, 4),
(2, 5),
(3, 1),
(3, 4),
(3, 6),
(3, 7),
(4, 6),
(4, 7),
(4, 8),
(5, 1),
(5, 4),
(5, 6),
(5, 9),
(6, 6),
(6, 10);

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(127) COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Truncate table before insert `genres`
--

TRUNCATE TABLE `genres`;
--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Sci-fi'),
(2, 'Fantasy'),
(3, 'RPG'),
(4, 'Action'),
(5, 'History'),
(6, 'Horror'),
(7, 'Zombie'),
(8, 'Adventure'),
(9, 'FPS'),
(10, 'Survival');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_genre`
--
ALTER TABLE `game_genre`
  ADD PRIMARY KEY (`game_id`,`genre_id`),
  ADD KEY `game_id_fk` (`game_id`),
  ADD KEY `genre_id_fk` (`genre_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
