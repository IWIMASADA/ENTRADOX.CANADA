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

var tier1TextContentMobile = '<b>Tier 1</b> Sponsorship <br> > $50/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us'
var tier2TextContentMobile = '<b>Tier 2</b> Sponsorship <br> > $100/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials'
var tier3TextContentMobile = '<b>Tier 3</b> Sponsorship <br> > $250/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials <br>> Logo/Description on competition banners & posters'
var tier4TextContentMobile = '<b>Tier 4</b> Sponsorship <br> > $500/Year <i>Email us</i> to learn more <br> <b>Benefits</b> <br>> Social Media posts dedicated to sponsor <br>> Certificate of appreciation from us <br>> Social media posts dedicated to sponsor <br>> "Brought to you by" recognition on workshops/tutorials <br>> Logo/Description on competition banners & posters <br>> "Brought to you by" recognition in our logo and advertisements <br>> "Brought to you by" recognition on our website'

let inClick = false
var counterForMobile = 2;
let inReverse = false;
const sponsorInformationContainerMainDisplay = document.getElementById('sponsorInformationContainerMainDisplayID');
const mobileButtonNextSponsor = document.querySelector('.mobileButtonNextSponsor');
changeForMobile();
function changeForMobile() {
    if (isMobile()) {
        sponsorInformationContainerMainDisplay.style.transform = 'translateX(-20%)'
        return
    }
}
mobileButtonNextSponsor.addEventListener('click', function() {
    if (!isMobile()) {
        return
    }

    //positions: transform: translateX(-20%), transform: translateX(-217%)
    //,transform: translateX(-420%), transform: translateX(-618%)
    if (isMobile()) {
        if (counterForMobile === 1 && !inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-20%)'
            counterForMobile++;
            changeMobileText(tier1TextContentMobile)
            return
        }
        if (counterForMobile === 2 && !inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-217%)'
            counterForMobile++;
            changeMobileText(tier2TextContentMobile)
            return

        }
        if (counterForMobile === 3 && !inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-420%)'
            changeMobileText(tier3TextContentMobile)
            counterForMobile++;
            return

        }
        if (counterForMobile === 4 && !inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-618%)'
            counterForMobile--;
            inReverse = true;
            changeMobileText(tier4TextContentMobile)
            return
        }




        if (counterForMobile === 1 && inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-20%)'
            counterForMobile++;
            changeMobileText(tier1TextContentMobile)
            inReverse = false;
            return
        }
        if (counterForMobile === 2 && inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-217%)'
            changeMobileText(tier2TextContentMobile)
            counterForMobile--;
            return

        }
        if (counterForMobile === 3 && inReverse) {
            sponsorInformationContainerMainDisplay.style.transform = 'translateX(-420%)'
            changeMobileText(tier3TextContentMobile)
            counterForMobile--;
            return

        }
    }



})
exit.addEventListener('click', function() {
    if (isMobile()) {
        return
    }
    SponsorTiersTextContent.style.opacity = 0;
    exit.style.opacity = 0;

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
    if (isMobile()) {
        return
    }
    inClick = true;
    exit.style.opacity = 1;

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
    if (isMobile()) {
        return
    }
    inClick = true;
    exit.style.opacity = 1;

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
    if (isMobile()) {
        return
    }
    exit.style.opacity = 1;
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
    if (isMobile()) {
        return
    }
    exit.style.opacity = 1;
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
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s1.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s1.addEventListener('mouseleave', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s1.style = 'filter: brightness(100%)'
        s2.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
    }
})

s2.addEventListener('mouseenter', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s2.style = 'filter: brightness(150%)'

        s1.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s2.addEventListener('mouseleave', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s1.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
        s2.style = 'filter: brightness(100%)'
    }
})

s3.addEventListener('mouseenter', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s3.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s1.style = 'filter: brightness(50%)'
        s4.style = 'filter: brightness(50%)'
    }
})
s3.addEventListener('mouseleave', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s2.style = 'filter: brightness(100%)'
        s1.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
    }
})

s4.addEventListener('mouseenter', function() {
    if (isMobile()) {
        return
    }
    if (inClick == false) {
        s4.style = 'filter: brightness(150%)'

        s2.style = 'filter: brightness(50%)'
        s1.style = 'filter: brightness(50%)'
        s3.style = 'filter: brightness(50%)'
    }
})
s4.addEventListener('mouseleave', function() {
    if (isMobile()) {
        return
    }
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


/* SPONSOR BUTTONS */ 

var LearnMoreTextSponsor = document.querySelector('.LearnMoreTextSponsor');

LearnMoreTextSponsor.addEventListener('click', function() {
    window.location.href = '/NewEntradoxWebsite/CSS/pdf/pdf.html';
})


function isMobile() {
    return /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (window.innerWidth <= 700 && window.innerWidth > 0);
}
  

function changeMobileText(tier) {
    SponsorTiersTextContent.querySelector("p").innerHTML = tier;
}