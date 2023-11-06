document.addEventListener('DOMContentLoaded', () => {
    if (isMobile()) {
        return
    }
    var squares = document.querySelectorAll('[data-custom2="moveSquare"]');
    squares.forEach(squareObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const translateX = (x - window.innerWidth / 2) * 0.01;
            const translateY = (y - window.innerHeight / 2) * 0.01;
            squareObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
    var moveItem = document.querySelectorAll('[data-custom3="moveItem"]');
    moveItem.forEach(moveItemObject => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const translateX = (x - window.innerWidth / 2) * 0.025;
            const translateY = (y - window.innerHeight / 2) * 0.025;
            moveItemObject.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
});