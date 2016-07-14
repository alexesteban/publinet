<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

	$result = $conn->query("SELECT votantes,estrellas FROM empresas WHERE id = $idEmpresa");

  $num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {

		$arr = array('error' => "Error en la consulta");

	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arr = array(
			'votantes' 				=> $rs["votantes"],
			'estrellas' 		=> $rs["estrellas"]
			);

}

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
