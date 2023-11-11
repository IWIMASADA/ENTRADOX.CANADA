import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js";
const loader = new GLTFLoader();
const canvas = document.querySelector('.robot-model-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;
controls.enableZoom = false;
controls.enablePan = false;
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);
const pointLight = new THREE.PointLight(0xffffff, 2, 50);
pointLight.position.set(0, 10, 10);
scene.add(pointLight);
const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 1);
scene.add(hemisphereLight);
camera.position.z = 22;
camera.fov = 60; 
camera.updateProjectionMatrix();
let isMouseDown = false;
let isModelLoaded = false;

function loadModel() {
    loader.load(
        'src/1892382.glb', 
        function (gltf) {
            const loadedModel = gltf.scene;
            loadedModel.traverse((child) => {
                if (child.isMesh) {
                    if (child.material.isMeshStandardMaterial || child.material.isMeshPhysicalMaterial) {
                        child.material.metalness = .3;
                        child.material.roughness = 0.1; 
                    }
                }
            });
            loadedModel.position.set(0, -loadedModel.position.y - 7, 0);
            scene.add(loadedModel);
            isModelLoaded = true;
            animate();
        }
    );
}
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};
const intersectionObserver = new IntersectionObserver(handleIntersection, observerOptions);
const targetElement = document.querySelector('.robot-model-container');
intersectionObserver.observe(targetElement);
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadModel();
            observer.unobserve(targetElement);
        }
    });
}

let lastFrameTimestamp = 0;

function animate(currentTimestamp) {
    const frameInterval = 1000 / 60;
    const timeElapsed = currentTimestamp - lastFrameTimestamp;

    if (timeElapsed > frameInterval) {
        if (isMouseDown) {
            controls.update();
        } else {
            scene.rotation.y -= 0.0005;
            controls.update();
            renderer.render(scene, camera);
        }
        lastFrameTimestamp = currentTimestamp - (timeElapsed % frameInterval);
    }

    requestAnimationFrame(animate);
}

