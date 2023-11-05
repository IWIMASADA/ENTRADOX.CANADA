var menuButton = document.querySelector('.MenuButtonContainer')
let inMenu = false;
var menuGUI = document.getElementById('menupage')

menuButton.addEventListener('click', function() {
    if (inMenu == false) {
        animateMenuX()
        inMenu = true;
        slideIn()

    } else {
        animateMenuXBack()
        inMenu = false;
        slideOut()
    }
})

function checkInMenu() {
    if (inMenu === true) {
        return true;
    }
    return false;
}

function makeInMenuFalse() {
    inMenu = false;
}

function slideIn() {
    menuGUI.style = 'width: 100%'
    menuGUI.classList.add('fadeInTheMenu')
    setTimeout(function() {
        menuGUI.classList.remove('fadeInTheMenu')
        menuGUI.style.opacity = 1;
    }, 400);
}

function slideOut() {
    menuGUI.style = 'width: 0%'
    menuGUI.classList.add('fadeOutTheMenu')
    setTimeout(function() {
        menuGUI.classList.remove('fadeOutTheMenu')
        menuGUI.style.opacity = 0;
    }, 400);
}
