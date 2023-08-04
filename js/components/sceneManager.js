import * as THREE from 'three';

// Define global variables
let currentScene;

function createScenes(...args) {
    for(let i=0; i<args.length; i++){
        const variableName = args[i];
        window[variableName] = new THREE.Scene();
        
        if (i===0){
            currentScene = window[variableName];
        }
    }
}

// Function to switch between scenes
function switchScene(scene) {
    if (currentScene !== scene) {
        // Remove objects from the current scene
        clearScene(currentScene);

        // Set the new current scene
        currentScene = scene;

    }
}

// Function to remove objects from a scene
function clearScene(scene) {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}

export { 
    createScenes,
    switchScene,
    currentScene
};
