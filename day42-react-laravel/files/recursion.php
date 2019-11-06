<?php

function browse_directory($directory)
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file);
        } else {
            echo $file."<br>";
        }
    }
}

browse_directory(__DIR__ . "/..");