<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));
	$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

	$result = $conn->query(" SELECT V.link, P.swf FROM videos V
      LEFT JOIN panorama P ON V.id_empresa = P.id_empresa
      WHERE V.id_empresa = $idEmpresa OR P.id_empresa = $idEmpresa
  		GROUP BY V.id_empresa");
	$num_rows = mysqli_num_rows($result);
	if ($num_rows != 1) {
		$arr = array('error' => "El video no existe");
	}else{
		$rs = $result->fetch_array(MYSQLI_ASSOC);

		$arr = array(
			'link' 		=> $rs["link"],
			'swf' 		=> $rs["swf"]
			);
	}


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
