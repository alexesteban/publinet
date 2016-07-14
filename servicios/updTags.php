<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$tags = mysqli_real_escape_string($conn, $data->tags);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

$result = $conn->query("UPDATE empresas SET etiquetas='$tags' WHERE id = $idEmpresa");



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
