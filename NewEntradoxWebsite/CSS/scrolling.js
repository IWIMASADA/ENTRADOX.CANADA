document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const totalPages = 5;

    window.addEventListener('wheel', function (e) {
        if (e.deltaY > 0 && currentPage < totalPages) {
            // Scrolling down
            currentPage++;
        } else if (e.deltaY < 0 && currentPage > 1) {
            // Scrolling up
            currentPage--;
        }

        liftPages();
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
