document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw-DkzbbXIvnxl3ipsagBAWvT__ZFdRfawo6-b7LWSgc-Nkkh4grao2B889rS0TiaM/exec";

    // Создаём динамический скрипт (JSONP)
    const script = document.createElement('script');
    script.src = `${GAS_URL}?callback=handleResponse&fio=${fio}&username=${username}`;
    document.body.appendChild(script);
});

// Функция, которая вызовется после успешной записи
function handleResponse(resp) {
    console.log("Ответ от GAS:", resp);
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
}















