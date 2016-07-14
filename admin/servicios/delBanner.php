<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$id = mysqli_real_escape_string($conn, $data->id);
$imagen = mysqli_real_escape_string($conn, $data->imagen);
$posicion = mysqli_real_escape_string($conn, $data->posicion);

if ($posicion == "TL") {
	$file = '../../assets/img/middle-banners/' . $imagen;
}elseif ($posicion == "BO") {
	$file = '../../assets/img/bottom-slider/' . $imagen;
}
unlink($file);

$result = $conn->query("DELETE FROM banners_home WHERE id = $id");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
