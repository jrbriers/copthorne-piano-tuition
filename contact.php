<?php

$input = json_decode(file_get_contents('php://input'));

if($input->email === ''){
	$input->email = $input->name;
}
if($input->message === ''){
	$input->message = 'No message was supplied';
}
if($input->telephone === ''){
	$input->telephone = 'No telephone supplied';
}

$send_address='contact@copthornepianotuition.com';
$subject='Copthorne Piano Tuition - Message from ' . $input->name;
$message='Telephone: ' . $input->telephone . "\r\n" . 'Message: ' . $input->message;

$to      = $send_address;
$subject = $subject;
$message = $message;
$headers = 'From: ' . $input->email . "\r\n" .
    'Reply-To: ' . $input->email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>