<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$logo = mysqli_real_escape_string($conn, $data->logo);
$guid = mysqli_real_escape_string($conn, $data->guid);


	define('UPLOAD_DIR', '../../assets/img/brands/');
	$img = $logo;
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$imageName = uniqid() . '.png';
	$file = UPLOAD_DIR . $imageName;
	$success = file_put_contents($file, $data);
	//print $success ? $file : 'Unable to save the file.';


$update = $conn->query("UPDATE empresas SET logo='$imageName' WHERE guid = '$guid'");
$result = $update;


	$conn->close();



	$salida = json_encode($result);
	print_r($salida);

?>
