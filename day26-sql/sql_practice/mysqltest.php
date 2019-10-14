<?php

require_once "DB/DB.php";
require_once "DB/DB_functions.php";
require_once "DB/Country/Country.php";
require_once "DB/Region/Region.php";

connect('localhost', 'world', 'root', 'rootroot');

$query = 'SELECT * FROM `country` WHERE `Code`=? LIMIT 1';

$results = select_one($query, ["CZE"], 'Country');

// $region = new Region;
// $region->name = 'Central Africa';
// $region->insert();

// echo "A new region was inserted with id " . $region->id . "<br>";

$query = "
SELECT *
FROM `region`
WHERE `name` = ?
";

$central_africa = select_one($query, ['Central Africa'], "Region");

var_dump($central_africa);

$central_africa->slug = "central-africa";
$central_africa->update();