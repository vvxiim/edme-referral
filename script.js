document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // ВСТАВЬТЕ СЮДА НОВЫЙ URL ИЗ ШАГА 1
    const GAS_URL = "https://script.google.com/macros/s/AKfycbwiVq2RttnQ1L87Ke_3O8jHP0OMyiHyoHqK9sMhAi3nB2yBuVY27EVvNB9f72YwJHg/exec";
    
    // 1. Собираем данные
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    const subject = encodeURIComponent(document.getElementById("subject").value);
    
    // 2. ОТПРАВЛЯЕМ ДАННЫЕ через GET-запрос в URL (самый простой способ)
    const trackingImg = new Image(); // Создаем "невидимую" картинку
    trackingImg.src = GAS_URL + "?fio=" + fio + "&username=" + username + "&subject=" + subject + "&t=" + Date.now();
    
    // 3. СРАЗУ делаем редирект пользователя (не ждем ответа от GAS)
    console.log("Запрос отправлен. Редирект на Битрикс...");
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});




















