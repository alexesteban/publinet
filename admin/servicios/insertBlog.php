<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$imagen = mysqli_real_escape_string($conn, $data->imagen);
$contenido = mysqli_real_escape_string($conn, $data->contenido);
$titulo = mysqli_real_escape_string($conn, $data->titulo);
$format = mysqli_real_escape_string($conn, $data->format);

if ($format == "jpeg") {
	$ext = "jpg";
}else{
	$ext = $format;
}

define('UPLOAD_DIR', '../../assets/img/blog/');
$img = $imagen;
$img = str_replace('data:image/'.$format.';base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$imageName = uniqid() . '.'.$ext;
$file = UPLOAD_DIR . $imageName;
$success = file_put_contents($file, $data);
//print $success ? $file : 'Unable to save the file.';


$result = $conn->query("INSERT INTO blogs (imagen,titulo,contenido,publicado)
VALUES ('$imageName','$titulo','$contenido',1)");

	$conn->close();

	$salida = json_encode($result);
	print_r($salida);

?>
