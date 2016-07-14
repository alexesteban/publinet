<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$archivo = mysqli_real_escape_string($conn, $data->archivo);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);

define('UPLOAD_DIR', '../assets/swf/');
$img = $archivo;
$img = str_replace('data:application/x-shockwave-flash;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$imageName = uniqid() . '.swf';
$file = UPLOAD_DIR . $imageName;
$success = file_put_contents($file, $data);
//print $success ? $file : 'Unable to save the file.';

$existPanorama = $conn->query("SELECT swf FROM panorama WHERE id_empresa = $idEmpresa");
$num_rows = mysqli_num_rows($existPanorama);

if ($num_rows == 1) {

	$oldSfw = $existPanorama->fetch_array(MYSQLI_ASSOC);
	$delSwf = $oldSfw["swf"];
	$delSwf = "../assets/swf/".$delSwf;
	unlink($delSwf);

	$result = $conn->query("UPDATE panorama SET swf='$imageName' WHERE id_empresa = $idEmpresa");

}elseif ($num_rows == 0) {

	$result = $conn->query("INSERT INTO panorama (swf,id_empresa) VALUES ('$imageName',$idEmpresa)");

}else{
  $result = array('error' => "Hay un error, comunicate con el administrador");
}



	$conn->close();
	$salida = json_encode($result);
	print_r($salida);

?>
