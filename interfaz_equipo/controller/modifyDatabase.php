<?php

  $id = $_POST['id'];
  $nuevoRol = $_POST['nuevoRol'];
  $servidor = "localhost";
  $username = "user";
  $password = "user";
  $basedatos = "team";

  # Crear conexión
  $conn = mysqli_connect($servidor, $username, $password, $basedatos);
  
  # Comprobar conexión
    if (!$conn) {
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());
    }
    echo "Conexi&oacuten con &eacutexito <br><br>";
    $insercion = "UPDATE equipo SET demarcacion='".$nuevoRol."' WHERE _idjugador = ".$id.";";
    $resultado = mysqli_query($conn, $insercion);
    # Como no se trata de un SELECT, mysqli_query devuelve TRUE
    # si se ha hecho correctamente y FALSE si ha habido error.
    if ($resultado == true) {
    echo "Se ha modificado correctamente el dato <br>";
    } else {
    # La siguiente función muestra el último error, en caso
    # de haberlo.
    echo mysqli_error($conn);
    die("Hubo un error");
    }
    # Como no se trata de un SELECT, no hace falta el
    # mysqli_free_result($result)
    mysqli_close($conn);




  
    ?>
    
  





?>