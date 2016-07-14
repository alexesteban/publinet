<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$estrellas = mysqli_real_escape_string($conn, $data->estrellas);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);
$guid = mysqli_real_escape_string($conn, $data->guid);

$validPass = $conn->query("SELECT id FROM calificaciones WHERE guid = '$guid' AND id_empresa = $idEmpresa");
$num_rows = mysqli_num_rows($validPass);

if ($num_rows == 0) {

  $update = $conn->query("UPDATE empresas SET estrellas = (estrellas + $estrellas), votantes = (votantes+1) WHERE id = $idEmpresa");
            $conn->query("INSERT INTO calificaciones (guid,id_empresa,date) VALUES ('$guid',$idEmpresa,NOW()) ");
  $result = $update;

}else{
  $result = array('error' => "Ya calificaste esta empresa");
}



	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
