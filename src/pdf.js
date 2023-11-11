document.addEventListener("DOMContentLoaded", function () {
    var link = document.querySelector('.em2');

    if (link) {
        link.addEventListener('click', function () {
            openM();
        });
    } else {
        console.error("Element with class 'em2' not found");
    }
});

function openM() {
    const email = "entradoxrobotics@gmail.com";
    const subject = "Sponsorship Inquiry";
    const body = "Dear Team Entradox,";
  
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoUrl;
}

