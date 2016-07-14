<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$icono = mysqli_real_escape_string($conn, $data->icono);
$nombre = mysqli_real_escape_string($conn, $data->nombre);


$nombreExist = $conn->query("SELECT * FROM categorias WHERE nombre = '$nombre'");
$num_rows = mysqli_num_rows($nombreExist);

if ($num_rows == 0) {

	$iconExist = $conn->query("SELECT * FROM categorias WHERE icono = '$icono'");
	$num_rows = mysqli_num_rows($iconExist);

	if ($num_rows == 0) {
		$result = $conn->query("INSERT INTO categorias (nombre,icono)
		VALUES ('$nombre','$icono')");
	}else{

		$arr = array('error' => "El icono ya se está usando en otra categoría");

	}

}else{
		$arr = array('error' => "El nombre ya existe");
}

	$conn->close();

	$salida = json_encode($arr);
	print_r($salida);

?>
