var s1 = document.getElementById('Tier1SponsorIcon');
var s2 = document.getElementById('Tier2SponsorIcon');
var s3 = document.getElementById('Tier3SponsorIcon');
var s4 = document.getElementById('Tier4SponsorIcon');
/* BUTTON CLICK */

let inClick = false

s1.addEventListener('click', function() {
    inClick = true;
    s2.classList.add('sponsorIconFlickerOut')
    s3.classList.add('sponsorIconFlickerOut')
    s4.classList.add('sponsorIconFlickerOut')
    s1.classList.add('sponsorIconFlickerIn')

    setTimeout(function() {
        s2.classList.remove('sponsorIconFlickerOut')
        s3.classList.remove('sponsorIconFlickerOut')
        s4.classList.remove('sponsorIconFlickerOut')
        s1.classList.remove('sponsorIconFlickerIn')
        
        s1.style = 'transform: scale(2) translate(20%, -10%)'
        s2.style.opacity = 0;
        s3.style.opacity = 0;
        s4.style.opacity = 0;
    }, 1000);
})

s1.addEventListener('mouseenter', function() {
    if (inClick == false) {
        s1.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s1.addEventListener('mouseleave', function() {
    if (inClick == false) {
        s1.style = 'filter: brightness(100%)'
        s2.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
    }
})

s2.addEventListener('mouseenter', function() {
    if (inClick == false) {
        s2.style = 'filter: brightness(150%)'

        s1.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s2.addEventListener('mouseleave', function() {
    if (inClick == false) {
        s1.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
        s2.style = 'filter: brightness(100%)'
    }
})

s3.addEventListener('mouseenter', function() {
    if (inClick == false) {
        s3.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s1.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s3.addEventListener('mouseleave', function() {
    if (inClick == false) {
        s2.style = 'filter: brightness(100%)'
        s1.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
    }
})

s4.addEventListener('mouseenter', function() {
    if (inClick == false) {
        s4.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s1.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
    }
})
s4.addEventListener('mouseleave', function() {
    if (inClick == false) {
        s2.style = 'filter: brightness(100%)'
        s1.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
    }
})

