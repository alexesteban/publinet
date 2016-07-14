<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$icono = mysqli_real_escape_string($conn, $data->icono);
$id = mysqli_real_escape_string($conn, $data->id);

$result = $conn->query("UPDATE categorias SET icono = '$icono' WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
