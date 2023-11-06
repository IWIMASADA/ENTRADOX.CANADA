const rankingButton = document.querySelector('.rankingItem');
const tutorialButton = document.querySelector('.tutorialItem');
const mailButton = document.querySelector('.mailItem');
const schoolButton = document.querySelector('.schoolItem');
const instagramButton = document.querySelector('.instagramItem');
const podcastButton = document.querySelector('.podcastItem');
var pageT = 'social'
rankingButton.addEventListener("click", function() {
        let pop = window.open("https://ftcscout.org/teams/14316", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
tutorialButton.addEventListener("click", function() {
        window.open("_blank");
})
mailButton.addEventListener("click", function() {
        openEmail();
})
schoolButton.addEventListener("click", function() {
        let pop = window.open("https://www.meadowridge.bc.ca/", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
instagramButton.addEventListener("click", function() {
        let pop = window.open("https://www.instagram.com/entradox/", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
podcastButton.addEventListener("click", function() {
        let pop = window.open("https://open.spotify.com/show/3HeGGq8z0BoYhlDHMtkI3N", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
function openEmail() {
    const email = "entradoxrobotics@gmail.com";
    const subject = "Your subject";
    const body = "Your message";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}