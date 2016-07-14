<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$imagen = mysqli_real_escape_string($conn, $data->imagen);
$descripcion = mysqli_real_escape_string($conn, $data->descripcion);
$idEmpresa = mysqli_real_escape_string($conn, $data->idEmpresa);



	define('UPLOAD_DIR', '../../assets/img/galeria/');
	$img = $imagen;
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$imageName = uniqid() . '.png';
	$file = UPLOAD_DIR . $imageName;
	$success = file_put_contents($file, $data);
	//print $success ? $file : 'Unable to save the file.';


$insert = $conn->query("INSERT INTO galeria (imagen,descripcion,id_empresa) VALUES ('$imageName','$descripcion',$idEmpresa)");
$result = $insert;


	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
