<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));

	$result = $conn->query("SELECT * FROM info WHERE id = 1");
	$num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {
		$arr = array('error' => "La entrada no existe");
	}else{
		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arr = array(
			'email' 		=> $rs["email"],
			'tel1' 	=> $rs["telone"],
			'tel2' 	=> $rs["teltwo"],
			'celular' 	=> $rs["celular"],
			'direccion' 	=> $rs["direccion"],
			'facebook' 	=> $rs["facebook"],
			'twitter' 	=> $rs["twitter"],
			'instagram' 	=> $rs["instagram"]
			);
	}


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
