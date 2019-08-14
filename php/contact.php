<?php 

$mail_to_send_to = "praneetnadella@gmail.com";
$from_email = "contact@praneetnadella.me";
$sendflag = $_REQUEST['sendflag'];                      
if ( $sendflag == "send" )
    {
        $email = $_REQUEST['femail'] ;
        $message = $_REQUEST['fmessage'] ;
        $headers = "From: $from_email" . "\r\n" . "Reply-To: $email" . "\r\n" ;
        $a = mail( $mail_to_send_to, "Message from praneetnadella.me", $message, $headers );
    }

?>