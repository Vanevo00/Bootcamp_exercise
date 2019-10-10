<?php

// $first_name = "Vojta";
// $last_name = "Vanek";

// echo "First name: {$first_name}&lt;<strong>br</strong>&gt;<br>Surname: {$last_name}";

// define('SERVER_SOFTWARE', 'Apache');

// echo 'this server is running on ' . SERVER_SOFTWARE . ".";

// function greet($whom) {
//   echo "Hello, {$whom}";
// }

// greet("Prague");

function truncateString(&$string, $size) 
{
    $string = mb_substr($string, 0, $size);
}

$sentence = 'Quick brown fox jumps over the lazy dog.';
 
truncateString($sentence, 10);
 
echo $sentence; // prints 'Quick brow'
