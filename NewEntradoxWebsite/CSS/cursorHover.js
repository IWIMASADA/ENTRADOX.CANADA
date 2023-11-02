document.addEventListener("DOMContentLoaded", function() {

    var smth = {
        element1: document.querySelector('.MenuButtonContainer'),
        element3: document.querySelector('.LearnMoreSponsorButton'),
        element4: document.querySelector('.OurSponsorsButton'),
        element5: document.querySelector('.rankingContainer'),
        element6: document.querySelector('.tutorialContainer'),
        element7: document.querySelector('.mailContainer'),
        element8: document.querySelector('.schoolContainer'),
        element9: document.querySelector('.instagramContainer'),

        element10: document.querySelector('.AboutUs'),
        element11: document.querySelector('.AboutUs'),
        element12: document.querySelector('.LearnMoreSponsorButton'),
        element13: document.querySelector('.Sponsor'),
        element14: document.querySelector('.Social'),
        element15: document.querySelector('.tutorialContainer'),
        element16: document.querySelector('.Staff'),
        element17: document.querySelector('.Robots'),
        element18: document.querySelector('.homeMenuContainerClass'),
        element19: document.querySelector('.trTitle'),
        element20: document.querySelector('.StaffDescriptionExitButton'),
        element21: document.querySelector('.displayNames'),
        element22: document.querySelector('.staffPageStaffContentXButton'),
        element23: document.getElementById('Tier1SponsorIcon'),
        element24: document.getElementById('Tier2SponsorIcon'),
        element25: document.getElementById('Tier3SponsorIcon'),
        element26: document.getElementById('Tier4SponsorIcon')

      };
      const circle = document.querySelector(".cursor")

      Object.values(smth).forEach(function (element) {
        if (element) {
            // Add mouseenter event listener
            element.addEventListener('mouseover', function () {
                // Do something when mouse enters
                circle.style.transform = "translate(-50%, -50%) scale(0.5)";
                circle.style.backgroundColor = "rgba(221, 221, 221, 0.233)";
            });
    
            // Add mouseout event listener
            element.addEventListener('mouseleave', function () {
                // Do something when mouse leaves
                circle.style.transform = "translate(-50%,-50%) scale(1)";
                circle.style.backgroundColor = "transparent";
            });
        }
    });


    var sp = document.querySelectorAll('.pricingComponentRelative');

    sp.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            circle.style.transform = "translate(-50%, -50%) scale(0.5)";
            circle.style.backgroundColor = "rgba(221, 221, 221, 0.233)";
        });
    
        element.addEventListener('mouseleave', function () {
            circle.style.transform = "translate(-50%, -50%) scale(1)";
            circle.style.backgroundColor = "transparent";
        });
    });

    var staffSelector = document.querySelectorAll('[data-custom2="StaffMove"]');

    staffSelector.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            circle.style.transform = "translate(-50%, -50%) scale(0.5)";
            circle.style.backgroundColor = "rgba(221, 221, 221, 0.233)";
        });
    
        element.addEventListener('mouseleave', function () {
            circle.style.transform = "translate(-50%, -50%) scale(1)";
            circle.style.backgroundColor = "transparent";
        });
    });
    

    var displayNames = document.querySelectorAll('.displayNames');

    displayNames.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            circle.style.transform = "translate(-50%, -50%) scale(0.5)";
            circle.style.backgroundColor = "rgba(221, 221, 221, 0.233)";
        });
    
        element.addEventListener('mouseleave', function () {
            circle.style.transform = "translate(-50%, -50%) scale(1)";
            circle.style.backgroundColor = "transparent";
        });
    });
      
})
