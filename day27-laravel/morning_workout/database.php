<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

// connect to a database
connect('localhost', 'games', 'root', 'rootroot');

if (isset($_GET["orderby"])) {
  if ($_GET["orderby"] === "name") {
    //   $query = 'SELECT * 
    //     FROM `games`
    //     WHERE 1
    //     ORDER BY `name` DESC
    // ';
    echo "name";
  }
 } else {
//   $query = 'SELECT * 
//     FROM `games`
//     WHERE 1
//     ORDER BY `name`
// ';
  echo "other";
}


// $result = select($query);

// function build_sorter($key) {
//   return function ($a, $b) use ($key) {
//       return strnatcmp($a->$key, $b->$key);
//   };
// }

// usort($result, build_sorter('name'));

// var_dump($result);

// header('Content-type: application/json');
// // var_dump($result);
// echo json_encode($result);