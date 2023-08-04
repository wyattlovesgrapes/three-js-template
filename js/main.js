import * as THREE from 'three';
import { avMixer } from './components/animationManager.js';
import { createScenes, currentScene, switchScene } from './components/sceneManager.js';
import { createMouseControls } from './components/playerInput.js';
import { controls } from './components/playerInput.js';
import { createEnvironment } from './components/environment.js';
import isMobile from 'is-mobile';

console.log(isMobile());

// Get the target element where you want to render the text
const outputElement = document.getElementById('output');

// Create a new paragraph element
const paragraphElement = document.createElement('p');

// Set the text content for the paragraph element
paragraphElement.textContent = isMobile();

// Append the paragraph element to the output element
outputElement.appendChild(paragraphElement);


//Declare main scene components
let camera, renderer, clock;

//Create scene objects and set starting scene
createScenes('scene1', 'scene2');

//Create camera
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,1.6,1);

//Create renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Create mouse controls
createMouseControls(camera, renderer);

//Create animation clock
clock = new THREE.Clock();

//Create environment
createEnvironment(currentScene);

//Render loop
renderer.setAnimationLoop(() => {
    const frame = clock.getDelta();
  
    if(avMixer){
        avMixer.update(frame);
    }
  
    controls.update(frame);
    renderer.render(currentScene, camera);
  });