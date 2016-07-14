<?php
	include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$nombres = mysqli_real_escape_string($conn, $data->nombres);
$apellidos = mysqli_real_escape_string($conn, $data->apellidos);
$email = mysqli_real_escape_string($conn, $data->email);
$password = mysqli_real_escape_string($conn, $data->password);
$guid = mysqli_real_escape_string($conn, $data->guid);

$decPass= $password;

$existEmail = $conn->query("SELECT * FROM adm_usuarios WHERE email = '$email'");
$num_rows = mysqli_num_rows($existEmail);

if ($num_rows == 0) {

		$password = md5($password);
		$result = $conn->query("INSERT INTO adm_usuarios (nombres,apellidos,email,password,guid)
		VALUES ('$nombres','$apellidos','$email','$password','$guid')");


    $EmailReceptor = $email;
  	//Envía el Email de Contacto
  				require "MAIL/class.phpmailer.php";
  				$html = '
  						<h1>
                Usuario Administrador Amarillas Virtuales
  						</h1>
  						<p>
                Te han creado una cuenta de administrador en amarillas virtuales, estos son los datos:
  						</p>
  						<p> usuario: '.$email.' </p>
  						<p> password: '.$decPass.' </p>
              <p>Ingresa a <a href="www.amarillasvirtuales.com/amarillas/admin">www.amarillasvirtuales.com/amarillas/admin<a/> con los anteriores datos </p>
  				 		';

  				 $mail = new PHPMailer(FALSE); // the true param means it will throw exceptions on errors, which we need to catch

  			        $nmEmisor = 'ADMIN AMARILLAS';
  			        $emEmisor = "admin@amarillasvirtuales.co";
  			        $mail->AddReplyTo($emEmisor, $nmEmisor);
  			        $mail->SetFrom($emEmisor, $nmEmisor);
  			        $mail->CharSet = "iso-8859-1";
  			        $mail->Subject = "Creación Usuario";
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
		$arr = array('error' => "El Email ya se encuentra registrado");
}

	$conn->close();

	$salida = json_encode($arr);
	print_r($salida);

?>
