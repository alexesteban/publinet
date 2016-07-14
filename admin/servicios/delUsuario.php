<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$id = mysqli_real_escape_string($conn, $data->id);

$result = $conn->query("DELETE FROM adm_usuarios WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
