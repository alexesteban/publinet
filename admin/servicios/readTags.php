<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

	$result = $conn->query("SELECT * FROM tags");

	$miArray = array();

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
