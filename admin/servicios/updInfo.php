<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$email = mysqli_real_escape_string($conn, $data->email);
$tel1 = mysqli_real_escape_string($conn, $data->tel1);
$tel2 = mysqli_real_escape_string($conn, $data->tel2);
$celular = mysqli_real_escape_string($conn, $data->celular);
$direccion = mysqli_real_escape_string($conn, $data->direccion);
$facebook = mysqli_real_escape_string($conn, $data->facebook);
$twitter = mysqli_real_escape_string($conn, $data->twitter);
$instagram = mysqli_real_escape_string($conn, $data->instagram);

$result = $conn->query("UPDATE info SET email='$email',telone='$tel1',teltwo='$tel2',celular='$celular',direccion='$direccion',facebook='$facebook',twitter='$twitter',
	instagram='$instagram' WHERE id = 1");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
