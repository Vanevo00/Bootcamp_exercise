<?php
 
// if a specific path is given in get parameters
if (isset($_GET['path'])) {
    // get the requested path from get parameters
    $path = $_GET['path'];
    
    // for ease of use get the real path for the given path (removing '..' etc.)
    $path = realpath($path);
}

var_dump($path);
 
// if path was not in GET parameters or is empty (which is illegal)
if (empty($path)) {
    // use the current script's path
    $path = __DIR__;
}
 
// do your thing here