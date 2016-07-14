<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $guid = mysqli_real_escape_string($conn, $data->guid);


	$result = $conn->query("SELECT E.id,E.nombre,E.logo,ROUND(E.estrellas/E.votantes,1) AS estrellas,
		(CASE WHEN E.plan = 1 THEN 'basico' WHEN E.plan = 2 THEN 'premium' WHEN E.plan = 3 THEN 'gold' WHEN E.plan = 4 THEN 'cortesia' END)
		AS plan,E.guid,E.visitas,E.activo,COUNT(distinct F.id) AS favoritos,COUNT(distinct C.id) AS comentarios,DATEDIFF(P.fecha_vencimiento,NOW()) AS dias FROM empresas E
    LEFT JOIN favoritos F ON E.id = F.id_empresa
    LEFT JOIN comentarios C ON E.id = C.id_empresa
    LEFT JOIN pagos P ON E.guid = P.guid_empresa
    WHERE E.guid_usuario = '$guid'
    GROUP BY E.id");


	$miArray = array();
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			$miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);


?>
