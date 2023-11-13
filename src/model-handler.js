import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js";
function loadRobotIfDesktop() {
    if (!returnIsMobileRobot()) {
        const loader=new GLTFLoader,canvas=document.querySelector(".robot-model-container"),scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer=new THREE.WebGLRenderer({alpha:!0});renderer.setSize(window.innerWidth,window.innerHeight),canvas.appendChild(renderer.domElement);const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=!0,controls.dampingFactor=.25,controls.screenSpacePanning=!1,controls.maxPolarAngle=Math.PI/2,controls.enableZoom=!1,controls.enablePan=!1;const directionalLight=new THREE.DirectionalLight(16777215,1);directionalLight.position.set(5,5,5).normalize(),scene.add(directionalLight);const pointLight=new THREE.PointLight(16777215,2,50);pointLight.position.set(0,10,10),scene.add(pointLight);const hemisphereLight=new THREE.HemisphereLight(14544639,2105376,1);scene.add(hemisphereLight),camera.position.z=22,camera.fov=60,camera.updateProjectionMatrix();let isMouseDown=!1,isModelLoaded=!1;
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
            const frameInterval = 1000 / 40;
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
function returnIsMobileRobot(){return isMobileDeviceRobot}
var isMobileDeviceRobot=function(){var i=navigator.userAgent,e=navigator.platform,o=i.indexOf("iPhone")>-1,t=i.indexOf("iPod")>-1,n=i.indexOf("iPad")>-1,d=/Android (\d+(?:\.\d+)*)/.test(i);return!!(/iPad|iPhone|iPod/.test(e)|(o|n|t|d))||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(e)}();
var scene2=new THREE.Scene,camera2=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer2=new THREE.WebGLRenderer({alpha:!0});renderer2.setSize(window.innerWidth,window.innerHeight);const canvasContainer2=document.querySelector(".particle-frame2");renderer2.sortObjects=!0,renderer2.setClearColor(0,0);var spreadOut=40,particles2=new THREE.Group;const testbg2=document.querySelector(".particle-frame2");testbg2.renderOrder=1,canvasContainer2.appendChild(renderer2.domElement),renderer2.domElement.style.zIndex="1",scene2.add(particles2);for(var particleCount=140,i=0;i<particleCount;i++){var e=.04*Math.random()+.01,r=.3>Math.random()?9408399:16777215,n=new THREE.Mesh(new THREE.PlaneBufferGeometry(e,e),new THREE.MeshBasicMaterial({color:r,side:THREE.DoubleSide,transparent:!0}));n.position.x=-(Math.random()*spreadOut),n.position.y=-(Math.random()*spreadOut),n.position.z=2*Math.random()-1,n.speed=.01*Math.random()+.004,n.rotation.z=Math.random()*Math.PI*2,particles2.add(n)}camera2.position.set(-1,0,5);var animate=function(){requestAnimationFrame(animate),particles2.children.forEach(function(e){e.position.x+=e.speed,e.position.y+=e.speed,.2>Math.random()&&e.position.x>0&&(e.material.opacity-=.01),(e.position.x>spreadOut||e.position.y>spreadOut)&&(e.position.x=-(Math.random()*spreadOut),e.position.y=-(Math.random()*spreadOut),e.material.opacity=1)}),renderer2.render(scene2,camera2)};window.addEventListener("resize",function(){var e=window.innerWidth,r=window.innerHeight;camera2.aspect=e/r,camera2.updateProjectionMatrix(),renderer2.setSize(e,r)}),animate();