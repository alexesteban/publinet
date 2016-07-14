<?php	include 'conexion.php';
	$result = $conn->query("SELECT * FROM apps_countries");
	$miArray = array();
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}
	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);
?>
