<?php
	include 'conexion.php';

$merchantId = $_GET["merchantId"];
$merchant_name = $_GET["merchant_name"];
$merchant_address = $_GET["merchant_address"];
$telephone = $_GET["telephone"];
$merchant_url = $_GET["merchant_url"];
$transactionState = $_GET["transactionState"];
$lapTransactionState = $_GET["lapTransactionState"];//APPROVED
$message = $_GET["message"];//Approved
$referenceCode = $_GET["referenceCode"];//COP1456576471095
$reference_pol = $_GET["reference_pol"];
$transactionId = $_GET["transactionId"];
$description = $_GET["description"];//GuidEmpresa
$trazabilityCode = $_GET["trazabilityCode"];
$cus = $_GET["cus"];
$orderLanguage = $_GET["orderLanguage"];
$polTransactionState = $_GET["polTransactionState"];
$signature = $_GET["signature"];
$polResponseCode = $_GET["polResponseCode"];
$lapResponseCode = $_GET["lapResponseCode"];
$risk = $_GET["risk"];
$polPaymentMethod = $_GET["polPaymentMethod"];
$lapPaymentMethod = $_GET["lapPaymentMethod"];//MASTERCARD
$polPaymentMethodType = $_GET["polPaymentMethodType"];
$lapPaymentMethodType = $_GET["lapPaymentMethodType"];//CREDIT_CARD
$installmentsNumber = $_GET["installmentsNumber"];
$TX_VALUE = $_GET["TX_VALUE"]; //650000
$buyerEmail = $_GET["buyerEmail"];//alexesteban_89@hotmail.es
$pseBank = $_GET["pseBank"];
$pseReference1 = $_GET["pseReference1"];
$pseReference2 = $_GET["pseReference2"];
$pseReference3 = $_GET["pseReference3"];
$authorizationCode = $_GET["authorizationCode"];
$processingDate = $_GET["processingDate"];

	$result = $conn->query("INSERT INTO response (merchantId,merchant_name,merchant_address,telephone,merchant_url,transactionState,lapTransactionState,message,
	referenceCode,reference_pol,transactionId,description,trazabilityCode,cus,orderLanguage,polTransactionState,signature,polResponseCode,lapResponseCode,
	risk,polPaymentMethod,lapPaymentMethod,polPaymentMethodType,lapPaymentMethodType,installmentsNumber,TX_VALUE,buyerEmail,pseBank,pseReferenceo,pseReferencet,pseReferencetr,
	authorizationCode,processingDate)VALUES('$merchantId','$merchant_name','$merchant_address','$telephone','$merchant_url',$transactionState,'$lapTransactionState','$message',
	'$referenceCode','$reference_pol','$transactionId','$description','$trazabilityCode','$cus','$orderLanguage',$polTransactionState,'$signature',$polResponseCode,'$lapResponseCode',
	'$risk',$polPaymentMethod,'$lapPaymentMethod',$polPaymentMethodType,'$lapPaymentMethodType',$installmentsNumber,'$TX_VALUE','$buyerEmail','$pseBank','$pseReferenceo','$pseReferencet','$pseReferencetr',
	'$authorizationCode','$processingDate')");

header("location: /amarillas/#/response/".$referenceCode);


?>
