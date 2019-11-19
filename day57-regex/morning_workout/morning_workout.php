<?php

$file_handler = fopen("morning_workout.html", 'r');

$next = true;

$dataSlug = [];

while($next) {
  $next = fgets($file_handler);
  if(strpos(strtolower($next), 'data-slug')) {
    $start = strpos(strtolower($next), 'data-slug');
    $halfSlug = substr($next, $start + 11);
    $end = strpos($halfSlug, '"');
    $slug = substr($halfSlug, 0, $end);
    array_push($dataSlug, $slug);
  }
}

fclose($file_handler);

var_dump($dataSlug);
