document.getElementById("refForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fio", document.getElementById("fio").value);
    formData.append("username", document.getElementById("username").value);

    fetch("https://script.google.com/macros/s/AKfycbyUjdBP4ufjpYJ4mKQsX3KQIfJbvKktvBst2yxN1Hml9jo3su_nwc6Lkb97npqVQDk/exec", {
        method: "POST",
        body: formData
    })
    .then(() => {
        window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
    })
    .catch(() => {
        alert("Ошибка отправки данных");
    });
});







