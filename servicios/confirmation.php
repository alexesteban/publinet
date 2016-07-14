<?php	include 'conexion.php';
	$result = $conn->query("SELECT email FROM info LIMIT 1");
	$rs = $result->fetch_array(MYSQLI_ASSOC);
	$email_amarillas =  $rs["email"];
	$EmailReceptor = $email_amarillas;
	if ( $_POST["merchant_id"] == '' && $_POST["reference_sale"] == '' ) {
			// Los Datos llegan Vacíos
					require "MAIL/class.phpmailer.php";
					$html = '
							<h1>
								Confirmación de compra vacía
							</h1>
							<p>
								Se envió una confirmación vacía, el banco o una entidad financiera realizó un envío pero sin Datos
							</p>
					 		';
					 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch
				        $nmEmisor = 'Confirmación Compra';
				        $emEmisor = "alexesteban89@gmail.com";
				        $mail->AddReplyTo($emEmisor, $nmEmisor);
				        $mail->SetFrom($emEmisor, $nmEmisor);
				        $mail->CharSet = "iso-8859-1";
				        $mail->Subject = "Contacto: ".$Nombres;
				        $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!';
				        $mail->CharSet = 'UTF-8';
				        $mail->MsgHTML($html);
				        try {
				            $mail->AddAddress($EmailReceptor);
				            $enviado = $mail->Send();
				        } catch (phpmailerException $e) {
											$arr = array('error' => "El correo no pudo ser enviado, favor contacte el administrador del sistema.");
				        } catch (Exception $e) {
									$arr = array('error' => "El correo no pudo ser enviado, favor contacte el administrador del sistema.");
				        }
				        $arr = array("Se envió correctamente");
				        //echo $html;
	}else{
		$merchant_id = $_POST["merchant_id"];
		$state_pol = $_POST["state_pol"];
		$risk = $_POST["risk"];
		$response_code_pol = $_POST["response_code_pol"];
		$reference_sale = $_POST["reference_sale"];
		$reference_pol = $_POST["reference_pol"];
		$sign = $_POST["sign"];
		$extra1 = $_POST["extra1"];
		$extra2 = $_POST["extra2"];
		$payment_method = $_POST["payment_method"];
		$payment_method_type = $_POST["payment_method_type"];
		$installments_number = $_POST["installments_number"];
		$value = $_POST["value"];
		$tax = $_POST["tax"];
		$additional_value = $_POST["additional_value"];
		$transaction_date = $_POST["transaction_date"];
		$currency = $_POST["currency"];
		$email_buyer = $_POST["email_buyer"];
		$cus = $_POST["cus"];
		$pse_bank = $_POST["pse_bank"];
		$test = $_POST["test"];
		$description = $_POST["description"];
		$billing_address = $_POST["billing_address"];
		$shipping_address = $_POST["shipping_address"];
		$phone = $_POST["phone"];
		$office_phone = $_POST["office_phone"];
		$account_number_ach = $_POST["account_number_ach"];
		$account_type_ach = $_POST["account_type_ach"];
		$administrative_fee = $_POST["administrative_fee"];
		$administrative_fee_base = $_POST["administrative_fee_base"];
		$administrative_fee_tax = $_POST["administrative_fee_tax"];
		$airline_code = $_POST["airline_code"];
		$attempts = $_POST["attempts"];
		$authorization_code = $_POST["authorization_code"];
		$bank_id = $_POST["bank_id"];
		$billing_city = $_POST["billing_city"];
		$billing_country = $_POST["billing_country"];
		$commision_pol = $_POST["commision_pol"];
		$commision_pol_currency = $_POST["commision_pol_currency"];
		$customer_number = $_POST["customer_number"];
		$date = $_POST["date"];
		$error_code_bank = $_POST["error_code_bank"];
		$error_message_bank = $_POST["error_message_bank"];
		$exchange_rate = $_POST["exchange_rate"];
		$ip = $_POST["ip"];
		$nickname_buyer = $_POST["nickname_buyer"];
		$nickname_seller = $_POST["nickname_seller"];
		$payment_method_id = $_POST["payment_method_id"];
		$payment_request_state = $_POST["payment_request_state"];
		$pseReference1 = $_POST["pseReference1"];
		$pseReference2 = $_POST["pseReference2"];
		$pseReference3 = $_POST["pseReference3"];
		$response_message_pol = $_POST["response_message_pol"];
		$shipping_city = $_POST["shipping_city"];
		$shipping_country = $_POST["shipping_country"];
		$transaction_bank_id = $_POST["transaction_bank_id"];
		$transaction_id = $_POST["transaction_id"];
		$payment_method_name = $_POST["payment_method_name"];

		$result = $conn->query("INSERT INTO confirmation (merchant_id,state_pol,risk,response_code_pol,reference_sale,reference_pol,sign,extraone,extratwo,payment_method,payment_method_type,installments_number,value,tax,additional_value,		transaction_date,currency,email_buyer,cus,pse_bank,test,description,billing_address,shipping_address,phone,office_phone,account_number_ach,account_type_ach,administrative_fee,administrative_fee_base,administrative_fee_tax,airline_code,
		attempts,authorization_code,bank_id,billing_city,billing_country,commision_pol,commision_pol_currency,customer_number,datec,error_code_bank,error_message_bank,exchange_rate,ip,nickname_buyer,nickname_seller,payment_method_id,
		payment_request_state,pseReferenceone,pseReferencetwo,pseReferencethree,response_message_pol,shipping_city,shipping_country,transaction_bank_id,transaction_id,payment_method_name)
		VALUES('$merchant_id','$state_pol','$risk','$response_code_pol','$reference_sale','$reference_pol','$sign','$extra1','$extra2','$payment_method','$payment_method_type','$installments_number','$value','$tax','$additional_value',
		'$transaction_date','$currency','$email_buyer','$cus','$pse_bank','$test','$description','$billing_address','$shipping_address','$phone','$office_phone','$account_number_ach','$account_type_ach','$administrative_fee','$administrative_fee_base','$administrative_fee_tax','$airline_code',
		'$attempts','$authorization_code','$bank_id','$billing_city','$billing_country','$commision_pol','$commision_pol_currency','$customer_number','$date','$error_code_bank','$error_message_bank','$exchange_rate','$ip','$nickname_buyer','$nickname_seller','$payment_method_id',
		'$payment_request_state','$pseReference1','$pseReference2','$pseReference3','$response_message_pol','$shipping_city','$shipping_country','$transaction_bank_id','$transaction_id','$payment_method_name')");

		// Los Datos llegan Vacíos				require "MAIL/class.phpmailer.php";
				$html = '
						<h1>
							Confirmación de compra '.$response_message_pol.'
						</h1>
						<p>
							El banco o una entidad financiera envió una confirmación de compra con los siguientes datos:
						</p>
						<p>
							Se ha confirmado una transacción:
						</p>
						<p>merchant_id : '.$merchant_id.'</p>
						<p>state_pol : '.$state_pol.'</p>
						<p>risk : '.$risk.'</p>
						<p>response_code_pol : '.$response_code_pol.'</p>
						<p>reference_sale : '.$reference_sale.'</p>
						<p>reference_pol : '.$reference_pol.'</p>
						<p>sign : '.$sign.'</p>
						<p>extra1 : '.$extra1.'</p>
						<p>extra2 : '.$extra2.'</p>
						<p>payment_method : '.$payment_method.'</p>
						<p>payment_method_type : '.$payment_method_type.'</p>
						<p>installments_number : '.$installments_number.'</p>
						<p>value : '.$value.'</p>
						<p>tax : '.$tax.'</p>
						<p>additional_value : '.$additional_value.'</p>
						<p>transaction_date : '.$transaction_date.'</p>
						<p>currency : '.$currency.'</p>
						<p>email_buyer : '.$email_buyer.'</p>
						<p>cus : '.$cus.'</p>
						<p>pse_bank : '.$pse_bank.'</p>
						<p>test : '.$test.'</p>
						<p>description : '.$description.'</p>
						<p>billing_address : '.$billing_address.'</p>
						<p>shipping_address : '.$shipping_address.'</p>
						<p>phone : '.$phone.'</p>
						<p>office_phone : '.$office_phone.'</p>
						<p>account_number_ach : '.$account_number_ach.'</p>
						<p>account_type_ach : '.$account_type_ach.'</p>
						<p>administrative_fee : '.$administrative_fee.'</p>
						<p>administrative_fee_base : '.$administrative_fee_base.'</p>
						<p>administrative_fee_tax : '.$administrative_fee_tax.'</p>
						<p>airline_code : '.$airline_code.'</p>
						<p>attempts : '.$attempts.'</p>
						<p>authorization_code : '.$authorization_code.'</p>
						<p>bank_id : '.$bank_id.'</p>
						<p>billing_city : '.$billing_city.'</p>
						<p>billing_country : '.$billing_country.'</p>
						<p>commision_pol : '.$commision_pol.'</p>
						<p>commision_pol_currency : '.$commision_pol_currency.'</p>
						<p>customer_number : '.$customer_number.'</p>
						<p>date : '.$date.'</p>
						<p>error_code_bank : '.$error_code_bank.'</p>
						<p>error_message_bank : '.$error_message_bank.'</p>
						<p>exchange_rate : '.$exchange_rate.'</p>
						<p>ip : '.$ip.'</p>
						<p>nickname_buyer : '.$nickname_buyer.'</p>
						<p>nickname_seller : '.$nickname_seller.'</p>
						<p>payment_method_id : '.$payment_method_id.'</p>
						<p>payment_request_state : '.$payment_request_state.'</p>
						<p>pseReference1 : '.$pseReference1.'</p>
						<p>pseReference2 : '.$pseReference2.'</p>
						<p>pseReference3 : '.$pseReference3.'</p>
						<p>response_message_pol : '.$response_message_pol.'</p>
						<p>shipping_city : '.$shipping_city.'</p>
						<p>shipping_country : '.$shipping_country.'</p>
						<p>transaction_bank_id : '.$transaction_bank_id.'</p>
						<p>transaction_id : '.$transaction_id.'</p>
						<p>payment_method_name : '.$payment_method_name.'</p>
						';

				 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch
							$nmEmisor = 'Confirmación Compra';
							$emEmisor = "alexesteban89@gmail.com";
							$mail->AddReplyTo($emEmisor, $nmEmisor);
							$mail->SetFrom($emEmisor, $nmEmisor);
							$mail->CharSet = "iso-8859-1";
							$mail->Subject = "Contacto: ".$Nombres;
							$mail->AltBody = 'To view the message, please use an HTML compatible email viewer!';
							$mail->CharSet = 'UTF-8';
							$mail->MsgHTML($html);
							try {
									$mail->AddAddress($EmailReceptor);
									$enviado = $mail->Send();
							} catch (phpmailerException $e) {
										$arr = array('error' => "El correo no pudo ser enviado, favor contacte el administrador del sistema.");
							} catch (Exception $e) {
								$arr = array('error' => "El correo no pudo ser enviado, favor contacte el administrador del sistema.");
							}
							$arr = array("Se envió correctamente");
							//echo $html;
	}
?>
