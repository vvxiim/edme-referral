document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const GAS_URL = "https://script.google.com/macros/s/AKfycbw-DkzbbXIvnxl3ipsagBAWvT__ZFdRfawo6-b7LWSgc-Nkkh4grao2B889rS0TiaM/exec";

    // 1. Собираем данные
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    
    // 2. Формируем тело запроса
    const postBody = `fio=${fio}&username=${username}`;
    
    // 3. Ключевой момент: используем fetch с then/catch вместо async/await
    fetch(GAS_URL, {
        method: 'POST',
        body: postBody
    })
    .then(response => {
        // Этот блок выполнится, если запрос не заблокирован CORS
        console.log("Запрос успешно отправлен!");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(error => {
        // Этот блок выполнится при ошибке CORS или сети
        console.log("Запрос отправлен (возможно, с CORS ошибкой), делаем редирект...");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    });
    
    // 4. Дополнительная страховка: редирект через 1 секунду в любом случае
    setTimeout(function() {
        if (!window.location.href.includes('b24site')) {
            window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
        }
    }, 1000);
});

















