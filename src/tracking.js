document.addEventListener('DOMContentLoaded', function() {
    var sponsorTiersTextContent = document.querySelector('.SponsorTiersTextContent');
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
    const throttleUpdate = (function() {
        let lastUpdate = 0;
        const framerate = 15; 

        return function(e) {
            if (isMobile()) {
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
                sponsorTiersTextContent.style.transform = `translate(${translateX}px, ${translateY}px)`;
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

    document.addEventListener('mousemove', throttleUpdate);
});
