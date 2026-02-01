document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const GAS_URL = "https://script.google.com/macros/s/AKfycbxdLNZKOYusRT53fGMXWQxhKQ99UzfKO005ywrPHEoz6FYs-TXxmP6SftQvrBlchj0/exec";

    // 1. Собираем данные в объект
    const formData = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    try {
        // 2. Отправляем как JSON с правильным Content-Type
        const response = await fetch(GAS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // 3. Пытаемся прочитать ответ
        const result = await response.json();
        console.log("Ответ от GAS:", result);
        
        // 4. Делаем редирект только если успех
        if (result.result === "success") {
            window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
        } else {
            alert("Ошибка при записи в таблицу: " + result.message);
        }

    } catch (error) {
        console.error("Ошибка сети или CORS:", error);
        alert("Не удалось отправить данные. Проверьте консоль.");
    }
});












