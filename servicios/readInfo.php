<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

	$result = $conn->query("SELECT * FROM info WHERE id = 1");

  $num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {

		$arr = array('error' => "Error en la Base de Datos");

	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);

		$arr = array(
			'telone' 				=> $rs["telone"],
			'teltwo' 		=> $rs["teltwo"],
			'celular' 			=> $rs["celular"],
			'direccion' => $rs["direccion"],
			'facebook'	=> $rs["facebook"],
			'twitter' 	=> $rs["twitter"],
			'instagram'			=> $rs["instagram"]
			);

}

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
