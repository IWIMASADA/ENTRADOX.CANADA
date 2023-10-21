// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-0.2, 0.5, 5); // Adjusted camera position

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let particles;
let originalPositions; // Added variable to store original positions

const image = new Image();
image.src = 'sceneLogoMain.png';
const imageScale = 0.28;
const particleRadius = 0.023;
const maxParticles = 10000;
const size = 128;
const size2 = 128;

function createCircularTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size2;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

var helperCanvas;
image.onload = function () {
  const canvas = document.createElement('canvas');
  helperCanvas = canvas;
  const ctx = canvas.getContext('2d');
  canvas.width = (image.width) * imageScale;
  canvas.height = image.height * imageScale;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height * 0.8);

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

  // Adjust particle system aspect ratio
  const aspectRatio = canvas.width / canvas.height;
  const particleScaleX = aspectRatio; // Adjust as needed
  const particleScaleY = 1; // Keep the same scale along the y-axis
  particleGeometry.scale(particleScaleX, particleScaleY, 1);

  // Store original positions
  originalPositions = new Float32Array(positions.length);
  originalPositions.set(positions);

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  scene.background = new THREE.Color(0x111111);

  particles.rotation.x = 0;
  particles.rotation.y = 0;

  const cursor = { x: 10, y: 10 };
  const pushForce = 0.1;

  const cursorLARGE = { x: 10, y: 10 };
  const pushForceLARGE = -0.0003;

  // Set position of cursor to be the person's mouse cursor
  document.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 8 - 4.2;
    cursor.y = - (event.clientY / window.innerHeight) * 5 + 2.9;

    cursorLARGE.x = (event.clientX / window.innerWidth) * 8 - 4.2;
    cursorLARGE.y = - (event.clientY / window.innerHeight) * 5 + 2.9;
  });


  // ... (Previous code)

// Additional parameters for disintegration effect
const disintegrationDuration = 1000; // in milliseconds
const disintegrationParticleCount = particleCount; // Store the original particle count

// Variable to track whether disintegration is in progress
let disintegrationInProgress = false;
const startTime  = Date.now();
const maxScatterDistance = 0.2;

// Function to disintegrate particles
const animateDisintegration = function () {
  alert("ok")
  const currentTime = Date.now();
  const elapsed = currentTime - startTime;

  if (elapsed < disintegrationDuration) {
    const progress = elapsed / disintegrationDuration;

    // Move particles away from their original positions with a maximum scatter distance
    for (let i = 0; i < particles.geometry.attributes.position.array.length; i += 3) {
      const originalX = originalPositions[i];
      const originalY = originalPositions[i + 1];

      const deltaX = originalX - particles.geometry.attributes.position.array[i];
      const deltaY = originalY - particles.geometry.attributes.position.array[i + 1];

      // Calculate the scatter distance based on progress
      const scatterDistanceX = deltaX * progress * maxScatterDistance;
      const scatterDistanceY = deltaY * progress * maxScatterDistance;

      // Apply the scatter distance
      particles.geometry.attributes.position.array[i] += scatterDistanceX;
      particles.geometry.attributes.position.array[i + 1] += scatterDistanceY;

      // Set opacity to 0
      particles.material.opacity = 1 - progress;
    }

    // Update particle positions
    particles.geometry.attributes.position.needsUpdate = true;
    particles.material.needsUpdate = true;

    requestAnimationFrame(animateDisintegration);
  } else {
    // Disintegration complete, move particles off-screen
    particles.position.set(100, 100, 100); // Adjust to move off-screen
    disintegrationInProgress = false;
  }
};


// Variable to track whether disintegration was triggered
let disintegrationTriggered = false;

// Event listener for wheel
document.addEventListener('wheel', () => {
  // Check if scroll position meets a certain condition (adjust as needed)
  if (!disintegrationTriggered) {
    alert("ok")
    // Trigger disintegration effect
    disintegrateParticles();
    disintegrationTriggered = true;
  }
});

// Event listener for cursor movement
document.addEventListener('mousemove', (event) => {
  // Check if disintegration is in progress
  if (!disintegrationInProgress) {
    // Update cursor position only if disintegration is not in progress
    cursor.x = (event.clientX / window.innerWidth) * 8 - 4.2;
    cursor.y = - (event.clientY / window.innerHeight) * 5 + 2.9;

    cursorLARGE.x = (event.clientX / window.innerWidth) * 8 - 4.2;
    cursorLARGE.y = - (event.clientY / window.innerHeight) * 5 + 2.9;
  }
});

// Event listener for wheel scroll
// Event listener for wheel
window.addEventListener('wheel', (event) => {
  // Check if scroll position meets a certain condition (adjust as needed)
  if (!disintegrationInProgress) {
    disintegrateParticles();
  }
});

// Event listener for scroll
window.addEventListener('scroll', () => {
  // Check if scroll position meets a certain condition (adjust as needed)
  if (!disintegrationInProgress) {
    // Trigger disintegration effect
    disintegrateParticles();
  }
});


// ... (Remaining code)


const animate = function () {
  requestAnimationFrame(animate);

  // Check if disintegration is in progress
  if (!disintegrationInProgress) {
    // Push particles away
    const particlePositions = particles.geometry.attributes.position;
    for (let i = 0; i < particlePositions.array.length; i += 3) {
      const particleX = particlePositions.array[i];
      const particleY = particlePositions.array[i + 1];

      const distanceSquared = (particleX - cursor.x) ** 2 + (particleY - cursor.y) ** 2;

      const distanceSquaredLARGE = (particleX - cursorLARGE.x) ** 2 + (particleY - cursorLARGE.y) ** 2;

      if (distanceSquaredLARGE <= 100) {
        const forceXLARGE = (particleX - cursorLARGE.x) * pushForceLARGE;
        const forceYLARGE = (particleY - cursorLARGE.y) * pushForceLARGE;

        particlePositions.array[i] += forceXLARGE;
        particlePositions.array[i + 1] += forceYLARGE;

        if (distanceSquared <= 0.5) {
          const forceX = (particleX - cursor.x) * pushForce;
          const forceY = (particleY - cursor.y) * pushForce;

          particlePositions.array[i] += forceX;
          particlePositions.array[i + 1] += forceY;
        }
      }
    }

    // Gradually move particles back to their original positions
    const dampingFactor = 0.005;
    for (let i = 0; i < particlePositions.array.length; i += 3) {
      const originalX = originalPositions[i];
      const originalY = originalPositions[i + 1];

      const deltaX = originalX - particlePositions.array[i];
      const deltaY = originalY - particlePositions.array[i + 1];

      particlePositions.array[i] += deltaX * dampingFactor;
      particlePositions.array[i + 1] += deltaY * dampingFactor;
    }

    // Update particles position
    particles.geometry.attributes.position.needsUpdate = true;
  }

  // Render the scene
  renderer.render(scene, camera);
};

animate();

};
