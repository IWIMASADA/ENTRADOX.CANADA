document.addEventListener('DOMContentLoaded', function() {
    var sponsorInformationContainerMainDisplay = document.querySelector('.sponsorInformationContainerMainDisplay');
    var sponsorTiersTextContent = document.querySelector('.SponsorTiersTextContent');
    var rd = document.querySelector('.robot-description');
    var ro2 = document.querySelector('.robot-name-outline');
    var ron = document.querySelector('.robot-name');
    var ro = document.querySelector('.robot-name-outline2');
    var abe = document.querySelector('.AboutUsTextTitle');
    var abeo = document.querySelector('.AboutUsTextTitleOutline');
    var abed = document.querySelector('.AboutUsTextDesc');
    var frame = document.querySelectorAll('[data-custom="homeMovingItems"]');
    frame.forEach(frameObject => {
        document.addEventListener('mousemove', (e) => {
            if (isMobile()) {
                return
            }
            const x = e.clientX;
            const y = e.clientY;
            const translateX = (x - window.innerWidth / 2) * 0.013;
            const translateY = (y - window.innerHeight / 2) * 0.013;
            frameObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
    document.addEventListener('mousemove', (e) => {
        if (isMobile()) {
            return
        }
        const x = e.clientX;
        const y = e.clientY;
        const translateX = (x - window.innerWidth / 2) * 0.013;
        const translateY = (y - window.innerHeight / 2) * 0.013;
        sponsorInformationContainerMainDisplay.style.transform = `translate(${translateX}px, ${translateY}px)`;
        sponsorTiersTextContent.style.transform = `translate(${translateX}px, ${translateY}px)`;
        rd.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ro2.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ron.style.transform = `translate(${translateX}px, ${translateY}px)`;
        ro.style.transform = `translate(${translateX}px, ${translateY}px)`;
        abe.style.transform = `translate(${translateX}px, ${translateY}px)`;
        abeo.style.transform = `translate(${translateX}px, ${translateY}px)`;
        abed.style.transform = `translate(${translateX}px, ${translateY}px)`;
    })
});