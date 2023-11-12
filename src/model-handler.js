import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js";

function loadRobotIfDesktop() {
    if (!returnIsMobile()) {
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
        
        
    }
}

loadRobotIfDesktop()


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
var particleCount = 190;
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