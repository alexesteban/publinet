<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$comentario = mysqli_real_escape_string($conn, $data->comentario);
$guid = mysqli_real_escape_string($conn, $data->guid);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

$result = $conn->query("INSERT INTO comentarios (comentario,id_usuario,id_empresa,fecha)	VALUES ('$comentario','$guid',$idEmpresa,NOW())");

	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
