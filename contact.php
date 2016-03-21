<?php

function clean_string($string) {
	$bad = array("content-type","bcc:","to:","cc:","href");
	return str_replace($bad,"",$string);
}

if (!$_GET['email']){
	$email_to = "brigittekozena@gmail.com";
	$email_subject = "Brigitte Kozena Portfolio Request";

	$email_message = "Form details below.\n\n";
	$email_message .= "First Name: ".clean_string($_GET['fname'])."\n";
	$email_message .= "Last Name: ".clean_string($_GET['lname'])."\n";
	$email_message .= "Email: ".clean_string($_GET['level'])."\n";
	$email_message .= "Company: ".clean_string($_GET['company'])."\n";
	$email_message .= "Comments: ".clean_string($_GET['message'])."\n";

	$headers = 'From: '.$_GET['level'].'\r\nReply-To: '.$_GET['level'].'\r\nX-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
}
?>
