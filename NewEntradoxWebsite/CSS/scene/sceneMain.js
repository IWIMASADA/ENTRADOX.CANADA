// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Adjusted camera position

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load your image
const image = new Image();
image.src = 'sceneLogoMain.png'; // Change the path

const imageScale = 0.28; // Adjusted scale for the entire image (increased)
const particleRadius = 0.023; // Adjusted radius for individual particles
const maxParticles = 361500; // Maximum number of particles (reduced)

image.onload = function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width * imageScale;
  canvas.height = image.height * imageScale;
  ctx.drawImage(image, 0, 0, canvas.width * 0.8, canvas.height * 0.68);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Create particle system using BufferGeometry
  const particleGeometry = new THREE.BufferGeometry();

  // Update particle material to use vertex colors and circular texture
  const particleMaterial = new THREE.PointsMaterial({
    size: particleRadius,
    transparent: true,
    alphaTest: 0.5,
    depthTest: false,
    vertexColors: true, // Enable vertex colors
    map: createCircularTexture(), // Set circular texture
  });

  const positions = new Float32Array(maxParticles * 3);
  const colors = new Float32Array(maxParticles * 3);

  let particleCount = 0;

  // Adjust the step size to reduce particles
  const stepSize = 2;

  // Convert image data to particles (points) with reduced step size
  for (let y = 0; y < canvas.height && particleCount < maxParticles; y += stepSize) {
    for (let x = 0; x < canvas.width && particleCount < maxParticles; x += stepSize) {
      const index = (x + y * canvas.width) * 4;

      // Check if the pixel is non-transparent
      if (imageData.data[index + 3] > 0) {
        const posX = (x / canvas.width - 0.5) * 3; // Adjusted scaling factor
        const posY = (0.5 - y / canvas.height) * 3; // Adjusted scaling factor
        const posZ = (imageData.data[index] / 255) * 2; // Use image brightness for Z position

        const color = new THREE.Color();
        color.setHex(Math.random() > 0.5 ? 0xa1a1a1 : 0xbfbfbf);


        positions[particleCount * 3] = posX;
        positions[particleCount * 3 + 1] = posY;
        positions[particleCount * 3 + 2] = posZ;

        colors[particleCount * 3] = color.r;
        colors[particleCount * 3 + 1] = color.g;
        colors[particleCount * 3 + 2] = color.b;

        particleCount++;
      }
    }
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // Set colors attribute

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

// Helper function to create a circular texture
function createCircularTexture() {
  const canvas = document.createElement('canvas');
  const size = 128; // Adjusted size of the circular texture
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white'; // Circle color
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}
