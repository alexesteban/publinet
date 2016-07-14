<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
	$data = json_decode(file_get_contents("php://input"));
	$idBlog = mysqli_real_escape_string($conn, $data->idblog);

	$result = $conn->query("SELECT * FROM blogs WHERE id = '$idBlog'");
	$num_rows = mysqli_num_rows($result);
	if ($num_rows != 1) {
		$arr = array('error' => "La entrada no existe");
	}else{
		$rs = $result->fetch_array(MYSQLI_ASSOC);

		$prev = $conn->query("SELECT * FROM blogs WHERE id = (SELECT max(id) FROM blogs WHERE id < '$idBlog')");
		$num_rows = mysqli_num_rows($prev);
		if ($num_rows != 1) {
			$idPrev = "";
			$imgPrev = "";
			$titPrev = "";
			$conPrev = "";
		}else{
			$rsPrev = $prev->fetch_array(MYSQLI_ASSOC);
			$idPrev = $rsPrev["id"];
			$imgPrev = $rsPrev["imagen"];
			$titPrev = $rsPrev["titulo"];
			$conPrev = $rsPrev["contenido"];
		}

		$next = $conn->query("SELECT * FROM blogs WHERE id = (SELECT min(id) FROM blogs WHERE id > '$idBlog')");
		$num_rows = mysqli_num_rows($next);
		if ($num_rows != 1) {
			$idNext = "";
			$imgNext = "";
			$titNext = "";
			$conNext = "";
		}else{
			$rsNext = $next->fetch_array(MYSQLI_ASSOC);
			$idNext = $rsNext["id"];
			$imgNext = $rsNext["imagen"];
			$titNext = $rsNext["titulo"];
			$conNext = $rsNext["contenido"];
		}

		$arrContenido = explode(".",$rs["contenido"]);
		$arr = array(
			'imagen' 		=> $rs["imagen"],
			'titulo' 	=> $rs["titulo"],
			'contenido' 	=> $arrContenido,
			'idprev'			=> $idPrev,
			'imgprev'			=> $imgPrev,
			'titprev'			=> $titPrev,
			'conprev'			=> $conPrev,
			'idnext'			=> $idNext,
			'imgnext'			=> $imgNext,
			'titnext'			=> $titNext,
			'connext'			=> $conNext
			);
	}


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
