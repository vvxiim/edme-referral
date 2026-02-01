document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const gasUrl = "https://script.google.com/macros/s/AKfycbxnKA6v9Ayt2IK95EAFZGq6_fkWTGg3IsMm4r9njOckFcUMU3j92WZK3UoVk63lr5U/exec";
    
    const data = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    try {
        const response = await fetch(gasUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        
        // Всегда делаем редирект
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
        
    } catch (error) {
        // Все равно редиректим
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    }
});








