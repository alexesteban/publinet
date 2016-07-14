<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$descripcion = mysqli_real_escape_string($conn, $data->descripcion);
$telefono = mysqli_real_escape_string($conn, $data->telefono);
$celular = mysqli_real_escape_string($conn, $data->celular);
$email = mysqli_real_escape_string($conn, $data->email);
$facebook = mysqli_real_escape_string($conn, $data->facebook);
$twitter = mysqli_real_escape_string($conn, $data->twitter);
$instagram = mysqli_real_escape_string($conn, $data->instagram);
$direccion = mysqli_real_escape_string($conn, $data->direccion);
$web = mysqli_real_escape_string($conn, $data->web);
$latitud = mysqli_real_escape_string($conn, $data->latitud);
$longitud = mysqli_real_escape_string($conn, $data->longitud);
$guid = mysqli_real_escape_string($conn, $data->guid);

$update = $conn->query("UPDATE empresas SET descripcion='$descripcion',telefono='$telefono',celular='$celular',email='$email',facebook='$facebook',	twitter='$twitter',instagram='$instagram',direccion='$direccion',web='$web',latitud='$latitud',longitud='$longitud' WHERE guid = '$guid'");
$result = $update;

	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
