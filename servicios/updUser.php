<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$nombres = mysqli_real_escape_string($conn, $data->nombres);
$apellidos = mysqli_real_escape_string($conn, $data->apellidos);
$telefono = mysqli_real_escape_string($conn, $data->telefono);
$celular = mysqli_real_escape_string($conn, $data->celular);
$direccion = mysqli_real_escape_string($conn, $data->direccion);
$ciudad = mysqli_real_escape_string($conn, $data->ciudad);
$email = mysqli_real_escape_string($conn, $data->email);
$actEmail = mysqli_real_escape_string($conn, $data->actEmail);
$guid = mysqli_real_escape_string($conn, $data->guid);

if ($actEmail == 0) {
	$update = $conn->query("UPDATE usuarios SET nombres='$nombres',apellidos='$apellidos',telefono='$telefono',celular='$celular',direccion='$direccion',ciudad='$ciudad',email='$email' WHERE guid = '$guid'");
	$result = $update;
}else{
	$existEmail = $conn->query("SELECT * FROM usuarios WHERE email = '$email'");
	$num_rows = mysqli_num_rows($existEmail);

	if ($num_rows == 0) {
			$update = $conn->query("UPDATE usuarios SET nombres='$nombres',apellidos='$apellidos',telefono='$telefono',celular='$celular',direccion='$direccion',ciudad='$ciudad',email='$email' WHERE guid = '$guid'");
			$result = $update;
	}else{
			$result = array('error' => "El Email ya se encuentra registrado");
	}

}


	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
