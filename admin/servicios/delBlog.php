<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$id = mysqli_real_escape_string($conn, $data->id);
$imagen = mysqli_real_escape_string($conn, $data->imagen);

$file = '../../assets/img/blog/' . $imagen;
unlink($file);

$result = $conn->query("DELETE FROM blogs WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
