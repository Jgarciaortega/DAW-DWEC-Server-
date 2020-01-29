<!-- <html>
  
    <body> -->
        <?php 
           
            $listaProductos = $_POST['listaProductos'];
            $listaAux;

         if (!isset($_SESSION["lista"])){

          $_SESSION["lista"] = $listaProductos;

          }else {

            $listaAux = $_SESSION["lista"];

            $listaAux += $listaProductos;
     
            $_SESSION["lista"] = $listaAux;

           }
       
            echo "La lista de la compra es ".$_SESSION["lista"];
           
         
        ?>
       
    <!-- </body>
   
</html> -->