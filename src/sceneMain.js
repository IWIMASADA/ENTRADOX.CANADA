const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-2.4, 0, 4.9);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const canvasContainer = document.querySelector('.particle-frame');
renderer.sortObjects = true;
renderer.setClearColor(0x000000, 0);
let particles;
let originalPositions;
const image = new Image();
image.src = "data:image/png;base64,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";
const imageScale = 1;
const particleRadius = 0.02;
const maxParticles = 1300;
const size = 128;
const size2 = 128;
const smokeScreen = document.getElementById('smokeEffectHome');
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
  const aspectRatio = canvas.width / canvas.height;
  const particleScaleX = aspectRatio;
  const particleScaleY = 1;
  particleGeometry.scale(particleScaleX, particleScaleY, 1);
  originalPositions = new Float32Array(positions.length);
  originalPositions.set(positions);
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  particles = new THREE.Points(particleGeometry, particleMaterial);
  const testbg = document.querySelector('.particle-frame');
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
  document.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / window.innerWidth) * 8 - 6.3;
    cursor.y = - (event.clientY / window.innerHeight) * 5 + 2.48;
    cursorLARGE.x = (event.clientX / window.innerWidth) * 8 - 6.3;
    cursorLARGE.y = - (event.clientY / window.innerHeight) * 5 + 2.48;
  });
  const disintegrationDuration = 500;
  let disintegrationInProgress = false;
  let startTime;
  const transparentMaterial = new THREE.PointsMaterial({
    size: particleRadius,
    transparent: true,
    alphaTest: 0,
    depthTest: false,
    vertexColors: true,
    opacity: 1,
    map: createCircularTexture(),
  });
  let disWait = false;
  const animateDisintegration = function () {
    if (disWait == false) {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      if (elapsed < disintegrationDuration) {
        const progress = elapsed / disintegrationDuration;
        const maxExplosiveScatterDistance = 0.3;
        for (let i = 0; i < particles.geometry.attributes.position.array.length; i += 3) {
          const scatterDistanceX = (Math.random() - 0.5) * maxExplosiveScatterDistance;
          const scatterDistanceY = (Math.random() - 0.5) * maxExplosiveScatterDistance;

          particles.geometry.attributes.position.array[i] += scatterDistanceX;
          particles.geometry.attributes.position.array[i + 1] += scatterDistanceY;
        }
        transparentMaterial.opacity = 1 - progress;
        particles.geometry.attributes.position.needsUpdate = true;
        particles.material = transparentMaterial;
        particles.position.set(0, 0, 0);
        requestAnimationFrame(animateDisintegration);
        disintegrationTriggered = true;
      

      }
    }
  };
  const disintegrateParticles = function () {
    startTime = Date.now();
    animateDisintegration();
  };
  let currentPage = 1;
  const totalPages = 7;
  let lastScrollTime = 0;
  let isSwitching = false;
  window.addEventListener('wheel', function (e) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastScrollTime;
    if (timeDiff > 500 && !isSwitching && loadingIsOverFunc()) {
      if (e.deltaY > 0 && currentPage < totalPages) {
        isSwitching = true;
        currentPage++;
      } else if (e.deltaY < 0 && currentPage > 1) {
        isSwitching = true;
        currentPage--;
      }
      clickRequired = true;
      liftPagesX(currentPage);
      lastScrollTime = currentTime;
      setTimeout(function () {
        isSwitching = false;
      }, 800);
    }
  });

  function clearSmokeScreen() {
    helpSmokeScreen = false;
    smokeScreen.classList.add("fadeOut");
    setTimeout(function () {
      smokeScreen.style.opacity = 0;
      smokeScreen.classList.remove("fadeOut");
    }, 900);
  }
    
  function unClearSmokeScreen() {
      smokeScreen.classList.add("fadeInSM");
      setTimeout(function () {
        smokeScreen.style.opacity = 0.15;
        smokeScreen.classList.remove("fadeInSM");
      }, 1001);
  }

  const animate = function () {
    if (animationRunning) {
      requestAnimationFrame(animate);
      if (!disintegrationInProgress) {
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
        const dampingFactor = 0.01;
        for (let i = 0; i < particlePositions.array.length; i += 3) {
          const originalX = originalPositions[i];
          const originalY = originalPositions[i + 1];
          const deltaX = originalX - particlePositions.array[i];
          const deltaY = originalY - particlePositions.array[i + 1];
          particlePositions.array[i] += deltaX * dampingFactor;
          particlePositions.array[i + 1] += deltaY * dampingFactor;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    }
};
animate();
var optionsBtns = document.querySelectorAll('.menuItemContainer')
Object.values(optionsBtns).forEach(function (option) {
  option.addEventListener("click", function () {
      animateMenuXBack()
      makeInMenuFalse()
      slideOut()
      var id = Number(option.id.substring("option-".length));
      currentPage = id;
      currentPage = currentPage * (-1)
      clickRequired = true;
      canvasContainer.style.display = 'none';
      liftPagesX(currentPage);
  });
});

const a = document.getElementById('page1');
const b = document.getElementById('page2');
const c = document.getElementById('page5');
const d = document.getElementById('page3');
const e = document.getElementById('page4');
const f = document.getElementById('page6');
const g = document.getElementById('page7');

function section1() {
    callStyle1();
    animate();

    a.style.top = '0%'
    b.style.top = '100%'
    c.style.top = '200%'
    d.style.top = '300%'
    e.style.top = '400%'
    f.style.top = '500%'
    g.style.top = '100%'
    a.style.display = 'block';

    f.style.display = 'none';

}
function section2() {
    a.style.top = '-100%'
    b.style.top = '0%'
    c.style.top = '100%'
    d.style.top = '200%'
    e.style.top = '300%'
    f.style.top = '400%'
    g.style.top = '100%'
    a.style.display = 'block';

    f.style.display = 'none';

}
function section3() {
    a.style.top = '-200%'
    b.style.top = '-100%'
    c.style.top = '0%'
    d.style.top = '100%'
    e.style.top = '200%'
    f.style.top = '300%'
    g.style.top = '100%'
    a.style.display = 'none';
    
    f.style.display = 'none';

}
function section4() {
    a.style.top = '-300%'
    b.style.top = '-200%'
    c.style.top = '-100%'
    d.style.top = '0%'
    e.style.top = '100%'
    f.style.top = '200%'
    g.style.top = '100%'
    a.style.display = 'none';

    f.style.display = 'none';
    
}
function section5() {
    a.style.top = '-400%'
    b.style.top = '-300%'
    c.style.top = '-200%'
    d.style.top = '-100%'
    e.style.top = '0%'
    f.style.top = '100%'
    g.style.top = '100%'
    a.style.display = 'none';

    f.style.display = 'block';

}
function section6() {
  a.style.top = '-500%'
  b.style.top = '-400%'
  c.style.top = '-300%'
  d.style.top = '-200%'
  e.style.top = '-100%'
  f.style.top = '0%'
  g.style.top = '100%'
  a.style.display = 'none';

  f.style.display = 'block';

}
function section7() {
  a.style.top = '-600%'
  b.style.top = '-500%'
  c.style.top = '-400%'
  d.style.top = '-300%'
  e.style.top = '-200%'
  f.style.top = '-25%'
  g.style.top = '75%'
  a.style.display = 'none';

  f.style.display = 'block';

}
let helpSmokeScreen = true;
function liftPagesX(currentPage) {
  checkfirstOnPage()
  console.log(currentPage)
  if (checkInMenu() === true) {
    animateMenuXBack()
    makeInMenuFalse()
    slideOut()
  }
  if (currentPage != 5) {
    document.querySelector('.socialsBackground').style = 'top: 0%'
    document.querySelector('.socialsBackground').style.opacity = 0;
  }
  if (currentPage === 5) {
    document.querySelector('.socialsBackground').style = 'top: 0%'
    document.querySelector('.socialsBackground').style.opacity = 1;
  }
  if (currentPage != 1) {
    checkDisStatus();
  }
  if (currentPage === 3 || currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7){
    endAnimation();
  }
  if (currentPage === 1){
    callAnimation();
  }
    switch (currentPage) {
        case 1:
            section1();
            canvasContainer.style.display = 'block';
            unClearSmokeScreen();
            helpSmokeScreen = true;
            break;
        case 2:
            section2();
            break;
        case 3:
            section3();
            break;
        case 4:
            section4();
            break;
        case 5:
            section5();
            break;
        case 6:
            section6();
            break;
        case 7:
            section7();
            break;
        default:
            console.error('Function not found for currentPage:', currentPage);
    }
    if (currentPage != 1){
      if (helpSmokeScreen) {
        clearSmokeScreen();
      }
    }
}
var firstOnPage = true;
function checkfirstOnPage() {
  if (firstOnPage) {
    firstOnPage = false;
    disWait = false
  }
}
function checkDisStatus() {
  if (disWait === false) {
    disintegrationTriggered = true;
    disintegrateParticles();
    disintegrationInProgress = true;
  }
}
function callStyle1() {
  setTimeout(function () {
    disintegrationInProgress = false;
    disWait = false;
    requestAnimationFrame(animateDisintegration);
    particles.material = particleMaterial;
  }, 900);
}
section1()
};
let animationRunning = true;
function callAnimation() {
  animationRunning = true;
}
function endAnimation() {
  animationRunning = false;
}
