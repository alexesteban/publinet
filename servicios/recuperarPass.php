<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));

  $email = mysqli_real_escape_string($conn, $data->email);
  $guid = mysqli_real_escape_string($conn, $data->guid);

	$existEmail = $conn->query("SELECT id FROM usuarios WHERE email = '$email'");
	$num_rows = mysqli_num_rows($existEmail);

	if ($num_rows == 1) {

		$existLost = $conn->query("SELECT id FROM lost_password WHERE email = '$email'");
		$num_rows = mysqli_num_rows($existLost);

		if ($num_rows == 1) {
			$result = array('sended' => $email);
		}else{

			$result = $conn->query("INSERT INTO lost_password (email,guid) VALUES ('$email','$guid')");

						$EmailReceptor = $email;
						//Envía el Email de Contacto
						require "MAIL/class.phpmailer.php";
						$html = '
								<h1>
									Cambio de Contraseña: Publinet
								</h1>
								<p>
									Para cambiar tu contraseña, ingresa al siguiente link:
								</p>
								<a href="http://www.publinet.co/#/change_password/'.$guid.'">http://www.publinet.co/#/change_password/'.$guid.'</a>
								<p>
									Una vez ingreses al link, podrás cambiar la contraseña de tu cuenta.
								</p>
								';

						 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch

									$nmEmisor = 'Cambio de Contraseña';
									$emEmisor = "alexesteban89@gmail.com";
									$mail->AddReplyTo($emEmisor, $nmEmisor);
									$mail->SetFrom($emEmisor, $nmEmisor);
									$mail->CharSet = "iso-8859-1";
									$mail->Subject = "Cambio Contraseña Publinet";
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



	}else{
			$result = array('error' => "El email no está registrado");
	}



	$salida = json_encode($result);
	$conn->close();
	print_r($salida);


?>