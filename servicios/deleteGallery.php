<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idImg = mysqli_real_escape_string($conn, $data->idImg);
$imagen = mysqli_real_escape_string($conn, $data->imagen);

$file = '../assets/img/galeria/' . $imagen;
unlink($file);

$delete = $conn->query("DELETE FROM galeria WHERE id = $idImg");
$result = $delete;


	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
