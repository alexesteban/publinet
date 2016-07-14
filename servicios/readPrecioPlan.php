<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $idPlan = mysqli_real_escape_string($conn, $data->idPlan);
  $guidUser = mysqli_real_escape_string($conn, $data->guidUser);

	$result = $conn->query("SELECT precio FROM planes WHERE id_plan = $idPlan");
	$resultEmail = $conn->query(" SELECT email AS email FROM usuarios WHERE guid = '$guidUser'");

	$rs = $result->fetch_array(MYSQLI_ASSOC);
	$arr = array(
		'precio' 				=> $rs["precio"]
		);

	$rsE = $resultEmail->fetch_array(MYSQLI_ASSOC);
	$arrE = array(
		'email' 				=> $rsE["email"]
	);


	$salida = json_encode($arr + $arrE);
	$conn->close();
	print_r($salida);


?>
