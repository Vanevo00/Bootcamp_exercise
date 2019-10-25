<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Chessboard</title>
  <style>
    .board .row {
    width: 24em;
    display: flex;
    }
    .board .row > div {
        width: 3em;
        height: 3em;
    }
    .board .white {
        background-color: #c2c2c2;
    }
    .board .black {
        background-color: #525252;
    }

    .row2-field4 {
        background-image: url("http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png");
        background-repeat: no-repeat;
        background-position: center;
    }
  </style>
</head>
<body>

<div class="board">
  <?php

  for ($i = 0; $i < 8; $i++) {
    echo "<div class='row'>";
    for ($j = 0; $j < 8; $j+= 2) {
      $k = $j+1;
      if ($i % 2 === 0){
        echo "<div class='white row{$i}-field{$j}'></div>";
        echo "<div class='black row{$i}-field{$k}'></div>";
      } else {
        echo "<div class='black row{$i}-field{$j}'></div>";
        echo "<div class='white row{$i}-field{$k}'></div>";
      }
    }
    echo "</div>";
  }
  ?>
</div>
  </div>
</body>
</html>