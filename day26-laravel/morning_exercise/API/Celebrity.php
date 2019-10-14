<?php

class Celebrity 
{

  public $name = null;
  public $photo = null;
  public $earnings = null;
  public $age = null;
  public $citizenship = null;
  public $events = [];

  public function fromArray($array) {
    $this->name = $array["name"];
    $this->photo = $array["photo"];
    $this->earnings = $array["earnings"];
    $this->age = $array["age"];
    $this->citizenship = $array["citizenship"];
    $this->events = $array["events"];
    $this->name = $array["name"];
    $this->name = $array["name"];
  }
}