document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    // Собираем данные
    const formData = new URLSearchParams();
    formData.append("fio", document.getElementById("fio").value);
    formData.append("username", document.getElementById("username").value);

    // --- ВАШ НОВЫЙ URL РАЗВЕРТЫВАНИЯ ---
    const GAS_URL = "https://script.google.com/macros/s/AKfycbz7dciYRkyxF8FD0zqXDIT4sTLXcfL2v6AsCZjHVThMtonoC-MTXWI_GllF7BVyUfI/exec";

    // Отправляем запрос в режиме 'no-cors'
    // Критически важно: не используйте здесь .then() или await для response!
    fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors", // <-- КЛЮЧЕВОЙ ПАРАМЕТР
        body: formData
    });

    // Немедленно делаем редирект пользователя, не дожидаясь ответа
    console.log("Данные отправлены, выполняется редирект...");
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});











