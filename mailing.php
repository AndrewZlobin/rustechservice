<?php
$post = $_POST;

$destination = 'andrewzlobin1992@gmail.com';

if ($post) {
    $to      = $destination;
    $subject = $post['theme'];

    // текст письма
    $message = '
<html>
<head>
  <title>Birthday Reminders for August</title>
</head>
<body>
    <h3>Пришел новый вопрос о сотрудничистве!</h3>
    <br>
    <div><strong>От:</strong></div>
    <p>' . $post['fullname'] . '</p>
    <div><strong>Номер телефона:</strong></div>
    <p>' . $post['phonenum'] . '</p>
    <div><strong>Электронная почта:</strong></div>
    <p>' . $post['email'] . '</p>
    <div><strong>Текст сообщения:</strong></div>
    <p>' . $post['message'] . '</p>
</body>
</html>';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: ' . $post['email'] . "\r\n";

    mail($to, $subject, $message, $headers);
}