import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createMixer } from './animationManager.js';

const gltfLoader = new GLTFLoader();

function loadModel(scene){
    gltfLoader.load('res/models/avatar.glb', gltf => {
        //Assign gltf object to variable
        const model01 = gltf.scene
        //Set start position
        model01.position.set(0 ,0,-2);
        //Add gltf to scene
        scene.add(model01);

        //Create animation mixer
        createMixer(gltf);
        //Start default animation state
        document.dispatchEvent(new CustomEvent('animation01'));

    }, (loading) => {
        console.log('model is loading');
    }, (err) => {
        console.log('error loading model');
    });
}

/* 

Use this function to load any custom scene models. Be sure to:
1. change path to match your model location
2. update position, rotation, scale
3. add function to export 
4. invoke the function in environment.js

function loadEnvModels(scene){
    gltfLoader.load('res/scene/models/arcade.glb', gltf => {
        gltf.scene.scale.set(.4,.4,.4);
        gltf.scene.position.set(-0.1,0,-3.5);
        gltf.scene.rotation.set(0,Math.PI/-4,0);
        scene.add(gltf.scene);
       
    }, null, null);
}

*/
export { loadModel };
