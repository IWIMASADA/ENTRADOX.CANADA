document.addEventListener('DOMContentLoaded', () => {
    if (isMobile()) {
        return;
    }

    var squares = document.querySelectorAll('[data-custom2="moveSquare"]');
    var moveItem = document.querySelectorAll('[data-custom3="moveItem"]');

    const throttleUpdate = (function() {
        let lastUpdate = 0;
        const framerate = 10; // Adjust this value to set the desired framerate

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
