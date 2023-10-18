document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const totalPages = 5;
    let lastScrollTime = 0;
    let isSwitching = false;

    window.addEventListener('wheel', function (e) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastScrollTime;

        if (timeDiff > 500 && !isSwitching) {
            if (e.deltaY > 0 && currentPage < totalPages) {
                // Scrolling down
                isSwitching = true;
                currentPage++;
            } else if (e.deltaY < 0 && currentPage > 1) {
                // Scrolling up
                isSwitching = true;
                currentPage--;
            }

            liftPages();
            lastScrollTime = currentTime;

            setTimeout(function () {
                isSwitching = false;
            }, 800); // Set the delay time in milliseconds
        }
    });

    function liftPages() {
        // Get all pages
        const pages = document.querySelectorAll('.sectionWrapper');

        // Set top values dynamically
        pages.forEach((page, index) => {
            page.style.top = `${(index - currentPage + 1) * 100}%`;
        });

        // Show the pages
        pages.forEach(page => {
            page.style.display = 'block';
        });
    }
});
