-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2022 at 06:41 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aryashali`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(100) NOT NULL,
  `brand_title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_title`) VALUES
(6, 'Biba'),
(7, 'Flying Machine'),
(10, 'Kidzee');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `p_id` int(10) NOT NULL,
  `ip_add` varchar(250) NOT NULL,
  `user_id` int(10) NOT NULL,
  `product_title` varchar(100) NOT NULL,
  `product_image` varchar(300) NOT NULL,
  `qty` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `total_amount` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `p_id`, `ip_add`, `user_id`, `product_title`, `product_image`, `qty`, `price`, `total_amount`) VALUES
(79, 11, '0.0.0.0', 2, 'Baby Shirt', 'babyshirt.JPG', 1, 500, 500),
(80, 2, '0.0.0.0', 2, 'iPhone 5s', 'iphonemobile.JPG', 1, 25000, 25000);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `cat_title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_title`) VALUES
(2, 'Ladies Wear'),
(3, 'Mens Wear'),
(4, 'Kids Wear');

-- --------------------------------------------------------

--
-- Table structure for table `customer_order`
--

CREATE TABLE `customer_order` (
  `id` int(100) NOT NULL,
  `uid` int(100) NOT NULL,
  `pid` int(100) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_price` int(100) NOT NULL,
  `p_qty` int(100) NOT NULL,
  `p_status` varchar(100) NOT NULL,
  `tr_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_order`
--

INSERT INTO `customer_order` (`id`, `uid`, `pid`, `p_name`, `p_price`, `p_qty`, `p_status`, `tr_id`) VALUES
(34, 6, 8, 'SIlk Saree', 1000, 1, 'CONFIRMED', '1595890472'),
(35, 6, 11, 'Baby Shirt', 500, 1, 'CONFIRMED', '1595890472'),
(36, 6, 24, 'Plain formals for men', 300, 1, 'CONFIRMED', '479460988');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(100) NOT NULL,
  `product_cat` varchar(100) NOT NULL,
  `product_brand` varchar(100) NOT NULL,
  `product_title` varchar(50) NOT NULL,
  `product_price` int(100) NOT NULL,
  `product_desc` text NOT NULL,
  `product_image` text NOT NULL,
  `product_keywords` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_cat`, `product_brand`, `product_title`, `product_price`, `product_desc`, `product_image`, `product_keywords`) VALUES
(7, '2', '6', 'Draped Lehenga', 1500, 'Matching Lehenga', 'lehenga.JPG', 'lehenga biba'),
(8, '2', '6', 'SIlk Saree', 1000, 'Pure Silk Saree', 'saree.JPG', 'biba saree'),
(9, '3', '7', 'T-Shirt', 700, 'T-Shirt for summer', 'tshirt.JPG', 'flying machine tshirt'),
(10, '3', '7', 'FM Jeans', 1800, 'Jeans for the ones who do', 'jeans.JPG', 'flying machine jeans'),
(11, '4', '10', 'Baby Shirt', 500, 'Shirt for the babies', 'babyshirt.JPG', 'kids shirt kidzee'),
(12, '4', '10', 'Kids Jeans', 800, 'Jeans for kids', 'kidsjeans.JPG', 'kids jeans kidzee'),
(17, '4', '10', 'Red Frock', 200, 'Pretty cute frock', 'baby_frok.jpeg', 'frock baby'),
(18, '4', '10', 'Designed shirt', 150, 'Small Designful shirt', 'babyshirt.jpg', 'kidzee'),
(19, '2', '6', 'black designful dress', 700, 'Attractive most beautiful dress ', 'black_frok_ledy.jpeg', 'baba black dress'),
(20, '3', '7', ' Short-Sleeve Poplin Shir', 280, 'Essentials Men\'s Slim-Fit Short-Sleeve Poplin Shirt', 'check_shirt.jpeg', 'flying machine men check'),
(22, '3', '7', 'Formal shirt', 300, 'fohemr Mens Long Sleeve Button Down Dress Shirt Vintage Floral Print Shirt Regular Fit', 'designed_shirt.jpeg', 'flying machine'),
(23, '2', '6', 'Lehenga for women', 1200, 'indian ready to wear silk flared bridal lehenga choli for women with stitched blouse and dupatta', 'designfull_ledy.jpeg', 'biba'),
(24, '3', '7', 'Plain formals for men', 300, 'Van Heusen Men\'s Dress Shirt Regular Fit Oxford Solid Buttondown Collar', 'plain_shirt.jpeg', 'formals for men'),
(25, '3', '7', 'Rainbow designed shirt for men', 500, ' Awesome attractive design', 'rainbow_shirt.jpeg', 'ranibow line shirt rainbow_shirt'),
(26, '3', '7', 'Red velvet shirt for men', 500, 'Mens Velvet Velour Fashion Hip Hop Long Line Hem T Shirts\r\n', 'red_velvet.jpeg', 'red velvet shirt'),
(27, '2', '6', 'Sky blue kurti for women', 800, 'Indian Kurti for Womens With Pant | Sky Blue Rayon Block Printed Kurta Partywear Kurtis For Women Tops Tunic', 'skyblue_kurta_ledy.jpeg', 'sky blue kurti'),
(28, '4', '10', 'stylish baby dress', 100, 'stylish baby dress ', 'stylish_baby.jpeg', 'baby dress'),
(29, '2', '6', 'White Kurti for ledy', 400, 'White beautiful kurti for womens', 'white_ledy.jpeg', 'white kurti for women');

-- --------------------------------------------------------

--
-- Table structure for table `received_payment`
--

CREATE TABLE `received_payment` (
  `id` int(100) NOT NULL,
  `uid` int(100) NOT NULL,
  `amt` int(100) NOT NULL,
  `tr_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(10) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `address1` varchar(300) NOT NULL,
  `address2` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `address1`, `address2`) VALUES
(1, 'Satyam', 'Raj', 'satyammast@gmail.com', '3814d460c26c2dbab2d80294d2cc9882', '8235639917', 'Prem Electronics Block Road Ratu', 'Prem Electronics Block Road Ratu'),
(2, 'Abhijeet', 'Kumar', 'abhinav@krotos.com', '6cebe3b43c4495fdf87fcaa43b485236', '7631649503', 'West Lohanipur, Kadamkuan, MNS Lane', 'Patna'),
(3, 'Krotos', 'Kumar', 'kroto@star.com', 'e3daab6a6b16a140aaf0f1df98d3be24', '7631649503', 'West Lohanipur, Kadamkuan, MNS Lane', 'Patna'),
(4, 'Pranav', 'Prem', 'pranav.prem@gmail.com', '929847725b8d48b47ecba736b0d04520', '8235639917', 'Prem Electronics Block Road Ratu', 'sdsd'),
(5, 'Shubham', 'Raj', 'shubham@gmail.com', '5568fda880263b9be0b72104354fa3dc', '8235639917', 'Prem Electronics Block Road Ratu', 'bangalore'),
(6, 'Satyam', 'Coder', 'sb@gmail.com', '25d55ad283aa400af464c76d713c07ad', '1234567890', 'Aurangabad', 'Dhule');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `customer_order`
--
ALTER TABLE `customer_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `received_payment`
--
ALTER TABLE `received_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customer_order`
--
ALTER TABLE `customer_order`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `received_payment`
--
ALTER TABLE `received_payment`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
