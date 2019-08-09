<?php 
//Define variables and set to empty values
$name = $email = $subject = $message = $success = "";

//Form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message_body = '';
    $name = test_input($_POST["fname"]);
    $email = test_input($_POST["femail"]);
    $subject = test_input($_POST["fsubject"]);
    $message = test_input("Name: ".$name."\r\nEmail: ".$email."\r\nMessage: ".$_POST["fmessage"]);
    unset($_POST['send']);
    foreach ($_POST as $key => $value){
        $message_body .=  "$key: $value\n";
    }

    $to = "praneetnadella@gmail.com";
    $subject = test_input($_POST["fsubject"]);
    if (mail($to, $subject, $message)){
        $name = $email = $subject = $message = '';
    }

        
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>