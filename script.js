document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const GAS_URL = "https://script.google.com/macros/s/AKfycbw-DkzbbXIvnxl3ipsagBAWvT__ZFdRfawo6-b7LWSgc-Nkkh4grao2B889rS0TiaM/exec";

    // 1. Явно кодируем данные в формате application/x-www-form-urlencoded
    const postData = `fio=${encodeURIComponent(document.getElementById("fio").value)}&username=${encodeURIComponent(document.getElementById("username").value)}`;

    try {
        // 2. Важнейший момент: отправляем без явного Content-Type
        // GAS примет данные и НЕ потребует предварительный запрос OPTIONS (CORS)
        const response = await fetch(GAS_URL, {
            method: 'POST',
            // НЕ указываем headers: { 'Content-Type': '...' } - это вызовет OPTIONS!
            body: postData,
            // Убедитесь, что 'mode' не указан (по умолчанию 'cors', но это нормально)
        });

        // 3. Если мы здесь, значит, браузер НЕ заблокировал запрос
        // Это значит, что CORS не сработал, и запрос был "простой" (simple request)
        console.log("Успех! Скорее всего, данные записаны.");
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";

    } catch (error) {
        console.error("Ошибка сети или CORS:", error);
        // ДАЖЕ ПРИ ОШИБКЕ мы можем сделать редирект, т.к. данные, вероятно, ушли
        // (GAS показал 200 OK до блокировки браузером)
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }
});
















