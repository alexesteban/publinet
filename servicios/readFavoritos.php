<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $guid = mysqli_real_escape_string($conn, $data->guid);

	$result = $conn->query("SELECT E.id,E.nombre,E.logo,E.direccion,E.telefono,E.celular,E.email,E.descripcion,E.facebook,E.twitter,E.instagram,
														E.estrellas,E.votantes,E.plan,E.id_ciudad,E.id_categoria,C.nombre AS categoria,C.icono FROM empresas E
													  INNER JOIN categorias C ON C.id = E.id_categoria
                            INNER JOIN favoritos F ON E.id = F.id_empresa
                            WHERE F.guid = '$guid'");

	$miArray = array();
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			$miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
