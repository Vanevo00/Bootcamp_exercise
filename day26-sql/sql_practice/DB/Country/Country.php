<?php

class Country
{
  public $Code = null;
  public $Name = null;
  public $Continent = null;
  public $Region = null;
  public $SurfaceArea = null;
  public $IndepYear = null;
  public $Population = null;
  public $LifeExpectancy = null;
  public $GNP = null;
  public $GNPOld = null;
  public $LocalName = null;
  public $GovernmentForm = null;
  public $HeadOfState = null;
  public $Capital = null;
  public $Code2 = null;

  public function getFormattedPopulation()
  {
    return number_format($this->Population, 0, ".", " ");
  }
}