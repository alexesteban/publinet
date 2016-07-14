<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));
	$id = mysqli_real_escape_string($conn, $data->idEmpresa);

	$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.facebook,E.twitter,E.instagram,
													E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,E.latitud,E.longitud,E.guid,E.etiquetas,C.nombre AS categoria,C.icono FROM empresas E
													INNER JOIN categorias C ON C.id = E.id_categoria
													WHERE E.id = $id");
	$num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {
		$arr = array('error' => "La entrada no existe");
	}else{
		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arrContenido = explode(".",$rs["descripcion"]);
		$arr = array(
			'id' 				=> $rs["id"],
			'nombre' 		=> $rs["nombre"],
			'logo' 			=> $rs["logo"],
			'direccion' => $rs["direccion"],
			'telefono'	=> $rs["telefono"],
			'celular' 	=> $rs["celular"],
			'email'			=> $rs["email"],
			'descripcion'	=> $rs["descripcion"],
			'facebook'	=> $rs["facebook"],
			'twitter'		=> $rs["twitter"],
			'instagram'	=> $rs["instagram"],
			'plan'			=> $rs["plan"],
			'categoria'	=> $rs["categoria"],
			'estrellas'			=> $rs["estrellas"],
			'votantes'			=> $rs["votantes"],
			'icono'			=> $rs["icono"],
			'latitud'			=> $rs["latitud"],
			'longitud'			=> $rs["longitud"],
			'guid'			=> $rs["guid"],
			'tags'			=> $rs["etiquetas"]
			);
	}


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
