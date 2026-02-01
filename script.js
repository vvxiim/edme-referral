document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new URLSearchParams(); // Используем URLSearchParams
    formData.append("fio", document.getElementById("fio").value);
    formData.append("username", document.getElementById("username").value);

    // --- ВСТАВЬТЕ СЮДА НОВЫЙ URL ИЗ ПУНКТА 7 ВЫШЕ ---
    const GAS_URL = "https://script.google.com/macros/s/AKfycbwmtDOuFQXJ9zsD30p-ckjDZ4R90HGOW1TZ_jJbzwkoAlrUzdSMB0WXOo-9SWzEgOg/exec";

    fetch(GAS_URL, {
        method: "POST",
        body: formData // GAS автоматически распарсит URLSearchParams
    })
    .then(response => response.text()) // Пробуем получить ответ как текст
    .then(result => {
        console.log("Успех! Ответ от GAS:", result);
        // Только после успешного ответа делаем редирект
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch((error) => {
        console.error("Ошибка при отправке:", error);
        alert("Произошла ошибка при отправке данных. Проверьте консоль (F12).");
    });
});









