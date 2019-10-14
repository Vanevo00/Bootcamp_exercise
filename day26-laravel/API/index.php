<?php

include "data.php";
require_once 'Celebrity.php';

$celebrities = [];

foreach ($data as $value) {
  $celebrity = new Celebrity;
  $celebrity->fromArray($value);
  array_push($celebrities, $celebrity);
}

// send JSON header
header('Content-type: application/json');
// send data as JSON
echo json_encode($celebrities);