document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbwaIJeF2gLeN_ElY2oDpk796EE6SkvBwHdKDZNiPf2TDtvqdHUo4pSEoyapcmbkQOg/exec";

    // Отправляем данные как form-urlencoded
    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(result => {
        console.log("Данные успешно отправлены:", result);
        // Перенаправление только после успешной отправки
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(error => {
        console.error("Ошибка отправки:", error);
        alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
    });
});

