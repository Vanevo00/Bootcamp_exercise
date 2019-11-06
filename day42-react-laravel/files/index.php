<?php

var_dump (__FILE__);

var_dump (__DIR__);

var_dump (
  pathinfo(__FILE__)
);

var_dump (
  pathinfo(__FILE__, PATHINFO_EXTENSION)
);

var_dump(scandir("./2018"));