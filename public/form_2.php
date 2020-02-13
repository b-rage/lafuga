<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];

$mail_to = 'info@lafugaediciones.es';
$subject = 'iscripcion newsletter '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";


$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);



if ($mail_status) { ?>

	<script language="javascript" type="text/javascript">
		alert('Gracias. Te contactaremos pronto!!!');
		window.history.back();
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed.');
		 window.history.back();
	</script>
<?php
}
?>