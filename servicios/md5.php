<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $sign = mysqli_real_escape_string($conn, $data->sign);

	$salida = md5($sign);

	print_r($salida);


?>
