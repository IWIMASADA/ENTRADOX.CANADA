document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.hitbox');
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.hitboxDot');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
