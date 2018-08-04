<?php
require_once "Mail.php";


if (empty($_POST["message"])) {
    $errorMSG = "Uh oh, something went wrong, please try again";
} else {
    $message = $_POST["message"];
}


// $EmailTo = "tobias.mahnert@gronade.com";
$subject = "Your Subject";

$to = 'target@target.com';

$body = "Message: $message";

$headers = array(
    'From' => $to,
    'To' => 'yourEmail@yo.com',
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'YourEmail',
        'password' => 'YourEmailPassword'
    ));

$mail = $smtp->send($to, $headers, $body);


if ($errorMSG == ""){
   echo "Email Sent";
}else{
    echo('<p>' . $errorMSG . '</p>');
}