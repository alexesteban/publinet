<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

	$result = $conn->query("SELECT * FROM banners_home WHERE posicion = 'BO' ORDER BY orden ASC");

	$miArray = array();

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
