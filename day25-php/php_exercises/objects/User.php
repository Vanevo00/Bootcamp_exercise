<?php

class User
{
  public $id = null;
  public $username = null;
  public $name = null;
  public $password = null;
  public $number_of_posts = null;
  public $created_at = null;

  public function __construct($username, $paswword)
  {
    $this->created_at = date("Y-m-d H:i:s");
    $this->username = $username;
    $this->password = $password;
  }

  public function dumpMe() 
  {
    var_dump($this);
  }
}