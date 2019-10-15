<?php

// Write a declaration of a class Match that would describe any generic sports match. It should have:

// property begins_at initialized at null
// property score initialized at null
// property nr_of_players initialized at null
// property length initialized at null
// method __construct which will allow to set the value of begins_at right when an object is being created
// method getEstimatedEnd that would take the value in property begins_at, calculate the timestamp with the function strtotime, add the value in length property (time in minutes) times 60 and use the result to generate and return a date string.

Class Match
{
  public $begins_at = null;
  public $score = null;
  public $nr_of_players = null;
  public $length = null;
  public $break = 0;

  public function __construct($begins_at)
  {
    $this->begins_at = $begins_at;
  }

  public function getEstimatedEnd()
  {
    $timestampBeginning = strtotime($this->begins_at);
    return date('m/d/Y H:i', $timestampBeginning + ($this->length + $this->break) * 60);
  }
}

// $match1 = new Match("tomorrow 19:00");
// $match1->length = 60;
// echo($match1->getEstimatedEnd());