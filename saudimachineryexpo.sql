-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 03:14 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saudimachineryexpo`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` year(4) DEFAULT 2024,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `year`, `created_at`, `updated_at`) VALUES
(1, 'test', '2023', '2024-01-07 23:48:51', '2024-01-07 23:48:51'),
(2, 'as33490', '2024', '2024-01-09 15:27:55', '2024-01-10 13:50:36'),
(3, 'as', '2022', '2024-01-09 16:47:26', '2024-01-09 16:47:26');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `comment` tinyint(4) NOT NULL,
  `featured_id` bigint(20) UNSIGNED DEFAULT 0,
  `featured_image` varchar(255) DEFAULT '0',
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 => Published, 2 => Draft, 3 => Trash, 4 => Private, 5 => Pending',
  `visibility` enum('Pu','PP','Pr') NOT NULL COMMENT 'Pu => Public, PP => Password Protected, Pr => Private',
  `publish_on` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `user_id`, `title`, `slug`, `content`, `excerpt`, `comment`, `featured_id`, `featured_image`, `password`, `status`, `visibility`, `publish_on`, `created_at`, `updated_at`) VALUES
(1, 1, 'Hello world!', 'hello-world', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '', 0, 0, '0', '12345678', 1, 'Pu', '2022-08-31 00:00:00', '2022-08-30 23:31:56', '2023-02-27 03:47:38'),
(2, 1, 'Assumenda quidem ut', 'Veritatis rerum vel', '<p>Aperiam molestias do.</p>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-10 23:22:51', '2023-12-11 16:33:21'),
(3, 1, 'EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE', 'event-technology-award-for-people-choice', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(4, 1, 'ICC WALES REPORTS RECORD BREAKING SUMMER', 'icc-wales-reports-record-breaking-summer', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leoQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo<br />\r\nQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo​​​​​​​</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(5, 1, 'Tree Hello world!', 'hello-world-6789-yuio', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '', 0, 0, '0', '12345678', 1, 'Pu', '2022-08-31 00:00:00', '2022-08-30 23:31:56', '2023-02-27 03:47:38'),
(6, 1, 'Assumenda quidem ut', 'Veritatis rerum vel', '<p>Aperiam molestias do.</p>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-10 23:22:51', '2023-12-11 16:33:21'),
(7, 1, 'EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE', 'event-technology-award-for-people-choice-new-count', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(8, 1, 'ICC WALES REPORTS RECORD BREAKING SUMMER', 'icc-wales-reports-record-breaking-summer-count-90o-as-ywe', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leoQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo<br />\r\nQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo​​​​​​​</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(9, 1, 'Hello world!', 'hello-world-social-icon-social-whatsapp-9', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', NULL, 0, 83, 'bIqbVTCgaaZsPs4b9Vvu8RYDthhswHwa1jcfqQOu.jpg', '12345678', 1, 'Pu', '2022-08-31 00:00:00', '2022-08-30 23:31:56', '2024-01-20 15:00:16'),
(10, 1, 'Assumenda quidem ut', '90-social-icon-social-whatsapp', '<p>Aperiam molestias do.</p>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-10 23:22:51', '2023-12-11 16:33:21'),
(11, 1, 'EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE', 'event-technology-award-for-people-choice-09-social-icon-social-whatsapp', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(12, 1, 'ICC WALES REPORTS RECORD BREAKING SUMMER', 'icc-wales-reports-record-breaking-summer-9a-social-icon-social-whatsapp', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leoQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo<br />\r\nQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo​​​​​​​</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(13, 1, 'Tree Hello world!', 'hello-world-6789-yuio-98-12-social-icon-social-whatsapp', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '', 0, 0, '0', '12345678', 1, 'Pu', '2022-08-31 00:00:00', '2022-08-30 23:31:56', '2023-02-27 03:47:38'),
(14, 1, 'Assumenda quidem ut', 'Veritatis rerum vel-aslk-social-icon-social-whatsapp', '<p>Aperiam molestias do.</p>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-10 23:22:51', '2023-12-11 16:33:21'),
(15, 1, 'EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE', 'event-technology-award-for-people-choice-new-count0-tyui-social-icon-social-whatsapp', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(16, 1, 'ICC WALES REPORTS RECORD BREAKING SUMMER', 'icc-wales-reports-record-breaking-summer-count-90o-as-ywe-7aso-associal-icon-social-whatsapp', '<h5>Quaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leoQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo<br />\r\nQuaerat, class turpis voluptates turpis nibh accumsan, tenetur faucibus? Ratione, sint leo​​​​​​​</h5>', NULL, 0, 0, '0', NULL, 1, 'Pu', '2023-12-11 00:00:00', '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(17, 1, 'What You Can Learn From Mistakes', 'what-you-can-learn-from-mistakes', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'Fitness seems to be complicated for people Fitness', 1, 0, '0', '123456', 1, 'Pu', '2022-08-31 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(18, 1, 'Why Successful People Plan Their Days Before', 'why-successful-people-plan-their-days-before', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n<cite>William Son </cite></blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', 'For a personal brand like  showcasing the authority is very', 1, 0, '0', NULL, 1, 'Pu', '2022-10-31 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(19, 1, 'Everything You Need To Know About SEO', 'everything-you-need-to-know-about-seo', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n<cite>William Son </cite></blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', 'They started description with question that demands attention', 1, 0, '0', NULL, 1, 'Pu', '2022-10-31 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(20, 1, 'Why Everyone Loves Competition For today Business', 'everyone-loves-competition', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'Why Everyone Loves Competition For today Business', 0, 0, '0', NULL, 1, 'Pu', '2022-12-19 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(21, 1, 'Photographic Tools That Made My Job Easier', 'two-photographic-tools-that-have-made-my-job-way-easier', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'Photographic Tools That Made My Job Easier', 0, 0, '0', NULL, 1, 'Pu', '2022-11-19 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(22, 1, '9 Resume Mistakes That Might Cost You a Job', '9-resume-mistakes-that-might-cost-you-a-job', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n<cite>William Son </cite></blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', '9 Resume Mistakes That Might Cost You a Job', 0, 0, '0', NULL, 1, 'Pu', '2022-10-19 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(23, 1, 'The Best Ways to grow More in Less Time', 'the-best-ways-to-grow-more-in-less-time', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'The Best Ways to grow More in Less Time', 0, 0, '0', NULL, 1, 'Pu', '2022-09-19 00:00:00', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(24, 1, 'Let Me List Them Out For You', 'let-me-list-them-out-for-you', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>&ldquo; A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. &rdquo;.</p>\r\nWilliam Son </blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', 'Let Me List Them Out For You', 0, 0, '0', NULL, 1, 'Pu', '2022-09-19 00:00:00', '2023-12-12 20:54:38', '2023-12-25 13:35:31'),
(25, 1, 'The Experience Has Taught Me Well', 'the-experience-has-taught-me-well', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n<cite>William Son </cite></blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', 'The Experience Has Taught Me Well', 0, 0, '0', NULL, 1, 'Pu', '2022-08-19 00:00:00', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(26, 1, 'Why Successful People Wear The Same Thing Every Day', 'why-successful-people-wear-the-same-thing-every-day', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										 William Son \r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'Why Successful People Wear The Same Thing Every Day', 0, 81, 'J1amgPmT48jHbi3THzddnA3OD9bkEKUtXcmvBj8q.jpg', NULL, 1, 'Pu', '2022-12-21 00:00:00', '2023-12-12 20:54:38', '2024-01-20 14:38:15'),
(27, 1, 'What No One Will Tell You But You Need To Hear About this', 'what-no-one-will-tell-you-but-you-need-to-hear-about-this', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.                   </p>\r\n\r\n<blockquote>                                        \r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n                                         William Son                                     </blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.                              </li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n                                </div>', 'What No One Will Tell You But You Need To Hear About this', 0, 0, '0', NULL, 3, 'Pu', '2022-12-21 00:00:00', '2023-12-12 20:54:38', '2024-01-20 14:39:04'),
(28, 1, 'How To Create The Perfect Thank You Page: An Epic Guide', 'how-to-create-the-perfect-thank-you-page-an-epic-guide', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'What is a thank you page?', 0, 0, '0', NULL, 1, 'Pu', '2022-12-21 00:00:00', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(29, 1, 'Mistakes To Avoid While Writing A Blog Post', 'mistakes-to-avoid-while-writing-a-blog-post', '<div class=\"dz-post-text\">\r\n									<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n									<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n									<blockquote>\r\n										<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\n										<cite> William Son </cite>\r\n									</blockquote>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n									<ul class=\"m-b30\">\r\n										<li>A wonderful serenity has taken possession.</li>\r\n										<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n										<li>I enjoy with my whole heart.</li>\r\n										<li>This spot, which was created For the bliss of souls like mine.</li>\r\n									</ul>\r\n									<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n								</div>', 'Mistakes To Avoid While Writing A Blog Post', 0, 0, '0', NULL, 1, 'Pu', '2022-12-21 00:00:00', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(30, 1, 'The Best Ways to Do Market Research For Your Business Plan', 'the-best-ways-to-do-market-research-for-your-business-plan', '<div class=\"dz-post-text\">\r\n<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>\r\n\r\n<p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>\r\n\r\n<blockquote>\r\n<p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>\r\nWilliam Son </blockquote>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>\r\n\r\n<ul class=\"m-b30\">\r\n	<li>A wonderful serenity has taken possession.</li>\r\n	<li>Of my entire soul, like these sweet mornings of spring which.</li>\r\n	<li>I enjoy with my whole heart.</li>\r\n	<li>This spot, which was created For the bliss of souls like mine.</li>\r\n</ul>\r\n\r\n<p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>\r\n</div>', 'The Best Ways to Do Market Research For Your Business Plan', 0, 0, '0', '123456', 1, 'Pu', '2022-12-19 00:00:00', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(31, 1, 'Dolor esse aliquip', 'Qui optio perferend', 'Id dignissimos qui', 'Commodo exercitation', 0, 82, 'LtheM6YJZVvqYNQzZ0eZfa2Wp3fbJix5N4sgVl7Q.jpg', NULL, 1, 'Pu', '2024-11-30 00:00:00', '2023-12-25 13:16:37', '2024-01-20 14:38:53'),
(32, 1, 'Deleniti sunt dolor', 'quod-iusto-sed-ut-ex', '<p>Ullamco aliquid et s.</p>', NULL, 0, 80, 'HOET20Vwx1Nr1J876CnEh1tvv6sXyi0duYg6JC36.jpg', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:00:49', '2024-01-20 14:37:41'),
(33, 1, 'Consequatur illum', 'las0asd-asd-asd-asd', '<p>Placeat, voluptatem .</p>', 'Dicta quia laudantiu', 1, 79, 'fg9JCjnOVJ6T3qDc2eSsQz6TbklU1t82iu6dwNBY.jpg', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:46:38', '2024-01-20 14:36:20'),
(34, 1, 'Consequatur illum', 'las0asd-asd-asd-asd-3', '<p>Placeat, voluptatem .</p>', 'Dicta quia laudantiu', 1, 74, '9U9ct8pVzbuzyBQlVKn1mUD32HsbRo8e2H8MRdDJ.png', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:48:07', '2024-01-20 14:35:25'),
(35, 1, 'Sed adipisci dolore', 'sed-adipisci-dolore', '<p>Sed adipisci dolore Nihil id voluptatem.</p>', 'Consectetur soluta', 0, 77, 'Z0L16XP3f0FvFQOnfPf52U60gzX979spDLAetQys.jpg', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:57:07', '2024-01-20 10:55:39'),
(36, 1, 'Sed adipisci dolore ore', 'sed-adipisci-dolore-ore', '<p>Sed adipisci dolore Nihil id voluptatem.</p>', 'Consectetur soluta', 0, 78, 'GomTLfYsRTiucFa13dzADKAo2R3yD8Nzp9Q3NwTa.jpg', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:58:06', '2024-01-20 14:35:06'),
(37, 1, 'Sed adipisci dolore ore', 'sed-adipisci-dolore-ore4', '<p>Sed adipisci dolore Nihil id voluptatem.</p>', 'Consectetur soluta', 0, 76, 'nb0BChgeS86zf2mAW78ceCpTk4GrBXYj2MXjsowQ.png', NULL, 1, 'Pu', '2024-01-20 00:00:00', '2024-01-20 08:59:22', '2024-01-20 10:51:08');

-- --------------------------------------------------------

--
-- Table structure for table `blog_blog_categories`
--

CREATE TABLE `blog_blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `blog_category_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_blog_categories`
--

INSERT INTO `blog_blog_categories` (`id`, `blog_id`, `blog_category_id`) VALUES
(1, 17, 1),
(2, 17, 2),
(3, 18, 3),
(4, 18, 1),
(5, 18, 4),
(6, 19, 3),
(7, 19, 5),
(8, 19, 1),
(9, 19, 4),
(10, 20, 3),
(11, 20, 1),
(12, 21, 3),
(13, 21, 5),
(14, 21, 1),
(15, 22, 5),
(16, 22, 1),
(17, 22, 4),
(18, 23, 2),
(19, 24, 3),
(20, 24, 1),
(21, 24, 2),
(22, 25, 3),
(23, 25, 5),
(24, 25, 4),
(25, 26, 3),
(26, 26, 5),
(27, 26, 1),
(28, 27, 2),
(29, 27, 4),
(30, 28, 3),
(31, 29, 2),
(32, 30, 5),
(33, 30, 4),
(34, 33, 1),
(35, 33, 2),
(36, 33, 4),
(37, 33, 5),
(38, 34, 1),
(39, 34, 2),
(40, 34, 4),
(41, 34, 5);

-- --------------------------------------------------------

--
-- Table structure for table `blog_blog_tags`
--

CREATE TABLE `blog_blog_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `blog_tag_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_blog_tags`
--

INSERT INTO `blog_blog_tags` (`id`, `blog_id`, `blog_tag_id`) VALUES
(1, 2, 1),
(2, 18, 2),
(3, 18, 3),
(4, 20, 4),
(5, 20, 5),
(6, 20, 6),
(7, 20, 3),
(8, 21, 4),
(9, 21, 6),
(10, 21, 3),
(11, 22, 4),
(12, 22, 6),
(13, 22, 7),
(14, 23, 4),
(15, 23, 5),
(16, 23, 3),
(17, 24, 5),
(18, 24, 7),
(19, 24, 3),
(20, 25, 4),
(21, 25, 6),
(22, 25, 3),
(26, 27, 2),
(27, 27, 6),
(28, 28, 5),
(29, 28, 2),
(30, 28, 3),
(31, 29, 2),
(32, 29, 3);

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `order` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `parent_id`, `user_id`, `title`, `slug`, `description`, `order`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Nature', 'nature', NULL, NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(2, NULL, 1, 'Place', 'place', NULL, NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(3, NULL, 1, 'Beauty', 'beauty', 'asdasdd', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(4, 2, 1, 'Sports', 'sports', NULL, NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(5, NULL, 1, 'Lifestyle', 'lifestyle', NULL, NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37');

-- --------------------------------------------------------

--
-- Table structure for table `blog_metas`
--

CREATE TABLE `blog_metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_metas`
--

INSERT INTO `blog_metas` (`id`, `blog_id`, `title`, `value`, `created_at`, `updated_at`) VALUES
(5, 3, 'ximage', NULL, '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(6, 3, 'xvideo', NULL, '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(7, 4, 'ximage', NULL, '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(8, 4, 'xvideo', NULL, '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(9, 2, 'ximage', NULL, '2023-12-11 16:33:21', '2023-12-11 16:33:21'),
(10, 2, 'xvideo', 'Quis ut asperiores r', '2023-12-11 16:33:21', '2023-12-11 16:33:21'),
(11, 17, 'ximage', '1671452680_pic7.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(12, 17, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(13, 18, 'ximage', '1671452696_pic8.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(14, 18, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(15, 19, 'ximage', '1671452801_pic10.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(16, 19, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(17, 20, 'ximage', '1671452926_pic9.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(18, 20, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(19, 21, 'ximage', '1672119867_pic4.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(20, 21, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(21, 22, 'ximage', '1672119652_pic5.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(22, 22, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(23, 23, 'ximage', '1672119546_pic6.jpg', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(24, 23, 'xvideo', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(27, 25, 'ximage', '1672119226_pic4.jpg', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(28, 25, 'xvideo', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(31, 27, 'ximage', '1671449713_pic7.jpg', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(32, 27, 'xvideo', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(33, 28, 'ximage', '1671451668_pic1.jpg', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(34, 28, 'xvideo', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(35, 29, 'ximage', '1671452041_pic8.jpg', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(36, 29, 'xvideo', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(37, 30, 'ximage', '1675146497_1672119546_pic6.jpg', '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(38, 30, 'xvideo', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(39, 24, 'ximage', '1703529331_pexels-lukas-kloeppel-466685.jpg', '2023-12-25 13:35:31', '2023-12-25 13:35:31'),
(40, 24, 'xvideo', NULL, '2023-12-25 13:35:31', '2023-12-25 13:35:31'),
(53, 37, 'ximage', '1705765868_2.png', '2024-01-20 10:51:08', '2024-01-20 10:51:08'),
(54, 37, 'xvideo', NULL, '2024-01-20 10:51:08', '2024-01-20 10:51:08'),
(57, 35, 'ximage', '1705766139_eventum-product5.jpg', '2024-01-20 10:55:39', '2024-01-20 10:55:39'),
(58, 35, 'xvideo', NULL, '2024-01-20 10:55:39', '2024-01-20 10:55:39'),
(59, 36, 'ximage', '1705779306_326057288_684079783211144_5184223012632068507_n.jpg', '2024-01-20 14:35:06', '2024-01-20 14:35:06'),
(60, 36, 'xvideo', NULL, '2024-01-20 14:35:06', '2024-01-20 14:35:06'),
(61, 34, 'ximage', NULL, '2024-01-20 14:35:25', '2024-01-20 14:35:25'),
(62, 34, 'xvideo', NULL, '2024-01-20 14:35:25', '2024-01-20 14:35:25'),
(63, 33, 'ximage', '1705779380_exhibitors-image-dimension.jpg', '2024-01-20 14:36:20', '2024-01-20 14:36:20'),
(64, 33, 'xvideo', NULL, '2024-01-20 14:36:20', '2024-01-20 14:36:20'),
(65, 32, 'ximage', '1705779461_chicago-city-lights-at-night.jpg', '2024-01-20 14:37:41', '2024-01-20 14:37:41'),
(66, 32, 'xvideo', NULL, '2024-01-20 14:37:41', '2024-01-20 14:37:41'),
(67, 26, 'ximage', '1705779495_eventum-img1 (1).jpg', '2024-01-20 14:38:15', '2024-01-20 14:38:15'),
(68, 26, 'xvideo', NULL, '2024-01-20 14:38:15', '2024-01-20 14:38:15'),
(69, 31, 'ximage', '1705779533_cns-mac.jpg', '2024-01-20 14:38:53', '2024-01-20 14:38:53'),
(70, 31, 'xvideo', NULL, '2024-01-20 14:38:53', '2024-01-20 14:38:53'),
(71, 9, 'ximage', '1705780816_istockphoto-1312550959-612x612.jpg', '2024-01-20 15:00:16', '2024-01-20 15:00:16'),
(72, 9, 'xvideo', NULL, '2024-01-20 15:00:16', '2024-01-20 15:00:16');

-- --------------------------------------------------------

--
-- Table structure for table `blog_seos`
--

CREATE TABLE `blog_seos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `page_title` varchar(255) DEFAULT NULL,
  `meta_keywords` text DEFAULT NULL,
  `meta_descriptions` longtext DEFAULT NULL,
  `blog_url` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_seos`
--

INSERT INTO `blog_seos` (`id`, `blog_id`, `page_title`, `meta_keywords`, `meta_descriptions`, `blog_url`, `created_at`, `updated_at`) VALUES
(1, 2, 'Labore et laudantium quisquam mollitia in dicta praesentium aliquam magni eum sint magna culpa laboris necessitatibus', 'Qui omnis velit a laborum Et anim inventore', 'Quis eveniet qui et', NULL, '2023-12-10 23:22:51', '2023-12-10 23:22:51'),
(2, 3, NULL, NULL, NULL, NULL, '2023-12-11 15:50:41', '2023-12-11 15:50:41'),
(3, 4, NULL, NULL, NULL, NULL, '2023-12-11 15:51:48', '2023-12-11 15:51:48'),
(4, 17, 'test seo2', 'yurtyurtyu', 'rtyurtyu', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(5, 18, 'test seo', 'admin@localhost.com', 'sdfgdfg', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(6, 19, 'sdfsf', 'sdfsdf', 'sdfsdf', NULL, '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(7, 27, NULL, NULL, NULL, NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(8, 30, NULL, NULL, NULL, NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(9, 24, NULL, NULL, NULL, NULL, '2023-12-25 13:35:31', '2023-12-25 13:35:31'),
(10, 32, 'Quas nisi dolor voluptatem non itaque quisquam ad amet maiores doloremque', 'Fugiat repudiandae ducimus officiis illum molestiae', 'Qui et do dolor vel', NULL, '2024-01-20 08:00:49', '2024-01-20 08:00:49'),
(11, 33, NULL, NULL, NULL, NULL, '2024-01-20 08:46:38', '2024-01-20 08:46:38'),
(12, 34, NULL, NULL, NULL, NULL, '2024-01-20 08:48:07', '2024-01-20 08:48:07'),
(13, 35, 'Dolore accusamus dolor anim eum placeat rem commodo dolor architecto necessitatibus perspiciatis veniam suscipit tempora temporibus neque', 'Consequuntur reprehenderit qui quis tenetur sunt quis dolor velit aut aut a similique accusamus atque pariatur Voluptatem reprehenderit', 'Magnam laborum magna', NULL, '2024-01-20 08:57:07', '2024-01-20 08:57:07'),
(14, 36, 'Dolore accusamus dolor anim eum placeat rem commodo dolor architecto necessitatibus perspiciatis veniam suscipit tempora temporibus neque', 'Consequuntur reprehenderit qui quis tenetur sunt quis dolor velit aut aut a similique accusamus atque pariatur Voluptatem reprehenderit', 'Magnam laborum magna', NULL, '2024-01-20 08:58:06', '2024-01-20 08:58:06'),
(15, 37, 'Dolore accusamus dolor anim eum placeat rem commodo dolor architecto necessitatibus perspiciatis veniam suscipit tempora temporibus neque', 'Consequuntur reprehenderit qui quis tenetur sunt quis dolor velit aut aut a similique accusamus atque pariatur Voluptatem reprehenderit', 'Magnam laborum magna', NULL, '2024-01-20 08:59:22', '2024-01-20 08:59:22'),
(16, 26, NULL, NULL, NULL, NULL, '2024-01-20 14:38:15', '2024-01-20 14:38:15'),
(17, 31, NULL, NULL, NULL, NULL, '2024-01-20 14:38:53', '2024-01-20 14:38:53'),
(18, 9, NULL, NULL, NULL, NULL, '2024-01-20 15:00:15', '2024-01-20 15:00:15');

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE `blog_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_tags`
--

INSERT INTO `blog_tags` (`id`, `user_id`, `title`, `slug`, `created_at`, `updated_at`) VALUES
(1, 1, 'Ducimus recusandae', 'ducimus-recusandae', '2023-12-10 23:22:51', '2023-12-10 23:22:51'),
(2, 1, 'Application', 'application', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(3, 1, 'Education', 'education', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(4, 1, 'Businesses', 'businesses', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(5, 1, 'Employees', 'employees', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(6, 1, 'Company', 'company', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(7, 1, 'Jobs', 'jobs', '2023-12-12 20:54:37', '2023-12-12 20:54:37'),
(8, 1, 'Aliquip quaerat aut', 'aliquip-quaerat-aut', '2024-01-20 08:46:38', '2024-01-20 08:46:38');

-- --------------------------------------------------------

--
-- Table structure for table `catalogues`
--

CREATE TABLE `catalogues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `exhibition_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `year` year(4) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `comment` tinyint(4) NOT NULL,
  `featured_id` bigint(20) UNSIGNED DEFAULT 0,
  `featured_image` varchar(255) DEFAULT '0',
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keywords` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 => Published, 2 => Draft, 3 => Trash, 4 => Private, 5 => Pending',
  `visibility` enum('Pu','PP','Pr') NOT NULL COMMENT 'Pu => Public, PP => Password Protected, Pr => Private',
  `publish_on` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogues`
--

INSERT INTO `catalogues` (`id`, `user_id`, `exhibition_id`, `title`, `slug`, `year`, `content`, `excerpt`, `comment`, `featured_id`, `featured_image`, `meta_title`, `meta_description`, `meta_keywords`, `password`, `status`, `visibility`, `publish_on`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Cum exercitationem q', 'Mollitia magni ex et', '2024', 'Nulla aut sequi proi', 'Quisquam temporibus', 0, 69, '0', NULL, NULL, NULL, NULL, 5, 'Pu', '0000-00-00 00:00:00', '2024-01-06 08:10:41', '2024-01-06 08:10:41'),
(2, 1, 1, '12Cum exercitationem q', 'Mollitia magni ex etas', '2024', 'Nulla aut sequi proi', 'Quisquam temporibus', 0, 0, '0', NULL, NULL, NULL, NULL, 5, 'Pu', '0000-00-00 00:00:00', '2024-01-06 08:10:41', '2024-01-06 08:10:41'),
(3, 1, 1, 'Officia sit labore', 'Velit vel fuga Eius', '2024', '<p>Laudantium, ipsa, qu.</p>', NULL, 1, 0, '0', NULL, NULL, NULL, NULL, 2, 'Pu', '2024-01-13 00:00:00', '2024-01-13 04:11:37', '2024-01-13 04:11:37');

-- --------------------------------------------------------

--
-- Table structure for table `configurations`
--

CREATE TABLE `configurations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL,
  `value` text DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `input_type` varchar(255) DEFAULT NULL,
  `editable` tinyint(4) NOT NULL DEFAULT 1,
  `weight` int(11) DEFAULT NULL,
  `params` text DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `configurations`
--

INSERT INTO `configurations` (`id`, `name`, `value`, `title`, `description`, `input_type`, `editable`, `weight`, `params`, `order`) VALUES
(1, 'Site.title', 'Pakistan Industrial Showcase and Sino-Pak Business Collaboration Forum', NULL, NULL, 'text', 1, 1, NULL, 0),
(2, 'Site.tagline', 'Expo on Pakistani Industries\r\nForum for Business Collaboration Between Pakistan and China', NULL, NULL, 'textarea', 1, 2, NULL, 3),
(3, 'Site.email', 'info@pakindustrialexpo.com', NULL, '+92-42-35401419', 'text', 1, 3, NULL, 2),
(4, 'Site.status', '1', NULL, NULL, 'checkbox', 1, 4, NULL, 4),
(5, 'Site.copyright', 'Crafted with <span class=\"heart\"></span> by <a class=\"acolor-white\" href=\"https://www.pakindustrialexpo.com/\\\" target=\\\"_blank\\\">pakindustrialexpo</a>', 'Copyright Text', NULL, 'text', 1, 5, NULL, 5),
(6, 'Site.footer_text', 'Developed by <a href=\"https://www.pakindustrialexpo.com/\\\" target=\\\"_blank\\\">pakindustrialexpo</a>', 'Footer text', NULL, 'textarea', 1, 6, NULL, 6),
(7, 'Site.coming_soon', '0', NULL, NULL, 'checkbox', 1, 7, NULL, 7),
(8, 'Site.contact', '+92-42-35401419', NULL, NULL, 'text', 1, 8, NULL, 8),
(9, 'Site.logo', '49', 'Logo', 'Site Logo', 'file', 1, 9, NULL, 9),
(10, 'Site.favicon', '49', 'Site Favicon', 'Site Favicon', 'file', 1, 10, NULL, 10),
(11, 'Site.maintenance_message', 'PLEASE SORRY FOR THE <span class=\"text-primary\">DISTURBANCES</span>', 'Maintenance Message', 'Site down for maintenance Message will show on maintenance page', 'textarea', 1, 11, NULL, 13),
(12, 'Site.comingsoon_message', 'We Are Coming Soon !', 'Coming Soon Message', 'Coming soon message will show on coming soon page', 'textarea', 1, 12, NULL, 11),
(13, 'Site.text_logo', '49', 'Text Logo', NULL, 'file', 1, 13, NULL, 12),
(14, 'Writing.editable', '1', 'Enable WYSIWYG editor', NULL, 'checkbox', 1, 14, NULL, 14),
(15, 'Reading.nodes_per_page', '10', NULL, NULL, 'text', 1, 15, NULL, 15),
(16, 'Reading.date_time_format', 'M. d, Y, g:i A', NULL, 'Formates :- <br>\r\nF j, Y, g:i a (November 23, 2022, 5:45 am), <br>\r\nY-m-d , H:i (2022-11-23, 05:45), <br>\r\nm/d/Y (11/23/2022), <br>\r\nd/m/Y(23/11/2022)', 'text', 1, 16, NULL, 16),
(17, 'Social.instagram', 'https://www.instagram.com/', 'Instagram Url', NULL, 'text', 1, 17, NULL, 17),
(18, 'Social.linkedin', 'https://www.in.linkedin.com/', 'Whatsapp Url', NULL, 'text', 1, 17, NULL, 17),
(19, 'Social.facebook', 'http://www.facebook.com', 'Facebook Url', NULL, 'text', 1, 18, NULL, 18),
(20, 'Social.twitter', 'http://www.twitter.com', 'Twitter Url', NULL, 'text', 1, 19, NULL, 19),
(21, 'Site.menu_location', 'a:5:{s:7:\"primary\";a:2:{s:5:\"title\";s:23:\"Desktop Horizontal Menu\";s:4:\"menu\";s:1:\"1\";}s:8:\"expanded\";a:2:{s:5:\"title\";s:21:\"Desktop Expanded Menu\";s:4:\"menu\";s:1:\"3\";}s:6:\"mobile\";a:2:{s:5:\"title\";s:11:\"Mobile Menu\";s:4:\"menu\";N;}s:6:\"footer\";a:2:{s:5:\"title\";s:11:\"Footer Menu\";s:4:\"menu\";s:1:\"1\";}s:6:\"social\";a:2:{s:5:\"title\";s:11:\"Social Menu\";s:4:\"menu\";s:0:\"\";}}', NULL, NULL, 'text', 0, 20, NULL, 20),
(22, 'Permalink.settings', '/%slug%/', '', NULL, 'text', 1, 21, NULL, 21),
(23, 'Reading.show_on_front', 'Page', NULL, '(Home Page)', 'radio', 1, 22, 'Post,Page', 22),
(24, 'Widget.show_sidebar', '1', NULL, NULL, 'checkbox', 1, NULL, '1', 0),
(25, 'Widget.show_recent_post_widget', '1', NULL, NULL, 'checkbox', 1, NULL, '1', 0),
(26, 'Widget.show_category_widget', '0', NULL, '', 'checkbox', 1, NULL, '1', 0),
(27, 'Widget.show_archives_widget', '0', NULL, '', 'checkbox', 1, NULL, '1', 0),
(28, 'Widget.show_search_widget', '0', NULL, NULL, 'checkbox', 1, NULL, '1', 0),
(29, 'Widget.show_tags_widget', '0', NULL, '', 'checkbox', 1, NULL, '1', 0),
(30, 'Site.comingsoon_date', '2023-02-27', NULL, '', 'date', 1, NULL, '', 0),
(31, 'Site.biography', 'A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.', NULL, '', 'text', 1, NULL, '', 0),
(32, 'Site.location', 'Pakistan Office Building No. 16, Samsani Road, Block M, Johar Town, Lahore', NULL, '', 'text', 1, NULL, '', 0),
(33, 'Site.office_time', 'Time 09:00 AM To 07:00 PM', NULL, 'Ex. : \"Time 06:00 AM To 08:00 PM\'', 'text', 1, NULL, '', 0),
(34, 'Site.icon_logo', '49', NULL, '', 'file', 1, NULL, '', 0),
(35, 'Theme.home_slider', 'hVb2rBZWmSvbwac23xvFwB6VV3LjjsctQA5kWzZu.jpg,o5EKtmWHB6jkANLnFpnoqRHUy7RWH7xBsmMulGAp.jpg,h3sl5YReWHNyyeDaIf4a7mH3pamyCkmrVUuI59Ar.jpg', 'Home Banner Slider', 'Select Images for home banner slider', 'multiple_file', 1, NULL, NULL, 0),
(36, 'Theme.select_theme', 'w3cms/saudimachineryexpo', NULL, NULL, NULL, 0, NULL, NULL, 0),
(44, 'Site.banner_title', 'Pakistan Industrial Expo', 'Banner Title', '', 'text', 1, NULL, '', 0),
(45, 'Site.middle_title', 'Pak-China Business Forum', 'Middle Title', '', 'text', 1, NULL, '', 0),
(46, 'Site.title_after_middle', '7th Pakistan Industrial Expo', 'Title After Middle', '', 'text', 1, NULL, '', 0),
(47, 'Site.banner_paragraph', '8th Pakistan Industrial Expo', 'Banner Paragraph', '', 'text', 1, NULL, '', 0),
(48, 'Site.banner_background', '28', 'Banner Background', 'Banner Background', 'file', 1, 9, NULL, 9),
(49, 'Site.exhibition_count_on_homepage', '8', 'Exhibition count', NULL, 'text', 1, NULL, NULL, 0),
(50, 'Home.exhibition_expert', 'Immerse yourself in the world of contemporary art and innovation through our curated exhibition, featuring thought-provoking works by talented artists from around the globe.', 'Home Exhibition Desc', 'Home Exhibition Section Description', 'textarea', 1, NULL, NULL, 0),
(51, 'Home.eventStart', '2024-11-09', 'Event Schedule Start Date', 'Event Start Date', 'date', 1, NULL, '', 0),
(52, 'Home.eventEnd', '2024-11-11', 'Event Schedule End Date', 'Event Schedule End Date', 'date', 1, NULL, '', 0),
(53, 'Home.eventHeading', 'What We Do', NULL, 'event details what we do', 'text', 1, NULL, NULL, 0),
(54, 'Home.eventDescription', 'Everest International Expo orchestrates exhibitions of national and international significance, adapting our strategies to the evolving business landscape. Embracing innovation, we are transitioning towards intelligent and dynamic exhibitions to stay at the forefront of the industry.', 'Event Service Description', 'Service Description', 'text', 1, NULL, '', 0),
(55, 'Home.eventServices', 'a:6:{i:1;a:3:{s:4:\"icon\";s:10:\"icon-globe\";s:7:\"heading\";s:25:\"International Exhibitions\";s:11:\"description\";s:121:\"Everest is organizing international exhibitions in Pakistan, Kenya, United Arab Emirates, South Africa, and Saudi Arabia.\";}i:2;a:3:{s:4:\"icon\";s:18:\"icon-communication\";s:7:\"heading\";s:12:\"Match Making\";s:11:\"description\";s:81:\"Everest provides accurate match-making services for both visitors and exhibitors.\";}i:3;a:3:{s:4:\"icon\";s:13:\"icon-building\";s:7:\"heading\";s:28:\"Display Center and Warehouse\";s:11:\"description\";s:192:\"Everest has set up long-term display center and warehouse in Lahore, Pakistan, which does provide local business people with convenience in trade links such as sample check and transportation.\";}i:4;a:3:{s:4:\"icon\";s:10:\"icon-team2\";s:7:\"heading\";s:29:\"Business-to-Business Meetings\";s:11:\"description\";s:136:\"Everest is holding B2B meetings all year round in Pakistan and China, building an efficient platform for business partner communication.\";}i:5;a:3:{s:4:\"icon\";s:11:\"icon-search\";s:7:\"heading\";s:15:\"Market Research\";s:11:\"description\";s:164:\"Everest provides in-depth on-site understanding of the development of each industry in Pakistan and China, providing reference and support for business development.\";}i:6;a:3:{s:4:\"icon\";s:12:\"icon-factory\";s:7:\"heading\";s:25:\"Factory Visiting in China\";s:11:\"description\";s:200:\"Everest assists business travelers to China in visiting factories and customizing routes to facilitate and efficiently utilize the business trips, exploring the market and selecting business partners.\";}}', 'Home Services Section', 'All Services Of home Section', 'text', 1, NULL, '', 0),
(56, 'Home.scheduleSection', '<span class=\"section-sub-title\">SCHEDULE DETAILS</span><h3 class=\"section-title\">INFORMATION OF EVENT SCHEDULE !</h3><p class=\"section-paragraph\">Discover the detailed schedule for our upcoming events. Immerse yourself in a carefully curated agenda filled with engaging activities, informative sessions, and valuable networking opportunities. Whether you`re interested in in-person networking, boosting creativity, or attending after-party events, our schedule has something for everyone. Join us on the following dates to make the most out of your event experience</p>', 'Schedule Section', 'Schedule Section Content', 'textarea', 1, NULL, '', 0),
(57, 'Home.eventLocation', 'Hall No. 1 & 2, Expo Center, Lahore, Punjab, Pakistan', 'Event Location', 'Where is the Event Location', 'text', 1, NULL, '', 0),
(58, 'Home.aboutGallaryLeftFirstImage', NULL, 'About Gallary Left 1st Image', 'After Banner Left First Image', 'file', 1, NULL, '', 0),
(59, 'Home.aboutGallaryLeftSecondImage', NULL, 'About Gallary Left 2nd Image', 'About Gallary Left 2nd Image', 'file', 1, NULL, '', 0),
(60, 'Home.aboutGallaryLeftThirdImage', NULL, 'About Gallary Left 3rd Image', 'After Banner Left 3rd Image', 'file', 1, NULL, '', 0),
(61, 'Home.aboutGallaryRightFirstImage', NULL, 'About Gallary Right 1st Image', 'After Banner Right 1st Image', 'file', 1, NULL, '', 0),
(62, 'Home.aboutGallaryRightSecondImage', NULL, 'About Gallary Right 2nd Image', 'After Banner Right 2nd Image', 'file', 1, NULL, '', 0),
(63, 'Home.progressContent', 'a:4:{i:0;a:2:{s:5:\"count\";s:7:\"120,000\";s:5:\"label\";s:13:\"TOTAL VISTIRS\";}i:1;a:2:{s:5:\"count\";s:3:\"450\";s:5:\"label\";s:25:\"PARTICIPATING ENTERPRISEE\";}i:2;a:2:{s:5:\"count\";s:2:\"48\";s:5:\"label\";s:14:\"TOTAL PROJECTS\";}i:3;a:2:{s:5:\"count\";s:2:\"35\";s:5:\"label\";s:19:\"SPONSORS & PARTNERS\";}}', 'Home Progress Section', 'Home Progress Section Counts', 'textarea', 1, NULL, '', 0),
(64, 'Home.eventSection', '29', 'Home Event Section Background', 'Event Section Background Image', 'file', 1, NULL, '', 0),
(65, 'Home.firstroutineDetail', NULL, 'Home first routine Detail', 'Home first routine Detail in the param we will manage the other content', 'file', 1, NULL, 'a:4:{s:4:\"time\";s:20:\"10:00 AM to 11:30 AM\";s:12:\"subjectTitle\";s:23:\"Exhibition Inauguration\";s:12:\"chapterTitle\";s:22:\"Grand Opening Ceremony\";s:9:\"paragraph\";s:221:\"Join us for the grand inauguration of Pakindustrial Expo. Explore a diverse range of industrial products and services showcased by leading companies. This ceremony marks the beginning of an exciting exhibition experience.\";}', 0),
(66, 'Home.secondroutineDetail', NULL, 'Home second routine Detail', 'Home second routine Detail in the param we will manage the other content', 'file', 1, NULL, 'a:4:{s:4:\"time\";s:20:\"12:00 PM to 01:30 PM\";s:12:\"subjectTitle\";s:23:\"Industry Trends Seminar\";s:12:\"chapterTitle\";s:28:\"Navigating Future Challenges\";s:9:\"paragraph\";s:191:\"Dive into an insightful seminar on current industry trends and future challenges. Industry experts will share their perspectives on navigating the dynamic landscape of industrial development.\";}', 0),
(67, 'Home.thirdroutineDetail', NULL, 'Home third routine Detail', 'Home third routine Detail in the param we will manage the other content', 'file', 1, NULL, 'a:4:{s:4:\"time\";s:20:\"02:00 PM to 03:30 PM\";s:12:\"subjectTitle\";s:18:\"Networking Session\";s:12:\"chapterTitle\";s:29:\"Connect with Industry Leaders\";s:9:\"paragraph\";s:186:\"Engage in a networking session with key industry leaders and potential business partners. Build valuable connections and explore collaborative opportunities within the industrial sector.\";}', 0),
(68, 'Home.fourthroutineDetail', NULL, 'Home fourth routine Detail', 'Home fourth routine Detail in the param we will manage the other content', 'file', 1, NULL, 'a:4:{s:4:\"time\";s:20:\"04:00 PM to 05:30 PM\";s:12:\"subjectTitle\";s:16:\"Product Showcase\";s:12:\"chapterTitle\";s:31:\"Innovative Industrial Solutions\";s:9:\"paragraph\";s:172:\"Witness a diverse array of industrial products and solutions in our exclusive product showcase. Explore innovations that are shaping the future of the industrial landscape.\";}', 0),
(69, 'Home.eventGallery', 'EVENT GALLERY', 'Home Event Gallery Detail', 'Home Event Gallery Detail With Count and other data', 'text', 1, NULL, 'a:3:{s:12:\"sectionTitle\";s:47:\"A GLIMPSE OF OUR PAST YEAR\'S MEMORABLE MOMENTS!\";s:16:\"sectionParagraph\";s:218:\"Explore the captivating visuals that encapsulate the essence of our previous events. Immerse yourself in the vibrant images showcasing the excitement, innovation, and unforgettable experiences from our past gatherings.\";s:12:\"galleryCount\";s:1:\"8\";}', 0),
(70, 'Home.aboutRightContent', 'INTRODUCTION', 'Home Introduction Detail', 'Home about content and other data', 'text', 1, NULL, 'a:4:{s:12:\"sectionTitle\";s:40:\"KNOW MORE ABOUT PAKISTAN INDUSTRIAL EXPO\";s:16:\"sectionParagraph\";s:335:\"The Pakistan Industrial Exhibition has been successfully held for seven consecutive sessions since 2017. With seven years of cultivation, the Pakistan Industrial Exhibition has become an important platform for economic and trade exchanges between enterprises in China and Pakistan. It has become a famous industrial expo in South Asia.\";s:14:\"aboutFirstlist\";s:154:\"Everest provides accurate match-making services for both visitors and exhibitors, ensuring a comprehensive and beneficial experience for each participant.\";s:16:\"aboutSecondtlist\";s:129:\"The company leverages the abundant resources in Pakistan, offering business people services that go beyond the exhibition itself.\";}', 0),
(71, 'Home.history2017', '2017', 'History of Exhibition', '', 'text', 1, NULL, '', 0),
(72, 'About.whoWeAreSection', 'Everest is the famous international expo company located in Pakistan with abundant resources of government, chambers, associations and enterprises. The reason why Everest can highlight from a plenty of local expo companies is Everest focus on accurate match-making service for every exhibitor. Rely on the abundant Pakistani resource, every exhibitor of it gain the service much more than exhibition it selves. And just because of this, Everest establish the figures of professional and high quality. In the meanwhile, Everest won the praise and recognition from all over the world.', 'About Who We Are Section', 'About Who We Are Section', 'text', 1, NULL, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exhibitions`
--

CREATE TABLE `exhibitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `year` year(4) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `comment` tinyint(4) NOT NULL,
  `featured_id` bigint(20) UNSIGNED DEFAULT 0,
  `featured_image` varchar(255) DEFAULT '0',
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keywords` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 => Published, 2 => Draft, 3 => Trash, 4 => Private, 5 => Pending',
  `visibility` enum('Pu','PP','Pr') NOT NULL COMMENT 'Pu => Public, PP => Password Protected, Pr => Private',
  `publish_on` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `exhibitions`
--

INSERT INTO `exhibitions` (`id`, `user_id`, `title`, `slug`, `year`, `content`, `excerpt`, `comment`, `featured_id`, `featured_image`, `meta_title`, `meta_description`, `meta_keywords`, `password`, `status`, `visibility`, `publish_on`, `created_at`, `updated_at`) VALUES
(1, 1, 'Tempore voluptates', 'Laboriosam voluptat', '2023', 'Sit eu consectetur', 'Pariatur Ut suscipi', 0, 19, 'fouQr6dOSp219NhgGQFcIIxpGGkCWojimhJ9CpyY.jpg', NULL, NULL, NULL, NULL, 1, 'PP', '2023-12-06 04:04:06', '2023-12-26 17:46:27', '2023-12-26 17:46:27'),
(73, 1, 'Deserunt iure est et', 'Dolorem a enim dolor', '2023', 'Dolor sequi qui ut d', 'Doloremque in qui au', 0, 20, 'fjqLc7YeQDUKdrYCF0D6L2148KN6R1DLYHwXvAPo.jpg', NULL, NULL, NULL, NULL, 1, 'PP', '2023-12-06 04:04:06', '2023-12-26 17:46:46', '2023-12-26 17:46:46'),
(74, 1, 'Qui sunt incidunt c', 'Voluptatem et maiore', '2023', 'Earum mollit quia ve', 'Sunt molestias null', 0, 0, '0', NULL, NULL, NULL, NULL, 2, 'Pr', '0000-00-00 00:00:00', '2023-12-26 18:17:16', '2023-12-26 18:17:16'),
(75, 1, 'Engineering & Construction Machinery', 'animi-consectetur', '2024', '<p>Engineering &amp; Construction Machinery</p>', 'Engineering & Construction Machinery', 0, 0, '0', NULL, NULL, NULL, NULL, 1, 'Pu', '2024-01-06 00:00:00', '2024-01-06 09:07:13', '2024-01-06 12:52:45'),
(76, 1, 'Agricultural Machinery', 'dolor-rerum-pariatur', '2024', '<p>Agricultural Machinery</p>', 'Agricultural Machinery', 1, 33, '0', NULL, NULL, NULL, NULL, 1, 'Pu', '2024-01-06 00:00:00', '2024-01-06 09:08:29', '2024-01-06 12:51:55'),
(77, 1, 'CNC Machinery', 'cnc-machinery', '2024', '<p>CNC Machinery</p>', 'CNC Machinery', 0, 0, '0', NULL, NULL, NULL, NULL, 1, 'Pu', '2024-01-06 00:00:00', '2024-01-06 12:55:11', '2024-01-06 12:55:11'),
(78, 1, 'Health & Medicine', 'health-&-medicine', '2024', '<p>Health &amp; Medicine</p>', 'Health & Medicine', 0, 0, '0', NULL, NULL, NULL, NULL, 1, 'Pu', '2024-01-06 00:00:00', '2024-01-06 12:57:18', '2024-01-06 12:57:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `uuid` char(36) DEFAULT NULL,
  `collection_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `disk` varchar(255) NOT NULL,
  `conversions_disk` varchar(255) DEFAULT NULL,
  `size` bigint(20) UNSIGNED NOT NULL,
  `manipulations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`manipulations`)),
  `custom_properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`custom_properties`)),
  `generated_conversions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`generated_conversions`)),
  `responsive_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`responsive_images`)),
  `order_column` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `model_type`, `model_id`, `uuid`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `conversions_disk`, `size`, `manipulations`, `custom_properties`, `generated_conversions`, `responsive_images`, `order_column`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Configuration', 9, '7a3d2c8b-0835-4063-a17a-761be14ddfaf', 'images', 'ZkblPHttyrO5D2fUWYqV8f6BmohKKtRsESUmzKvy', 'ZkblPHttyrO5D2fUWYqV8f6BmohKKtRsESUmzKvy.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 1, '2023-12-12 10:00:05', '2023-12-12 10:00:05'),
(2, 'App\\Models\\Configuration', 10, '2cd09746-c2e4-4c40-9df7-a707cd8efbff', 'images', 'dZtbrzamkKq00HXANWN3KBFmOUrJjIcXUTxAL7Av', 'dZtbrzamkKq00HXANWN3KBFmOUrJjIcXUTxAL7Av.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 1, '2023-12-12 10:10:32', '2023-12-12 10:10:32'),
(3, 'App\\Models\\Configuration', 13, 'f99d9cd7-ac4e-46ea-8be1-8a9757a21244', 'images', '83mhxHyan6LtDFzFgfAicPquP3FfcZBRcfjlbpec', '83mhxHyan6LtDFzFgfAicPquP3FfcZBRcfjlbpec.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 1, '2023-12-12 10:10:32', '2023-12-12 10:10:32'),
(4, 'App\\Models\\Configuration', 34, '66de572f-c212-4876-843c-4b891d4af0b4', 'images', 'Og2EHp17wcUStTfuPfRrAkrasv1FxP0Ngt7eG3wi', 'Og2EHp17wcUStTfuPfRrAkrasv1FxP0Ngt7eG3wi.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 1, '2023-12-12 10:10:32', '2023-12-12 10:10:32'),
(5, 'App\\Models\\Configuration', 48, 'fbc03a28-6915-4c5a-a435-db4d56102727', 'images', 'El9OIZueZsU6VDrUVeF30h4VyfljdM5U7o84WEyp', 'El9OIZueZsU6VDrUVeF30h4VyfljdM5U7o84WEyp.jpg', 'image/jpeg', 'public', 'public', 166956, '[]', '[]', '[]', '[]', 1, '2023-12-19 15:57:24', '2023-12-19 15:57:24'),
(6, 'App\\Models\\Exhibition', 21, '243e083e-f3bd-4597-ac4f-d512d87e173e', 'images', '6589d2ffbec29_1703531263', '6589d2ffbec29_1703531263.png', 'text/plain', 'public', 'public', 4, '[]', '[]', '[]', '[]', 1, '2023-12-25 14:07:45', '2023-12-25 14:07:45'),
(7, 'App\\Models\\Exhibition', 50, '30eff6c9-f837-486c-923b-94b1df53204f', 'images', 'ajseJ08g7UZzOmAh9X7w0QmWO5EkNnSIzAhg32Z5', 'ajseJ08g7UZzOmAh9X7w0QmWO5EkNnSIzAhg32Z5.jpg', 'image/jpeg', 'public', 'public', 150317, '[]', '[]', '[]', '[]', 1, '2023-12-26 14:51:10', '2023-12-26 14:51:10'),
(8, 'App\\Models\\Exhibition', 51, '4073bdf1-2b2c-47b7-8317-46562fa40674', 'images', 'CQ5cyFyhjgALjyA32mQ60LO2WNVptDzm2GZhVsBv', 'CQ5cyFyhjgALjyA32mQ60LO2WNVptDzm2GZhVsBv.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 14:52:01', '2023-12-26 14:52:01'),
(9, 'App\\Models\\Exhibition', 52, '9a3cb1ed-0c71-4c4e-96a7-d38957befd11', 'images', 'FIkXgV6JpkEYBtuMRmPuODuxurFuq3kYXZPq8tX7', 'FIkXgV6JpkEYBtuMRmPuODuxurFuq3kYXZPq8tX7.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 14:53:11', '2023-12-26 14:53:11'),
(10, 'App\\Models\\Exhibition', 55, 'decdcff5-b7ac-4b5e-ad17-3c53f66bbdb8', 'images', 'BE7b21kcH4tOgijC8uPtYjFmHEAsz7G0ljOhxs4s', 'BE7b21kcH4tOgijC8uPtYjFmHEAsz7G0ljOhxs4s.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 14:59:47', '2023-12-26 14:59:47'),
(11, 'App\\Models\\Exhibition', 56, 'ad75cafe-e5f3-4063-ab52-f97859727f74', 'images', '2CEHOEZfCfq8pSYo4g5EqmevUyXfYBMEuGyumbP9', '2CEHOEZfCfq8pSYo4g5EqmevUyXfYBMEuGyumbP9.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 15:00:24', '2023-12-26 15:00:24'),
(12, 'App\\Models\\Exhibition', 57, '8cca849b-36b6-4dbb-9d8c-01c8e9220a2a', 'images', 'tZnSk9Tw6UP4q7x6yvjGdpkDr5eL4Y8QXsWK6hLK', 'tZnSk9Tw6UP4q7x6yvjGdpkDr5eL4Y8QXsWK6hLK.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 15:12:38', '2023-12-26 15:12:38'),
(13, 'App\\Models\\Exhibition', 58, '5ecb68a6-9914-482d-96e0-7b370d657601', 'images', '0rHmjgWQzllLwEuxbBscjk9YODYu0aZdCk0qhZP7', '0rHmjgWQzllLwEuxbBscjk9YODYu0aZdCk0qhZP7.jpg', 'image/jpeg', 'public', 'public', 54089, '[]', '[]', '[]', '[]', 1, '2023-12-26 15:16:14', '2023-12-26 15:16:14'),
(14, 'App\\Models\\Configuration', 48, '74aff63f-9ff5-4824-8e5c-54432b95865a', 'images', 'I2coJKUhKn4ELvQMZKAHVx2gy2VruDNgLazIlngr', 'I2coJKUhKn4ELvQMZKAHVx2gy2VruDNgLazIlngr.png', 'image/png', 'public', 'public', 10020, '[]', '[]', '[]', '[]', 2, '2023-12-26 15:56:38', '2023-12-26 15:56:38'),
(15, 'App\\Models\\Exhibition', 68, '1b0622f8-d7a6-473a-81ca-ba776af3d9c5', 'images', '1uW43bRB2ygXmS2fVxUSY0z04J0UbfCQqzXtfjsR', '1uW43bRB2ygXmS2fVxUSY0z04J0UbfCQqzXtfjsR.png', 'image/png', 'public', 'public', 3216, '[]', '[]', '[]', '[]', 1, '2023-12-26 16:41:55', '2023-12-26 16:41:55'),
(16, 'App\\Models\\Exhibition', 69, 'c9d47dbb-5fce-4b7e-a2ce-a614d7b9e58a', 'images', 'YlPF6wiGDoCZTIXavPnOSFCaxHu1G29PTUP7fg9Z', 'YlPF6wiGDoCZTIXavPnOSFCaxHu1G29PTUP7fg9Z.png', 'image/png', 'public', 'public', 3216, '[]', '[]', '[]', '[]', 1, '2023-12-26 16:46:04', '2023-12-26 16:46:04'),
(17, 'App\\Models\\Exhibition', 70, 'd0dc6131-3724-48fd-8b3c-fc9073453ce7', 'images', '83LtVRzvXrbauSWsJbgwp69QsH6PpVxbYThvY0G1', '83LtVRzvXrbauSWsJbgwp69QsH6PpVxbYThvY0G1.png', 'image/png', 'public', 'public', 3216, '[]', '[]', '[]', '[]', 1, '2023-12-26 16:55:51', '2023-12-26 16:55:51'),
(18, 'App\\Models\\Exhibition', 71, '8a62cbaf-4e4b-4b49-b030-a04ef7341f3b', 'images', 'TtQ9ElOSBz7ZivvMvkXJUuPRziMO0UX99Yrt57jI', 'TtQ9ElOSBz7ZivvMvkXJUuPRziMO0UX99Yrt57jI.jpg', 'image/jpeg', 'public', 'public', 97365, '[]', '[]', '[]', '[]', 1, '2023-12-26 17:44:15', '2023-12-26 17:44:15'),
(19, 'App\\Models\\Exhibition', 72, '14b49d3a-58b2-4a20-b000-c8bc871e1a60', 'images', 'fouQr6dOSp219NhgGQFcIIxpGGkCWojimhJ9CpyY', 'fouQr6dOSp219NhgGQFcIIxpGGkCWojimhJ9CpyY.jpg', 'image/jpeg', 'public', 'public', 97365, '[]', '[]', '[]', '[]', 1, '2023-12-26 17:46:27', '2023-12-26 17:46:27'),
(20, 'App\\Models\\Exhibition', 73, '92d4179f-6632-4f04-b28d-7dd3e6f070bf', 'images', 'fjqLc7YeQDUKdrYCF0D6L2148KN6R1DLYHwXvAPo', 'fjqLc7YeQDUKdrYCF0D6L2148KN6R1DLYHwXvAPo.jpg', 'image/jpeg', 'public', 'public', 78835, '[]', '[]', '[]', '[]', 1, '2023-12-26 17:46:46', '2023-12-26 17:46:46'),
(21, 'App\\Models\\Configuration', 48, 'b72364ea-f18b-43a8-a8d2-c80535b8590f', 'images', 'KBclICxfL6OoE2Y3SV5dHVTXbBZrhao58v2CYisH', 'KBclICxfL6OoE2Y3SV5dHVTXbBZrhao58v2CYisH.jpg', 'image/jpeg', 'public', 'public', 26206, '[]', '[]', '[]', '[]', 3, '2024-01-02 13:49:19', '2024-01-02 13:49:19'),
(22, 'App\\Models\\Configuration', 48, '876859c8-3af5-479a-9ed9-a717a9526aa2', 'images', '3xYdqMDdeiaSa7R7VpaKT2SuAF59JfOblR30A46E', '3xYdqMDdeiaSa7R7VpaKT2SuAF59JfOblR30A46E.jpg', 'image/jpeg', 'public', 'public', 35823, '[]', '[]', '[]', '[]', 4, '2024-01-02 14:02:34', '2024-01-02 14:02:34'),
(23, 'App\\Models\\Configuration', 48, 'f2c7b672-4c18-4cc6-95f3-4a453fd274a9', 'images', 'jJJsSFupsAd3H0sHppmpKDhk8vG3SpoPDRhguxqm', 'jJJsSFupsAd3H0sHppmpKDhk8vG3SpoPDRhguxqm.jpg', 'image/jpeg', 'public', 'public', 35823, '[]', '[]', '[]', '[]', 5, '2024-01-02 14:03:04', '2024-01-02 14:03:04'),
(24, 'App\\Models\\Configuration', 48, '21aabbd8-3a98-4f76-b945-39b1b3cb5b75', 'images', 's0g6C8yBWvs02wLjPyS4xve2mp4pD9wn0qeuVJeR', 's0g6C8yBWvs02wLjPyS4xve2mp4pD9wn0qeuVJeR.jpg', 'image/jpeg', 'public', 'public', 35823, '[]', '[]', '[]', '[]', 6, '2024-01-02 14:19:32', '2024-01-02 14:19:32'),
(25, 'App\\Models\\Configuration', 48, 'b4b18845-b1a9-411e-bed0-f2ff11dc791d', 'images', 'FBRDvr8ASqmbN1RjPuO3JfvCvO9ZGBhC90ShijYc', 'FBRDvr8ASqmbN1RjPuO3JfvCvO9ZGBhC90ShijYc.jpg', 'image/jpeg', 'public', 'public', 35823, '[]', '[]', '[]', '[]', 7, '2024-01-02 14:21:20', '2024-01-02 14:21:20'),
(26, 'App\\Models\\Configuration', 48, 'f41934d4-deeb-404b-adb6-e8a0290e4d49', 'images', 'YAtKVDmKfpVqcktAQWefailILH6oa8rFQjIV99R9', 'YAtKVDmKfpVqcktAQWefailILH6oa8rFQjIV99R9.jpg', 'image/jpeg', 'public', 'public', 44046, '[]', '[]', '[]', '[]', 8, '2024-01-02 14:26:40', '2024-01-02 14:26:40'),
(27, 'App\\Models\\Configuration', 48, 'b02002e4-4f4f-4399-a65f-f3b880cb8a77', 'images', 'xQgei69jpXy6zZGJMMk8MfmrKrMeBixN2vaU2vmJ', 'xQgei69jpXy6zZGJMMk8MfmrKrMeBixN2vaU2vmJ.png', 'image/png', 'public', 'public', 206219, '[]', '[]', '[]', '[]', 9, '2024-01-02 14:48:57', '2024-01-02 14:48:57'),
(28, 'App\\Models\\Configuration', 48, '8848b847-e90c-4005-b1bb-b23d17510f2f', 'images', 'c5kxSjwGXDFHxYufu2Bv30HlPAhsDvn9H5K7vi7Q', 'c5kxSjwGXDFHxYufu2Bv30HlPAhsDvn9H5K7vi7Q.png', 'image/png', 'public', 'public', 510937, '[]', '[]', '[]', '[]', 10, '2024-01-02 14:55:07', '2024-01-02 14:55:07'),
(29, 'App\\Models\\Configuration', 64, 'ac49b03c-8f7b-4f23-b9a7-e249f7913b1b', 'images', 'AkcQ8PMqO2pQP6qOLZuA7SBwHtEghnfoGMBDIYkl', 'AkcQ8PMqO2pQP6qOLZuA7SBwHtEghnfoGMBDIYkl.jpg', 'image/jpeg', 'public', 'public', 203531, '[]', '[]', '[]', '[]', 1, '2024-01-06 05:43:35', '2024-01-06 05:43:35'),
(30, 'App\\Models\\Catalogue', 1, '9a8b85da-f941-4c2a-8c05-435ba35d13ad', 'images', 'rllSVSiD9GjWdrB7Bc2HEKrqWHHqZUXQPjRhL6yN', 'rllSVSiD9GjWdrB7Bc2HEKrqWHHqZUXQPjRhL6yN.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 1, '2024-01-06 08:10:41', '2024-01-06 08:10:41'),
(32, 'App\\Models\\Exhibition', 76, 'ddbf6acb-4044-446a-8e09-34d47f93eac2', 'images', 'TZQD2aOoyMDHRgU6Qp6QYbkbvoeSKdiF3fXfV9xI', 'TZQD2aOoyMDHRgU6Qp6QYbkbvoeSKdiF3fXfV9xI.jpg', 'image/jpeg', 'public', 'public', 39977, '[]', '[]', '[]', '[]', 1, '2024-01-06 09:08:29', '2024-01-06 09:08:29'),
(33, 'App\\Models\\Exhibition', 76, '4319985f-d3b8-4f72-86f9-aeb73972960f', 'images', '11isN3OjVjXt7Vh5Pm35zzqJjSAiP9d7zStLBNEi', '11isN3OjVjXt7Vh5Pm35zzqJjSAiP9d7zStLBNEi.jpg', 'image/jpeg', 'public', 'public', 43580, '[]', '[]', '[]', '[]', 2, '2024-01-06 09:53:26', '2024-01-06 09:53:26'),
(36, 'App\\Models\\Exhibition', 75, 'e8e418de-e226-4607-84b2-09451de04d09', 'images', 'OWWJijhYOD3Fujftyq41XWBFA025OrCEIwi69Nxp', 'OWWJijhYOD3Fujftyq41XWBFA025OrCEIwi69Nxp.jpg', 'image/jpeg', 'public', 'public', 40380, '[]', '[]', '[]', '[]', 1, '2024-01-06 12:33:39', '2024-01-06 12:33:39'),
(37, 'App\\Models\\Exhibition', 77, '4fce0075-b57c-4983-a6b6-7536c56a421f', 'images', 'CzqjIKvbDFqaHRcuEtQvSgtIsOdI7B4jU8IoCVND', 'CzqjIKvbDFqaHRcuEtQvSgtIsOdI7B4jU8IoCVND.jpg', 'image/jpeg', 'public', 'public', 43575, '[]', '[]', '[]', '[]', 1, '2024-01-06 12:55:11', '2024-01-06 12:55:11'),
(38, 'App\\Models\\Exhibition', 78, '03333517-23d5-447f-b116-74fd2c14c823', 'images', '3g0y4gvp59o9CL71gWfaU2iU5OqmZzdm9Mttj0VW', '3g0y4gvp59o9CL71gWfaU2iU5OqmZzdm9Mttj0VW.jpg', 'image/jpeg', 'public', 'public', 39506, '[]', '[]', '[]', '[]', 1, '2024-01-06 12:57:18', '2024-01-06 12:57:18'),
(39, 'App\\Models\\Configuration', 65, 'a48a9635-e8ec-475c-91c8-eea180a10a99', 'images', 'NJF5caKznKLfOm1nQDSTfBzrxHWjmVRIOtiD4Vne', 'NJF5caKznKLfOm1nQDSTfBzrxHWjmVRIOtiD4Vne.jpg', 'image/jpeg', 'public', 'public', 43181, '[]', '[]', '[]', '[]', 1, '2024-01-06 13:41:26', '2024-01-06 13:41:26'),
(40, 'App\\Models\\Configuration', 66, '022e4ef7-0782-4c83-824b-1c897ddffbb3', 'images', 'Ta2vaJyYqoD0pEgsTlSdxVC4N8a7mjtkM3TQK04h', 'Ta2vaJyYqoD0pEgsTlSdxVC4N8a7mjtkM3TQK04h.jpg', 'image/jpeg', 'public', 'public', 38576, '[]', '[]', '[]', '[]', 1, '2024-01-06 13:41:27', '2024-01-06 13:41:27'),
(41, 'App\\Models\\Configuration', 67, '0fde931e-c303-474f-ab3a-e934880bdafb', 'images', 'YD2hg28xibHPUp8s5FQSCVVj0XXwqwLGCZSXWPOk', 'YD2hg28xibHPUp8s5FQSCVVj0XXwqwLGCZSXWPOk.jpg', 'image/jpeg', 'public', 'public', 41890, '[]', '[]', '[]', '[]', 1, '2024-01-06 13:41:27', '2024-01-06 13:41:27'),
(42, 'App\\Models\\Configuration', 68, 'c7bd4205-8785-4c54-b7fc-fa75730b33ab', 'images', 'nKE3BljFvys3QAADl5unFzo1uDl3bPpzp5s0lI64', 'nKE3BljFvys3QAADl5unFzo1uDl3bPpzp5s0lI64.jpg', 'image/jpeg', 'public', 'public', 34212, '[]', '[]', '[]', '[]', 1, '2024-01-06 13:41:27', '2024-01-06 13:41:27'),
(43, 'App\\Models\\Configuration', 68, 'a17db021-69ef-4b3e-94a3-fd18932d9155', 'images', 'EQ7BrheG14bxflXbDHtWH4pGL2kE887Gd3R2GmIP', 'EQ7BrheG14bxflXbDHtWH4pGL2kE887Gd3R2GmIP.jpg', 'image/jpeg', 'public', 'public', 41890, '[]', '[]', '[]', '[]', 2, '2024-01-06 13:42:23', '2024-01-06 13:42:23'),
(44, 'App\\Models\\Configuration', 67, 'b4be535f-c81b-451a-b7ea-4e045c05a0af', 'images', 'hZZDr6fTIhXeZKq8o9hn9ylUnCXlVGob26MhkdkW', 'hZZDr6fTIhXeZKq8o9hn9ylUnCXlVGob26MhkdkW.jpg', 'image/jpeg', 'public', 'public', 38576, '[]', '[]', '[]', '[]', 2, '2024-01-06 13:42:33', '2024-01-06 13:42:33'),
(45, 'App\\Models\\Configuration', 66, 'b7de9049-0efd-45de-b312-fb443a459312', 'images', 'HojtzI8TDfzdUcl3ztxjnkjxTxmRD7v9T5qxhEHl', 'HojtzI8TDfzdUcl3ztxjnkjxTxmRD7v9T5qxhEHl.jpg', 'image/jpeg', 'public', 'public', 43181, '[]', '[]', '[]', '[]', 2, '2024-01-06 13:42:47', '2024-01-06 13:42:47'),
(46, 'App\\Models\\Configuration', 9, 'f8a3b0a4-e786-4f2a-987f-17def0823d14', 'images', 'G934vmVXkvBUIYTtHfCndIk2MytJkddYNQPHIFWF', 'G934vmVXkvBUIYTtHfCndIk2MytJkddYNQPHIFWF.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 2, '2024-01-07 13:33:16', '2024-01-07 13:33:16'),
(47, 'App\\Models\\Configuration', 10, '58e99ad6-0fad-4f4c-a04c-7b5f40b430b5', 'images', 'TDp405BPvon2v81xIMcxymY0IQ3Y1fC2wFOhKkkY', 'TDp405BPvon2v81xIMcxymY0IQ3Y1fC2wFOhKkkY.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 2, '2024-01-07 13:33:17', '2024-01-07 13:33:17'),
(48, 'App\\Models\\Configuration', 13, '3dad9403-e9d3-4b42-9d1a-017dbd41d1a8', 'images', '4TZuExfLThJsBSEHhLLB0KC50SN1DRA5cfkfYOmE', '4TZuExfLThJsBSEHhLLB0KC50SN1DRA5cfkfYOmE.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 2, '2024-01-07 13:33:17', '2024-01-07 13:33:17'),
(49, 'App\\Models\\Configuration', 34, '066c364f-d925-4305-ab6d-84ed2d613d23', 'images', 'hGOtRiJ7kzHxGW93sjCEV5DPzBcK5dt7ibWJjqka', 'hGOtRiJ7kzHxGW93sjCEV5DPzBcK5dt7ibWJjqka.png', 'image/png', 'public', 'public', 23808, '[]', '[]', '[]', '[]', 2, '2024-01-07 13:33:17', '2024-01-07 13:33:17'),
(50, 'App\\Models\\Album', 1, '093f77b1-c49a-4101-adfb-35ac9a348594', 'default', 'screencapture-127-0-0-1-8000-account-company-settings-2023-12-08-01_57_40', 'screencapture-127-0-0-1-8000-account-company-settings-2023-12-08-01_57_40.png', 'image/png', 'public', 'public', 184979, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 1, '2024-01-07 23:48:53', '2024-01-07 23:48:58'),
(51, 'App\\Models\\Album', 2, 'f8f47b78-8b91-4617-8375-a577d4a6650c', 'default', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview (1)', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview-(1).png', 'image/png', 'public', 'public', 71126, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 1, '2024-01-09 15:27:56', '2024-01-09 15:27:57'),
(52, 'App\\Models\\Album', 2, 'ad117040-f983-4edd-858d-0316b667606f', 'default', 'screencapture-127-0-0-1-8000-account-company-settings-2023-12-08-01_57_40', 'screencapture-127-0-0-1-8000-account-company-settings-2023-12-08-01_57_40.png', 'image/png', 'public', 'public', 184979, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 2, '2024-01-09 15:27:58', '2024-01-09 15:27:59'),
(53, 'App\\Models\\Album', 2, 'c49d2999-3ff3-4750-843e-4f11ed8ef24b', 'default', 'footerjb (1)', 'footerjb-(1).png', 'image/png', 'public', 'public', 23808, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 3, '2024-01-09 15:27:59', '2024-01-09 15:27:59'),
(54, 'App\\Models\\Album', 3, '7c7c44d4-e61d-4ec3-879e-59f86d53d630', 'default', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview (1)', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview-(1).png', 'image/png', 'public', 'public', 71126, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 1, '2024-01-09 16:47:26', '2024-01-09 16:47:26'),
(55, 'App\\Models\\Album', 3, '291bed0d-19b1-4033-b8b5-4629d5572fcb', 'default', 'footerjb (1)', 'footerjb-(1).png', 'image/png', 'public', 'public', 23808, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 2, '2024-01-09 16:47:26', '2024-01-09 16:47:27'),
(56, 'App\\Models\\Album', 3, '3098c69c-dc45-4507-8524-ec16a4b7bd34', 'default', '03', '03.jpg', 'image/jpeg', 'public', 'public', 265750, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 3, '2024-01-09 16:47:27', '2024-01-09 16:47:28'),
(57, 'App\\Models\\Album', 3, '8689c81f-912b-40c2-9916-556b12d39335', 'default', 'Free_Test_Data_128KB_JPG', 'Free_Test_Data_128KB_JPG.jpg', 'image/jpeg', 'public', 'public', 131306, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 4, '2024-01-09 16:47:28', '2024-01-09 16:47:31'),
(58, 'App\\Models\\Album', 2, '496b3531-a0cd-4b53-844f-95e3a45e2890', 'default', 'Free_Test_Data_128KB_JPG', 'Free_Test_Data_128KB_JPG.jpg', 'image/jpeg', 'public', 'public', 131306, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 4, '2024-01-10 13:44:43', '2024-01-10 13:44:53'),
(59, 'App\\Models\\Album', 2, 'c8a6adc7-538f-4fa4-8e2c-a1a10d03fecd', 'default', '03', '03.jpg', 'image/jpeg', 'public', 'public', 265750, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 5, '2024-01-10 13:46:49', '2024-01-10 13:46:52'),
(60, 'App\\Models\\Album', 2, '061349b5-32f1-4885-b54e-ba888631a0ff', 'default', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview (1)', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview-(1).png', 'image/png', 'public', 'public', 71126, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 6, '2024-01-10 13:52:30', '2024-01-10 13:52:31'),
(61, 'App\\Models\\Album', 2, 'bbd4c51d-bc50-4949-86df-d717f88da5e0', 'default', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview', 'Green_and_White_Bold_Typographic_Real_Estate_Logo-removebg-preview.png', 'image/png', 'public', 'public', 66298, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 7, '2024-01-10 13:52:31', '2024-01-10 13:52:31'),
(62, 'App\\Models\\Album', 2, 'fd3022e3-cf30-4a52-8b09-24d17775ef6c', 'default', '78', '78.jpg', 'image/jpeg', 'public', 'public', 4643, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 8, '2024-01-10 14:07:13', '2024-01-10 14:07:14'),
(63, 'App\\Models\\Album', 2, '82734ab1-957c-4096-9ce6-1d4118ca938d', 'default', 'download (1)', 'download-(1).jpg', 'image/jpeg', 'public', 'public', 7843, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 9, '2024-01-10 14:07:14', '2024-01-10 14:07:15'),
(64, 'App\\Models\\Album', 2, '1f6a1c0f-3996-4b3f-b63a-9984dac703b7', 'default', 'images', 'images.jpg', 'image/jpeg', 'public', 'public', 13634, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 10, '2024-01-10 14:07:15', '2024-01-10 14:07:15'),
(65, 'App\\Models\\Album', 2, 'b78d9ccb-1c5e-435c-abfc-620a88367cae', 'default', 'images (1) - Copy', 'images-(1)---Copy.jpg', 'image/jpeg', 'public', 'public', 13661, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 11, '2024-01-10 14:07:15', '2024-01-10 14:07:16'),
(66, 'App\\Models\\Album', 2, 'aa986838-13c9-4df9-ae6e-80d8aee05507', 'default', 'download (2) - Copy', 'download-(2)---Copy.jpg', 'image/jpeg', 'public', 'public', 10762, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 12, '2024-01-10 14:07:16', '2024-01-10 14:07:17'),
(67, 'App\\Models\\Album', 2, '7b75cf92-e6f4-4cb4-a06f-a93d811f14a7', 'default', 'download (3) - Copy', 'download-(3)---Copy.jpg', 'image/jpeg', 'public', 'public', 10762, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 13, '2024-01-10 14:07:17', '2024-01-10 14:07:18'),
(68, 'App\\Models\\Album', 2, '8bb56e92-97b9-44fe-a01d-da2cadbd3709', 'default', 'download - Copy', 'download---Copy.jpg', 'image/jpeg', 'public', 'public', 8110, '[]', '[]', '{\"thumb\":true,\"old-picture\":true}', '[]', 14, '2024-01-10 14:07:18', '2024-01-10 14:07:18'),
(69, 'App\\Models\\Catalogue', 3, '7c862e59-520e-4f7c-ac25-4c7716a36b8c', 'images', '3gMzAHXyRalhYJtpmUfbWKZmL4Xo1P5BLgKrQgpG', '3gMzAHXyRalhYJtpmUfbWKZmL4Xo1P5BLgKrQgpG.png', 'image/png', 'public', 'public', 1057763, '[]', '[]', '[]', '[]', 1, '2024-01-13 04:11:37', '2024-01-13 04:11:37'),
(70, 'App\\Models\\Blog', 34, 'a9d9ec9c-c8c1-4cb2-9a70-3a71be82ddd7', 'images', 'F5yNsXeBs2S9ckpz9mx88BBeX2PLBNzlXAZ1fuid', 'F5yNsXeBs2S9ckpz9mx88BBeX2PLBNzlXAZ1fuid.jpg', 'image/jpeg', 'public', 'public', 121924, '[]', '[]', '[]', '[]', 1, '2024-01-20 08:48:07', '2024-01-20 08:48:07'),
(74, 'App\\Models\\Blog', 34, 'b2fe7505-d835-415f-881e-2658c175e54d', 'images', '9U9ct8pVzbuzyBQlVKn1mUD32HsbRo8e2H8MRdDJ', '9U9ct8pVzbuzyBQlVKn1mUD32HsbRo8e2H8MRdDJ.png', 'image/png', 'public', 'public', 304057, '[]', '[]', '[]', '[]', 2, '2024-01-20 10:35:56', '2024-01-20 10:35:56'),
(77, 'App\\Models\\Blog', 35, '306d93e1-865a-4f06-b405-47c93704eb48', 'images', 'Z0L16XP3f0FvFQOnfPf52U60gzX979spDLAetQys', 'Z0L16XP3f0FvFQOnfPf52U60gzX979spDLAetQys.jpg', 'image/jpeg', 'public', 'public', 8687, '[]', '[]', '[]', '[]', 1, '2024-01-20 10:55:39', '2024-01-20 10:55:39'),
(78, 'App\\Models\\Blog', 36, '21d34be1-8ed6-4006-bf54-f9705d0b6247', 'images', 'GomTLfYsRTiucFa13dzADKAo2R3yD8Nzp9Q3NwTa', 'GomTLfYsRTiucFa13dzADKAo2R3yD8Nzp9Q3NwTa.jpg', 'image/jpeg', 'public', 'public', 362974, '[]', '[]', '[]', '[]', 1, '2024-01-20 14:35:06', '2024-01-20 14:35:06'),
(79, 'App\\Models\\Blog', 33, '14e2fa85-6cbb-40a0-9eab-396d94bd9817', 'images', 'fg9JCjnOVJ6T3qDc2eSsQz6TbklU1t82iu6dwNBY', 'fg9JCjnOVJ6T3qDc2eSsQz6TbklU1t82iu6dwNBY.jpg', 'image/jpeg', 'public', 'public', 20474, '[]', '[]', '[]', '[]', 1, '2024-01-20 14:36:20', '2024-01-20 14:36:20'),
(80, 'App\\Models\\Blog', 32, '752f4d1e-90ce-49db-ae32-e08e680dc9f3', 'images', 'HOET20Vwx1Nr1J876CnEh1tvv6sXyi0duYg6JC36', 'HOET20Vwx1Nr1J876CnEh1tvv6sXyi0duYg6JC36.jpg', 'image/jpeg', 'public', 'public', 266107, '[]', '[]', '[]', '[]', 1, '2024-01-20 14:37:41', '2024-01-20 14:37:41'),
(81, 'App\\Models\\Blog', 26, '63c0689d-8639-466f-90d3-12d0c05424f2', 'images', 'J1amgPmT48jHbi3THzddnA3OD9bkEKUtXcmvBj8q', 'J1amgPmT48jHbi3THzddnA3OD9bkEKUtXcmvBj8q.jpg', 'image/jpeg', 'public', 'public', 203531, '[]', '[]', '[]', '[]', 1, '2024-01-20 14:38:15', '2024-01-20 14:38:15'),
(82, 'App\\Models\\Blog', 31, 'bbbb9b1c-1822-4b28-9e22-622be81fe62c', 'images', 'LtheM6YJZVvqYNQzZ0eZfa2Wp3fbJix5N4sgVl7Q', 'LtheM6YJZVvqYNQzZ0eZfa2Wp3fbJix5N4sgVl7Q.jpg', 'image/jpeg', 'public', 'public', 70859, '[]', '[]', '[]', '[]', 1, '2024-01-20 14:38:53', '2024-01-20 14:38:53'),
(83, 'App\\Models\\Blog', 9, '83880d0c-8d42-4ddd-8c96-23a47e94e4cf', 'images', 'bIqbVTCgaaZsPs4b9Vvu8RYDthhswHwa1jcfqQOu', 'bIqbVTCgaaZsPs4b9Vvu8RYDthhswHwa1jcfqQOu.jpg', 'image/jpeg', 'public', 'public', 52785, '[]', '[]', '[]', '[]', 1, '2024-01-20 15:00:16', '2024-01-20 15:00:16');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `type` enum('Admin','User') DEFAULT NULL COMMENT 'A => Admin, U => User',
  `order` bigint(20) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `user_id`, `title`, `slug`, `type`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'Primary Menu', 'primary-menu', NULL, 1, '2022-12-26 08:10:57', '2023-12-12 20:55:08'),
(2, 1, 'Footer Menu', 'footer-menu', NULL, 2, '2022-11-03 05:55:38', '2023-02-11 04:09:53'),
(3, 1, 'Expanded Menu', 'secodary-menu', NULL, 3, '2022-11-03 05:57:00', '2023-02-11 04:57:53');

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) DEFAULT 0,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) DEFAULT 0,
  `type` enum('Page','Link','Category','Post','Tag') NOT NULL COMMENT 'Page, Link, Category, Post, Tag',
  `title` varchar(255) NOT NULL,
  `attribute` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `menu_target` tinyint(4) DEFAULT 0,
  `css_classes` text DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `order` bigint(20) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `parent_id`, `menu_id`, `item_id`, `type`, `title`, `attribute`, `link`, `menu_target`, `css_classes`, `description`, `order`, `created_at`, `updated_at`) VALUES
(1, 0, 1, 1, 'Page', 'Home', 'Home', NULL, 0, NULL, NULL, 0, '2023-02-11 04:05:15', '2023-12-12 20:55:08'),
(2, 0, 3, 1, 'Page', 'Home', 'Home', '', 0, '', '', 0, '2023-02-11 04:30:35', '2023-02-11 04:57:53'),
(3, 0, 2, 1, 'Page', 'Home', 'Home', NULL, 0, NULL, NULL, 147, '2023-02-11 04:30:53', '2023-02-11 04:30:53'),
(4, 0, 1, 2, 'Page', 'About Everest', 'About Everest', NULL, 0, NULL, NULL, 1, '2023-11-25 04:13:17', '2023-12-12 20:55:08'),
(5, 0, 1, 3, 'Page', 'News Center', 'News Center', NULL, 0, NULL, NULL, 3, '2023-11-25 04:13:17', '2023-12-12 20:55:08'),
(7, 0, 1, 5, 'Page', 'Contact Us', 'Contact Us', NULL, 0, NULL, NULL, 5, '2023-11-25 04:13:17', '2023-12-12 20:55:08'),
(8, 4, 1, 6, 'Page', 'Testung', 'Testung', NULL, 0, NULL, NULL, 2, '2023-11-25 13:15:13', '2023-12-12 20:55:08');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2021_06_22_115736_create_configurations_table', 1),
(7, '2021_10_21_093713_create_temp_permissions_tables', 1),
(8, '2021_10_21_093714_create_permission_tables', 1),
(9, '2021_10_23_113846_create_sessions_table', 1),
(10, '2021_11_01_070431_create_pages_table', 1),
(11, '2021_11_01_070450_create_page_metas_table', 1),
(12, '2021_11_01_070459_create_page_seos_table', 1),
(13, '2021_11_12_103141_create_blogs_table', 1),
(14, '2021_11_12_103153_create_blog_tags_table', 1),
(15, '2021_11_12_103159_create_blog_metas_table', 1),
(16, '2021_11_12_103208_create_blog_categories_table', 1),
(17, '2021_11_12_103209_create_blog_blog_categories_table', 1),
(18, '2021_11_12_103216_create_blog_blog_tags_table', 1),
(19, '2021_11_12_103305_create_blog_seos_table', 1),
(20, '2022_01_21_064821_create_menus_table', 1),
(21, '2022_01_21_064832_create_menu_items_table', 1),
(22, '2022_12_17_114134_create_contacts_table', 1),
(23, '2023_12_12_142324_create_media_table', 2),
(25, '2023_12_12_174057_create_exhibitions_table', 3),
(27, '2023_12_12_180243_create_catalogues_table', 4),
(28, '2023_12_12_180608_create_products_table', 5),
(36, '2023_12_24_195131_add_featured_image_column_to_exhibitions_table', 6),
(37, '2023_12_24_195208_add_featured_image_to_catalogues_table', 6),
(38, '2023_12_24_195301_add_featured_image_to_products_table', 6),
(39, '2024_01_06_130506_add_user_id_to_catalogues_table', 7),
(40, '2024_01_06_130809_add_year_to_catalogues_table', 8),
(41, '2024_01_06_194439_create_albums_table', 9),
(42, '2024_01_13_073027_add_year_column_to_products_table', 10),
(43, '2024_01_20_133938_add_feature_image_to_blogs_table', 11),
(44, '2024_01_20_134035_add_feature_image_to_page_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `deny` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `page_type` enum('Page','Widget') DEFAULT NULL,
  `content` text DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `comment` tinyint(4) NOT NULL,
  `featured_id` bigint(20) UNSIGNED DEFAULT 0,
  `featured_image` varchar(255) DEFAULT '0',
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 => Published, 2 => Draft, 3 => Trash, 4 => Private, 5 => Pending',
  `visibility` enum('Pu','PP','Pr') NOT NULL COMMENT 'Pu => Public, PP => Password Protected, Pr => Private',
  `publish_on` datetime DEFAULT NULL,
  `order` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `parent_id`, `user_id`, `title`, `slug`, `page_type`, `content`, `excerpt`, `comment`, `featured_id`, `featured_image`, `password`, `status`, `visibility`, `publish_on`, `order`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Home', 'home', NULL, '', 'Excerpt2', 1, 0, '0', '123456', 1, 'Pu', '2022-10-31 00:00:00', NULL, '2022-10-31 07:00:14', '2023-11-25 04:01:20'),
(2, NULL, 1, 'About Everest', 'about-everest', NULL, '<p><strong><span style=\"font-size:12.0pt\"><span style=\"font-family:&quot;Calibri&quot;,sans-serif\">About Everest</span></span></strong></p>', NULL, 0, 0, '0', 'admin1122', 1, 'Pu', '2023-11-25 00:00:00', NULL, '2023-11-25 04:11:32', '2023-11-25 04:11:32'),
(3, NULL, 1, 'News Center', 'news-center', NULL, '<p><strong><span style=\"font-size:12.0pt\"><span style=\"font-family:&quot;Calibri&quot;,sans-serif\">News Center</span></span></strong></p>', NULL, 0, 0, '0', 'admin1122', 1, 'Pu', '2023-11-25 00:00:00', NULL, '2023-11-25 04:11:53', '2023-11-25 04:11:53'),
(5, NULL, 1, 'Contact Us', 'contact-us', NULL, '<p><strong><span style=\"font-size:12.0pt\"><span style=\"font-family:&quot;Calibri&quot;,sans-serif\">Contact Us</span></span></strong></p>', NULL, 0, 0, '0', 'admin1122', 1, 'Pu', '2023-11-25 00:00:00', NULL, '2023-11-25 04:12:25', '2023-11-25 04:12:25'),
(6, NULL, 1, 'Testung', 'testung', NULL, '<h2>What is Lorem Ipsum?</h2>\r\n\r\n<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\r\n<h2>Why do we use it?</h2>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h2>Where does it come from?</h2>\r\n\r\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\r\n\r\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n\r\n<h2>Where can I get some?</h2>\r\n\r\n<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>', NULL, 0, 0, '0', 'admin1122', 1, 'Pu', '2023-11-25 00:00:00', NULL, '2023-11-25 13:14:37', '2023-12-10 13:55:57'),
(7, NULL, 1, 'New Title Add Page', 'new-title-add-page', NULL, '<h2>What is Lorem Ipsum?</h2>\r\n\r\n<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n\r\n<h2>Why do we use it?</h2>\r\n\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h2>Where does it come from?</h2>\r\n\r\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>\r\n\r\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n\r\n<h2>Where can I get some?</h2>\r\n\r\n<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>', 'helpin', 0, 0, '0', 'admin1122', 1, 'Pu', '2023-12-10 00:00:00', NULL, '2023-12-10 14:27:16', '2023-12-10 14:27:16'),
(8, 0, 1, 'About Us', 'about-us', NULL, '<section class=\"content-inner about-sec bg-primary-light\">\r\n<div class=\"container\">\r\n<div class=\"about-bx2 align-items-center row style-1\">\r\n<div class=\"col-lg-6\">\r\n<div class=\"dz-media\">\r\n<div class=\"align-items-end row\">\r\n<div class=\"col-6 fadeInUp wow\">\r\n<div class=\"image-box image-box-1\"><img alt=\"\" src=\"public/front/images/about/about-4.jpg\"></div>\r\n</div>\r\n\r\n<div class=\"col-6 fadeInUp wow\">\r\n<div class=\"image-box image-box-2\"><img alt=\"\" src=\"public/front/images/about/about-2.jpg\"></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-6 fadeInUp wow\">\r\n<div class=\"image-box image-box-3\"><img alt=\"\" src=\"public/front/images/about/about-3.jpg\"></div>\r\n</div>\r\n\r\n<div class=\"col-6 fadeInUp wow\">\r\n<div class=\"image-box image-box-4\"><img alt=\"\" src=\"public/front/images/about/about-1.jpg\"></div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"about-content col-lg-6 fadeInUp m-b30 ps-lg-5 wow\">\r\n<div class=\"section-head\">\r\n<h2 class=\"title\">The World’s 1st ICO Platform That Offers Rewards</h2>\r\n\r\n<p class=\"lh-base m-0\">We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight</p>\r\n</div>\r\n<a class=\"btn btn-lg btn-primary btn-shadow text-uppercase\">Contact Us</a></div>\r\n</div>\r\n</div>\r\n<img alt=\"\" class=\"bg-shape1\" src=\"public/front/images/home-banner/shape1.png\"> <img alt=\"\" class=\"bg-shape2\" src=\"public/front/images/home-banner/shape3.png\"> <img alt=\"\" class=\"bg-shape3\" src=\"public/front/images/home-banner/shape3.png\"> <img alt=\"\" class=\"bg-shape4\" src=\"public/front/images/home-banner/shape3.png\"></section>\r\n\r\n<section class=\"content-inner p-0 bg-primary-light video-bx-wrapper\"><img alt=\"\" class=\"bg-shape1\" src=\"public/front/images/home-banner/shape1.png\">\r\n<div class=\"container fadeInUp wow\">\r\n<div class=\"style-1 video-bx\">\r\n<div class=\"video-media\"><img alt=\"\" src=\"public/front/images/about/videobx.png\"> <a class=\"popup-youtube play-icon\" href=\"https://www.youtube.com/watch?v=cfmQFW1DpA0\"> <i class=\"fa fa-play fs-4\"> </i> </a></div>\r\n</div>\r\n</div>\r\n</section>\r\n\r\n<section class=\"content-inner bg-light pricing-plan-wrapper2\"><img alt=\"\" class=\"bg-shape2\" src=\"public/front/images/home-banner/shape1.png\">\r\n<div class=\"container\">\r\n<div class=\"section-head text-center\">\r\n<h2 class=\"title\">Awesome Pricing Plan for<br>\r\nCryptocurrency Business</h2>\r\n</div>\r\n\r\n<div class=\"justify-content-center row\">\r\n<div class=\"col-lg-6 col-md-6 col-xl-4 fadeInUp m-b30 wow\">\r\n<div class=\"box-hover pricingtable-wrapper style-1\">\r\n<div class=\"pricingtable-inner\">\r\n<h4 class=\"pricingtable-title\">Lite</h4>\r\n\r\n<p>Perfect to get started</p>\r\n\r\n<div class=\"pricingtable-price\">\r\n<h2 class=\"pricingtable-bx text-primary\"><span>$</span>11<small>/ Per Month</small></h2>\r\n\r\n<div class=\"bg-primary days-label\">Try 7 Days for free</div>\r\n\r\n<h6>Life-includes:</h6>\r\n</div>\r\n\r\n<ul class=\"pricingtable-features\">\r\n	<li><span>Review Your Question</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n	<li><span>Work with Resources</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n	<li><span>Support &amp; Mentoring</span></li>\r\n</ul>\r\n</div>\r\n\r\n<div class=\"pricingtable-footer\"><a class=\"btn\">See all features</a></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-lg-6 col-md-6 col-xl-4 fadeInUp m-b30 wow\">\r\n<div class=\"box-hover pricingtable-wrapper style-1\">\r\n<div class=\"pricingtable-inner\">\r\n<div class=\"tagline\">POPULER</div>\r\n\r\n<h4 class=\"pricingtable-title\">Pro</h4>\r\n\r\n<p>Perfect to get started</p>\r\n\r\n<div class=\"pricingtable-price\">\r\n<h2 class=\"pricingtable-bx text-primary\"><span>$</span>21<small>/ Per Month</small></h2>\r\n\r\n<div class=\"bg-primary days-label\">Try 7 Days for free</div>\r\n\r\n<h6>Everythings in Lite, Plus</h6>\r\n</div>\r\n\r\n<ul class=\"pricingtable-features\">\r\n	<li><span>Review Your Question</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n	<li><span>Work with Resources</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n	<li><span>Support &amp; Mentoring</span></li>\r\n</ul>\r\n</div>\r\n\r\n<div class=\"pricingtable-footer\"><a class=\"btn\"><span>See all features</span></a></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-lg-6 col-md-6 col-xl-4 fadeInUp m-b30 wow\">\r\n<div class=\"active box-hover pricingtable-wrapper style-1\">\r\n<div class=\"pricingtable-inner\">\r\n<h4 class=\"pricingtable-title\">Ultimate</h4>\r\n\r\n<p>Perfect to get started</p>\r\n\r\n<div class=\"pricingtable-price\">\r\n<h2 class=\"pricingtable-bx text-primary\"><span>$</span>32<small>/ Per Month</small></h2>\r\n\r\n<div class=\"bg-primary days-label\">Try 7 Days for free</div>\r\n\r\n<h6>Everythings in Lite</h6>\r\n</div>\r\n\r\n<ul class=\"pricingtable-features\">\r\n	<li><span>Review Your Question</span></li>\r\n	<li><span>Work with Resources</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n	<li><span>Support &amp; Mentoring</span></li>\r\n	<li><span>Analysis of Your \"I Have\"</span></li>\r\n</ul>\r\n</div>\r\n\r\n<div class=\"pricingtable-footer\"><a class=\"btn\"><span>See all features</span></a></div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n\r\n<section class=\"content-inner bg-white blog-wrapper\"><img alt=\"\" class=\"bg-shape1\" src=\"public/front/images/home-banner/shape1.png\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-12 col-xl-7\">\r\n<div class=\"fadeInUp section-head wow\">\r\n<h6 class=\"sub-title text-primary\">FROM OUR BLOG</h6>\r\n\r\n<h2 class=\"title\">Recent News &amp; Updates</h2>\r\n</div>\r\n\r\n<div class=\"blog-half dz-card fadeInUp m-b30 style-1 wow\">\r\n<div class=\"dz-media\"><a><img alt=\"\" src=\"public/front/images/blog/pic1.jpg\"></a>\r\n\r\n<ul class=\"dz-badge-list\">\r\n	<li><a class=\"dz-badge\">14 Feb 2022</a></li>\r\n</ul>\r\n<a class=\"btn btn-secondary\">Read More</a></div>\r\n\r\n<div class=\"dz-info\">\r\n<div class=\"dz-meta\">\r\n<ul>\r\n	<li class=\"post-author\"><a><img alt=\"\" src=\"public/front/images/avatar/avatar1.jpg\"> <span>By Noare</span> </a></li>\r\n	<li class=\"post-date\"><a>12 May 2022</a></li>\r\n</ul>\r\n</div>\r\n\r\n<h4 class=\"dz-title\"><a>Five Things To Avoid In Cryptocurrency.</a></h4>\r\n\r\n<p class=\"m-b0\">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute.</p>\r\n</div>\r\n</div>\r\n\r\n<div class=\"blog-half dz-card fadeInUp m-b30 style-1 wow\">\r\n<div class=\"dz-media\"><a><img alt=\"\" src=\"public/front/images/blog/pic2.jpg\"></a>\r\n\r\n<ul class=\"dz-badge-list\">\r\n	<li><a class=\"dz-badge\">14 Feb 2022</a></li>\r\n</ul>\r\n<a class=\"btn btn-secondary\">Read More</a></div>\r\n\r\n<div class=\"dz-info\">\r\n<div class=\"dz-meta\">\r\n<ul>\r\n	<li class=\"post-author\"><a><img alt=\"\" src=\"public/front/images/avatar/avatar2.jpg\"> <span>By Noare</span> </a></li>\r\n	<li class=\"post-date\"><a>12 May 2022</a></li>\r\n</ul>\r\n</div>\r\n\r\n<h4 class=\"dz-title\"><a>Things That Make You Love Cryptocurrency.</a></h4>\r\n\r\n<p class=\"m-b0\">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute.</p>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-lg-12 col-xl-5 fadeInUp m-b30 wow\">\r\n<div class=\"dz-card style-2\">\r\n<div class=\"dz-category\">\r\n<ul class=\"dz-badge-list\">\r\n	<li><a class=\"dz-badge\">14 Feb 2022</a></li>\r\n</ul>\r\n</div>\r\n\r\n<div class=\"dz-info\">\r\n<h2 class=\"dz-title\"><a class=\"text-white\">Directly support individuals Crypto</a></h2>\r\n\r\n<div class=\"dz-meta\">\r\n<ul>\r\n	<li class=\"post-author\"><a><img alt=\"\" src=\"public/front/images/avatar/avatar3.jpg\"> <span>By Noare</span> </a></li>\r\n	<li class=\"post-date\"><a>12 May 2022</a></li>\r\n</ul>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>', 'Excerpt-about', 1, 0, '0', '123456', 1, 'Pu', '2022-10-31 00:00:00', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(9, 8, 1, 'Why us', 'why-us', NULL, '<p>Hello</p>', 'Hello', 0, 0, '0', NULL, 1, 'Pu', '2023-02-23 00:00:00', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(10, NULL, 1, 'Support', 'support', NULL, '<h2>The singing Canadian</h2>\r\n\r\n<figure><img alt=\"\" src=\"https://picsum.photos/200/300\" /></figure>\r\n\r\n<p><strong>Chris Austin Hadfield</strong>&nbsp;was born on August 29, 1959, in Canada. As a child, he watched the Apollo 11 moon landing and it inspired him to also become an astronaut. At the time Canada had no space program, so Hadfield joined the <a href=\"https://www.rcaf-arc.forces.gc.ca/en/\"><strong>Royal Canadian Air Forces</strong></a> and served as a fighter pilot for 25 years.</p>\r\n\r\n<p>In 1992, Hadfield was accepted into the Canadian astronaut program by the <a href=\"https://www.asc-csa.gc.ca/eng/\"><strong>Canadian Space Agency</strong></a>. He flew his first mission to the Russian Mir space station in 1995 aboard&nbsp;the Atlantis space shuttle. Six years later onboard the Endeavour space shuttle he flew to the International Space Station. He revisited the ISS in 2012 flying a Russian Soyuz spacecraft and taking command over the station during Expedition 34/35.</p>\r\n\r\n<p>Hadfield was most recognised by the general public for his rendition of the famous Space Oddity song by David Bowie which he recorded onboard the International Space Station. He also recorded numerous educational materials for schools while working in orbit. After his retirement from the astronaut service, he wrote three books based on his experience.</p>', NULL, 0, 0, '0', '123456', 1, 'Pu', '2022-11-17 00:00:00', NULL, '2023-12-12 20:54:38', '2024-01-20 01:29:42'),
(11, 1, 1, 'Voluptatibus velit  test', 'voluptatibus-velit-test', NULL, '<p>At non nulla est sed.</p>', 'as', 1, 0, '0', 'admin1122', 1, 'Pu', '2024-01-20 00:00:00', NULL, '2024-01-20 08:09:38', '2024-01-20 08:09:38');

-- --------------------------------------------------------

--
-- Table structure for table `page_metas`
--

CREATE TABLE `page_metas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_metas`
--

INSERT INTO `page_metas` (`id`, `page_id`, `title`, `value`, `created_at`, `updated_at`) VALUES
(1, 1, 'ximage', NULL, '2023-11-25 04:01:20', '2023-11-25 04:01:20'),
(2, 2, 'ximage', NULL, '2023-11-25 04:11:32', '2023-11-25 04:11:32'),
(3, 3, 'ximage', NULL, '2023-11-25 04:11:53', '2023-11-25 04:11:53'),
(5, 5, 'ximage', NULL, '2023-11-25 04:12:25', '2023-11-25 04:12:25'),
(7, 6, 'ximage', NULL, '2023-12-10 13:55:57', '2023-12-10 13:55:57'),
(8, 7, 'ximage', NULL, '2023-12-10 14:27:16', '2023-12-10 14:27:16'),
(9, 9, 'ximage', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(10, 8, 'ximage', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(12, 10, 'ximage', NULL, '2024-01-20 01:29:42', '2024-01-20 01:29:42'),
(13, 11, 'ximage', '1705756178_facebook.png', '2024-01-20 08:09:38', '2024-01-20 08:09:38');

-- --------------------------------------------------------

--
-- Table structure for table `page_seos`
--

CREATE TABLE `page_seos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` bigint(20) UNSIGNED NOT NULL,
  `page_title` varchar(255) DEFAULT NULL,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `meta_descriptions` text DEFAULT NULL,
  `content_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_seos`
--

INSERT INTO `page_seos` (`id`, `page_id`, `page_title`, `meta_keywords`, `meta_descriptions`, `content_url`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2023-11-25 04:11:32', '2023-11-25 04:11:32'),
(2, 3, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2023-11-25 04:11:53', '2023-11-25 04:11:53'),
(4, 5, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2023-11-25 04:12:25', '2023-11-25 04:12:25'),
(5, 6, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2023-11-25 13:14:37', '2023-12-10 13:55:57'),
(6, 7, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2023-12-10 14:27:16', '2023-12-10 14:27:16'),
(7, 9, NULL, NULL, NULL, NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(8, 8, 'about seo2', 'ssdf', 'drfg', NULL, '2023-12-12 20:54:38', '2023-12-12 20:54:38'),
(9, 11, NULL, 'admin@pakindustrialexpo.com', NULL, NULL, '2024-01-20 08:09:38', '2024-01-20 08:09:38');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `temp_permission_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `action` text NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `type` enum('pre-define','user-define') NOT NULL DEFAULT 'user-define',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `temp_permission_id`, `name`, `action`, `guard_name`, `type`, `created_at`, `updated_at`) VALUES
(1, 4, 'Controllers > PermissionsController > index', 'Controllers/PermissionsController@index', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(2, 5, 'Controllers > PermissionsController > roles_permissions', 'Controllers/PermissionsController@roles_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(3, 6, 'Controllers > PermissionsController > role_permissions', 'Controllers/PermissionsController@role_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(4, 7, 'Controllers > PermissionsController > user_permissions', 'Controllers/PermissionsController@user_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(5, 8, 'Controllers > PermissionsController > manage_user_permissions', 'Controllers/PermissionsController@manage_user_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(6, 9, 'Controllers > PermissionsController > sync', 'Controllers/PermissionsController@sync', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(7, 10, 'Controllers > PermissionsController > manage_role_all_permissions', 'Controllers/PermissionsController@manage_role_all_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(8, 11, 'Controllers > PermissionsController > manage_role_permission', 'Controllers/PermissionsController@manage_role_permission', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(9, 12, 'Controllers > PermissionsController > manage_user_permission', 'Controllers/PermissionsController@manage_user_permission', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(10, 13, 'Controllers > PermissionsController > delete_user_permission', 'Controllers/PermissionsController@delete_user_permission', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(11, 14, 'Controllers > PermissionsController > remove_user_all_permission', 'Controllers/PermissionsController@remove_user_all_permission', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(12, 15, 'Controllers > PermissionsController > temp_permissions', 'Controllers/PermissionsController@temp_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(13, 16, 'Controllers > PermissionsController > generate_permissions', 'Controllers/PermissionsController@generate_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(14, 17, 'Controllers > PermissionsController > add_to_permissions', 'Controllers/PermissionsController@add_to_permissions', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(15, 18, 'Controllers > PermissionsController > permission_by_action', 'Controllers/PermissionsController@permission_by_action', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(16, 19, 'Controllers > PermissionsController > get_users_by_role', 'Controllers/PermissionsController@get_users_by_role', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(17, 20, 'Controllers > PermissionsController > get_permission_by_user', 'Controllers/PermissionsController@get_permission_by_user', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(18, 22, 'Controllers > UsersController > dashboard', 'Controllers/UsersController@dashboard', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(19, 23, 'Controllers > UsersController > index', 'Controllers/UsersController@index', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(20, 24, 'Controllers > UsersController > create', 'Controllers/UsersController@create', 'web', 'user-define', '2022-12-13 07:20:56', '2022-12-13 07:20:56'),
(21, 25, 'Controllers > UsersController > store', 'Controllers/UsersController@store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(22, 26, 'Controllers > UsersController > edit', 'Controllers/UsersController@edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(23, 27, 'Controllers > UsersController > update', 'Controllers/UsersController@update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(24, 28, 'Controllers > UsersController > destroy', 'Controllers/UsersController@destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(25, 29, 'Controllers > UsersController > update_password', 'Controllers/UsersController@update_password', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(26, 30, 'Controllers > UsersController > update_user_roles', 'Controllers/UsersController@update_user_roles', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(27, 31, 'Controllers > UsersController > profile', 'Controllers/UsersController@profile', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(28, 33, 'Controllers > RolesController > index', 'Controllers/RolesController@index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(29, 34, 'Controllers > RolesController > create', 'Controllers/RolesController@create', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(30, 35, 'Controllers > RolesController > store', 'Controllers/RolesController@store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(31, 36, 'Controllers > RolesController > edit', 'Controllers/RolesController@edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(32, 37, 'Controllers > RolesController > update', 'Controllers/RolesController@update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(33, 38, 'Controllers > RolesController > destroy', 'Controllers/RolesController@destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(34, 40, 'Controllers > BlogsController > admin_index', 'Controllers/BlogsController@admin_index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(35, 41, 'Controllers > BlogsController > admin_create', 'Controllers/BlogsController@admin_create', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(36, 42, 'Controllers > BlogsController > admin_store', 'Controllers/BlogsController@admin_store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(37, 43, 'Controllers > BlogsController > admin_edit', 'Controllers/BlogsController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(38, 44, 'Controllers > BlogsController > admin_update', 'Controllers/BlogsController@admin_update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(39, 45, 'Controllers > BlogsController > admin_destroy', 'Controllers/BlogsController@admin_destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(40, 46, 'Controllers > BlogsController > admin_trash_status', 'Controllers/BlogsController@admin_trash_status', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(41, 47, 'Controllers > BlogsController > remove_feature_image', 'Controllers/BlogsController@remove_feature_image', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(42, 49, 'Controllers > BlogCategoriesController > list', 'Controllers/BlogCategoriesController@list', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(43, 50, 'Controllers > BlogCategoriesController > admin_index', 'Controllers/BlogCategoriesController@admin_index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(44, 51, 'Controllers > BlogCategoriesController > admin_create', 'Controllers/BlogCategoriesController@admin_create', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(45, 52, 'Controllers > BlogCategoriesController > admin_store', 'Controllers/BlogCategoriesController@admin_store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(46, 53, 'Controllers > BlogCategoriesController > admin_edit', 'Controllers/BlogCategoriesController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(47, 54, 'Controllers > BlogCategoriesController > admin_update', 'Controllers/BlogCategoriesController@admin_update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(48, 55, 'Controllers > BlogCategoriesController > admin_destroy', 'Controllers/BlogCategoriesController@admin_destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(49, 56, 'Controllers > BlogCategoriesController > admin_trash_status', 'Controllers/BlogCategoriesController@admin_trash_status', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(50, 57, 'Controllers > BlogCategoriesController > admin_ajax_add_category', 'Controllers/BlogCategoriesController@admin_ajax_add_category', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(51, 58, 'Controllers > BlogCategoriesController > admin_moveup', 'Controllers/BlogCategoriesController@admin_moveup', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(52, 59, 'Controllers > BlogCategoriesController > admin_movedown', 'Controllers/BlogCategoriesController@admin_movedown', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(53, 61, 'Controllers > PagesController > admin_index', 'Controllers/PagesController@admin_index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(54, 62, 'Controllers > PagesController > admin_create', 'Controllers/PagesController@admin_create', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(55, 63, 'Controllers > PagesController > admin_store', 'Controllers/PagesController@admin_store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(56, 64, 'Controllers > PagesController > admin_edit', 'Controllers/PagesController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(57, 65, 'Controllers > PagesController > admin_update', 'Controllers/PagesController@admin_update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(58, 66, 'Controllers > PagesController > admin_destroy', 'Controllers/PagesController@admin_destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(59, 67, 'Controllers > PagesController > admin_trash_status', 'Controllers/PagesController@admin_trash_status', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(60, 68, 'Controllers > PagesController > remove_feature_image', 'Controllers/PagesController@remove_feature_image', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(61, 70, 'Controllers > MenusController > admin_index', 'Controllers/MenusController@admin_index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(62, 71, 'Controllers > MenusController > admin_create', 'Controllers/MenusController@admin_create', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(63, 72, 'Controllers > MenusController > admin_store', 'Controllers/MenusController@admin_store', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(64, 73, 'Controllers > MenusController > admin_edit', 'Controllers/MenusController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(65, 74, 'Controllers > MenusController > admin_update', 'Controllers/MenusController@admin_update', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(66, 75, 'Controllers > MenusController > admin_destroy', 'Controllers/MenusController@admin_destroy', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(67, 76, 'Controllers > MenusController > ajax_menu_item_delete', 'Controllers/MenusController@ajax_menu_item_delete', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(68, 77, 'Controllers > MenusController > admin_select_menu', 'Controllers/MenusController@admin_select_menu', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(69, 78, 'Controllers > MenusController > ajax_add_link', 'Controllers/MenusController@ajax_add_link', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(70, 79, 'Controllers > MenusController > ajax_add_page', 'Controllers/MenusController@ajax_add_page', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(71, 80, 'Controllers > MenusController > search_menus', 'Controllers/MenusController@search_menus', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(72, 82, 'Controllers > ConfigurationsController > admin_index', 'Controllers/ConfigurationsController@admin_index', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(73, 83, 'Controllers > ConfigurationsController > admin_add', 'Controllers/ConfigurationsController@admin_add', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(74, 84, 'Controllers > ConfigurationsController > admin_edit', 'Controllers/ConfigurationsController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(75, 85, 'Controllers > ConfigurationsController > admin_delete', 'Controllers/ConfigurationsController@admin_delete', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(76, 86, 'Controllers > ConfigurationsController > admin_view', 'Controllers/ConfigurationsController@admin_view', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(77, 87, 'Controllers > ConfigurationsController > admin_prefix', 'Controllers/ConfigurationsController@admin_prefix', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(78, 88, 'Controllers > ConfigurationsController > admin_change_theme', 'Controllers/ConfigurationsController@admin_change_theme', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(79, 89, 'Controllers > ConfigurationsController > admin_change', 'Controllers/ConfigurationsController@admin_change', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(80, 90, 'Controllers > ConfigurationsController > admin_moveup', 'Controllers/ConfigurationsController@admin_moveup', 'web', 'user-define', '2022-12-13 07:20:57', '2022-12-13 07:20:57'),
(81, 91, 'Controllers > ConfigurationsController > admin_movedown', 'Controllers/ConfigurationsController@admin_movedown', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(82, 92, 'Controllers > ConfigurationsController > save_permalink', 'Controllers/ConfigurationsController@save_permalink', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(83, 93, 'Controllers > ConfigurationsController > upload_editor_image', 'Controllers/ConfigurationsController@upload_editor_image', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(84, 130, 'Controllers > DashboardController > dashboard', 'Controllers/DashboardController@dashboard', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(85, 132, 'Controllers > BlogTagsController > list', 'Controllers/BlogTagsController@list', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(86, 133, 'Controllers > BlogTagsController > admin_index', 'Controllers/BlogTagsController@admin_index', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(87, 134, 'Controllers > BlogTagsController > admin_create', 'Controllers/BlogTagsController@admin_create', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(88, 135, 'Controllers > BlogTagsController > admin_store', 'Controllers/BlogTagsController@admin_store', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(89, 136, 'Controllers > BlogTagsController > admin_edit', 'Controllers/BlogTagsController@admin_edit', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(90, 137, 'Controllers > BlogTagsController > admin_update', 'Controllers/BlogTagsController@admin_update', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(91, 138, 'Controllers > BlogTagsController > admin_destroy', 'Controllers/BlogTagsController@admin_destroy', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(92, 96, 'Controllers > HomeController > blogcategory', 'Controllers/HomeController@blogcategory', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(93, 97, 'Controllers > HomeController > detail', 'Controllers/HomeController@detail', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(94, 125, 'Controllers > HomeController > author', 'Controllers/HomeController@author', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(95, 126, 'Controllers > HomeController > blogtag', 'Controllers/HomeController@blogtag', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(96, 127, 'Controllers > HomeController > search', 'Controllers/HomeController@search', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(97, 128, 'Controllers > HomeController > all', 'Controllers/HomeController@all', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(98, 139, 'Controllers > HomeController > blogarchive', 'Controllers/HomeController@blogarchive', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(99, 140, 'Controllers > HomeController > blogslist', 'Controllers/HomeController@blogslist', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(100, 102, 'Installation > WelcomeController > welcome', 'Installation/WelcomeController@welcome', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(101, 104, 'Installation > EnvironmentController > environmentMenu', 'Installation/EnvironmentController@environmentMenu', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(102, 105, 'Installation > EnvironmentController > environmentWizard', 'Installation/EnvironmentController@environmentWizard', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(103, 106, 'Installation > EnvironmentController > saveWizard', 'Installation/EnvironmentController@saveWizard', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(104, 107, 'Installation > EnvironmentController > environmentClassic', 'Installation/EnvironmentController@environmentClassic', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(105, 108, 'Installation > EnvironmentController > saveClassic', 'Installation/EnvironmentController@saveClassic', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(106, 110, 'Installation > RequirementsController > requirements', 'Installation/RequirementsController@requirements', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(107, 112, 'Installation > PermissionsController > permissions', 'Installation/PermissionsController@permissions', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(108, 114, 'Installation > DatabaseController > database', 'Installation/DatabaseController@database', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(109, 116, 'Installation > AdminSetupController > admin', 'Installation/AdminSetupController@admin', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(110, 117, 'Installation > AdminSetupController > saveAdmin', 'Installation/AdminSetupController@saveAdmin', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(111, 119, 'Installation > FinalController > finish', 'Installation/FinalController@finish', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(112, 121, 'Installation > UpdateController > welcome', 'Installation/UpdateController@welcome', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(113, 122, 'Installation > UpdateController > overview', 'Installation/UpdateController@overview', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(114, 123, 'Installation > UpdateController > database', 'Installation/UpdateController@database', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(115, 124, 'Installation > UpdateController > finish', 'Installation/UpdateController@finish', 'web', 'user-define', '2022-12-13 07:20:58', '2022-12-13 07:20:58'),
(116, 141, 'Controllers > UsersController > remove_user_image', 'Controllers/UsersController@remove_user_image', 'web', 'user-define', '2022-12-23 03:48:13', '2022-12-23 03:48:13'),
(117, 142, 'Controllers > HomeController > contact', 'Controllers/HomeController@contact', 'web', 'user-define', '2022-12-23 03:48:13', '2022-12-23 03:48:13'),
(118, 143, 'Controllers > ConfigurationsController > remove_config_image', 'Controllers/ConfigurationsController@remove_config_image', 'web', 'user-define', '2023-02-11 04:32:50', '2023-02-11 04:32:50');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `catalogue_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `excerpt` text DEFAULT NULL,
  `comment` tinyint(4) NOT NULL,
  `featured_id` bigint(20) UNSIGNED DEFAULT 0,
  `featured_image` varchar(255) DEFAULT '0',
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keywords` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 => Published, 2 => Draft, 3 => Trash, 4 => Private, 5 => Pending',
  `visibility` enum('Pu','PP','Pr') NOT NULL COMMENT 'Pu => Public, PP => Password Protected, Pr => Private',
  `year` year(4) DEFAULT 2024,
  `publish_on` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `catalogue_id`, `title`, `slug`, `content`, `excerpt`, `comment`, `featured_id`, `featured_image`, `meta_title`, `meta_description`, `meta_keywords`, `password`, `status`, `visibility`, `year`, `publish_on`, `created_at`, `updated_at`) VALUES
(1, 1, 'Premium Widget', 'premium-widget', 'Experience the latest in widget technology with our Premium Widget. This state-of-the-art product is designed to meet all your widget needs.', 'Discover the excellence of our Premium Widget.', 0, 0, '0', 'Premium Widget - Unleash Innovation', 'Explore the features and benefits of our Premium Widget. Unleash innovation with the best widget in the market.', 'premium, widget, innovation', NULL, 1, '', '2024', NULL, '2024-01-13 02:35:20', '2024-01-13 02:35:20');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `module` text DEFAULT NULL COMMENT 'for laravel plugin/modules roles',
  `level` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'to maintain hierarchy',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `module`, `level`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'web', NULL, 0, '2022-10-29 08:21:29', '2023-01-07 07:36:54'),
(2, 'Manager', 'web', NULL, 0, '2022-10-29 08:21:29', '2022-12-24 05:19:21'),
(3, 'Customer', 'web', NULL, 0, '2022-12-08 07:03:15', '2022-12-24 05:25:42'),
(4, 'Admin', 'web', NULL, 0, '2023-01-07 05:07:01', '2023-01-07 07:30:13');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1),
(61, 1),
(62, 1),
(63, 1),
(64, 1),
(65, 1),
(66, 1),
(67, 1),
(68, 1),
(69, 1),
(70, 1),
(71, 1),
(72, 1),
(73, 1),
(74, 1),
(75, 1),
(76, 1),
(77, 1),
(78, 1),
(79, 1),
(80, 1),
(81, 1),
(82, 1),
(83, 1),
(84, 1),
(84, 3),
(84, 4),
(85, 1),
(86, 1),
(87, 1),
(88, 1),
(89, 1),
(90, 1),
(91, 1),
(92, 1),
(93, 1),
(94, 1),
(95, 1),
(96, 1),
(97, 1),
(98, 1),
(99, 1),
(100, 1),
(101, 1),
(102, 1),
(103, 1),
(104, 1),
(105, 1),
(106, 1),
(107, 1),
(108, 1),
(109, 1),
(110, 1),
(111, 1),
(112, 1),
(113, 1),
(114, 1),
(115, 1),
(116, 1),
(117, 1),
(118, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `temp_permissions`
--

CREATE TABLE `temp_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `controller` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `type` enum('App','Module','Controller','Action') NOT NULL DEFAULT 'App',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `temp_permissions`
--

INSERT INTO `temp_permissions` (`id`, `parent_id`, `name`, `path`, `controller`, `action`, `type`, `created_at`, `updated_at`) VALUES
(1, 0, 'Controllers', 'App\\Http\\Controllers\\Admin\\PermissionsController@index', NULL, NULL, 'App', NULL, NULL),
(2, 1, 'Admin', 'App\\Http\\Controllers\\Admin\\PermissionsController@index', NULL, NULL, 'App', NULL, NULL),
(3, 2, 'App\\Http\\Controllers\\Admin\\PermissionsController', 'App\\Http\\Controllers\\Admin\\PermissionsController@index', 'PermissionsController', NULL, 'Controller', NULL, NULL),
(4, 3, 'index', 'App\\Http\\Controllers\\Admin\\PermissionsController@index', 'PermissionsController', 'index', 'Action', NULL, NULL),
(5, 3, 'roles_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@roles_permissions', 'PermissionsController', 'roles_permissions', 'Action', NULL, NULL),
(6, 3, 'role_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@role_permissions', 'PermissionsController', 'role_permissions', 'Action', NULL, NULL),
(7, 3, 'user_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@user_permissions', 'PermissionsController', 'user_permissions', 'Action', NULL, NULL),
(8, 3, 'manage_user_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@manage_user_permissions', 'PermissionsController', 'manage_user_permissions', 'Action', NULL, NULL),
(9, 3, 'sync', 'App\\Http\\Controllers\\Admin\\PermissionsController@sync', 'PermissionsController', 'sync', 'Action', NULL, NULL),
(10, 3, 'manage_role_all_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@manage_role_all_permissions', 'PermissionsController', 'manage_role_all_permissions', 'Action', NULL, NULL),
(11, 3, 'manage_role_permission', 'App\\Http\\Controllers\\Admin\\PermissionsController@manage_role_permission', 'PermissionsController', 'manage_role_permission', 'Action', NULL, NULL),
(12, 3, 'manage_user_permission', 'App\\Http\\Controllers\\Admin\\PermissionsController@manage_user_permission', 'PermissionsController', 'manage_user_permission', 'Action', NULL, NULL),
(13, 3, 'delete_user_permission', 'App\\Http\\Controllers\\Admin\\PermissionsController@delete_user_permission', 'PermissionsController', 'delete_user_permission', 'Action', NULL, NULL),
(14, 3, 'remove_user_all_permission', 'App\\Http\\Controllers\\Admin\\PermissionsController@remove_user_all_permission', 'PermissionsController', 'remove_user_all_permission', 'Action', NULL, NULL),
(15, 3, 'temp_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@temp_permissions', 'PermissionsController', 'temp_permissions', 'Action', NULL, NULL),
(16, 3, 'generate_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@generate_permissions', 'PermissionsController', 'generate_permissions', 'Action', NULL, NULL),
(17, 3, 'add_to_permissions', 'App\\Http\\Controllers\\Admin\\PermissionsController@add_to_permissions', 'PermissionsController', 'add_to_permissions', 'Action', NULL, NULL),
(18, 3, 'permission_by_action', 'App\\Http\\Controllers\\Admin\\PermissionsController@permission_by_action', 'PermissionsController', 'permission_by_action', 'Action', NULL, NULL),
(19, 3, 'get_users_by_role', 'App\\Http\\Controllers\\Admin\\PermissionsController@get_users_by_role', 'PermissionsController', 'get_users_by_role', 'Action', NULL, NULL),
(20, 3, 'get_permission_by_user', 'App\\Http\\Controllers\\Admin\\PermissionsController@get_permission_by_user', 'PermissionsController', 'get_permission_by_user', 'Action', NULL, NULL),
(21, 2, 'App\\Http\\Controllers\\Admin\\UsersController', 'App\\Http\\Controllers\\Admin\\UsersController@dashboard', 'UsersController', NULL, 'Controller', NULL, NULL),
(22, 21, 'dashboard', 'App\\Http\\Controllers\\Admin\\UsersController@dashboard', 'UsersController', 'dashboard', 'Action', NULL, NULL),
(23, 21, 'index', 'App\\Http\\Controllers\\Admin\\UsersController@index', 'UsersController', 'index', 'Action', NULL, NULL),
(24, 21, 'create', 'App\\Http\\Controllers\\Admin\\UsersController@create', 'UsersController', 'create', 'Action', NULL, NULL),
(25, 21, 'store', 'App\\Http\\Controllers\\Admin\\UsersController@store', 'UsersController', 'store', 'Action', NULL, NULL),
(26, 21, 'edit', 'App\\Http\\Controllers\\Admin\\UsersController@edit', 'UsersController', 'edit', 'Action', NULL, NULL),
(27, 21, 'update', 'App\\Http\\Controllers\\Admin\\UsersController@update', 'UsersController', 'update', 'Action', NULL, NULL),
(28, 21, 'destroy', 'App\\Http\\Controllers\\Admin\\UsersController@destroy', 'UsersController', 'destroy', 'Action', NULL, NULL),
(29, 21, 'update_password', 'App\\Http\\Controllers\\Admin\\UsersController@update_password', 'UsersController', 'update_password', 'Action', NULL, NULL),
(30, 21, 'update_user_roles', 'App\\Http\\Controllers\\Admin\\UsersController@update_user_roles', 'UsersController', 'update_user_roles', 'Action', NULL, NULL),
(31, 21, 'profile', 'App\\Http\\Controllers\\Admin\\UsersController@profile', 'UsersController', 'profile', 'Action', NULL, NULL),
(32, 2, 'App\\Http\\Controllers\\Admin\\RolesController', 'App\\Http\\Controllers\\Admin\\RolesController@index', 'RolesController', NULL, 'Controller', NULL, NULL),
(33, 32, 'index', 'App\\Http\\Controllers\\Admin\\RolesController@index', 'RolesController', 'index', 'Action', NULL, NULL),
(34, 32, 'create', 'App\\Http\\Controllers\\Admin\\RolesController@create', 'RolesController', 'create', 'Action', NULL, NULL),
(35, 32, 'store', 'App\\Http\\Controllers\\Admin\\RolesController@store', 'RolesController', 'store', 'Action', NULL, NULL),
(36, 32, 'edit', 'App\\Http\\Controllers\\Admin\\RolesController@edit', 'RolesController', 'edit', 'Action', NULL, NULL),
(37, 32, 'update', 'App\\Http\\Controllers\\Admin\\RolesController@update', 'RolesController', 'update', 'Action', NULL, NULL),
(38, 32, 'destroy', 'App\\Http\\Controllers\\Admin\\RolesController@destroy', 'RolesController', 'destroy', 'Action', NULL, NULL),
(39, 2, 'App\\Http\\Controllers\\Admin\\BlogsController', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_index', 'BlogsController', NULL, 'Controller', NULL, NULL),
(40, 39, 'admin_index', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_index', 'BlogsController', 'admin_index', 'Action', NULL, NULL),
(41, 39, 'admin_create', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_create', 'BlogsController', 'admin_create', 'Action', NULL, NULL),
(42, 39, 'admin_store', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_store', 'BlogsController', 'admin_store', 'Action', NULL, NULL),
(43, 39, 'admin_edit', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_edit', 'BlogsController', 'admin_edit', 'Action', NULL, NULL),
(44, 39, 'admin_update', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_update', 'BlogsController', 'admin_update', 'Action', NULL, NULL),
(45, 39, 'admin_destroy', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_destroy', 'BlogsController', 'admin_destroy', 'Action', NULL, NULL),
(46, 39, 'admin_trash_status', 'App\\Http\\Controllers\\Admin\\BlogsController@admin_trash_status', 'BlogsController', 'admin_trash_status', 'Action', NULL, NULL),
(47, 39, 'remove_feature_image', 'App\\Http\\Controllers\\Admin\\BlogsController@remove_feature_image', 'BlogsController', 'remove_feature_image', 'Action', NULL, NULL),
(48, 2, 'App\\Http\\Controllers\\Admin\\BlogCategoriesController', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@list', 'BlogCategoriesController', NULL, 'Controller', NULL, NULL),
(49, 48, 'list', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@list', 'BlogCategoriesController', 'list', 'Action', NULL, NULL),
(50, 48, 'admin_index', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_index', 'BlogCategoriesController', 'admin_index', 'Action', NULL, NULL),
(51, 48, 'admin_create', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_create', 'BlogCategoriesController', 'admin_create', 'Action', NULL, NULL),
(52, 48, 'admin_store', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_store', 'BlogCategoriesController', 'admin_store', 'Action', NULL, NULL),
(53, 48, 'admin_edit', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_edit', 'BlogCategoriesController', 'admin_edit', 'Action', NULL, NULL),
(54, 48, 'admin_update', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_update', 'BlogCategoriesController', 'admin_update', 'Action', NULL, NULL),
(55, 48, 'admin_destroy', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_destroy', 'BlogCategoriesController', 'admin_destroy', 'Action', NULL, NULL),
(56, 48, 'admin_trash_status', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_trash_status', 'BlogCategoriesController', 'admin_trash_status', 'Action', NULL, NULL),
(57, 48, 'admin_ajax_add_category', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_ajax_add_category', 'BlogCategoriesController', 'admin_ajax_add_category', 'Action', NULL, NULL),
(58, 48, 'admin_moveup', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_moveup', 'BlogCategoriesController', 'admin_moveup', 'Action', NULL, NULL),
(59, 48, 'admin_movedown', 'App\\Http\\Controllers\\Admin\\BlogCategoriesController@admin_movedown', 'BlogCategoriesController', 'admin_movedown', 'Action', NULL, NULL),
(60, 2, 'App\\Http\\Controllers\\Admin\\PagesController', 'App\\Http\\Controllers\\Admin\\PagesController@admin_index', 'PagesController', NULL, 'Controller', NULL, NULL),
(61, 60, 'admin_index', 'App\\Http\\Controllers\\Admin\\PagesController@admin_index', 'PagesController', 'admin_index', 'Action', NULL, NULL),
(62, 60, 'admin_create', 'App\\Http\\Controllers\\Admin\\PagesController@admin_create', 'PagesController', 'admin_create', 'Action', NULL, NULL),
(63, 60, 'admin_store', 'App\\Http\\Controllers\\Admin\\PagesController@admin_store', 'PagesController', 'admin_store', 'Action', NULL, NULL),
(64, 60, 'admin_edit', 'App\\Http\\Controllers\\Admin\\PagesController@admin_edit', 'PagesController', 'admin_edit', 'Action', NULL, NULL),
(65, 60, 'admin_update', 'App\\Http\\Controllers\\Admin\\PagesController@admin_update', 'PagesController', 'admin_update', 'Action', NULL, NULL),
(66, 60, 'admin_destroy', 'App\\Http\\Controllers\\Admin\\PagesController@admin_destroy', 'PagesController', 'admin_destroy', 'Action', NULL, NULL),
(67, 60, 'admin_trash_status', 'App\\Http\\Controllers\\Admin\\PagesController@admin_trash_status', 'PagesController', 'admin_trash_status', 'Action', NULL, NULL),
(68, 60, 'remove_feature_image', 'App\\Http\\Controllers\\Admin\\PagesController@remove_feature_image', 'PagesController', 'remove_feature_image', 'Action', NULL, NULL),
(69, 2, 'App\\Http\\Controllers\\Admin\\MenusController', 'App\\Http\\Controllers\\Admin\\MenusController@admin_index', 'MenusController', NULL, 'Controller', NULL, NULL),
(70, 69, 'admin_index', 'App\\Http\\Controllers\\Admin\\MenusController@admin_index', 'MenusController', 'admin_index', 'Action', NULL, NULL),
(71, 69, 'admin_create', 'App\\Http\\Controllers\\Admin\\MenusController@admin_create', 'MenusController', 'admin_create', 'Action', NULL, NULL),
(72, 69, 'admin_store', 'App\\Http\\Controllers\\Admin\\MenusController@admin_store', 'MenusController', 'admin_store', 'Action', NULL, NULL),
(73, 69, 'admin_edit', 'App\\Http\\Controllers\\Admin\\MenusController@admin_edit', 'MenusController', 'admin_edit', 'Action', NULL, NULL),
(74, 69, 'admin_update', 'App\\Http\\Controllers\\Admin\\MenusController@admin_update', 'MenusController', 'admin_update', 'Action', NULL, NULL),
(75, 69, 'admin_destroy', 'App\\Http\\Controllers\\Admin\\MenusController@admin_destroy', 'MenusController', 'admin_destroy', 'Action', NULL, NULL),
(76, 69, 'ajax_menu_item_delete', 'App\\Http\\Controllers\\Admin\\MenusController@ajax_menu_item_delete', 'MenusController', 'ajax_menu_item_delete', 'Action', NULL, NULL),
(77, 69, 'admin_select_menu', 'App\\Http\\Controllers\\Admin\\MenusController@admin_select_menu', 'MenusController', 'admin_select_menu', 'Action', NULL, NULL),
(78, 69, 'ajax_add_link', 'App\\Http\\Controllers\\Admin\\MenusController@ajax_add_link', 'MenusController', 'ajax_add_link', 'Action', NULL, NULL),
(79, 69, 'ajax_add_page', 'App\\Http\\Controllers\\Admin\\MenusController@ajax_add_page', 'MenusController', 'ajax_add_page', 'Action', NULL, NULL),
(80, 69, 'search_menus', 'App\\Http\\Controllers\\Admin\\MenusController@search_menus', 'MenusController', 'search_menus', 'Action', NULL, NULL),
(81, 2, 'App\\Http\\Controllers\\Admin\\ConfigurationsController', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_index', 'ConfigurationsController', NULL, 'Controller', NULL, NULL),
(82, 81, 'admin_index', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_index', 'ConfigurationsController', 'admin_index', 'Action', NULL, NULL),
(83, 81, 'admin_add', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_add', 'ConfigurationsController', 'admin_add', 'Action', NULL, NULL),
(84, 81, 'admin_edit', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_edit', 'ConfigurationsController', 'admin_edit', 'Action', NULL, NULL),
(85, 81, 'admin_delete', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_delete', 'ConfigurationsController', 'admin_delete', 'Action', NULL, NULL),
(86, 81, 'admin_view', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_view', 'ConfigurationsController', 'admin_view', 'Action', NULL, NULL),
(87, 81, 'admin_prefix', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_prefix', 'ConfigurationsController', 'admin_prefix', 'Action', NULL, NULL),
(88, 81, 'admin_change_theme', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_change_theme', 'ConfigurationsController', 'admin_change_theme', 'Action', NULL, NULL),
(89, 81, 'admin_change', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_change', 'ConfigurationsController', 'admin_change', 'Action', NULL, NULL),
(90, 81, 'admin_moveup', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_moveup', 'ConfigurationsController', 'admin_moveup', 'Action', NULL, NULL),
(91, 81, 'admin_movedown', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@admin_movedown', 'ConfigurationsController', 'admin_movedown', 'Action', NULL, NULL),
(92, 81, 'save_permalink', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@save_permalink', 'ConfigurationsController', 'save_permalink', 'Action', NULL, NULL),
(93, 81, 'upload_editor_image', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@upload_editor_image', 'ConfigurationsController', 'upload_editor_image', 'Action', NULL, NULL),
(94, 1, 'Front', 'App\\Http\\Controllers\\Front\\HomeController@blogcategory', NULL, NULL, 'App', NULL, NULL),
(95, 94, 'App\\Http\\Controllers\\Front\\HomeController', 'App\\Http\\Controllers\\Front\\HomeController@blogcategory', 'HomeController', NULL, 'Controller', NULL, NULL),
(96, 95, 'blogcategory', 'App\\Http\\Controllers\\Front\\HomeController@blogcategory', 'HomeController', 'blogcategory', 'Action', NULL, NULL),
(97, 95, 'detail', 'App\\Http\\Controllers\\Front\\HomeController@detail', 'HomeController', 'detail', 'Action', NULL, NULL),
(98, 0, 'Installation 0', 'Modules\\Installation\\Http\\Controllers\\WelcomeController@welcome', NULL, NULL, 'Module', NULL, NULL),
(99, 98, 'Http 98', 'Modules\\Installation\\Http\\Controllers\\WelcomeController@welcome', NULL, NULL, 'Module', NULL, NULL),
(100, 99, 'Controllers 99', 'Modules\\Installation\\Http\\Controllers\\WelcomeController@welcome', NULL, NULL, 'Module', NULL, NULL),
(101, 100, 'Modules\\Installation\\Http\\Controllers\\WelcomeController', 'Modules\\Installation\\Http\\Controllers\\WelcomeController@welcome', 'WelcomeController', NULL, 'Controller', NULL, NULL),
(102, 101, 'welcome', 'Modules\\Installation\\Http\\Controllers\\WelcomeController@welcome', 'WelcomeController', 'welcome', 'Action', NULL, NULL),
(103, 100, 'Modules\\Installation\\Http\\Controllers\\EnvironmentController', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@environmentMenu', 'EnvironmentController', NULL, 'Controller', NULL, NULL),
(104, 103, 'environmentMenu', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@environmentMenu', 'EnvironmentController', 'environmentMenu', 'Action', NULL, NULL),
(105, 103, 'environmentWizard', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@environmentWizard', 'EnvironmentController', 'environmentWizard', 'Action', NULL, NULL),
(106, 103, 'saveWizard', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@saveWizard', 'EnvironmentController', 'saveWizard', 'Action', NULL, NULL),
(107, 103, 'environmentClassic', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@environmentClassic', 'EnvironmentController', 'environmentClassic', 'Action', NULL, NULL),
(108, 103, 'saveClassic', 'Modules\\Installation\\Http\\Controllers\\EnvironmentController@saveClassic', 'EnvironmentController', 'saveClassic', 'Action', NULL, NULL),
(109, 100, 'Modules\\Installation\\Http\\Controllers\\RequirementsController', 'Modules\\Installation\\Http\\Controllers\\RequirementsController@requirements', 'RequirementsController', NULL, 'Controller', NULL, NULL),
(110, 109, 'requirements', 'Modules\\Installation\\Http\\Controllers\\RequirementsController@requirements', 'RequirementsController', 'requirements', 'Action', NULL, NULL),
(111, 100, 'Modules\\Installation\\Http\\Controllers\\PermissionsController', 'Modules\\Installation\\Http\\Controllers\\PermissionsController@permissions', 'PermissionsController', NULL, 'Controller', NULL, NULL),
(112, 111, 'permissions', 'Modules\\Installation\\Http\\Controllers\\PermissionsController@permissions', 'PermissionsController', 'permissions', 'Action', NULL, NULL),
(113, 100, 'Modules\\Installation\\Http\\Controllers\\DatabaseController', 'Modules\\Installation\\Http\\Controllers\\DatabaseController@database', 'DatabaseController', NULL, 'Controller', NULL, NULL),
(114, 113, 'database', 'Modules\\Installation\\Http\\Controllers\\DatabaseController@database', 'DatabaseController', 'database', 'Action', NULL, NULL),
(115, 100, 'Modules\\Installation\\Http\\Controllers\\AdminSetupController', 'Modules\\Installation\\Http\\Controllers\\AdminSetupController@admin', 'AdminSetupController', NULL, 'Controller', NULL, NULL),
(116, 115, 'admin', 'Modules\\Installation\\Http\\Controllers\\AdminSetupController@admin', 'AdminSetupController', 'admin', 'Action', NULL, NULL),
(117, 115, 'saveAdmin', 'Modules\\Installation\\Http\\Controllers\\AdminSetupController@saveAdmin', 'AdminSetupController', 'saveAdmin', 'Action', NULL, NULL),
(118, 100, 'Modules\\Installation\\Http\\Controllers\\FinalController', 'Modules\\Installation\\Http\\Controllers\\FinalController@finish', 'FinalController', NULL, 'Controller', NULL, NULL),
(119, 118, 'finish', 'Modules\\Installation\\Http\\Controllers\\FinalController@finish', 'FinalController', 'finish', 'Action', NULL, NULL),
(120, 100, 'Modules\\Installation\\Http\\Controllers\\UpdateController', 'Modules\\Installation\\Http\\Controllers\\UpdateController@welcome', 'UpdateController', NULL, 'Controller', NULL, NULL),
(121, 120, 'welcome', 'Modules\\Installation\\Http\\Controllers\\UpdateController@welcome', 'UpdateController', 'welcome', 'Action', NULL, NULL),
(122, 120, 'overview', 'Modules\\Installation\\Http\\Controllers\\UpdateController@overview', 'UpdateController', 'overview', 'Action', NULL, NULL),
(123, 120, 'database', 'Modules\\Installation\\Http\\Controllers\\UpdateController@database', 'UpdateController', 'database', 'Action', NULL, NULL),
(124, 120, 'finish', 'Modules\\Installation\\Http\\Controllers\\UpdateController@finish', 'UpdateController', 'finish', 'Action', NULL, NULL),
(125, 95, 'author', 'App\\Http\\Controllers\\Front\\HomeController@author', 'HomeController', 'author', 'Action', NULL, NULL),
(126, 95, 'blogtag', 'App\\Http\\Controllers\\Front\\HomeController@blogtag', 'HomeController', 'blogtag', 'Action', NULL, NULL),
(127, 95, 'search', 'App\\Http\\Controllers\\Front\\HomeController@search', 'HomeController', 'search', 'Action', NULL, NULL),
(128, 95, 'all', 'App\\Http\\Controllers\\Front\\HomeController@all', 'HomeController', 'all', 'Action', NULL, NULL),
(129, 2, 'App\\Http\\Controllers\\Admin\\DashboardController', 'App\\Http\\Controllers\\Admin\\DashboardController@dashboard', 'DashboardController', NULL, 'Controller', NULL, NULL),
(130, 129, 'dashboard', 'App\\Http\\Controllers\\Admin\\DashboardController@dashboard', 'DashboardController', 'dashboard', 'Action', NULL, NULL),
(131, 2, 'App\\Http\\Controllers\\Admin\\BlogTagsController', 'App\\Http\\Controllers\\Admin\\BlogTagsController@list', 'BlogTagsController', NULL, 'Controller', NULL, NULL),
(132, 131, 'list', 'App\\Http\\Controllers\\Admin\\BlogTagsController@list', 'BlogTagsController', 'list', 'Action', NULL, NULL),
(133, 131, 'admin_index', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_index', 'BlogTagsController', 'admin_index', 'Action', NULL, NULL),
(134, 131, 'admin_create', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_create', 'BlogTagsController', 'admin_create', 'Action', NULL, NULL),
(135, 131, 'admin_store', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_store', 'BlogTagsController', 'admin_store', 'Action', NULL, NULL),
(136, 131, 'admin_edit', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_edit', 'BlogTagsController', 'admin_edit', 'Action', NULL, NULL),
(137, 131, 'admin_update', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_update', 'BlogTagsController', 'admin_update', 'Action', NULL, NULL),
(138, 131, 'admin_destroy', 'App\\Http\\Controllers\\Admin\\BlogTagsController@admin_destroy', 'BlogTagsController', 'admin_destroy', 'Action', NULL, NULL),
(139, 95, 'blogarchive', 'App\\Http\\Controllers\\Front\\HomeController@blogarchive', 'HomeController', 'blogarchive', 'Action', NULL, NULL),
(140, 95, 'blogslist', 'App\\Http\\Controllers\\Front\\HomeController@blogslist', 'HomeController', 'blogslist', 'Action', NULL, NULL),
(141, 21, 'remove_user_image', 'App\\Http\\Controllers\\Admin\\UsersController@remove_user_image', 'UsersController', 'remove_user_image', 'Action', NULL, NULL),
(142, 95, 'contact', 'App\\Http\\Controllers\\Front\\HomeController@contact', 'HomeController', 'contact', 'Action', NULL, NULL),
(143, 81, 'remove_config_image', 'App\\Http\\Controllers\\Admin\\ConfigurationsController@remove_config_image', 'ConfigurationsController', 'remove_config_image', 'Action', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `profile`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin ', 'admin', NULL, 'admin@pakindustrialexpo.com', NULL, '$2y$10$wVZN52uL4Yy1cUMNpGxqrubMAwI.ZjuStUee29/8R68cXlt4g4b0i', NULL, NULL, NULL, 'avqn7AEX8OH9yc2nM0IcQsWpVkA0FvjRXi57BrxPmJ1WicON3CIdw40N2Rv6', '2023-11-18 00:21:05', '2023-11-23 14:09:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_blog_categories`
--
ALTER TABLE `blog_blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_blog_categories_blog_id_foreign` (`blog_id`),
  ADD KEY `blog_blog_categories_blog_category_id_foreign` (`blog_category_id`);

--
-- Indexes for table `blog_blog_tags`
--
ALTER TABLE `blog_blog_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_blog_tags_blog_id_foreign` (`blog_id`),
  ADD KEY `blog_blog_tags_blog_tag_id_foreign` (`blog_tag_id`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_categories_user_id_foreign` (`user_id`);

--
-- Indexes for table `blog_metas`
--
ALTER TABLE `blog_metas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_metas_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `blog_seos`
--
ALTER TABLE `blog_seos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_seos_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_tags_user_id_foreign` (`user_id`);

--
-- Indexes for table `catalogues`
--
ALTER TABLE `catalogues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configurations`
--
ALTER TABLE `configurations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exhibitions`
--
ALTER TABLE `exhibitions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `media_uuid_unique` (`uuid`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  ADD KEY `media_order_column_index` (`order_column`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_menu_id_foreign` (`menu_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_metas`
--
ALTER TABLE `page_metas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `page_metas_page_id_foreign` (`page_id`);

--
-- Indexes for table `page_seos`
--
ALTER TABLE `page_seos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `page_seos_page_id_foreign` (`page_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`),
  ADD KEY `permissions_temp_permission_id_foreign` (`temp_permission_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `temp_permissions`
--
ALTER TABLE `temp_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `blog_blog_categories`
--
ALTER TABLE `blog_blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `blog_blog_tags`
--
ALTER TABLE `blog_blog_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `blog_metas`
--
ALTER TABLE `blog_metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `blog_seos`
--
ALTER TABLE `blog_seos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `blog_tags`
--
ALTER TABLE `blog_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `catalogues`
--
ALTER TABLE `catalogues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `configurations`
--
ALTER TABLE `configurations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exhibitions`
--
ALTER TABLE `exhibitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `page_metas`
--
ALTER TABLE `page_metas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `page_seos`
--
ALTER TABLE `page_seos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `temp_permissions`
--
ALTER TABLE `temp_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_blog_categories`
--
ALTER TABLE `blog_blog_categories`
  ADD CONSTRAINT `blog_blog_categories_blog_category_id_foreign` FOREIGN KEY (`blog_category_id`) REFERENCES `blog_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_blog_categories_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_blog_tags`
--
ALTER TABLE `blog_blog_tags`
  ADD CONSTRAINT `blog_blog_tags_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_blog_tags_blog_tag_id_foreign` FOREIGN KEY (`blog_tag_id`) REFERENCES `blog_tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD CONSTRAINT `blog_categories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_metas`
--
ALTER TABLE `blog_metas`
  ADD CONSTRAINT `blog_metas_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_seos`
--
ALTER TABLE `blog_seos`
  ADD CONSTRAINT `blog_seos_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD CONSTRAINT `blog_tags_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `page_metas`
--
ALTER TABLE `page_metas`
  ADD CONSTRAINT `page_metas_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `page_seos`
--
ALTER TABLE `page_seos`
  ADD CONSTRAINT `page_seos_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_temp_permission_id_foreign` FOREIGN KEY (`temp_permission_id`) REFERENCES `temp_permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
