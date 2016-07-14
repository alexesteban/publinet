<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));

  $Nombres = mysqli_real_escape_string($conn, $data->Nombres);
	$Apellidos = mysqli_real_escape_string($conn, $data->Apellidos);
	$tipoId = mysqli_real_escape_string($conn, $data->tipoId);
	$NoId = mysqli_real_escape_string($conn, $data->NoId);
	$Telefono = mysqli_real_escape_string($conn, $data->Telefono);
	$Email = mysqli_real_escape_string($conn, $data->Email);
	$Direcion = mysqli_real_escape_string($conn, $data->Direcion);
	$Ciudad = mysqli_real_escape_string($conn, $data->Ciudad);
	$descripcion = mysqli_real_escape_string($conn, $data->descripcion);


	/*$result = $conn->query("SELECT email FROM empresas");

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			  $emailEmpresa = $rs["email"];
				$arr = $emailEmpresa;
	}*/

	$result = $conn->query("SELECT email FROM info LIMIT 1");
	$rs = $result->fetch_array(MYSQLI_ASSOC);
	$email_amarillas =  $rs["email"];

	$EmailReceptor = $email_amarillas;
	//Envía el Email de Contacto
				require "MAIL/class.phpmailer.php";
				$html = '
						<h1>
							Contácto Publinet
						</h1>
						<p>
							La siguiente es información enviada desde el formulario de contacto de Publinet
						</p>
						<p> Nombres: '.$Nombres.$Apellidos.' </p>
						<p> Tipo ID: '.$tipoId.' </p>
						<p> Número ID: '.$NoId.' </p>
						<p> Teléfono: '.$Telefono.' </p>
						<p> Email: '.$Email.' </p>
						<p> Direcion: '.$Direcion.' </p>
						<p> Ciudad: '.$Ciudad.' </p>
						<p> Mensaje: '.$descripcion.' </p>
				 		';

				 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch

			        $nmEmisor = 'Publinet';
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