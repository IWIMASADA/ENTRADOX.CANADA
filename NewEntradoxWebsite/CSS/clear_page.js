//VARIABLES
let background;
let menuholder;
let headerElement;
document.addEventListener("DOMContentLoaded", function() {
    const background2 = document.querySelector('.cover');
    const menuholder2 = document.querySelector('.menu');

    background = background2
    menuholder = menuholder2

    const headerElement2 = document.querySelector("header");

    headerElement = headerElement2;
});

//CLEAR PAGE
function clearPage(pageType) {
    document.querySelector(".trt2").style.top = "0%"
    document.querySelector(".sponsorComponentsContainer").style.top = '200%'
    document.querySelector(".sponsorComponentsContainer").classList.remove("floatingSponsorItemsA")

    var elements = document.querySelectorAll('[data-custom="' + pageType + '"]');

    if (pageType == "Outreach") {
      outreachContainerOff();
    }
    if (pageType == "social") {
      socialDown();
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = '0';
    }
  }


//LOAD PAGE
  

function loadPage(pageToLoad) {
    var elements = document.querySelectorAll('[data-custom="' + pageToLoad + '"]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = '1';
    }
    closeMenu();
    specialPages(pageToLoad);

}

//CLOSE MENU

function closeMenu() {
    background.classList.remove("opened_background_menu");
    menuholder.classList.remove("expand_menu");
    animateMenuXBack();
    void background.offsetWidth;
    void menuholder.offsetWidth;

    background.classList.add("closed_background_menu");
    menuholder.classList.add("unexpand_menu");

    document.getElementById("menupage").style.zIndex = 21474836;
}


//SPECIAL PAGE TYPES
function specialPages(pageToLoad) {
  if (pageToLoad == 'Sponsor') {
    document.querySelector(".trt2").style.top = "-110%"
    document.querySelector(".sponsorComponentsContainer").style.top = '7%'
    document.querySelector(".sponsorComponentsContainer").classList.add("floatingSponsorItemsA")
  
  }
  if (pageToLoad == 'Outreach') {
    outreachContainerOn();
    document.querySelector(".outreachBlurredBG").classList.add("flutterS");
    document.querySelector(".OutreachHalfTone2").classList.add("shake");
    document.querySelector(".OutreachHalfTone").classList.add("shake2");
    document.querySelector(".TitleContainer").classList.add("shakeSmall2");
    document.querySelector(".TextContainerOutreach").classList.add("shakeSmall");
    if (document.querySelector(".trt").classList.contains("blackTitle")) {
      document.querySelector(".trt").classList.remove("blackTitle");
      document.querySelector(".trt").classList.add("whiteTitle");
    }
  }
  if (pageToLoad == 'social') {
    socialUp();
    

  }
  if (pageToLoad == 'Staff') {
    if (window.innerWidth <= 700) {
      staffUpForMobile();
    }
  }
}
function outreachContainerOn() {
  document.querySelector(".TextContainerOutreach").style.backgroundColor  = "rgba(0, 0, 0, 0.479)";
  document.querySelector(".TitleContainer").style.backgroundColor  = "rgba(255, 255, 255, 0.735)";
}
function outreachContainerOff() {
  document.querySelector(".TextContainerOutreach").style.backgroundColor  = "transparent";
  document.querySelector(".TitleContainer").style.backgroundColor  = "transparent";
}

var rankingContainer = document.querySelector('.rankingContainer');
var tutorialContainer = document.querySelector('.tutorialContainer');
var mailContainer = document.querySelector('.mailContainer');
var schoolContainer = document.querySelector('.schoolContainer');
var instagramContainer = document.querySelector('.instagramContainer');
var podcastContainer = document.querySelector('.podcastContainer');
var StaffPictureBody = document.querySelector('.StaffPictureBody');
var mobileNextButton = document.querySelector('.mobileNextButton');
var mobileNextButton2 = document.querySelector('.mobileNextButton2');

function socialUp() {
    rankingContainer.style.top = '10%';
    tutorialContainer.style.top = '10%';
    mailContainer.style.top = '25%';
    schoolContainer.style.top = '55%';
    instagramContainer.style.top = '70%';
    podcastContainer.style.top = '60%';

    // Example usage
    if (isMobileDevice()) {
      mobileNextButton.style.top = '80%';
      console.log("User is on a mobile device");
    } else {
      mobileNextButton.style.top = '200%';

      console.log("User is on a desktop or tablet");
    }

    

    


}
function socialDown() {
  rankingContainer.style.top = '150%';
  tutorialContainer.style.top = '150%';
  mailContainer.style.top = '150%';
  schoolContainer.style.top = '150%';
  instagramContainer.style.top = '150%';
  podcastContainer.style.top = '150%';

  if (isMobileDevice()) {
    mobileNextButton.style.top = '200%';
    console.log("User is on a mobile device");
  } else {
    mobileNextButton.style.top = '200%';

    console.log("User is on a desktop or tablet");
  }





}

function staffUpForMobile() {

    StaffPictureBody.style.top = ('30%');
    mobileNextButton2.style.top = ('12%');

  
}


function isMobileDevice() {
  return window.innerWidth <= 700; // Adjust the threshold as needed
}
