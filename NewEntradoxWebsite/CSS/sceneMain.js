// Set up scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-2.4, -.2, 5); // Adjusted camera position

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const canvasContainer = document.querySelector('.testbg');

renderer.sortObjects = true;
renderer.setClearColor( 0x000000, 0 );
let particles;
let originalPositions; // Added variable to store original positions

const image = new Image();
image.src = "sceneLogoMain4.png";
const imageScale = 2;
const particleRadius = 0.018;
const maxParticles = 24875;
const size = 128;
const size2 = 128;


function createCircularTexture() {
  const canvas = document.getElementById('canvas2');

  canvas.style.zIndex = '2147483646';
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
  const canvas = document.getElementById('canvas');
  helperCanvas = canvas;
  const ctx = canvas.getContext('2d');
  canvas.width = (image.width) * imageScale;
  canvas.height = image.height * imageScale;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);

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
        color.setHex(Math.random() > 0.2 ? 0xEDEDED : 0xCCCCCC);

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
  const testbg = document.querySelector('.testbg');
  testbg.renderOrder = 1;
  canvasContainer.appendChild(renderer.domElement);
  renderer.domElement.style.zIndex = '1';
  particles.renderOrder = 100;
  particleMaterial.renderOrder = 99; 
  scene.add(particles);



  

  particles.rotation.x = 0;
  particles.rotation.y = 0;

  const cursor = { x: 10, y: 10 };
  const pushForce = 0.1;

  const cursorLARGE = { x: 10, y: 10 };
  const pushForceLARGE = -0.0005;

  // Set position of cursor to be the person's mouse cursor
  document.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 8 - 6.3;
    cursor.y = - (event.clientY / window.innerHeight) * 5 + 2.48;

    cursorLARGE.x = (event.clientX / window.innerWidth) * 8 - 6.3;
    cursorLARGE.y = - (event.clientY / window.innerHeight) * 5 + 2.48;
  });

  // Additional parameters for disintegration effect
  const disintegrationDuration = 500; // in milliseconds

  // Variable to track whether disintegration is in progress
  let disintegrationInProgress = false;
  let disintegrationTriggered = false;
  let startTime;
  
  
// Add a separate material for transparency
const transparentMaterial = new THREE.PointsMaterial({
  size: particleRadius,
  transparent: true,
  alphaTest: 0,
  depthTest: false,
  vertexColors: true,
  opacity: 1, // Initial opacity
  map: createCircularTexture(),
});


let disWait = false;



const animateDisintegration = function () {
  if (disWait == false) {

    //disintegrationInProgress = false;
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;

    if (elapsed < disintegrationDuration) {
      const progress = elapsed / disintegrationDuration;

      // Instantly scatter particles with an explosive effect
      const maxExplosiveScatterDistance = 0.3;

      for (let i = 0; i < particles.geometry.attributes.position.array.length; i += 3) {
        // Calculate the scatter distance based on progress with randomness
        const scatterDistanceX = (Math.random() - 0.5) * maxExplosiveScatterDistance;
        const scatterDistanceY = (Math.random() - 0.5) * maxExplosiveScatterDistance;

        // Apply the scatter distance
        particles.geometry.attributes.position.array[i] += scatterDistanceX;
        particles.geometry.attributes.position.array[i + 1] += scatterDistanceY;
      }

      // Set the opacity for the transparent material
      transparentMaterial.opacity = 1 - progress;

      // Update particle positions
      particles.geometry.attributes.position.needsUpdate = true;
      particles.material = transparentMaterial;

      particles.position.set(0, 0, 0);
      requestAnimationFrame(animateDisintegration);
    disintegrationTriggered = true;

    } 
    //disWait = true;

    


  }  
};

document.addEventListener('keydown', function(event) {
  // Check if the pressed key is 'a'
  if (event.key === 'a') {
    console.log("pressed a");

      disintegrationInProgress = false;
      disWait = false;


      requestAnimationFrame(animateDisintegration);

      particles.material = particleMaterial;
      
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'b') {

        // Check if scroll position meets a certain condition (adjust as needed)
        if (disWait === false) {
          // Trigger disintegration
          disintegrationTriggered = true;
          disintegrateParticles();
    
    
          disintegrationInProgress = true;
    
          
        } else {
    
        }
 
      
  }
});

  const disintegrateParticles = function () {
    // Trigger disintegration
    startTime = Date.now();
    animateDisintegration();

    

  };



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

  var firstTimeScroll = true;

  function clearSmokeScreen() {
    
    const smokeScreen = document.getElementById('smokeEffectHome');
    smokeScreen.classList.add("fadeOut");
    setTimeout(function() {
      smokeScreen.style.opacity = 0;
      smokeScreen.classList.remove("fadeOut");

    }, 900);
  }

  function unClearSmokeScreen() {
    
    const smokeScreen = document.getElementById('smokeEffectHome');

    smokeScreen.classList.add("fadeIn");

    setTimeout(function() {
      smokeScreen.style.opacity = 0.2;
      smokeScreen.classList.remove("fadeIn");


    }, 1001);
  }


  function liftPages() {

      // Get all pages
      const pages = document.querySelectorAll('.sectionWrapper');
      const homePage = document.getElementById('page1');
      const sponsorPage = document.getElementById('page3');

      var initialHomeTop = homePage.style.top;
      // Set top values dynamically


      pages.forEach((page, index) => {
          page.style.top = `${(index - currentPage + 1) * 100}%`;
      });

      // Show the pages
      pages.forEach(page => {
          page.style.display = 'block';
      });

      if (firstTimeScroll == true) {
                // Check if scroll position meets a certain condition (adjust as needed)
                if (disWait === false) {
                  // Trigger disintegration
                  disintegrationTriggered = true;
                  disintegrateParticles();
                  clearSmokeScreen();
                  disintegrationInProgress = true;
                } 
                firstTimeScroll = false;
      }

      if (homePage.style.top == '-100%' && initialHomeTop == '0%') {
                // Check if scroll position meets a certain condition (adjust as needed)
                if (disWait === false) {
                  // Trigger disintegration
                  disintegrationTriggered = true;
                  disintegrateParticles();
                  clearSmokeScreen();
            
            
                  disintegrationInProgress = true;
            
                  
                } 
      }

      if (homePage.style.top == '0%' && initialHomeTop == '-100%') {
        setTimeout(function() {
          disintegrationInProgress = false;
          disWait = false;
    
    
          requestAnimationFrame(animateDisintegration);
    
          particles.material = particleMaterial;
          unClearSmokeScreen();
      }, 900); 

      }


      if (sponsorPage.style.top == '-100%' || sponsorPage.style.top == '100%'  ) {
                  clearSmokeScreen();
      }


      if (sponsorPage.style.top == '0%') {
        setTimeout(function() {
          unClearSmokeScreen();
      }, 900); 

      }


  }







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

          if (distanceSquared <= 0.2) {
            const forceX = (particleX - cursor.x) * pushForce;
            const forceY = (particleY - cursor.y) * pushForce;

            particlePositions.array[i] += forceX;
            particlePositions.array[i + 1] += forceY;
          }
        }
      }

      // Gradually move particles back to their original positions
      const dampingFactor = 0.01;
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





