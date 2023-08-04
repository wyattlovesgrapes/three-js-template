import * as THREE from 'three';

function loadSkybox(box,scene){
    let skyboxGeo = new THREE.BoxGeometry( 300, 300, 300);

    switch(box){
        default:
            let defaultSky = [];
            let texture_ft = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-front.jpg');
            let texture_bk = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-back.jpg');
            let texture_up = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-up.jpg');
            let texture_dn = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-dn.jpg');
            let texture_rt = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-right.jpg');
            let texture_lf = new THREE.TextureLoader().load( '/res/images/skybox/day01/day01-left.jpg');

            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_up }));
            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
            defaultSky.push(new THREE.MeshBasicMaterial( { map: texture_bk }));

            for (let i = 0; i < 6; i++){
                defaultSky[i].side = THREE.BackSide;
            }

            let skybox = new THREE.Mesh( skyboxGeo, defaultSky );
            scene.add(skybox);
            console.log('skybox added.');   
    }
    
}

export {loadSkybox};