document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    // Отправка в Google Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbwaIJeF2gLeN_ElY2oDpk796EE6SkvBwHdKDZNiPf2TDtvqdHUo4pSEoyapcmbkQOg/exec";

    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(result => {
        console.log("Данные отправлены:", result);
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(error => {
        console.error("Ошибка отправки:", error);
        alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
    });
});
