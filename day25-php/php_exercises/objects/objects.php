<?php

require_once "User.php";

$steve = new User("steve");
$steve->id = 1;
$steve->name = "Stephen";


$steve->dumpMe();