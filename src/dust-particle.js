var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer2 = new THREE.WebGLRenderer({ alpha: true });
renderer2.setSize(window.innerWidth, window.innerHeight);
const canvasContainer2 = document.querySelector('.particle-frame2');
renderer2.sortObjects = true;
renderer2.setClearColor(0x000000, 0);
var spreadOut = 40; 
var particles2 = new THREE.Group();
const testbg2 = document.querySelector('.particle-frame2');
testbg2.renderOrder = 1;
canvasContainer2.appendChild(renderer2.domElement);
renderer2.domElement.style.zIndex = '1';
scene2.add(particles2);
var particleCount = 230;
for (var i = 0; i < particleCount; i++) {
    var particleSize = Math.random() * 0.04 + 0.01; 
    var color = Math.random() < 0.3 ? 0x8F8F8F : 0xffffff;
    var particle = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(particleSize, particleSize),
        new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
            transparent: true,
        })
    );
    particle.position.x = Math.random() * -spreadOut;
    particle.position.y = Math.random() * -spreadOut;
    particle.position.z = Math.random() * 2 - 1;
    particle.speed = Math.random() * 0.01 + 0.004; 
    particle.rotation.z = Math.random() * Math.PI * 2;
    particles2.add(particle);
}
camera2.position.set(-1, 0, 5); 
var animate = function () {
    requestAnimationFrame(animate);
    particles2.children.forEach(function (particle) {
        particle.position.x += particle.speed;
        particle.position.y += particle.speed;
        if (Math.random() < 0.2 && particle.position.x > 0) {
            particle.material.opacity -= 0.01;
        }
        if (particle.position.x > spreadOut || particle.position.y > spreadOut) {
            particle.position.x = Math.random() * -spreadOut;
            particle.position.y = Math.random() * -spreadOut;
            particle.material.opacity = 1;
        }
    });
    renderer2.render(scene2, camera2);
};
window.addEventListener('resize', function () {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    camera2.aspect = newWidth / newHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(newWidth, newHeight);
});
animate();