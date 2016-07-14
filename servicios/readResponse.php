<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));
  $referenceCode = mysqli_real_escape_string($conn, $data->referenceCode);

	$result = $conn->query("SELECT lapTransactionState,referenceCode,transactionId,lapPaymentMethod,lapPaymentMethodType,TX_VALUE,buyerEmail,processingDate FROM response WHERE referenceCode = '$referenceCode'");

  $num_rows = mysqli_num_rows($result);

	if ($num_rows != 1) {

		$arr = array('error' => "No existe la transacción");

	}else{

		$rs = $result->fetch_array(MYSQLI_ASSOC);
		//$arrContenido = explode(".",$rs["descripcion"]);
		$arr = array(
			'lapTransactionState' 				=> $rs["lapTransactionState"],
			'referenceCode' 				=> $rs["referenceCode"],
			'transactionId' 				=> $rs["transactionId"],
			'lapPaymentMethod' 				=> $rs["lapPaymentMethod"],
			'lapPaymentMethodType' 				=> $rs["lapPaymentMethodType"],
			'TX_VALUE' 				=> $rs["TX_VALUE"],
			'buyerEmail' 				=> $rs["buyerEmail"],
			'processingDate' 				=> $rs["processingDate"]
			);

}

	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>
