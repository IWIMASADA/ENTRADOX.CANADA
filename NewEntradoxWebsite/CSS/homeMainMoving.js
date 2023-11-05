document.addEventListener('DOMContentLoaded', function() {
    var sponsorInformationContainerMainDisplay = document.querySelector('.sponsorInformationContainerMainDisplay');
    var sponsorTiersTextContent = document.querySelector('.SponsorTiersTextContent');
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
    })
});

