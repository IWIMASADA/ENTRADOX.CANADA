const instagramIMG = document.getElementById('mobileSIMG-Insta');
const emailIMG = document.getElementById('mobileSIMG-Email');
const instagramTab = document.getElementById('mobileSocialsHeaderText-Instagram');
const emailTab = document.getElementById('mobileSocialsHeaderText-Email');
const imgTag = document.querySelector('.tagOnImage-Mobile');
var swchInfo = 1;
instagramTab.addEventListener('click', function() {
    if (isMobile()) {
        updnImages()
        swchInfo = 1;
        instagramTab.style = 'color: white'
        emailTab.style = 'color: rgb(165, 165, 165)'
        emailIMG.style.opacity = 0;
        instagramIMG.style.opacity = 1;
        imgTag.textContent = '+ SEE MORE'
    }
})
emailTab.addEventListener('click', function() {
    if (isMobile()) {
        updnImages()
        swchInfo = 2;
        emailTab.style = 'color: white'
        instagramTab.style = 'color: rgb(165, 165, 165)'
        emailIMG.style.opacity = 1;
        instagramIMG.style.opacity = 0;
        imgTag.textContent = '+ EMAIL US'
    }
})
function updnImages() {
    emailIMG.style.transform = 'translateX(-5%)'
    instagramIMG.style.transform = 'translateX(-5%)'
    imgTag.style.transform = 'translateX(-5%)'
    setTimeout(function() {
        imgTag.style.transform = 'translateX(0%)'
        emailIMG.style.transform = 'translateX(0%)'
        instagramIMG.style.transform = 'translateX(0%)'
    }, 200) 
}
imgTag.addEventListener('click', function() {
    if (isMobile() && swchInfo === 1) {
        var instagramUrl = "https://www.instagram.com/entradox/";
        var newWindow = window.open(instagramUrl, '_blank');
        if (newWindow) {
            newWindow.focus();
        } else {
            alert("Popup is blocked. Please enable popups to view Instagram.");
        }
    }
    if (isMobile() && swchInfo === 2) {
        clrMbCnt()
    }
})
function clrMbCnt() {
    instagramIMG.style.opacity = 0;
    emailIMG.style.opacity = 0;
    instagramTab.style.opacity = 0;
    emailTab.style.opacity = 0;
    imgTag.style.opacity = 0;
    document.querySelector('.mbOurEmail').style.opacity = 1;
    setTimeout(function(){
        swchInfo = 1;
        unclrMbCnt() 
    },4000)
}
function unclrMbCnt() {
    instagramIMG.style.opacity = 1;
    instagramTab.style.opacity = 1;
    emailTab.style.opacity = 1;
    imgTag.style.opacity = 1;
    imgTag.textContent = '+ SEE MORE'
    instagramTab.style = 'color: white'
    emailTab.style = 'color: rgb(165, 165, 165)'
    document.querySelector('.mbOurEmail').style.opacity = 0;
}