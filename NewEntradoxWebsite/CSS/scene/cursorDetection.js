const cursor = { x: 0, y: 0 };

document.addEventListener('mousemove', (event) => {
  cursor.x = (event.clientX / window.innerWidth) * 2 - 1;
  cursor.y = - (event.clientY / window.innerHeight) * 2 + 1;
});
