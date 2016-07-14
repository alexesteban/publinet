<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

  $Ciudad =  $conn->query("SELECT R.id_ciudad FROM random_map R LEFT JOIN empresas E ON R.id_ciudad = E.id_ciudad WHERE E.latitud IS NOT NULL ORDER BY RAND() LIMIT 1");
  $num_rows = mysqli_num_rows($Ciudad);

  if ($num_rows == 1) {
    $rs = $Ciudad->fetch_array(MYSQLI_ASSOC);
    $idCiudad = $rs["id_ciudad"];

    $result = $conn->query("SELECT id,nombre,logo,latitud,longitud FROM empresas WHERE (id_ciudad = $idCiudad AND activo = 1) AND latitud IS NOT NULL");

    $miArray = array();

    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
            $miArray[] = $rs;
    }

  }else{
    $miArray = "";
  }

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
