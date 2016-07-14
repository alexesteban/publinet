<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));
	$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

	$result = $conn->query("SELECT * FROM galeria WHERE id_empresa = $idEmpresa");

	$miArray = array();

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
