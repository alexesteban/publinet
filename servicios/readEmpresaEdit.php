<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $guid = mysqli_real_escape_string($conn, $data->guid);

	$result = $conn->query("SELECT id,nombre,direccion,telefono,celular,email,descripcion,facebook,twitter,instagram,plan,latitud,longitud,activo,etiquetas,web
														      FROM empresas
														      WHERE guid = '$guid'");

  $num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {

		$arr = array('error' => "No existe la Empresa");

	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$arr = array(
			'id'		 				=> $rs["id"],
			'nombre' 				=> $rs["nombre"],
			'direccion' 		=> $rs["direccion"],
			'telefono'	=> $rs["telefono"],
			'celular' 	=> $rs["celular"],
			'email'			=> $rs["email"],
			'descripcion'	=> $rs["descripcion"],
			'facebook'	=> $rs["facebook"],
			'twitter'		=> $rs["twitter"],
			'instagram'	=> $rs["instagram"],
			'plan'			=> $rs["plan"],
			'latitud'			=> $rs["latitud"],
			'longitud'			=> $rs["longitud"],
			'activo'			=> $rs["activo"],
			'web'			=> $rs["web"],
			'tags'			=> $rs["etiquetas"]
			);

}

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
