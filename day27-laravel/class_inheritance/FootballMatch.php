<?php

require_once "Match.php";

Class FootballMatch extends Match
{
  public $nr_of_players = 22;
  public $length = 90;
  public $break = 15;
  public $halves = ["0:0", "0:0"];
  public $nr_offsides = "0";
}

$slavia_v_pribram = new FootballMatch("Saturday 19:00");
echo($slavia_v_pribram->getEstimatedEnd());