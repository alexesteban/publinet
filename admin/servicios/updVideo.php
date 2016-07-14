<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$linkVideo = mysqli_real_escape_string($conn, $data->linkVideo);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

$existVideo = $conn->query("SELECT link FROM videos WHERE id_empresa = $idEmpresa");
$num_rows = mysqli_num_rows($existVideo);

if ($num_rows == 1) {

	$result = $conn->query("UPDATE videos SET link='$linkVideo' WHERE id_empresa = $idEmpresa");


}elseif ($num_rows == 0) {

	$result = $conn->query("INSERT INTO videos (link,id_empresa) VALUES ('$linkVideo',$idEmpresa)");

}else{
  //$update = $conn->query("UPDATE usuarios SET nombres='$nombres',apellidos='$apellidos',telefono='$telefono',celular='$celular',direccion='$direccion',ciudad='$ciudad' WHERE guid = '$guid'");
  //$result = $update;
  $result = array('error' => "Hay un error, comunicate con el administrador");
}



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
