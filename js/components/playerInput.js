import {FirstPersonControls} from 'three/addons/controls/FirstPersonControls.js';

//Keyboard clicks
document.addEventListener('keydown', function(event) {
    // Check which key was pressed
    const key = event.key.toLowerCase(); // Convert to lowercase for case-insensitive check

    // Call the corresponding function based on the key pressed
    switch (key) {
        case 'a':
            console.log('key a pressed')
            break;
        case 's':
            console.log('key a pressed');
            break;
        case 'd':
            console.log('key d pressed');
            break;
        case 'w':
            console.log('key w pressed');
            break;
        default:
            // Do nothing for other keys
            break;
    }
});

//Mouse clicks
function clickDown(){
    controls.activeLook = true;
    console.log('click up');
}

function clickUp(){
    controls.activeLook = false;
    console.log('click down');
}

function activateClicks(renderer){
    renderer.domElement.addEventListener('pointerdown', () => clickDown());
    renderer.domElement.addEventListener('pointerup', () => clickUp());
}

//Mouse look controls
let controls;

function createMouseControls(camera, renderer){
    controls = new FirstPersonControls(camera, renderer.domElement);
    controls.lookSpeed = 0.1;
    controls.movementSpeed = 0;
    controls.activeLook = false;
    activateClicks(renderer);
}

export { createMouseControls, controls };
