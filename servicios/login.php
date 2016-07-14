<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$password = mysqli_real_escape_string($conn, $data->password);
$email = mysqli_real_escape_string($conn, $data->email);

	$result = $conn->query("SELECT * FROM usuarios WHERE email = '$email'");
	$num_rows = mysqli_num_rows($result);

	$conn->close();

	if ($num_rows != 1) {
		$arr = array('error' => "El email no existe");
	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);
		$passDB = $rs["password"];

		$password = md5($password);
		if ($password == $passDB) {
			$arr = array(
				'id' 			=> $rs["id"],
				'nombres' 		=> $rs["nombres"],
				'apellidos' 	=> $rs["apellidos"],
				'nacimiento' 	=> $rs["nacimiento"],
				'pais' 			=> $rs["pais"],
				'email' 		=> $rs["email"],
				'plan' 			=> $rs["plan"],
				'guid' 			=> $rs["guid"]
				);

		}else{
			$arr = array('error' => "El password es incorrecto");
		}


	}

	$salida = json_encode($arr);
	print_r($salida);

 /*
$conn = mysql_connect('localhost', 'root', '');
mysql_select_db('test', $con);

$qry_em = 'select count(*) as cnt from users where email ="' . $uemail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO users (name,pass,email) values ("' . $usrname . '","' . $upswd . '","' . $uemail . '")';
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $arr = array('msg' => "", 'error' => 'User Already exists with same email');
    $jsn = json_encode($arr);
    print_r($jsn);
}
*/


	/*
	$result = $conn->query("SELECT * FROM usuarios");
	$miArray = array();
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	        $miArray[] = $rs;
	}

	$salida = json_encode($miArray);
	$conn->close();
	print_r($salida);
*/
?>
