var THREE = window.THREE = require('three');
require('../node_modules/three/examples/js/loaders/GLTFLoader');

// Set up scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Instantiate loader
var loader = new THREE.GLTFLoader();
var obj;
// THREE.DRACOLoader.setDecoderPath('../node_modules/three/examples/js/libs/draco');
// loader.setDRACOLoader(new THREE.DRACOLoader());
loader.load("3Dfiles/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    obj = gltf.scene;
    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Scene
    gltf.scenes; // Array<THREE.Scene>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
}, undefined, function (err) {
    console.error(err);
})

// Add light
var light = new THREE.PointLight(0xFFFFFF);
/* position the light so it shines on the cube (x, y, z) */
light.position.set(50, 0, 50);
scene.add(light);

// Render animation
function animate() {
    requestAnimationFrame(animate); // Callback fn
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
    obj.rotation.z += 0.01;
    // camera.rotation.y += 0.01;
    // loader.rotation.z += 0.1;
    renderer.render(scene, camera);
}
animate();
