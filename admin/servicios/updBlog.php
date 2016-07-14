<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idBlog = mysqli_real_escape_string($conn, $data->idBlog);
$titulo = mysqli_real_escape_string($conn, $data->titulo);
$contenido = mysqli_real_escape_string($conn, $data->contenido);
$imagen = mysqli_real_escape_string($conn, $data->imagen);
$format = mysqli_real_escape_string($conn, $data->format);
$actual = mysqli_real_escape_string($conn, $data->actual);

if ($imagen != '') {

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
	$actual = '../../assets/img/blog/' . $actual;
	unlink($actual);

	$result = $conn->query("UPDATE blogs SET titulo = '$titulo', contenido = '$contenido', imagen = '$imageName' WHERE id = $idBlog");

}else{
	$result = $conn->query("UPDATE blogs SET titulo = '$titulo', contenido = '$contenido' WHERE id = $idBlog");
}



$conn->close();

$salida = json_encode($result);
print_r($salida);

?>
