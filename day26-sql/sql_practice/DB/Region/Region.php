<?php

class Region
{
  public $id = null;
  public $name = null;
  public $slug = null;

  public function insert()
  {
    $query = "
          INSERT
          INTO `region`
          (`name`, `slug`)
          VALUES
          (?, ?)
          ";

    insert($query, [$this->name, $this->slug]);

    $this->id = last_insert_id();
  }

  public function update()
  {
    if (!$this->id) {
      return false;
    }

    $query = "
      UPDATE `region`
      SET `name` = ?,
          `slug` = ?
      WHERE `id` = ?
    ";

    update($query, [$this->name, $this->slug, $this->id]);
  }
  
}