<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));

  $Nombres = mysqli_real_escape_string($conn, $data->Nombres);
	$Apellidos = mysqli_real_escape_string($conn, $data->Apellidos);
	$Telefono = mysqli_real_escape_string($conn, $data->Telefono);
	$Email = mysqli_real_escape_string($conn, $data->Email);
	$Mensaje = mysqli_real_escape_string($conn, $data->Mensaje);

	$result = $conn->query("SELECT email FROM info LIMIT 1");
	$rs = $result->fetch_array(MYSQLI_ASSOC);
	$email_amarillas =  $rs["email"];

	$EmailReceptor = $email_amarillas;
	//Envía el Email de Contacto
				require "MAIL/class.phpmailer.php";
				$html = '
						<h1>
							Contácto Servicios Publinet
						</h1>
						<p>
							La siguiente es información enviada desde otros servicios de Publinet
						</p>
						<p> Nombres: '.$Nombres.$Apellidos.' </p>
						<p> Teléfono: '.$Telefono.' </p>
						<p> Email: '.$Email.' </p>
						<p> Mensaje: '.$Mensaje.' </p>
				 		';

				 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch

			        $nmEmisor = 'CONTACTO SERVICIOS PUBLINET';
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


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>