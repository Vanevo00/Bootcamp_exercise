<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';
require_once "CountryLanguage.php";
require_once "Region.php";

// connect to a database
connect('localhost', 'world', 'root', 'rootroot');

$query = "SELECT * FROM `countrylanguage` WHERE `countrycode` = ?";


$results = select($query, ["AFG"], "CountryLanguage");
var_dump($results);

// $region = new Region;
// $region->name = 'Central Africa';
// $region->insert();

// $query = "
//     SELECT *
//     FROM `region`
//     WHERE `name` = ?
// ";
// $central_africa = select_one($query, ['Central Africa'], 'Region');
// $central_africa->slug = 'central-africa';
// $central_africa->update();