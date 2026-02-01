document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ваш новый URL развертывания GAS
    const GAS_URL = "https://script.google.com/macros/s/AKfycbxyij8JMSc5snAxzn28KNybJu-xZtZvvKAvxJp-3vkug3aoren32xNprsbpPH-wl2o/exec";

    // 1. Формируем тело запроса в формате "ключ=значение"
    const fioValue = encodeURIComponent(document.getElementById("fio").value);
    const usernameValue = encodeURIComponent(document.getElementById("username").value);
    const postBody = `fio=${fioValue}&username=${usernameValue}`;

    // 2. Отправляем POST запрос КАК ТЕКСТ
    fetch(GAS_URL, {
        method: 'POST',
        // ВАЖНО: НЕ указываем заголовок 'Content-Type' явно!
        // Браузер сам поставит нужный, и запрос станет "простым".
        body: postBody
    })
    .then(response => {
        // Если мы здесь, запрос не был заблокирован CORS!
        console.log("Запрос успешно отправлен!");
        // Незамедлительно делаем редирект пользователя
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(error => {
        console.error("Ошибка сети:", error);
        // Даже в случае ошибки сети сделаем редирект
        alert("Связь с сервером может быть неустойчивой, но мы перенаправляем вас дальше.");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    });
});














