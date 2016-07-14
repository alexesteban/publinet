<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$nombres = mysqli_real_escape_string($conn, $data->nombres);
$apellidos = mysqli_real_escape_string($conn, $data->apellidos);
$nacimiento = mysqli_real_escape_string($conn, $data->nacimiento);
$pais = mysqli_real_escape_string($conn, $data->pais);
$email = mysqli_real_escape_string($conn, $data->email);
$password = mysqli_real_escape_string($conn, $data->password);
$guid = mysqli_real_escape_string($conn, $data->guid);

$existEmail = $conn->query("SELECT * FROM usuarios WHERE email = '$email'");
$num_rows = mysqli_num_rows($existEmail);

if ($num_rows == 0) {
		if ($password != '') {
			$password = md5($password);
		}

		$result = $conn->query("INSERT INTO usuarios (nombres,apellidos,nacimiento,pais,email,password,plan,guid)
		VALUES ('$nombres','$apellidos','$nacimiento','$pais','$email','$password','0','$guid')");
}else{
		$result = array('error' => "El Email ya se encuentra registrado");
}

	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
