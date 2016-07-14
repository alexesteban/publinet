<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$passOne = mysqli_real_escape_string($conn, $data->passOne);
$PassTwo = mysqli_real_escape_string($conn, $data->PassTwo);
$guid = mysqli_real_escape_string($conn, $data->guid);

$validGuid = $conn->query("SELECT email FROM lost_password WHERE guid = '$guid'");
$num_rows = mysqli_num_rows($validGuid);

if ($num_rows == 1) {
  $rs = $validGuid->fetch_array(MYSQLI_ASSOC);
  $email = $rs["email"];
	$newPassword = md5($PassTwo);

	$update = $conn->query("UPDATE usuarios SET password='$newPassword' WHERE email = '$email'");

	if ($update) {
		$result = $conn->query("DELETE FROM lost_password WHERE guid = '$guid'");
	}else{
		$result = array('error' => "No se pudo cambiar la contraseña");
	}

}else{
  $result = array('error' => "La URL no es válida");
}

	$conn->close();

	$salida = json_encode($result);
	print_r($salida);

?>
