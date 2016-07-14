<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");

	$result = $conn->query("SELECT E.id,E.nombre,E.plan,E.inner_score,E.visitas,E.activo,E.guid,C.nombre AS categoria,CI.nombre AS ciudad FROM empresas E
      LEFT JOIN categorias C ON E.id_categoria = C.id
      LEFT JOIN ciudades CI ON E.id_ciudad = CI.idCiudad
      ORDER BY inner_score DESC");

	$miArray = array();

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
