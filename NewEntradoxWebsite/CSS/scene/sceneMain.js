// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-2.2, 0.5, 5); // Adjusted camera position

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let particles;

const image = new Image();
image.src = 'sceneLogoMain.png';
const imageScale = 0.28;
const particleRadius = 0.023;
const maxParticles = 5000;

function createCircularTexture() {
  const canvas = document.createElement('canvas');
  const size = 128;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

image.onload = function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width * imageScale;
  canvas.height = image.height * imageScale;
  ctx.drawImage(image, 0, 0, canvas.width * 0.8, canvas.height * 0.68);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({
    size: particleRadius,
    transparent: true,
    alphaTest: 0.5,
    depthTest: false,
    vertexColors: true,
    map: createCircularTexture(),
  });

  const positions = new Float32Array(maxParticles * 3);
  const colors = new Float32Array(maxParticles * 3);

  let particleCount = 0;
  const stepSize = 2;

  for (let y = 0; y < canvas.height && particleCount < maxParticles; y += stepSize) {
    for (let x = 0; x < canvas.width && particleCount < maxParticles; x += stepSize) {
      const index = (x + y * canvas.width) * 4;

      if (imageData.data[index + 3] > 0) {
        const posX = (x / canvas.width - 0.5) * 3;
        const posY = (0.5 - y / canvas.height) * 3;
        const posZ = (imageData.data[index] / 255) * 2;

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
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  scene.background = new THREE.Color(0x111111);

  particles.rotation.x = 0;
  particles.rotation.y = 0;

  const pushForce = 0.1;
  const cursor = { x: 0.5, y: 0.5 };

  document.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 5.6 - 4.5;
    cursor.y = - (event.clientY / window.innerHeight) * 5.5 + 3.5;
  });
  
  const animate = function () {
    requestAnimationFrame(animate);
  
    // Continue with the rest of your animation code
  
    // Push particles away from the cursor
    const particlePositions = particles.geometry.attributes.position;
    for (let i = 0; i < particlePositions.array.length; i += 3) {
      const particleX = particlePositions.array[i];
      const particleY = particlePositions.array[i + 1];
  
      const distanceSquared = (particleX - cursor.x) ** 2 + (particleY - cursor.y) ** 2;
      const distance = Math.sqrt(distanceSquared);
  
      if (distance <= 0.5) {
        const forceX = (particleX - cursor.x) * pushForce;
        const forceY = (particleY - cursor.y) * pushForce;
  
        particlePositions.array[i] += forceX;
        particlePositions.array[i + 1] += forceY;
      }
    }
  
    particles.geometry.attributes.position.needsUpdate = true;
  
    renderer.render(scene, camera);
  };
  
  animate();
  

};
