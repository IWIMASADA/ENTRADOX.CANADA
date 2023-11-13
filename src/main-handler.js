document.addEventListener("DOMContentLoaded", function() {
    const blackscreenBlocker = document.querySelector('.blackscreenBlocker');
    
    if (returnIsMobile()) {
      blackscreenBlocker.classList.add('fadeOut');
      document.getElementById("video").remove();
      document.querySelector(".video-container").style.display = 'none';
      document.getElementById('loadingIDIndicator').style.display = 'none';
      const cursor = document.querySelector('.cursor');
      const cursorDot = document.querySelector('.cursorDot');
      cursorDot.display = 'none';
      cursor.display = 'none'
      menuDisplay.style.display = 'block';
      document.getElementById("preloader-bar").style.display = 'none';
      document.getElementById("relativeID").style.display = 'none';
      loadingIsOver = true;
      setTimeout(() => {
        blackscreenBlocker.remove();
      }, 1000);
      return;
    }
    setTimeout(function() {
        var readMoreElements = document.getElementsByClassName("TIMG");
        blackscreenBlocker.remove();
        for (var i = 0; i < readMoreElements.length; i++) {
            readMoreElements[i].classList.add("shake");
        }
        setTimeout(function() {
            var tdescElements = document.getElementsByClassName("TDESC");
    
            for (var i = 0; i < tdescElements.length; i++) {
                tdescElements[i].classList.add("shake2");
            }
        }, 300); 
    }, 100); 
    function clearLoadingText() {
      document.getElementById('loadingIDIndicator').classList.add("smokeFade");
      setTimeout(function() {
          document.getElementById('loadingIDIndicator').style.display = 'none';
      }, 1000);
  }
  /*function clearandPlayVideo() {
    document.getElementById("relativeID").style.display = 'none';
    var video = document.getElementById("video");
    var videocontainer = document.querySelector(".video-container");
    clearLoadingText();
    setTimeout(function() {
        video.play();
    }, 1000);
    setTimeout(function() {
        video.classList.add("fadeOut");
    }, 2000);
    setTimeout(function() {
        video.classList.add("ended");
        video.remove();
        videocontainer.remove();
    }, 2800);
  }*/
  class Preloader {
      #c = 0;
      #percentage = 0;
      #length = 0;
      #elements = [];
      #loaderStep = () => {};
      #loadingFinished = () => {};
      #step = (c, p) => {
        setTimeout(() => {
          this.#loaderStep(c, p);
          if (Math.round(p) == 100) {
            setTimeout(() => {
              this.#loadingFinished();
            }, 100);
          }
        }, c * 100);
      };
      handleLoad() {
        this.#percentage = (++this.#c * 100) / this.#length;
        this.#step(this.#c, this.#percentage);
      }
      constructor(numOfAjaxRequests, loaderStep, loadingFinished) {
        this.#elements = [
          ...document.querySelectorAll("link"),
          ...document.querySelectorAll('img:not([loading="lazy"])'),
          ...document.querySelectorAll('object:not([loading="lazy"])'),
          ...document.querySelectorAll('iframe:not([loading="lazy"])'),
          ...document.querySelectorAll('video:not([loading="lazy"])'),
          //...document.querySelectorAll('audio:not([loading="lazy"])')
        ];
        this.#length = this.#elements.length + numOfAjaxRequests;
        if (typeof loaderStep == "function") this.#loaderStep = loaderStep;
        if (typeof loadingFinished == "function")
          this.#loadingFinished = loadingFinished;
        for (let elem of this.#elements) {
          if (elem.isConnected) this.handleLoad();
          else elem.addEventListener("load", this.handleLoad.bind(this));
        }
      }
    }
    const preloader = new Preloader(
      0,
      function (c, p) {
      document.getElementById("preloader-bar").style.width = p + "%";
      document.getElementById("loadingIDIndicator").innerHTML = 'LOADING: ' +
        Math.round(p) + "%";
      },
      function () {
          document.getElementById("relativeID").style.display = 'none';
          var video = document.getElementById("video");
          var videocontainer = document.querySelector(".video-container");
          clearLoadingText();
          setTimeout(function() {
              video.play();
          }, 1000);
  
          setTimeout(function() {
              video.classList.add("fadeOut");
          }, 2000);
  
          setTimeout(function() {
              video.classList.add("ended");
              video.remove();
              videocontainer.remove();
              doneLoading()
          }, 2800);
      }
    );
  const throttleUpdate = (function() {
    let lastUpdate = 0;
    const framerate = 60;
  
    return function(e) {
        if (returnIsMobile()) {
            return;
        }
  
        const now = Date.now();
        if (now - lastUpdate >= 1000 / framerate) {
            const cursor = document.querySelector('.cursor');
            const cursorDot = document.querySelector('.cursorDot');
  
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
  
            cursorDot.style.left = e.pageX + 'px';
            cursorDot.style.top = e.pageY + 'px';
  
            lastUpdate = now;
        }
    };
  })();
  
  document.addEventListener('mousemove', throttleUpdate);
  
  document.body.style.cursor = 'none';
  });
  let loadingIsOver = false;
  const menuDisplay = document.getElementById('MenuButtonContainer')
  menuDisplay.style.display = 'none';
  function doneLoading() {
    loadingIsOver = true;
    menuDisplay.style.display = 'unset';
  }
  
  function loadingIsOverFunc() {
    if (loadingIsOver) {
      return true;
    }
  }

