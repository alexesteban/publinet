<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

	$result = $conn->query("SELECT reference_sale,value,email_buyer,description,datec,response_message_pol FROM confirmation");

	$miArray = array();

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
