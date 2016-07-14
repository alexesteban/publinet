<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $idCategoria = mysqli_real_escape_string($conn, $data->idCategoria);
	$idCiudad = mysqli_real_escape_string($conn, $data->idCiudad);

	if ($idCategoria !== 0 && $idCiudad > 0) {

		$result = $conn->query("SELECT id,nombre,logo,latitud,longitud FROM empresas
        										WHERE etiquetas LIKE '%$idCategoria%' AND id_ciudad = $idCiudad AND longitud IS NOT NULL");

														$num_rows = mysqli_num_rows($result);
														if ($num_rows == 0) {
															$result = array('errorBusqueda' => "No se encontraron resultados");
															$salida = json_encode($result);
														}else{
															$miArray = array();
															while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
																	$miArray[] = $rs;
															}
															$salida = json_encode($miArray);
														}

	}elseif ($idCategoria !== 0 && $idCiudad == 0) {

		$result = $conn->query("SELECT id,nombre,logo,latitud,longitud FROM empresas
        										WHERE etiquetas LIKE '%$idCategoria%' AND longitud IS NOT NULL");

														$num_rows = mysqli_num_rows($result);
														if ($num_rows == 0) {
															$result = array('errorBusqueda' => "No se encontraron resultados");
															$salida = json_encode($result);
														}else{
															$miArray = array();
															while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
																	$miArray[] = $rs;
															}
															$salida = json_encode($miArray);
														}

	}elseif ($idCategoria == 0 && $idCiudad > 0) {
		$result = $conn->query("SELECT id,nombre,logo,latitud,longitud FROM empresas
        										WHERE id_ciudad = $idCiudad AND longitud IS NOT NULL");

														$num_rows = mysqli_num_rows($result);
														if ($num_rows == 0) {
															$result = array('errorBusqueda' => "No se encontraron resultados");
															$salida = json_encode($result);
														}else{
															$miArray = array();
															while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
																	$miArray[] = $rs;
															}
															$salida = json_encode($miArray);
														}
	}else{
		$result = array('errorBusqueda' => "La Búsqueda no es Válida");
		$salida = json_encode($result);
	}



	$conn->close();
	print_r($salida);


?>
