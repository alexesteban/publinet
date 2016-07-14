<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$email = mysqli_real_escape_string($conn, $data->email);

$existEmail = $conn->query("SELECT * FROM suscripciones WHERE email = '$email'");
$num_rows = mysqli_num_rows($existEmail);

if ($num_rows == 0) {
		$password = md5($password);
		$result = $conn->query("INSERT INTO suscripciones (email)	VALUES ('$email')");
}else{
		$result = array('error' => "El Email ya se encuentra registrado");
}

	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
