document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // ВСТАВЬТЕ СЮДА НОВЫЙ URL ИЗ GAS (с /exec)
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw0-I_-na_LbkkmXMUJTJI7zzW4OS0ch9fSAy2leAOoc_vYsUvUOc14bhMZXqgQb8c/exec";
    
    // Кодируем данные для URL
    const fio = encodeURIComponent(document.getElementById("fio").value);
    const username = encodeURIComponent(document.getElementById("username").value);
    
    // 1. Отправка данных через создание скрытого изображения
    const trackingPixel = new Image(1, 1);
    trackingPixel.src = `${GAS_URL}?fio=${fio}&username=${username}&_=${Date.now()}`;
    
    // 2. Сразу делаем редирект пользователя (не ждём ничего)
    console.log("Данные отправлены, редирект...");
    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});



















