<?php
header("Access-Control-Allow-Orgin: *");
header("Access-Control-Allow-Methods: *");

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	$to      = 'marceloscavassani@gmail.com';
	$subject = 'Formulário de contato do meu site no github';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){
		$res['sendstatus'] = 'done';

		//Edit your message here
		$res['message'] = 'Mensagem de contato enviada com sucesso';
    }
	else{
		$res['message'] = 'Falha na tentativa de enviar e-mail. Por favor me envie um e-mail para marceloscavassani@gmail.com';
	}


	echo json_encode($res);
}

?>
