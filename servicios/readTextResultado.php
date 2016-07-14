<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$idCategoria = mysqli_real_escape_string($conn, $data->idCategoria);
$idCiudad = mysqli_real_escape_string($conn, $data->idCiudad);



if ($idCategoria !== 0 && $idCiudad > 0) {

  $Categoria = $idCategoria;
  $result = $conn->query("SELECT nombre FROM ciudades WHERE idCiudad = $idCiudad");
  $rs = $result->fetch_array(MYSQLI_ASSOC);
  $Ciudad = $rs["nombre"];

  $arr = array('txt_result' => "Resultados de ".$Categoria." en ".$Ciudad);

}elseif ($idCategoria !== 0 && $idCiudad == 0) {

  $Categoria = $idCategoria;
  $arr = array('txt_result' => "Resultados de ".$Categoria);

}elseif ($idCategoria == 0 && $idCiudad > 0) {

  $result = $conn->query("SELECT nombre FROM ciudades WHERE idCiudad = $idCiudad");
  $rs = $result->fetch_array(MYSQLI_ASSOC);
  $Ciudad = $rs["nombre"];
  $arr = array('txt_result' => "Resultados en ".$Ciudad);

}else{
  $arr = array('errorBusqueda' => "La Búsqueda no es Válida");
}

	$salida = json_encode($arr);
	print_r($salida);

?>
