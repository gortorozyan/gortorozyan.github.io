<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Համոզվիր, որ composer-ով տեղադրել ես PHPMailer

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = htmlspecialchars(trim($_POST['fullname']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo 'Լրացրեք բոլոր դաշտերը։';
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'support@jewelgambling.com'; // Քո email
        $mail->Password   = 'ՔՈ_EMAIL_ԳԱՂՏՆԱԲԱՌԸ'; // Սա փոխիր իրականով
        $mail->SMTPSecure = 'tls'; // կարող է նաև 'ssl'
        $mail->Port       = 587; // եթե ssl՝ գրիր 465

        $mail->setFrom('support@jewelgambling.com', 'Jewel Gambling');
        $mail->addAddress('support@jewelgambling.com'); // Ում է գնում նամակը
        $mail->addReplyTo($email, $name); // Որ օգտատերը պատասխանի, քո inbox կգա

        $mail->Subject = 'Կոնտակտ Ֆորմայի Նամակ';
        $mail->Body    = "Անուն: $name\nԷլ․ հասցե: $email\n\nՆամակ:\n$message";

        $mail->send();
        echo 'Նամակը հաջողությամբ ուղարկվել է։';
    } catch (Exception $e) {
        http_response_code(500);
        echo "Նամակը չհաջողվեց ուղարկել։ Սխալ՝ {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo 'Թույլատրված չէ։';
}