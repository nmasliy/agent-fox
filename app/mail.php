<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Заявка с вашего сайта";
$files = $_FILES['files'];

$c = true;

// Телеграм
$token = "5792684320:AAHuduSvGz62A-GvVaI7Z_VFyF36QEHoa5Y";
$chat_id = "-875734044";
$txt = "";

// Формирование самого письма
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $txt .= "<b>".$key."</b>: ".$value."%0A";
  }
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

function sendToTelegram($document) {
  $token = "5792684320:AAHuduSvGz62A-GvVaI7Z_VFyF36QEHoa5Y";
  $urlSite = "https://api.telegram.org/bot{$token}/sendDocument";
  $chat_id = "-875734044";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $urlSite);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
  $out = curl_exec($ch);
  curl_close($ch);
}

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'deckards2505@gmail.com'; // Логин на почте
  $mail->Password   = 'pbdrsosdrvnnqhxz'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('deckards2505@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('deckards2505@gmail.com');
  // $mail->addAddress('blablablal');

  // Прикрепление файлов к письму
  if (!empty($files['name'][0])) {
    for ($ct = 0; $ct < count($files['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($files['name'][$ct]));
      $filename = $files['name'][$ct];
      if (move_uploaded_file($files['tmp_name'][$ct], $uploadfile)) {
        $document = new CURLFile($uploadfile);
        sendToTelegram($document);

        $mail->addAttachment($uploadfile, $filename);
        $rfile[] = "Файл $filename прикреплён";
      } else {
          $rfile[] = "Не удалось прикрепить файл $filename";
      }
    }
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
