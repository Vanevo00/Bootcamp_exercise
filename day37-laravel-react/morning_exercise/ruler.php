<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    .ruler{
    display:flex;
    }

    .cm,
    .mm {
        border-left: 1px solid #555;
        height: 0.4rem;
        width: 0;
    }
    
    .mm.longer{
        height: 0.8rem;
    }

    .cm {
        height: 1.4rem;
    }

    .cm > span,
    .mm > span {
        display: block; 
        margin-top:2rem;
        margin-left: -.25rem;
    }
  </style>
  <title>Ruler</title>
</head>
<body>

<?php

function ruler($size, $smallestInterval)
{
  echo "<div class='ruler'>";
  for ($x = 0; $x <= $size; $x+= $smallestInterval) {
    $cm = $x / 10;
    $mm = 10 * $smallestInterval;
    if ($x === 0) {
      echo '<div style="margin: 0 '.$mm.'px" class="cm"><span>0</span></div>';
    } elseif ($x % 10 === 0) {
      echo '<div style="margin: 0 '.$mm.'px" class="cm"><span>'.$cm.'</span></div>';
    } else {
      echo '<div style="margin: 0 '.$mm.'px" class="mm"></div>';
    }
  }
  echo "</div>";
}

ruler(50, 1);

?>

  <!-- <div class='ruler'>
      <div style="margin: 0 10px" class='cm'><span>0</span></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm longer'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
  
      <div style="margin: 0 10px" class='cm'><span>1</span></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm longer'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
  
      <div style="margin: 0 10px" class='cm'><span>2</span></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm longer'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
      <div style="margin: 0 10px" class='mm'></div>
  
      <div style="margin: 0 10px" class='cm'><span>3</span></div>
  </div> -->

</body>
</html>