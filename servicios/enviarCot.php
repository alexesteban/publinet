<?php
	include 'conexion.php';
	header("Content-Type: text/html;charset=utf-8");
  $data = json_decode(file_get_contents("php://input"));

  $titulo = mysqli_real_escape_string($conn, $data->titulo);
	$desc = mysqli_real_escape_string($conn, $data->desc);
	$categoria = mysqli_real_escape_string($conn, $data->categoria);
	$fecha = mysqli_real_escape_string($conn, $data->fecha);
	$nombres = mysqli_real_escape_string($conn, $data->nombres);
	$email = mysqli_real_escape_string($conn, $data->email);
	$tel = mysqli_real_escape_string($conn, $data->tel);
	$ciudad = mysqli_real_escape_string($conn, $data->ciudad);
	$municipio = mysqli_real_escape_string($conn, $data->municipio);
	$direccion = mysqli_real_escape_string($conn, $data->direccion);

	$result = $conn->query("SELECT email FROM empresas WHERE id_categoria = $categoria AND id_ciudad = $ciudad");

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			  $emailEmpresa = $rs["email"];

				$EmailReceptor = $emailEmpresa;
				//Envía el Email de Contacto
							require "MAIL/class.phpmailer.php";
							$html = '
									<h1>
										Solicitud de Cotización
									</h1>
									<p>
										Alguien requiere que tu empresa le cotice un producto o servicio, esta solicitud fué enviada desde publinet.co
										por favor comunícate con la persona que desea la cotización para cerrar el negocio!
									</p>
									<p>
										Datos del producto o servicio:
									</p>
									<p> Titulo: '.$titulo.' </p>
									<p> Descripción: '.$desc.' </p>
									<p> Fecha de Entrega: '.$fecha.' </p>
									<hr>
									<p>
										Datos de Contácto
									</p>
									<p> Nombres: '.$nombres.'</p>
									<p> Email: '.$email.' </p>
									<p> Teléfono: '.$tel.' </p>
									<p> Municipio: '.$municipio.' </p>
									<p> Direcion: '.$direccion.' </p>
							 		';

							 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch

						        $nmEmisor = 'Cotizaciones Publinet';
						        $emEmisor = "alexesteban89@gmail.com";
						        $mail->AddReplyTo($emEmisor, $nmEmisor);
						        $mail->SetFrom($emEmisor, $nmEmisor);
						        $mail->CharSet = "iso-8859-1";
						        $mail->Subject = "Contacto: ".$nombres;
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


	$salida = json_encode($arr);
	$conn->close();
	print_r($salida);


?>