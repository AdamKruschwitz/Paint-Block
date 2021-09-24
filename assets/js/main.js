import * as THREE from './ThreeJS/three/build/three.module.js';
import { Player } from './Player.js';


// Get the bounds of the game from the window
const gameSpace = window.document.getElementById("game-space")
var width = gameSpace.offsetWidth;
var height = gameSpace.offsetHeight;

console.log("Game Space size: " + width + " x " + height);

// Create three.js scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa8f7ff);

// DEBUG: Add an axes helper to the scene
var axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

// set up lighting for the scene
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
directionalLight.position.set(-250, 300, -400);
scene.add( directionalLight );

// Set up three.js camera
const camera = new THREE.OrthographicCamera(-width/2, width/2, -height/2, height/2, 0, 1000);
camera.position.set(200, -200, 300);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);
camera.updateMatrix();

// Set up three.js renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
gameSpace.appendChild(renderer.domElement);

// Create and add player to the scene
var player = new Player();
scene.add(player);

// DEBUG: Make the player move every 3 seconds. 
setInterval( function() {
    player.beginStep(new THREE.Vector3(0, 1, 0));
}, 3000);

// Animation loop
const animate = function (curTimestamp) {
    requestAnimationFrame(animate);
    player.update();
    renderer.render(scene, camera);
}



// Start animation
animate();
