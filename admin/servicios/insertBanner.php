<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$imagen = mysqli_real_escape_string($conn, $data->imagen);
$link = mysqli_real_escape_string($conn, $data->link);
$posicion = mysqli_real_escape_string($conn, $data->posicion);
$format = mysqli_real_escape_string($conn, $data->format);

if ($format == "jpeg") {
	$ext = "jpg";
}else{
	$ext = $format;
}

if ($posicion == "TL" || $posicion == "TR") {
	define('UPLOAD_DIR', '../../assets/img/middle-banners/');
}elseif ($posicion == "BO") {
	define('UPLOAD_DIR', '../../assets/img/bottom-slider/');
}

$img = $imagen;
$img = str_replace('data:image/'.$format.';base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$imageName = uniqid() . '.'.$ext;
$file = UPLOAD_DIR . $imageName;
$success = file_put_contents($file, $data);
//print $success ? $file : 'Unable to save the file.';

if ($posicion == "TR") {
	$result = $conn->query("UPDATE banners_home SET imagen = '$imageName',link = '$link' WHERE posicion = 'TR'");
}else{
	$result = $conn->query("INSERT INTO banners_home (imagen,link,posicion,orden)
	VALUES ('$imageName','$link','$posicion',9)");
}



	$conn->close();

	$salida = json_encode($result);
	print_r($salida);

?>