/* SECOND*/


var rd = document.querySelector('.robot-description');
var ro2 = document.querySelector('.robot-name-outline');
var ron = document.querySelector('.robot-name');
var ro = document.querySelector('.robot-name-outline2');
var abe = document.querySelector('.AboutUsTextTitle');
var abeo = document.querySelector('.AboutUsTextTitleOutline');
var abed = document.querySelector('.AboutUsTextDesc');
var frame = document.querySelectorAll('[data-custom="homeMovingItems"]');
var staffPanelContainer = document.querySelector('.staffPanelContainer');
var aboutUsContainer = document.querySelector('.AboutUsItemSide');
const throttleUpdate = (function () {
    let lastUpdate = 0;
    const framerate = 15;

    return function (e) {
        if (isMobileDevice === true) {
            return;
        }

        const now = Date.now();
        if (now - lastUpdate >= 1000 / framerate) {
            frame.forEach(frameObject => {
                const x = e.clientX;
                const y = e.clientY;
                const translateX = (x - window.innerWidth / 2) * 0.013;
                const translateY = (y - window.innerHeight / 2) * 0.013;
                frameObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });

            const x = e.clientX;
            const y = e.clientY;
            const translateX = (x - window.innerWidth / 2) * 0.013;
            const translateY = (y - window.innerHeight / 2) * 0.013;
            rd.style.transform = `translate(${translateX}px, ${translateY}px)`;
            ro2.style.transform = `translate(${translateX}px, ${translateY}px)`;
            ron.style.transform = `translate(${translateX}px, ${translateY}px)`;
            ro.style.transform = `translate(${translateX}px, ${translateY}px)`;
            abe.style.transform = `translate(${translateX}px, ${translateY}px)`;
            abeo.style.transform = `translate(${translateX}px, ${translateY}px)`;
            abed.style.transform = `translate(${translateX}px, ${translateY}px)`;
            staffPanelContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
            aboutUsContainer.style.transform = `translate(${translateX}px, ${translateY}px)`;
            lastUpdate = now;
        }
    };
})();

document.addEventListener('mousemove', function (e) {
    requestAnimationFrame(function () {
        throttleUpdate(e);
    });
});

