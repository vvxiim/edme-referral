document.getElementById("refForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        fio: document.getElementById("fio").value,
        username: document.getElementById("username").value
    };

    await fetch("https://script.google.com/macros/s/AKfycbwaIJeF2gLeN_ElY2oDpk796EE6SkvBwHdKDZNiPf2TDtvqdHUo4pSEoyapcmbkQOg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    window.location.href = "https://b24-kn381m.b24site.online/crm_form_iemti/";
});
