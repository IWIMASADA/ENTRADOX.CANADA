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

function slideIn() {
    menuGUI.style = 'width: 40%'
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

var menuItemContainers = document.querySelectorAll('.menuItemContainer');

var menuItemContainers = document.querySelectorAll('.menuItemContainer');

menuItemContainers.forEach(function(menuItemContainer) {
    var menuItemType = '';

    if (menuItemContainer.querySelector('.AboutUs')) {
      menuItemType = 'AboutUs';
    } else if (menuItemContainer.querySelector('.Staff')) {
      menuItemType = 'Staff';
    } else if (menuItemContainer.querySelector('.Sponsor')) {
      menuItemType = 'Sponsor';
    } else if (menuItemContainer.querySelector('.Social')) {
      menuItemType = 'Social';
    } else if (menuItemContainer.querySelector('.Robots')) {
      menuItemType = 'Robots';
    } else if (menuItemContainer.querySelector('.homeMenuContainerClass')) {
      menuItemType = 'homeMenuContainerClass';
    }

  menuItemContainer.addEventListener('mouseenter', function() {
    menuItemContainer.querySelector('.' + menuItemType).classList.add('highlightTextMenu');
  });

  menuItemContainer.addEventListener('mouseleave', function() {
    menuItemContainer.querySelector('.' + menuItemType).classList.remove('highlightTextMenu');

  });
});
