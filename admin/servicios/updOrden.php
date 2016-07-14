<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idObj = mysqli_real_escape_string($conn, $data->idObj);
$orden = mysqli_real_escape_string($conn, $data->orden);
$dataSort = mysqli_real_escape_string($conn, $data->dataSort);


$result = $conn->query("UPDATE $dataSort SET orden = '$orden' WHERE id = $idObj");

$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
