<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $guid = mysqli_real_escape_string($conn, $data->guid);

	$result = $conn->query("SELECT * FROM usuarios WHERE guid = '$guid'");

	$rs = $result->fetch_array(MYSQLI_ASSOC);
	$arr = array(
		'avatar' 				=> $rs["avatar"],
		'nombres' 		=> $rs["nombres"]
		);

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