var s1 = document.getElementById('Tier1SponsorIcon');
var s2 = document.getElementById('Tier2SponsorIcon');
var s3 = document.getElementById('Tier3SponsorIcon');
var s4 = document.getElementById('Tier4SponsorIcon');
var exit = document.querySelector('.sponsorTierExitButton');
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
    if (isMobileDevice === true) {
        sponsorInformationContainerMainDisplay.style.transform = 'translateX(-20%)'
        return
    }
}
function mobileButtonSponsorClicked() {
    if (isMobileDevice === 0) {
        return
    }
    if (isMobileDevice === true) {
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
}
mobileButtonNextSponsor.addEventListener('click', function() {
    mobileButtonSponsorClicked()
})
mobileButtonSponsorClicked()
exit.addEventListener('click', function() {
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
        return
    }
    if (inClick == false) {
        s2.style = 'filter: brightness(100%)'
        s1.style = 'filter: brightness(100%)'
        s3.style = 'filter: brightness(100%)'
        s4.style = 'filter: brightness(100%)'
    }
})
const SponsorTiersTextContent = document.querySelector('.SponsorTiersTextContent');
function changeInnerHTML(tierNumber) {
    SponsorTiersTextContent.style.opacity = 1;
    SponsorTiersTextContent.querySelector("p").innerHTML = tierNumber;
}
var LearnMoreTextSponsor = document.querySelector('.LearnMoreTextSponsor');
LearnMoreTextSponsor.addEventListener('click', function() {
    window.open('src/pdf.html', '_blank');
});
function changeMobileText(tier) {
    SponsorTiersTextContent.querySelector("p").innerHTML = tier;
}
function animateMenuX() {
    var container = document.getElementById('MenuButtonContainer');
    var arrowTop = document.getElementById('arrowTop');
    var arrowBottom = document.getElementById('arrowBottom');
    var arrowMiddle = document.getElementById('arrowMiddle');
    if (container && arrowTop && arrowBottom && arrowMiddle) {
        var containerWidth = container.offsetWidth;
        var containerHeight = container.offsetHeight;
        var lineThickness = 4.5;
        var xWidth = Math.min(containerWidth, containerHeight) * 1.25; // Adjust as needed
        var xHeight = lineThickness;
        var extraWidth = .6;
        var xLeft = (containerWidth - xWidth) * 0.0005;
        var xTop = (containerHeight - xHeight) * .0001;
        arrowTop.style.transform = `rotate(45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowTop.style.left = xLeft + extraWidth + 'rem';
        arrowTop.style.top = xTop - 1 + 'rem';
        arrowTop.style.height = `${lineThickness}rem`;
        arrowBottom.style.transform = `rotate(-45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowBottom.style.left = xLeft + extraWidth + 'rem';
        arrowBottom.style.top = xTop - 1 + 'rem';
        arrowBottom.style.height = `${lineThickness}rem`;
        arrowMiddle.style.opacity = '0';
        arrowMiddle.style.transform = `rotate(-45deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowMiddle.style.transformOrigin = 'center';
        arrowMiddle.style.height = `${lineThickness}rem`;
        arrowMiddle.style.left = (containerWidth - arrowMiddle.offsetWidth) / 2 + 'px';
        arrowMiddle.style.top = xTop - 1 + 'rem';
    }
}
function animateMenuXBack() {
    var container = document.getElementById('MenuButtonContainer');
    var arrowTop = document.getElementById('arrowTop');
    var arrowBottom = document.getElementById('arrowBottom');
    var arrowMiddle = document.getElementById('arrowMiddle');
    if (container && arrowTop && arrowBottom && arrowMiddle) {
        var containerWidth = container.offsetWidth;
        var containerHeight = container.offsetHeight;
        var lineThickness = 4.5; 
        var xWidth = Math.min(containerWidth, containerHeight) * 1.25; // Adjust as needed
        var xHeight = lineThickness;
        var extraWidth = .6;
        var xLeft = (containerWidth - xWidth) * 0.0005;
        var xTop = (containerHeight - xHeight) * .0001;
        arrowTop.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowTop.style.left = xLeft + extraWidth + 'rem';
        arrowTop.style.top = xTop -.6 + 'rem';
        arrowTop.style.height = `${lineThickness}rem`;
        arrowBottom.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowBottom.style.left = xLeft + extraWidth + 'rem';
        arrowBottom.style.top = xTop - 1.1 + 'rem';
        arrowBottom.style.height = `${lineThickness}rem`;
        arrowMiddle.style.opacity = '1';
        arrowMiddle.style.transform = `rotate(0deg) scaleX(${xWidth / 100}) scaleY(${xHeight / 100})`;
        arrowMiddle.style.height = `${lineThickness}rem`;
        arrowMiddle.style.left = xLeft + extraWidth + 'rem';
        arrowMiddle.style.top = xTop - 1.6 + 'rem';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (isMobileDevice === true) {
        return;
    }

    var squares = document.querySelectorAll('[data-custom2="moveSquare"]');
    var moveItem = document.querySelectorAll('[data-custom3="moveItem"]');

    const throttleUpdate = (function() {
        let lastUpdate = 0;
        const framerate = 10;

        return function(e) {
            const now = Date.now();
            if (now - lastUpdate >= 1000 / framerate) {
                squares.forEach(squareObject => {
                    requestAnimationFrame(() => {
                        const x = e.clientX;
                        const y = e.clientY;
                        const translateX = (x - window.innerWidth / 2) * 0.008;
                        const translateY = (y - window.innerHeight / 2) * 0.008;
                        squareObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
                    });
                });

                moveItem.forEach(moveItemObject => {
                    requestAnimationFrame(() => {
                        const x = e.clientX;
                        const y = e.clientY;
                        const translateX = (x - window.innerWidth / 2) * 0.02;
                        const translateY = (y - window.innerHeight / 2) * 0.02;
                        moveItemObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
                    });
                });

                lastUpdate = now;
            }
        };
    })();

    document.addEventListener('mousemove', throttleUpdate);
});

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
        element26: document.getElementById('Tier4SponsorIcon'),
        element27: document.querySelector('.sponsorTierExitButton')
      };
      const circle = document.querySelector(".cursor")
      Object.values(smth).forEach(function (element) {
        if (element) {
            element.addEventListener('mouseover', function () {
                circle.style.transform = "translate(-50%, -50%) scale(0.5)";
                circle.style.backgroundColor = "rgba(221, 221, 221, 0.233)";
            });
            element.addEventListener('mouseleave', function () {
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

const instagramIMG = document.getElementById('mobileSIMG-Insta');
const emailIMG = document.getElementById('mobileSIMG-Email');
const instagramTab = document.getElementById('mobileSocialsHeaderText-Instagram');
const emailTab = document.getElementById('mobileSocialsHeaderText-Email');
const imgTag = document.querySelector('.tagOnImage-Mobile');
var swchInfo = 1;
instagramTab.addEventListener('click', function() {
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true) {
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
    if (isMobileDevice === true && swchInfo === 1) {
        var instagramUrl = "https://www.instagram.com/entradox/";
        var newWindow = window.open(instagramUrl, '_blank');
        if (newWindow) {
            newWindow.focus();
        } else {
            alert("Popup is blocked. Please enable popups to view Instagram.");
        }
    }
    if (isMobileDevice === true && swchInfo === 2) {
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


document.addEventListener('DOMContentLoaded', () => {
    console.log("%c⚔️ [重要] アークナイツをやる", "color: #3884ff; font-size: 50px; background: #1a1a1a; padding: 10px; border-radius: 3px;");
    console.log(
      "%c👑 仰るとおり。%cマドロック%cは神です",
      "color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;",
      "color: #ffb300; font-size: 40px; background: #1a1a1a; padding: 10px; border-radius: 3px;",
      "color: #3884ff; font-size: 35px; background: #1a1a1a; padding: 10px; border-radius: 3px;"
    );
    var nameToDescription = {
        1: ["Daniel Ashtiani", "Hello, I'm Daniel Ashtiani. I am currently a grade 11 student enrolled in Meadowridge School. My hobbies include CAD modelling, kickboxing, RC car racing, swimming, and robotics", "The CAD builder designs the model of the robot. They collaborate closely with team members to iterate on designs, troubleshoot potential issues, and contribute to the overall success of the FTC team."],
        2: ["Aasha Askew", "Hello! My name is Aasha and I am a current grade 11 student at Meadowridge school. Outside of robotics, I like the gym, watching anime, and playing competitive waterpolo.", "Managers are like the leaders of a work team. They plan what needs to be done, organize resources, and guide everyone to reach their goals."],
        3: ["Amy Xu", "My name is Amy. This is my 4th year participating in the FIRST program. I hope my past experiences will help us succeed in the competition this year. I am confident this will be a year full of learning and successes", "Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],
        4: ["Liam Bradley", "I'm BRADLEY and I'm the best coder and builder on Entradox as well as a pro athlete and gamer", "Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "],
        5: ["Nicole Zhang", "Hello, my name's Nicole and I've been a builder for Meadowridge's robotics team for the last 2 years. This year I will look into doing more arts + promo along with the building and finance that I did previously. I really enjoy skiing and going to the gym", "The finance department manages the team's financial resources and ensuring we dont go broke. They handle budgeting, financial planning, and fundraising activities to secure the necessary funds for the team's projects and competitions."],
        6: ["Aella Gong", "Hello, my name is Aella, and I've been doing Arts and Promo for Meadowridge's robotics team for the last year and a half. However, this will be my first time in Outreach. I'm very excited to be a part of Entradox this year!", "The promotion department helps build the team's image and promoting content. They make strategies to promote the team within the school, local community, and online."],
        7: ["Andy Xu", "Hi my name is Andy, I help with building and finance for the team. I’m here to help us do well at the competition this year", "The driver is the hands-on operator of the robot. They control its movements and actions during competitions using a gamepad. The strategists help them come up with plans during the game to help us win."],
        8: ["Oliver Low", "Hello, I'm Oliver and this is the first time I've been the strategist/field coach for a FIRST team. I'm really looking forward to being a part of Entradox and spending time working on the robot with my friends. I enjoy curling, skiing, and Formula 1 racing", "The strategist guides the robot's actions based on real-time observations. They communicate with the drive team, offering insights and new strategies. They have a good understanding of the game rules, and good field vision."],
        9: ["Hari Baidwan", "I am a sixteen year old at Meadowridge School who is relatively experienced in the area of building (for robotics), I have been a builder on two prior teams. That being said, I am looking forward to diving into the arts and promo component for our team this year as I am entirely new to this", "Builders, assemble, and fine-tune the mechanical and electronic parts of our robot. Our builders prioritize the robots adaptability with our programmers to ensure the robot is ready for success."],
        10: ["Derek Lee", "Hey, my name's Derek. I enjoy walking and listening to leaves rustling. I often trip over my own feet. This year I will be... What am I doing again?", "Programmers code the robot's movements and turn our plans into executable instructions. They troubleshoot problems and collaborate with the builders to make sure the code works well with the robot. "],
    };
    var nameToRole = {
        1: ["Daniel Ashtiani", "ENTRADOX MANAGER", "CAD, BUILDER"],
        2: ["Aasha Askew", "ENTRADOX MANAGER", "BUILDER"],
        3: ["Amy Xu", "PROGRAMMER", "BUILDER"],
        4: ["Liam Bradley", "PROGRAMMER", "BUILDER"],
        5: ["Nicole Zhang", "FINANCE", "PROMOTION"],
        6: ["Aella Gong", "ARTS", "PROMOTION"],
        7: ["Andy Xu", "DRIVER", "FINANCE"],
        8: ["Oliver Low", "STRATEGIST", "BUILDER"],
        9: ["Hari Baidwan", "BUILDER", "OUTREACH"],
        10: ["Derek Lee", "PROGRAMMER", "WEBSITE CREATOR"]
    };
    var nameToIMG = {
        1: ["Daniel Ashtiani","assets/staff-pictures/1.png"],
        2: ["Aasha Askew","assets/staff-pictures/2.png"],
        3: ["Amy Xu","assets/staff-pictures/3.png"],
        4: ["Liam Bradley","assets/staff-pictures/4.png"],
        5: ["Nicole Zhang","assets/staff-pictures/5.png"],
        6: ["Aella Gong", "assets/staff-pictures/6.png"],
        7: ["Andy Xu","assets/staff-pictures/7.png"],
        8: ["Oliver Low","assets/staff-pictures/8.png"],
        9: ["Hari Baidwan","assets/staff-pictures/9.png"],
        10: ["Derek Lee","assets/staff-pictures/10.png"]
    };
    function getRoleValues(name) {
        for (var id in nameToRole) {
            if (nameToRole.hasOwnProperty(id) && nameToRole[id][0] === name) {
                return [nameToRole[id][1], nameToRole[id][2]];
            }
        }
        return null;
    }
    function getPathIMGValues(name) {
        for (var id in nameToIMG) {
            if (nameToIMG.hasOwnProperty(id) && nameToIMG[id][0] === name) {
                return [nameToIMG[id][1]];
            }
        }
        return null;
    }
    function getDescription(name) {
        for (var id in nameToDescription) {
            if (nameToDescription.hasOwnProperty(id) && nameToDescription[id][0] === name) {
                return [nameToDescription[id][1], nameToDescription[id][2]];
            }
        }
        return null;
    }
    var ContainerForStaffDescriptionBodyID = document.getElementById('ContainerForStaffDescriptionBodyID');
    var xbutton = document.getElementById('staffPageStaffContentXButtonID');
    var employees = document.querySelectorAll('.displayNames');
    var employeeIMG = document.querySelector('.HumanBody-Image');
    var nameHelper;
    xbutton.addEventListener('click', function() {
        hideStaff()
        xbutton.style.opacity = 0;
    })
    function getColor(name) {
        if (name == 'Daniel Ashtiani' || name == 'Aasha Askew') {
            var ManagerColor = 'rgb(255, 200, 0)';
            return ManagerColor;
        } else if (name == 'Oliver Low') {
            var StratColor = 'rgb(183, 0, 255)'
            return StratColor;
        } 
        var normalColor = 'rgb(226, 226, 226)';
        return normalColor;
    };
    employees.forEach(staff => {
        staff.addEventListener('click', function() {
            var name = document.getElementById('StaffMemberHeadlineContainer-NameID')
            var nameBackground = document.getElementById('StaffMemberHeadlineContainer2ID')
            xbutton.style.opacity = 1;
            showStaff()
            nameHelper = staff.id;
            name.textContent = nameHelper;
            nameBackground.textContent = nameHelper;
            var values = getRoleValues(nameHelper);
            if (values !== null) {
                var value1 = values[0]; 
                var value2 = values[1];
                var mainRole = document.querySelector('.StaffRoleTextDisplay')
                mainRole.textContent = value1;
                var secondRole = document.querySelector('.StaffRoleTextDisplay2')
                secondRole.textContent = value2;
                document.getElementById('MainRoleColorID').style.color = getColor(nameHelper);
            }
            var descriptionValues = getDescription(nameHelper);
            if (descriptionValues !== null) {
                var value1Desc = descriptionValues[0];
                var value2Desc = descriptionValues[1];
                var descMain = document.querySelector('.ContainerForStaffDescriptionTextContent')
                descMain.textContent = value1Desc;
                var descSecond = document.querySelector('.ContainerForStaffDescriptionTextContent2')
                descSecond.textContent = value2Desc;
            }
            var imgPath = getPathIMGValues(nameHelper);
            employeeIMG.src = imgPath;
        });
    });
    function hideStaff() {
        unevaporateNewStaffList()
        displayOffForStaff()
    }
    function showStaff() {
        ContainerForStaffDescriptionBodyID.style.opacity = 1;
        evaporateNewStaffList()
        displayOnForStaff()
    }
    function displayOnForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');
        document.querySelector(".VerticleDownRect").style.opacity = 1;
        document.querySelector(".LineThroughTopExtend").style.opacity = 1;
        picutre.classList.add("displayOnFlicker")
        name.classList.add("flickerInText")
        desc.classList.add("slideInStaffDesc")
        labels.classList.add("staffContainerSlideIn")
        headline.classList.add("headlineFlickerInText")
        xbutton.classList.add("xbuttonFlicker")
        document.querySelector('.adding-pic-soon').style.opacity = 1;
        setTimeout(function() {
            picutre.classList.remove('displayOnFlicker');
            picutre.style = "left: 30%";
            picutre.style.opacity = 1;
            name.classList.remove('flickerInText');
            name.style = "left: 81%";
            name.style.opacity = 1;
            desc.classList.remove('slideInStaffDesc');
            desc.style = "left: 84%";
            desc.style.opacity = 1;
            labels.classList.remove('slideInStaffDesc');
            labels.style = "left: 53%";
            labels.style.opacity = 1;
            headline.classList.remove('headlineFlickerInText');
            headline.style = "left: 50%";
            headline.style.opacity = 1;
            xbutton.classList.remove("xbuttonFlicker")
            xbutton.classList.opacity = 1;
        }, 1000);
    }
    function displayOffForStaff() {
        var picutre = document.getElementById('HumanBodyID');
        var name = document.getElementById('StaffMemberHeadlineContainer-NameID');
        var desc = document.getElementById('ContainerForStaffDescriptionTextID');
        var labels = document.getElementById('StaffLabelOnContainerForDescID');
        var headline = document.getElementById('StaffMemberHeadlineContainer2ID');
        picutre.classList.add("displayOffFlicker")
        name.classList.add("flickerOutText")
        desc.classList.add("slideOutStaffDesc")
        labels.classList.add("staffContainerSlideOut")
        headline.classList.add("headlineFlickerOutText")
        xbutton.classList.add("xbuttonFlickerOut")
        document.querySelector('.adding-pic-soon').style.opacity = 0;
        setTimeout(function() {
            picutre.classList.remove('displayOffFlicker');
            picutre.style = "left: 25%";
            picutre.style.opacity = 0;
            name.classList.remove('flickerOutText');
            name.style = "left: 40%";
            name.style.opacity = 0;
            desc.classList.remove('slideOutStaffDesc');
            desc.style = "left: 82%";
            desc.style.opacity = 0;
            labels.classList.remove('staffContainerSlideOut');
            labels.style = "left: 82%";
            document.querySelector(".VerticleDownRect").style.opacity = 0;
            document.querySelector(".LineThroughTopExtend").style.opacity = 0;
            labels.style.opacity = 0;
            headline.classList.remove('headlineFlickerOutText');
            headline.style = "left: 40%";
            headline.style.opacity = 0;
            xbutton.classList.remove("xbuttonFlickerOut")
            xbutton.classList.opacity = 0;
        }, 1000);
    }
    function evaporateNewStaffList() {
        var staffList = document.getElementById("CurrentStaffList-Engineer");
        var staffListLabel = document.getElementById("rolename_managers");
        staffList.classList.add('evaporateNewStaff');
        staffListLabel.classList.add('evaporateNewStaff');
        setTimeout(function() {
            staffList.classList.remove('evaporateNewStaff');
            staffList.style = "transform: translateX(-20%)";
            staffList.style.opacity = 0;
            staffListLabel.classList.remove('evaporateNewStaff');
            staffListLabel.style = "transform: translateX(-20%)";
            staffListLabel.style.opacity = 0;
        }, 500);
    }
    function unevaporateNewStaffList() {
        var staffList = document.getElementById("CurrentStaffList-Engineer");
        var staffListLabel = document.getElementById("rolename_managers");
        staffList.classList.add('unevaporateNewStaff');
        staffListLabel.classList.add('unevaporateNewStaff');
        setTimeout(function() {
            staffList.classList.remove('unevaporateNewStaff');
            staffList.style = "transform: translateX(0%)";
            staffList.style.opacity = 1;
            staffListLabel.classList.remove('unevaporateNewStaff');
            staffListLabel.style = "transform: translateX(0%)";
            staffList.style.opacity = 1;
        }, 500);
    }

});
var displayNames = document.querySelectorAll('.displayNames')
displayNames.forEach(name => {
    name.addEventListener('mouseenter', function() {
        var icon = "Icon_" + name.id
        var iconImage = document.getElementById(icon)
        iconImage.classList.add("iconHoverClass");
    });
})
displayNames.forEach(name => {
    name.addEventListener('mouseleave', function() {
        var icon = "Icon_" + name.id
        var iconImage = document.getElementById(icon)
        iconImage.classList.remove("iconHoverClass");
    });
})


var menuButton = document.querySelector('.MenuButtonContainer')
let inMenu = false;
var menuGUI = document.getElementById('menupage')
menuButton.addEventListener('click', function() {
    if (inMenu == false && loadingIsOverFunc()) {
        animateMenuX()
        inMenu = true;
        slideIn()

    } else if (loadingIsOverFunc()) {
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


const rankingButton = document.querySelector('.rankingItem');
const tutorialButton = document.querySelector('.tutorialItem');
const mailButton = document.querySelector('.mailItem');
const schoolButton = document.querySelector('.schoolItem');
const instagramButton = document.querySelector('.instagramItem');
const podcastButton = document.querySelector('.podcastItem');
var pageT = 'social'
rankingButton.addEventListener("click", function() {
        let pop = window.open("https://ftcscout.org/teams/14316", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
tutorialButton.addEventListener("click", function() {
        window.open("_blank");
})
mailButton.addEventListener("click", function() {
        openEmail();
})
schoolButton.addEventListener("click", function() {
        let pop = window.open("https://www.meadowridge.bc.ca/", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
instagramButton.addEventListener("click", function() {
        let pop = window.open("https://www.instagram.com/entradox/", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
podcastButton.addEventListener("click", function() {
        let pop = window.open("https://open.spotify.com/show/3HeGGq8z0BoYhlDHMtkI3N", "_blank");
        if (pop) {
            console.log("opened popup")
        } else {
            alert("Pop up was blocked. Please enable pop ups to view the page")
        }
})
function openEmail() {
    const email = "entradoxrobotics@gmail.com";
    const subject = "Your subject";
    const body = "Your message";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

var isMobileDevice = (function () {
	var ua = navigator.userAgent;
	var p = navigator.platform;
	var iphone = ua.indexOf("iPhone") > -1;
	var ipod = ua.indexOf("iPod") > -1;
	var ipad = ua.indexOf("iPad") > -1;
	var android = /Android (\d+(?:\.\d+)*)/.test(ua);
	if (/iPad|iPhone|iPod/.test(p) | (iphone | ipad | ipod | android)) {
		return true;
	}
	else {
		return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(p);
	}
})();

function returnIsMobile() {
    return isMobileDevice;
}

/* PARTICLE SYSTEM AND INTERACTIONS */