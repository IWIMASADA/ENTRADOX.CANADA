var s1 = document.getElementById('Tier1SponsorIcon');
var s2 = document.getElementById('Tier2SponsorIcon');
var s3 = document.getElementById('Tier3SponsorIcon');
var s4 = document.getElementById('Tier4SponsorIcon');

var exit = document.querySelector('.sponsorTierExitButton');
/* BUTTON CLICK */

var s1O = s1.style.transform;
var s2O = s2.style.transform;
var s3O = s3.style.transform;
var s4O = s4.style.transform;

var tier1TextContent = '<b>Tier 1</b> Sponsorship Package <br><br> Pricing > $50/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br><br> Click <i>Learn More</i> at the top to sponsor us!'
var tier2TextContent = '<b>Tier 2</b> Sponsorship Package <br><br> Pricing > $100/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br><br> Click <i>Learn More</i> at the top to sponsor us!'
var tier3TextContent = '<b>Tier 3</b> Sponsorship Package <br><br> Pricing > $250/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br> > Logo and Description on competition banners & posters <br><br><br> Click <i>Learn More</i> at the top to sponsor us!'
var tier4TextContent = '<b>Tier 4</b> Sponsorship Package <br><br> Pricing > $500/Year <br><br> <b>Benefits</b> <br><br> > Social Media posts dedicated to sponsor <br><br> > Certificate of appreciation from us which you can display for your business <br><br> > Social media posts dedicated to sponsor <br><br> > "Brought to you by" name recognition on workshops <br><br> > Logo and Description on competition banners & posters <br><br> > "Brought to you by" name recognition in our logo and advertisements <br><br> > "Brought to you by" recognition on our website <br><br><br> Click <i>Learn More</i> at the top to sponsor us!'

let inClick = false

exit.addEventListener('click', function() {
    SponsorTiersTextContent.style.opacity = 0;
    inClick = false;
    s1.style.display = 'unset';
    s2.style.display = 'unset';
    s3.style.display = 'unset';
    s4.style.display = 'unset';

    s1.style = s1O;
    s2.style = s2O;
    s3.style = s3O;
    s4.style = s4O;

    s1.style.opacity = 1;
    s2.style.opacity = 1;
    s3.style.opacity = 1;
    s4.style.opacity = 1;
})

s1.addEventListener('click', function() {
    inClick = true;
    changeInnerHTML(tier1TextContent)
    s1.classList.add('sponsorIconFlickerIn')
    s2.style.opacity = 0;
    s3.style.opacity = 0;
    s4.style.opacity = 0;

    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';


    setTimeout(function() {
        s1.classList.remove('sponsorIconFlickerIn')
        s1.style = 'transform: scale(2.2) translate(0%, -15%)'
        s1.style.position = 'absolute';
    }, 1000);
})

s2.addEventListener('click', function() {
    inClick = true;
    changeInnerHTML(tier2TextContent)
    s2.classList.add('sponsorIconFlickerIn')
    s1.style.opacity = 0;
    s3.style.opacity = 0;
    s4.style.opacity = 0;

    s1.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';

    setTimeout(function() {
        s2.classList.remove('sponsorIconFlickerIn')
        s2.style = 'transform: scale(2.2) translate(0%, -15%)'
        s2.style.position = 'absolute';
    }, 1000);
})

s3.addEventListener('click', function() {
    inClick = true;
    changeInnerHTML(tier3TextContent)
    s3.classList.add('sponsorIconFlickerIn')
    s1.style.opacity = 0;
    s2.style.opacity = 0;
    s4.style.opacity = 0;

    s2.style.display = 'none';
    s1.style.display = 'none';
    s4.style.display = 'none';

    setTimeout(function() {
        s3.classList.remove('sponsorIconFlickerIn')
        s3.style = 'transform: scale(2.2) translate(0%, -15%)'
        s3.style.position = 'absolute';
    }, 1000);
})

s4.addEventListener('click', function() {
    inClick = true;
    changeInnerHTML(tier4TextContent)
    s4.classList.add('sponsorIconFlickerIn')
    s1.style.opacity = 0;
    s2.style.opacity = 0;
    s3.style.opacity = 0;

    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'none';

    setTimeout(function() {
        s4.classList.remove('sponsorIconFlickerIn')
        s4.style = 'transform: scale(2.2) translate(0%, -15%)'
        s4.style.position = 'absolute';

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


/* TEXTS */

const SponsorTiersTextContent = document.querySelector('.SponsorTiersTextContent');

function changeInnerHTML(tierNumber) {
    SponsorTiersTextContent.style.opacity = 1;
    SponsorTiersTextContent.querySelector("p").innerHTML = tierNumber;
}