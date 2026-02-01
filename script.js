document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw-DkzbbXIvnxl3ipsagBAWvT__ZFdRfawo6-b7LWSgc-Nkkh4grao2B889rS0TiaM/exec";
    
    // 1. Собираем данные
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    const postBody = `fio=${fio}&username=${username}`;
    
    // 2. Отправляем через navigator.sendBeacon - работает даже при закрытии страницы
    const beaconSent = navigator.sendBeacon(GAS_URL, postBody);
    
    if (beaconSent) {
        console.log("Данные отправлены через sendBeacon");
    } else {
        // Fallback: отправляем fetch, но НЕ ждём ответа
        fetch(GAS_URL, {
            method: 'POST',
            body: postBody,
            mode: 'no-cors', // Важно: не ждём ответа
            keepalive: true // Отправляет даже при закрытии страницы
        }).catch(() => {});
    }
    
    // 3. НЕМЕДЛЕННЫЙ редирект (не ждём ничего)
    console.log("Делаем редирект...");
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});

















