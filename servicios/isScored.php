<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);
$guid = mysqli_real_escape_string($conn, $data->guid);

$validPass = $conn->query("SELECT id FROM calificaciones WHERE guid = '$guid' AND id_empresa = $idEmpresa");
$num_rows = mysqli_num_rows($validPass);

if ($num_rows == 1) {

  $result = true;

}else{
  $result = false;
}


	$conn->close();

	$salida = json_encode($result);
	print_r($salida);

?>
