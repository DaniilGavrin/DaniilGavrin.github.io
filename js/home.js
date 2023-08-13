// Функция, которая отправляет запрос на сервер для отправки уведомления о новом пользователе
function notifyNewUser() {
    var username = 'Новый пользователь';
  
    // Создаем XMLHttpRequest для отправки запроса на сервер
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.telegram.org/bot5922176595:AAGNRIKznqpJ7RnSurlnQl-eNfWNUqB5F_I/sendMessage', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    // Формируем данные для отправки на сервер
    var data = {
      chat_id: 'твой_chat_id',
      text: 'Новый пользователь: ' + username
    };
  
    // Отправляем данные на сервер
    xhr.send(JSON.stringify(data));
  }