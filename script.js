document.getElementById("refForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fio = document.getElementById("fio").value;
    const username = document.getElementById("username").value;

    const formData = new URLSearchParams();
    formData.append("fio", fio);
    formData.append("username", username);

    fetch("https://script.google.com/macros/s/AKfycbzv2ZQUIsuanOIdR5O-iUjm0iknaKBpxM8IkZVuZD5d49w9x7VwjE9QSVAebzZQ1ts/exec", {
        method: "POST",
        body: formData
    })
    .then(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(err => {
        console.error("Ошибка отправки:", err);
        alert("Ошибка отправки данных");
    });
});






