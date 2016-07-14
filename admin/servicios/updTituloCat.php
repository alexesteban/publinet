<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$nombre = mysqli_real_escape_string($conn, $data->nombre);
$id = mysqli_real_escape_string($conn, $data->idBlog);

$result = $conn->query("UPDATE categorias SET nombre = '$nombre' WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
