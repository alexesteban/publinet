<?php	include 'conexion.php';
	$data = json_decode(file_get_contents("php://input"));
	$nombre = mysqli_real_escape_string($conn, $data->nombre);
$nit = mysqli_real_escape_string($conn, $data->nit);
$ciudad = mysqli_real_escape_string($conn, $data->ciudad);
$direccion = mysqli_real_escape_string($conn, $data->direccion);
$telefono = mysqli_real_escape_string($conn, $data->telefono);
$celular = mysqli_real_escape_string($conn, $data->celular);
$email = mysqli_real_escape_string($conn, $data->email);
$pagina = mysqli_real_escape_string($conn, $data->pagina);
$categoria = mysqli_real_escape_string($conn, $data->categoria);
$plan = mysqli_real_escape_string($conn, $data->plan);
$guid = mysqli_real_escape_string($conn, $data->guid);
$guidEmpresa = mysqli_real_escape_string($conn, $data->guidEmpresa);

$nomCat = $conn->query("SELECT nombre FROM categorias WHERE id = $categoria");$rs = $nomCat->fetch_array(MYSQLI_ASSOC);
$nomCat = $rs["nombre"];
$tagCat = $nomCat;

$cantEmpresas = $conn->query("SELECT id FROM empresas WHERE guid_usuario = '$guid'");$num_rows = mysqli_num_rows($cantEmpresas);

if ($num_rows >= 10) {
		$result = array('error' => "Has exedido el límite de empresas registradas");
}else{
	//Si el plan es cortesía, verificar si el usuario ya usó el beneficio
	if ($plan == 4) {
		$isCortesia = $conn->query("SELECT plan FROM usuarios WHERE guid = '$guid' AND plan = 0");
		$num_rows = mysqli_num_rows($isCortesia);
		if ($num_rows == 1) {
			//Aún no ha recibido el beneficio de cortesía
		$result = $conn->query("INSERT INTO empresas (nombre,logo,direccion,telefono,celular,email,descripcion,facebook,twitter,instagram,estrellas,votantes,plan,id_ciudad,id_categoria,inner_score,guid,guid_usuario,visitas,nit,web,activo,etiquetas)
		VALUES ('$nombre','default.png','$direccion','$telefono','$celular','$email','','','','',0,0,$plan,$ciudad,$categoria,0,'$guidEmpresa','$guid',0,'$nit','$pagina',1,'$tagCat')");
		$conn->query("UPDATE usuarios SET plan = 1 WHERE guid = '$guid'");
		$conn->query("INSERT INTO pagos (guid_empresa,fecha_pago,fecha_vencimiento,ref) VALUES('$guidEmpresa',NOW(),DATE_ADD(NOW(),INTERVAL 31 DAY),'CORTESIA')");
		}else{
			//Ya recibió el beneficio de cortesía
			$result = array('error' => "Ya has registrado una empresa en cortesia");
		}
	}else{
		//Si ha elegido un plan diferente a cortesia --- Queda inactivo hasta que se realice el pago
		$result = $conn->query("INSERT INTO empresas (nombre,logo,direccion,telefono,celular,email,descripcion,facebook,twitter,instagram,estrellas,votantes,plan,id_ciudad,id_categoria,inner_score,guid,guid_usuario,visitas,nit,web,activo,etiquetas)
		VALUES ('$nombre','default.png','$direccion','$telefono','$celular','$email','','','','',0,0,$plan,$ciudad,$categoria,0,'$guidEmpresa','$guid',0,'$nit','$pagina',0,'$tagCat')");
	}

}
	$conn->close();
	$salida = json_encode($result);
	print_r($salida);
?>
