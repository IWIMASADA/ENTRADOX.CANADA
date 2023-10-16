var a = 0;

document.getElementById('MenuButtonContainer').addEventListener('click', function(){
    if (a == 0) {
        animateMenuX();
        a = 1;
    }
    else {
        animateMenuXBack();
        a = 0;

    }
})
