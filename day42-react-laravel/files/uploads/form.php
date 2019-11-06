<?php

//hadle form submission
var_dump($_GET);
var_dump($_POST);
var_dump($_FILES);

move_uploaded_file($_FILES['uploaded_file']['tmp_name'],
$_FILES['uploaded_file']['name']
);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Upload files</title>
</head>
<body>

  <form action="" method="post" enctype="multipart/form-data">

    <input type="file" name="uploaded_file">
    
    <input type="submit" name="" id="" value="Upload!">

  </form>
  
</body>
</html>