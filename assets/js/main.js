import * as THREE from './ThreeJS/three/build/three.module.js';
import { Player } from './player.js';
// console.log("main.js loaded");


// Get the bounds of the game from the window
const gameSpace = window.document.getElementById("game-space")
var width = gameSpace.offsetWidth;
var height = gameSpace.offsetHeight;

console.log("Game Space size: " + width + " x " + height);

// Create camera, scene, and renderer for three.js
const scene = new THREE.Scene();

// // DEBUG: Add an axes helper
// var axesHelper = new THREE.AxesHelper(50);
// scene.add(axesHelper);

// Set up scene lighting
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
directionalLight.position.set(-250, 300, -400);
scene.add( directionalLight );

const camera = new THREE.OrthographicCamera(-width/2, width/2, -height/2, height/2, 0, 1000);
camera.position.set(200, -200, 300);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

camera.updateMatrix();

//scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
gameSpace.appendChild(renderer.domElement);

// Set the background of the scene to be our blue color);
scene.background = new THREE.Color(0xa8f7ff);

// TODO: Display a loading screen while loading assets for the game with loading icon

// TODO: Start page with options, credits, and play buttons, and a splash image

// TODO: Display options page
// TODO: Audio slider
// TODO: Color Blind mode toggle

// TODO: Display credits

// TODO: Start game

// Create player model
var player = new Player();

scene.add(player);




const animate = function (curTimestamp) {
    requestAnimationFrame(animate);
    player.animateStep(curTimestamp);
    renderer.render(scene, camera);
}

animate();

// Add grid to scene (TODO: Built from json level file)
// Add paint buckets and splashes to scene

// TODO: Main game loop
// var update = function() {
//     // TODO: Block controls
//     // TODO: Block logic
//     // TODO: Paint bucket logic
//     // TODO: Grid tile logic

//     // TODO: Check level criteria
//     // TODO: Record stats 
//     // TODO: End level screen if not in a tutorial level. otherwise, move to the next level.
// }

