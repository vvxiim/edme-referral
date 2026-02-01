document.getElementById("refForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzv2ZQUIsuanOIdR5O-iUjm0iknaKBpxM8IkZVuZD5d49w9x7VwjE9QSVAebzZQ1ts/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data)
    })
    .then(res => res.text())
    .then(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(err => {
        console.error(err);
        alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
    });
});





