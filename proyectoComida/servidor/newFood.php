<?php

$estado = $_POST['estado'];

echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<productos>";
echo "<articulo>patata</articulo>";
echo "<precio>$0.40</precio>";
echo "<estado>".$estado."</estado>";
echo "<imagen>img/patata.png</imagen>";
echo "<articulo>tomate</articulo>";
echo "<precio>$1.80</precio>";
echo "<estado>".$estado."</estado>";
echo "<imagen>img/tomate.png</imagen>";
echo "<articulo>cereales</articulo>";
echo "<precio>$2.40</precio>";
echo "<estado>".$estado."</estado>";
echo "<imagen>img/kellogs.png</imagen>";
echo "</productos>";        
?>