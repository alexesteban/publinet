<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);
$guid = mysqli_real_escape_string($conn, $data->guid);

$validPass = $conn->query("SELECT id FROM favoritos WHERE guid = '$guid' AND id_empresa = $idEmpresa");
$num_rows = mysqli_num_rows($validPass);

if ($num_rows == 0) {

  $update = $conn->query("INSERT INTO favoritos (id_empresa,guid) VALUES ($idEmpresa,'$guid') ");
  $result = array('upd' => "Se agregó a tus favoritos");

}else{
	$update = $conn->query("DELETE FROM favoritos WHERE id_empresa = $idEmpresa AND guid = '$guid' ");
	$result = array('upd' => "Se quitó de tus favoritos");
}



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
