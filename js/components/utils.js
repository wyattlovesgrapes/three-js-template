export const wait = duration => {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}

export const stylizeElement = (element, otherElement) => {
  element.style.cursor = 'pointer';
  element.style.left = otherElement.style.left;
  element.style.width = otherElement.style.width;
  element.style.textDecoration = 'none';

  element.style.position = 'absolute';
  element.style.bottom = '20px';
  element.style.padding = '12px 6px';
  element.style.border = '1px solid #fff';
  element.style.borderRadius = '4px';
  element.style.background = 'rgba(0, 0, 0, 0.8)';
  element.style.color = '#fff';
  element.style.font = 'normal 13px sans-serif';
  element.style.textAlign = 'center';
  element.style.opacity = '0.5';
  element.style.outline = 'none';
  element.style.zIndex = '999';
}

//Test cube
let cube;
export const testCube = (scene) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

export const rotateCube = () => {
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

//Window resize
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

