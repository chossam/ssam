document.addEventListener("DOMContentLoaded", function() {
    // Example: Highlight the section when clicked from nav
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            navLinks.forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
        });
    });

    // 방명록 남기기 기능
    const guestbookForm = document.getElementById("guestbookForm");
    const entriesList = document.getElementById("entriesList");

    guestbookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name && message) {
            const newEntry = document.createElement("li");
            newEntry.innerHTML = `<strong>${name}</strong>: ${message}`;
            entriesList.appendChild(newEntry);

            // 폼 초기화
            guestbookForm.reset();
        }
    });
});
