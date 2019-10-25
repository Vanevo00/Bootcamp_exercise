<?php
$site_url = 'http://www.cbp-exercises.test:8081/day32-php-server-side-rendering/eshop/';
?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">

        <!-- header -->
        <?php include "header.php"?>

        <!-- topmenu -->
        <?php include "topmenu.php"?>

        <div id="content">

            <!-- homepage/layout -->
            <?php
            
            if (isset($_GET["product_id"])) {
                include "product/layout.php";
            } elseif (isset($_GET["category_id"])) {
                include "category/layout.php";
            } else {
                include "homepage/layout.php";
            }
            
            ?>

        </div>

        <!-- footer -->
        <?php include "footer.php"?>

    </div>

</body>
</html>