<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $idCategoria = mysqli_real_escape_string($conn, $data->idCategoria);
	$idCiudad = mysqli_real_escape_string($conn, $data->idCiudad);

	if ($idCategoria !== 0 && $idCiudad > 0) {

		$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.facebook,E.twitter,E.instagram,
														E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,E.web,C.nombre AS categoria,C.icono FROM empresas E
													  INNER JOIN categorias C ON C.id = E.id_categoria
													  WHERE  E.etiquetas LIKE '%$idCategoria%' AND E.id_ciudad = $idCiudad AND E.activo = 1");

	}elseif ($idCategoria !== 0 && $idCiudad == 0) {

		$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.facebook,E.twitter,E.instagram,
														E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,E.web,C.nombre AS categoria,C.icono FROM empresas E
													  INNER JOIN categorias C ON C.id = E.id_categoria
													  WHERE E.etiquetas LIKE '%$idCategoria%'  AND E.activo = 1");

	}elseif ($idCategoria == 0 && $idCiudad > 0) {
		$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.facebook,E.twitter,E.instagram,
														E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,E.web,C.nombre AS categoria,C.icono FROM empresas E
													  INNER JOIN categorias C ON C.id = E.id_categoria
													  WHERE E.etiquetas LIKE '%$idCategoria%'  AND E.activo = 1");
	}else{
		$result = array('errorBusqueda' => "La Búsqueda no es Válida");
	}


	$miArray = array();
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			$miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
