<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$avatar = mysqli_real_escape_string($conn, $data->avatar);
$guid = mysqli_real_escape_string($conn, $data->guid);


$update = $conn->query("UPDATE usuarios SET avatar='$avatar' WHERE guid = '$guid'");
$result = $update;


	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
