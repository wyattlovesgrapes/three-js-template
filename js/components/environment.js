import * as THREE from 'three';
import { loadSkybox } from './skybox.js';
import { loadModel } from './modelLoader.js';

function createEnvironment(scene){

  //Load skybox
  loadSkybox("default",scene);

  /*
  //Create ground plane
  const groundGeo = new THREE.PlaneGeometry(2, 2);
  const groundMat = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.set(1.57,0,0);
  scene.add(ground);
  */

  //Load models
  //loadModel(scene);

  //Lights
  const light = new THREE.HemisphereLight(0xfafafa, 0x080820, 1.2);
  scene.add(light);
  
} 

export {createEnvironment};
