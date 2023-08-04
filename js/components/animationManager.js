import * as THREE from 'three';

let defaultAn;
let avMixer;
let desiredLoopCount;

function createMixer(gltf){
    //Create animation clips object
    const avAnimations = gltf.animations;
    //Create animation mixer
    avMixer = new THREE.AnimationMixer(gltf.scene);

    //Assign animation clips to variables
    defaultAn = avMixer.clipAction(avAnimations[0]);

    //Config animations

    //Default 
    desiredLoopCount = 3;
    defaultAn.setLoop(THREE.LoopRepeat,desiredLoopCount);
    

}


const mixer = (gltf, mixername) => {
    const animations = gltf.animations;
    mixername = new THREE.AnimationMixer(gltf.scene);

    for(let i = 0; i < animations.length; i++){
        console.log('loading animations' + i);
    }  

}

//Animation function template
const animation01 = () => {
    defaultAn.play();
}

document.addEventListener('animation01',animation01);

export {
    avMixer, 
    createMixer,
};