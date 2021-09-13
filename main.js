import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

class Website3Ddemo {
    constructor() {
        this._Initialize();
    } 
    _Initialize() {
        this._threejs = new THREE.WebGlRenderer({
            antialias: true,
            alpha: true,
        });
    } 
    
} 
this._threejs.shadowmap.enabled = true;
this._threejs.shadowmap.type = THREE.PCFsoftShadowMap;
this._threejs.physicallyCorrectlights = true;
this._threejs.toneMapping = THREE.ACESFilmicToneMapping;
this._threejs.outputEncoding = THREE.sRGBEncoding;

const moduleDiv = document.getElementById('model');
moduleDiv.appendChild(this._threejs.domElement);

this._threejs.setSize(moduleDiv.offsetWidth, moduleDiv.offsetHeight);

window.addEventListener('resize', () => {
    this._OnwindowResize();
}, false);

const fov = 60;
const aspect = moduleDiv.offsetWidth / moduleDiv.offsetHeight;
const near = 1.0;
const far = 1000.0;
this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
this._Camera.position.set(15, 15, 20);
this._scene = new THREE._Scene();

let light = new THREE.DirectionalLight(0xFFFFFF);
light.position.set(20,100, 10);
light.target.position.set(0,0,0);
light.castShadow = true;
light.shadow.bias= -0.001;
light.shadow.mapSize.width= 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 500.0;
light.shadow.camera.near= 0.5;
light.shadow.camera.far= 500.0;
light.shadow.camera.left= 100;
light.shadow.camera.right= -100;
light.shadow.camera.top=  100;
light.shadow.camera.bottom = -100;
this._scene.add(light); 

light = new THREE.AmbientLight(0xFFFFFF);
this._scene.add(light);

this._controls = new OrbitControls(
    this._camera, this._threejs.domElement);

this._controls.target.set(0,10,0);
this._controls.update(); 
this._LoadAnimateModelAndPlay(
    'mremireh_o_desbiens.fbx',
    
)