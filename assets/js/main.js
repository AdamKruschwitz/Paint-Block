
// console.log("main.js loaded");


// Get the bounds of the game from the window
const gameSpace = window.document.getElementById("game-space")
var width = gameSpace.offsetWidth;
var height = gameSpace.offsetHeight;

console.log("Game Space size: " + width + " x " + height);

// Create camera, scene, and renderer for three.js
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-width/2, width/2, -height/2, height/2);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
gameSpace.appendChild(renderer.domElement);

// Set the background of the scene to be our blue color);
scene.background = new THREE.Color(0xa8f7ff);

const animate = function () {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}

animate();

// TODO: Display a loading screen while loading assets for the game with loading icon

// TODO: Start page with options, credits, and play buttons, and a splash image

// TODO: Display options page
// TODO: Audio slider
// TODO: Color Blind mode toggle

// TODO: Display credits

// TODO: Start game

// TODO: Main game loop
var update = function() {
    // TODO: Block controls
    // TODO: Block logic
    // TODO: Paint bucket logic
    // TODO: Grid tile logic

    // TODO: Check level criteria
    // TODO: Record stats 
    // TODO: End level screen if not in a tutorial level. otherwise, move to the next level.
}
