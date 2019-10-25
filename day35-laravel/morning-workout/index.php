<?php 
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(10000);
    // echo count($data);
    echoArray($data);

    for ($i = 0; $i < count($data) - 1; $i++) {
      for ($j = 0; $j < count($data) - $i - 1; $j++) {
        $tmp = $data[$j];
        if ($data[$j] > $data[$j + 1]) {
          $data[$j] = $data[$j + 1];
          $data[$j + 1] = $tmp;
        }
      }
    }
 
    echoArray($data);
?>