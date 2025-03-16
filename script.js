document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "contact.html";
});

document.getElementById("exploreBtn").addEventListener("click", function() {
    alert("سيتم توجيهك إلى المتاجر قريبًا!");
});

document.getElementById("searchBtn").addEventListener("click", function() {
    let query = document.getElementById("searchBox").value;
    if(query) {
        alert("جاري البحث عن: " + query);
    } else {
        alert("يرجى إدخال كلمة بحث!");
    }
});