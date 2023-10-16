var currentPageOutside;
document.addEventListener("DOMContentLoaded", function() {

    //VARIABLES//
    let open_or_not = false;

    const background = document.querySelector('.cover');
    const menuholder = document.querySelector('.menu');

    const menuButtonTop = document.querySelector('.MenuButtonContainer');
    const loadPageButtonText = document.querySelector('.trt2');

    const blackScreen = document.getElementById('bscreen');

    let currentPage = 'Home';

    let menuIsOpen = false;
    let currentScale = 1;

    //INITIAL STATE//

    background.classList.add("closed_background_menu");
    menuholder.classList.add("unexpand_menu");

    //BLACK SCREEN REMOVAL

    function removeBlackScreen() {
        if (blackScreen) {
            blackScreen.remove();
        }
    }

    setTimeout(removeBlackScreen, 2000);



    //CALL ON FUNCTIONS//

    menuButtonTop.addEventListener("mouseover", function(){
    })
    menuButtonTop.addEventListener("mouseout", function(){
    })

    menuButtonTop.addEventListener("click", function() {
        if (open_or_not == false) {
            openMenu();
            menuIsOpen = true;
            open_or_not = true;
        }
        else if (open_or_not == true) {
            closeMenu();
            menuIsOpen = false;
            open_or_not = false;
        }
    });

    //MAIN FUNCTION//

    function openMenu() {
        if (background.classList.contains("closed_background_menu") && menuholder.classList.contains("unexpand_menu")) {
            background.classList.remove("closed_background_menu");
            menuholder.classList.remove("unexpand_menu");
            animateMenuX();
            void background.offsetWidth;
            void menuholder.offsetWidth;
        }       
        background.classList.add("opened_background_menu");
        menuholder.classList.add("expand_menu");
        document.getElementById("menupage").style.zIndex = 2147483646;
    }

    loadPageButtonText.addEventListener('mouseover', function(){
        currentScale += 0.05;
        loadPageButtonText.style.transform = `scale(${currentScale})`;
    })
    loadPageButtonText.addEventListener('mouseout', function(){
        currentScale -= 0.05;
        loadPageButtonText.style.transform = `scale(${currentScale})`;
    })

    loadPageButtonText.addEventListener('click', function() {
        const newPageURL = 'main.html';
        window.location.href = newPageURL;
    });

    //MENU PAGE CHNAGER

    //VARIABLES//

    const aboutUs = document.querySelector('.AboutUs');
    const staff = document.querySelector('.Staff');
    const Robots = document.querySelector('.Robots');
    const Sponsor = document.querySelector('.Sponsor');
    const Social = document.querySelector('.Social');



    //FUNCTIONS TO OPEN NEW PAGES

    aboutUs.addEventListener("click", function() {
        if (open_or_not === true) {
            clearPage(currentPage);
            currentPage = 'AboutUs';
            currentPageOutside = currentPage
            loadPage('AboutUs');
        }
    });   
    staff.addEventListener("click", function() {
        if (open_or_not === true) {
            clearPage(currentPage);
            currentPage = 'Staff';
            currentPageOutside = currentPage
    
            loadPage('Staff');
        }

    });  
    Robots.addEventListener("click", function() {
        if (open_or_not === true) {
            clearPage(currentPage);
            currentPage = 'Robots';
            currentPageOutside = currentPage
    
            loadPage('Robots');
        }
    });  
   
    Sponsor.addEventListener("click", function() {
        if (open_or_not === true) {
            clearPage(currentPage);
            currentPage = 'Sponsor';
            currentPageOutside = currentPage
    
            loadPage('Sponsor');
        }
    }); 
    
    Social.addEventListener("click", function() {
        if (open_or_not === true) {
            clearPage(currentPage);
            currentPage = 'social';
            currentPageOutside = currentPage
    
            loadPage('social');
        }
    }); 
    
    //MENU ITEMS HOVER ANIMATION


    aboutUs.addEventListener('mouseover', function() {
        if (open_or_not === true) {
            document.querySelector('.AboutUsHover').classList.add('hoverMenu');
        }
    });

    aboutUs.addEventListener('mouseout', function() {

        void document.querySelector('.AboutUsHover').offsetWidth;
        document.querySelector('.AboutUsHover').classList.remove('hoverMenu');

    });

    
    staff.addEventListener('mouseover', function() {
        if (open_or_not === true) {
        

        document.querySelector('.StaffHover').classList.add('hoverMenu');
        }
    });

    staff.addEventListener('mouseout', function() {
        
        void document.querySelector('.StaffHover').offsetWidth;
        document.querySelector('.StaffHover').classList.remove('hoverMenu');

    });

    Robots.addEventListener('mouseover', function() {
        if (open_or_not === true) {
        

        document.querySelector('.RobotsHover').classList.add('hoverMenu');
        }
    });

    Robots.addEventListener('mouseout', function() {
        
        void document.querySelector('.RobotsHover').offsetWidth;
        document.querySelector('.RobotsHover').classList.remove('hoverMenu');

    });
    
    Sponsor.addEventListener('mouseover', function() {
        if (open_or_not === true) {
        

        document.querySelector('.SponsorHover').classList.add('hoverMenu');
        }
    });

    Sponsor.addEventListener('mouseout', function() {
        
        void document.querySelector('.SponsorHover').offsetWidth;
        document.querySelector('.SponsorHover').classList.remove('hoverMenu');

    });

    Social.addEventListener('mouseover', function() {
        if (open_or_not === true) {
        

        document.querySelector('.SocialHover').classList.add('hoverMenu');
        }
    });

    Social.addEventListener('mouseout', function() {
        
        void document.querySelector('.SocialHover').offsetWidth;
        document.querySelector('.SocialHover').classList.remove('hoverMenu');

    });



});


// HOME PAGE //

const homeContainer = document.querySelector('.homeMenuContainerClass');


homeContainer.addEventListener('mouseover', function() {
    document.querySelector('.homeMenuContainerHover').classList.add('hoverMenu');
});

homeContainer.addEventListener('mouseout', function() {
    homeContainer.style.cursor = 'none';
    void document.querySelector('.homeMenuContainerHover').offsetWidth;
    document.querySelector('.homeMenuContainerHover').classList.remove('hoverMenu');

homeContainer.addEventListener('click', function() {
    const newPageURL = 'main.html';
    
    window.location.href = newPageURL;
    
});


});

//CHECK PAGE BEFORE CALLING INTERACTIONS

function checkPageType() {
    return currentPageOutside;
}
