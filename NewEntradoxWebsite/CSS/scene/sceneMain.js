// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load your image
const image = new Image();
image.src = 'sceneLogoMain.png'; // Change the path

const imageScale = 0.2; // Adjusted scale for the entire image
const particleRadius = 0.04; // Adjusted radius for individual particles
const maxParticles = 10000; // Maximum number of particles

image.onload = function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width * imageScale;
  canvas.height = image.height * imageScale;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Create particle system using BufferGeometry
  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({ color: 0x888888, size: particleRadius });

  const positions = new Float32Array(maxParticles * 3);

  let particleCount = 0;

  // Convert image data to particles (points) with even smaller step size
  for (let y = 0; y < canvas.height && particleCount < maxParticles; y += 1) {
    for (let x = 0; x < canvas.width && particleCount < maxParticles; x += 1) {
      const index = (x + y * canvas.width) * 4;

      const posX = (x / canvas.width - 0.5) * 5;
      const posY = (0.5 - y / canvas.height) * 5;
      const posZ = (imageData.data[index] / 255) * 2; // Use image brightness for Z position

      positions[particleCount * 3] = posX;
      positions[particleCount * 3 + 1] = posY;
      positions[particleCount * 3 + 2] = posZ;

      particleCount++;
    }
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Set background color
  scene.background = new THREE.Color(0x111111);

  // Disable rotation
  particles.rotation.x = 0;
  particles.rotation.y = 0;

  // Animation
  const animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };

  animate();
};
