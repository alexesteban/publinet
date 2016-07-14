<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$tag = mysqli_real_escape_string($conn, $data->tag);


$tagExist = $conn->query("SELECT tag FROM tags WHERE tag = '$tag'");
$num_rows = mysqli_num_rows($tagExist);

if ($num_rows == 0) {

	$result = $conn->query("INSERT INTO tags (tag) VALUES ('$tag')");

}else{
		$arr = array('error' => "El Tag ya existe");
}

	$conn->close();

	$salida = json_encode($arr);
	print_r($salida);

?>
