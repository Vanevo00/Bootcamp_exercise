<?php

$cars_i_want = [];

array_push($cars_i_want, "Aston Martin");
array_push($cars_i_want, "Bugatti");
array_push($cars_i_want, "Ferrari");
array_push($cars_i_want, "Lamborghini");
array_push($cars_i_want, "Maserati");
array_push($cars_i_want, "Mercedes");
array_push($cars_i_want, "Porsche");
array_push($cars_i_want, "Skoda");

// var_dump($cars_i_want);

// echo "For myself I would buy {$cars_i_want[1]}.<br>";
// echo "For my spouse I would buy {$cars_i_want[3]}.<br>";

// $cars_i_want[4] = "Smart";

// echo "Each of my kids will get a {$cars_i_want[4]}.<br>";

// echo "<ul>";

// foreach ($cars_i_want as $car) {
//   echo "<li>{$car}</li>";
// }

// echo "</ul>";

$car_prices = [
  'Skoda Octavia' => 270000,
  'Volkswagen Golf' => 170000,
  'BMW X6' => 380000,
  'Porsche 911' => 1150000
];



foreach ($car_prices as $key => $value) {
  echo "you can have {$key} for just {$value}.<br>";
}