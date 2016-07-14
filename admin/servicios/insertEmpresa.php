<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));

$nombre = mysqli_real_escape_string($conn, $data->nombre);
$email = mysqli_real_escape_string($conn, $data->email);
$descripcion = mysqli_real_escape_string($conn, $data->descripcion);
$ciudad = mysqli_real_escape_string($conn, $data->ciudad);
$categoria = mysqli_real_escape_string($conn, $data->categoria);
$score = mysqli_real_escape_string($conn, $data->score);
$plan = mysqli_real_escape_string($conn, $data->plan);
$direccion = mysqli_real_escape_string($conn, $data->direccion);
$telefono = mysqli_real_escape_string($conn, $data->telefono);
$celular = mysqli_real_escape_string($conn, $data->celular);
$facebook = mysqli_real_escape_string($conn, $data->facebook);
$twitter = mysqli_real_escape_string($conn, $data->twitter);
$instagram = mysqli_real_escape_string($conn, $data->instagram);
$nit = mysqli_real_escape_string($conn, $data->nit);
$web = mysqli_real_escape_string($conn, $data->web);
$guid = mysqli_real_escape_string($conn, $data->guid);
$guidEmpresa = mysqli_real_escape_string($conn, $data->guidEmpresa);

$nomCat = $conn->query("SELECT nombre FROM categorias WHERE id = $categoria");
$rs = $nomCat->fetch_array(MYSQLI_ASSOC);
$nomCat = $rs["nombre"];
$tagCat = $nomCat;

$result = $conn->query("INSERT INTO empresas (nombre,logo,direccion,telefono,celular,email,descripcion,facebook,twitter,instagram,estrellas,votantes,plan,id_ciudad,id_categoria,inner_score,guid,guid_usuario,visitas,nit,web,activo,etiquetas)
VALUES ('$nombre','default.png','$direccion','$telefono','$celular','$email','$descripcion','$facebook','$twitter','$instagram',0,0,$plan,$ciudad,$categoria,$score,'$guidEmpresa','$guid',0,'$nit','$pagina',1,'$tagCat')");
$conn->query("INSERT INTO pagos (guid_empresa,fecha_pago,fecha_vencimiento,ref) VALUES('$guidEmpresa',NOW(),DATE_ADD(NOW(),INTERVAL 31 DAY),'CORTESIA')");


	$conn->close();
	$salida = json_encode($result);
	print_r($salida);

?>