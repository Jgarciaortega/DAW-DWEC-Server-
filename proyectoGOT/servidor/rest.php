<?php

$object = (object) [
    'nombre' => 'Angel post',
    'edad' => 42,
  ];

if(isset($_POST['nombre']) && $_POST['nombre'] == 'Angel')
{
	echo  (json_encode($object));
}

?>