<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

	$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.web,E.facebook,E.twitter,E.instagram,
													E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,E.latitud,E.longitud,C.nombre AS categoria,C.icono FROM empresas E
													INNER JOIN categorias C ON C.id = E.id_categoria
													WHERE E.id = $idEmpresa AND E.activo = 1");

  $num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {

		$arr = array('error' => "No existe la Empresa");

	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arrContenido = explode(".",$rs["descripcion"]);
		$arr = array(
			'id' 				=> $rs["id"],
			'nombre' 		=> $rs["nombre"],
			'logo' 			=> $rs["logo"],
			'direccion' => $rs["direccion"],
			'web' => $rs["web"],
			'telefono'	=> $rs["telefono"],
			'celular' 	=> $rs["celular"],
			'email'			=> $rs["email"],
			'descripcion'	=> $arrContenido,
			'facebook'	=> $rs["facebook"],
			'twitter'		=> $rs["twitter"],
			'instagram'	=> $rs["instagram"],
			'plan'			=> $rs["plan"],
			'categoria'	=> $rs["categoria"],
			'estrellas'			=> $rs["estrellas"],
			'votantes'			=> $rs["votantes"],
			'icono'			=> $rs["icono"],
			'latitud'			=> $rs["latitud"],
			'longitud'			=> $rs["longitud"]
			);

}

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
