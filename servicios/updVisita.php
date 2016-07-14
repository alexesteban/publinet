<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);


$update = $conn->query("UPDATE empresas SET visitas = (visitas + 1) WHERE id = $idEmpresa");
$result = $update;



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
