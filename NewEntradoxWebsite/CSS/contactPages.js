/* VARIABLES */
/* ITEMS */
const rankingButton = document.querySelector('.rankingItem');
const tutorialButton = document.querySelector('.tutorialItem');
const mailButton = document.querySelector('.mailItem');
const schoolButton = document.querySelector('.schoolItem');
const instagramButton = document.querySelector('.instagramItem');
const podcastButton = document.querySelector('.podcastItem');
const learnMoreSponsor = document.querySelector('.LearnMoreSponsorButton');
var pageT = 'social'
/* MAIN */
rankingButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        window.open("https://ftcscout.org/teams/14316", "_blank");

    }
})

learnMoreSponsor.addEventListener("click", function() {
    if (checkPageType() == 'Sponsor') {
        window.open('pdf/pdf.html', "_blank");

    }
})

tutorialButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        window.open("_blank");

    }
})

mailButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        openEmail();
    }

})

schoolButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        window.open("https://www.meadowridge.bc.ca/", "_blank");

    }
})

instagramButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        window.open("https://www.instagram.com/entradox/", "_blank");


    }
})

podcastButton.addEventListener("click", function() {
    if (checkPageType() == 'social') {
        window.open("https://open.spotify.com/show/3HeGGq8z0BoYhlDHMtkI3N", "_blank");


    }
})


function openEmail() {
    const email = "entradoxrobotics@gmail.com";
    const subject = "Your subject";
    const body = "Your message";
  
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoUrl;
}
  