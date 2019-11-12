<?php
// var_dump(scandir(__DIR__));
// $fhand = opendir(__DIR__);

// foreach(scandir(__DIR__) as $item) {
//   var_dump($item);
// }

// $fhand = fopen("./photos.txt", "r+");

// echo fgets($fhand);
// echo fgets($fhand);
// echo fgets($fhand);

// fclose($fhand);

foreach(file("photos.txt") as $line) {
  echo $line;
  echo("<br>");
}


// closedir($fhand);