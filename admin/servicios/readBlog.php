<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));
	$id = mysqli_real_escape_string($conn, $data->idBlog);

	$result = $conn->query("SELECT * FROM blogs WHERE id = $id");
	$num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {
		$arr = array('error' => "La entrada no existe");
	}else{
		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arr = array(
			'imagen' 		=> $rs["imagen"],
			'titulo' 	=> $rs["titulo"],
			'contenido' 	=> $rs["contenido"]
			);
	}


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
