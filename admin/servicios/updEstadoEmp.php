<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$estado = mysqli_real_escape_string($conn, $data->estado);
$id = mysqli_real_escape_string($conn, $data->id);

$result = $conn->query("UPDATE empresas SET activo = $estado WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
