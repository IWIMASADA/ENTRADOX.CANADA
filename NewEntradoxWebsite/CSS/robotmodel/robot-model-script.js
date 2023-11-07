import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js";

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 2, 50);
pointLight.position.set(0, 10, 10);
scene.add(pointLight);

const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 1);
scene.add(hemisphereLight);

camera.position.z = 5;

let isMouseDown = false;

function animate() {
  // Rotate the loaded model based on user input
  if (isMouseDown) {
    scene.rotation.y += (mouseX - scene.rotation.y) * 0.05;
    scene.rotation.x += (-mouseY - scene.rotation.x) * 0.05; // Invert the vertical rotation
  }
  controls.update(); // This will handle the rotation based on user input
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Load the glTF file
let mouseX = 0, mouseY = 0;
document.addEventListener('mousedown', () => { isMouseDown = true; });
document.addEventListener('mouseup', () => { isMouseDown = false; });
document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1; // Invert the vertical rotation
  
      // Ensure mouseY stays within a certain range to prevent issues with vertical rotation
    }
  });
  

loader.load(
  'scene.gltf',
  function (gltf) {
    // Set the loaded model to a variable for easier manipulation
    const loadedModel = gltf.scene;
    scene.add(loadedModel);
    animate(); // Start animation after the model is loaded
  }
);
