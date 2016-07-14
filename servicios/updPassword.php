<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$oldPassword = mysqli_real_escape_string($conn, $data->oldPassword);
$newPassword = mysqli_real_escape_string($conn, $data->newPassword);
$guid = mysqli_real_escape_string($conn, $data->guid);

$validPass = $conn->query("SELECT password FROM usuarios WHERE guid = '$guid'");
$num_rows = mysqli_num_rows($validPass);

if ($num_rows == 1) {
  $rs = $validPass->fetch_array(MYSQLI_ASSOC);
  $passDB = $rs["password"];

  if ($passDB == md5($oldPassword)) {
    $newPassword = md5($newPassword);
    $update = $conn->query("UPDATE usuarios SET password='$newPassword' WHERE guid = '$guid'");
    $result = $update;
  }else{
    $result = array('error' => "El password no coincide con el actual");
  }


}else{
  //$update = $conn->query("UPDATE usuarios SET nombres='$nombres',apellidos='$apellidos',telefono='$telefono',celular='$celular',direccion='$direccion',ciudad='$ciudad' WHERE guid = '$guid'");
  //$result = $update;
  $result = array('error' => "No se encontró el usuario");
}



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
