<?php

// Телеграм
$$token = "5792684320:AAHuduSvGz62A-GvVaI7Z_VFyF36QEHoa5Y";
$chat_id = "-875734044";
$txt = "";

// Массив допустимых значений типа файла.
$types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

// Максимальный размер файла в килобайтах
// 1048576; // 1 МБ
$size = 10737418;


$fileSendStatus = '';

// Проверяем не пусты ли поля с именем и телефоном

if (!empty($_FILES['files']['tmp_name'])) {

  $urlFile =  "https://api.telegram.org/bot" . $token . "/sendMediaGroup";

  // Загрузка файла и вывод сообщения
  $mediaData = [];
  $postContent = [
    'chat_id' => $chat_id,
  ];

  for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
    if ($_FILES['files']['name'][$ct]) {
      if ($_FILES['files']['size'][$ct] < $size && in_array($_FILES['files']['type'][$ct], $types)) {
        $filePath = $path . $_FILES['files']['name'][$ct];
        $postContent[$_FILES['files']['name'][$ct]] = new CURLFile(realpath($filePath));
        $mediaData[] = ['type' => 'document', 'media' => 'attach://' . $_FILES['files']['name'][$ct]];
      }
    }
  }

  $postContent['media'] = json_encode($mediaData);

  $curl = curl_init();
  curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
  curl_setopt($curl, CURLOPT_URL, $urlFile);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $postContent);
  $fileSendStatus = curl_exec($curl);
  curl_close($curl);
}
