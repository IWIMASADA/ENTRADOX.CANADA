// Set up scene2
var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer2 = new THREE.WebGLRenderer({ alpha: true });
renderer2.setSize(window.innerWidth, window.innerHeight);
const canvasContainer2 = document.querySelector('.testbg2');
renderer2.sortObjects = true;
renderer2.setClearColor(0x000000, 0);

// Parameters
var spreadOut = 40; // Adjust how far they spread out

// Create particles2
var particles2 = new THREE.Group();
const testbg2 = document.querySelector('.testbg2');
testbg2.renderOrder = 1;
canvasContainer2.appendChild(renderer2.domElement);
renderer2.domElement.style.zIndex = '1';
scene2.add(particles2);

var particleCount = 100;

for (var i = 0; i < particleCount; i++) {
    var particleSize = Math.random() * 0.04 + 0.01; // Random size between 0.01 and 0.06

    var color = Math.random() < 0.3 ? 0x8F8F8F : 0xffffff; // 30% chance of black color

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

    // Random speed
    particle.speed = Math.random() * 0.01 + 0.004; // Random speed between 0.004 and 0.014

    // Random rotation in radians
    particle.rotation.z = Math.random() * Math.PI * 2;

    particles2.add(particle);
}

// Set up camera2 position
camera2.position.set(-1, 0, 5); // Adjusted camera2 position

// Animation
var animate = function () {
    requestAnimationFrame(animate);

    // Move particles2 to the top right
    particles2.children.forEach(function (particle) {
        particle.position.x += particle.speed;
        particle.position.y += particle.speed;

        // Check if particle should fade
        if (Math.random() < 0.2 && particle.position.x > 0) {
            particle.material.opacity -= 0.01;
        }

        // Reset position, opacity, and state if particle goes off the screen
        if (particle.position.x > spreadOut || particle.position.y > spreadOut) {
            particle.position.x = Math.random() * -spreadOut;
            particle.position.y = Math.random() * -spreadOut;
            particle.material.opacity = 1;
        }
    });

    renderer2.render(scene2, camera2);
};

// Handle window resize
window.addEventListener('resize', function () {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    camera2.aspect = newWidth / newHeight;
    camera2.updateProjectionMatrix();

    renderer2.setSize(newWidth, newHeight);
});

animate();


