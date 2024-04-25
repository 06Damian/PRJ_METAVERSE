<?php 
//we have to put some stuff to the topp
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//This is to connect the uses to the thingys
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//This is the config file we made earlier
require 'config.php';

//the function to send the mail
function sendMail($email, $subject, $message){
    
    //this is a new php mailer object
    $mail = new PHPMailer(true);

    //this uses the smtp to send the email
    $mail->isSMTP();

    //this makes sure we can log in
    $mail->SMTPAuth = true;

    //the host porperty to the mailhost value
    $mail->Host = MAILHOST;

    //the same but for the username
    $mail->Username = USERNAME;

    //and again
    $mail->Password = PASSWORD;

    //security
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    //we set the port so it connects properly
    $mail->Port = 587;

    //we use what we set earlier in the config file
    $mail->setFrom(SEND_FROM, SEND_FROM_NAME);

    //we use the parameters for where the mail goes
    $mail->addAddress($email);

    //we again use what we made in the config file
    $mail->addReplyTo(REPLY_TO, REPLY_TO_NAME);

    //this makes sure that we can use html formatting and add images and links
    $mail->IsHTML(true);

    //we assign the subject
    $mail->Subject = $subject;

    //now we assign the message
    $mail->Body = $message;

    //this is to make sure that if HTML formatting is not accepted u can send plain text
    $mail->AltBody = $message;

    if(!$mail->send()){
        return "Email not send. please try again";
    }else{
        return "succes";
    };

};
?>