"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
// import MobileButtons from "../MobileButtons/MobileButtons";
import { GLTFLoader } from "three-stdlib";
// import Stats from 'stats.js';
import { useFullscreen, useLoadState } from "../Context/Context";


const ThreeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isfullscreen, setFullScreen } = useFullscreen();
  const {isLoaded, setLoaded} = useLoadState()
  

  
  useEffect(() => {
    let modelsLoaded = false;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      controls: PointerLockControls;

    const velocity = new THREE.Vector3();
    const onKeyDown = (event: KeyboardEvent | any) => {
      switch (event.key) {
        case "w":
          velocity.z = -0.4;
          break;
        case "a":
          velocity.x = -0.4;
          break;
        case "s":
          velocity.z = 0.4;
          break;
        case "d":
          velocity.x = 0.4;
          break;
      }
    };
    const onKeyUp = (event: KeyboardEvent | any) => {
      switch (event.key) {
        case "w":
        case "s":
          velocity.z = 0;
          break;
        case "a":
        case "d":
          velocity.x = 0;
          break;
      }
    };

    const init = () => {
      const buttons: any = document.querySelectorAll(".mobile-button");

      buttons.forEach((button: any) => {
        button.addEventListener("touchstart", (e: any) => {
          onKeyDown({ key: `${e.target?.id}` });
        });
        button.addEventListener("touchend", (e: any) => {
          onKeyUp({ key: `${e.target?.id}` });
        });
      });


      const loader = new THREE.TextureLoader();

      scene = new THREE.Scene();
      // const objectLoader = new OBJLoader();



     
//         const stats = new Stats();

// const panel = new Stats.Panel("FPS", "#ff0000", "#0000ff");
//         stats.addPanel(panel);
//         stats.showPanel(0);

// Camera
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 15, 25);

// document.body.appendChild(stats.dom);


// Renderer
renderer = new THREE.WebGLRenderer({
  canvas: canvasRef.current!, antialias: true
  , precision: 'highp'
});
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;



const gltfloader = new GLTFLoader();
// const textureLoader = new THREE.TextureLoader();

gltfloader.load('/materials/new.glb', (gltf: any) => {
  gltf.scene.traverse((node: any) => {
    if (node instanceof THREE.Mesh) {
      // node.receiveShadow = true;
      // node.castShadow = true;
    }
  });
  gltf.scene.scale.set(6, 6, 6);
  gltf.scene.position.set(5, -5, 5);
  scene.add(gltf.scene);

  modelsLoaded = true;
  if (modelsLoaded) {
    startRendering();
    setLoaded(true);
  } else {
    setLoaded(false);
  }
}, undefined, (error: any) => {
  setLoaded(false);

  console.error('An error occurred loading the model:', error);
});


const texture3 = loader.load("/materials/woodfloor.jpg", function (texture : any) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.offset.set(0, 0);
  texture.repeat.set(3, 3);
});


const light2 = new THREE.SpotLight('white', 0.4);
light2.position.set(0, 70, 0);
light2.decay = 0.1;
light2.intensity = 2;
light2.distance = 110;

light2.angle = Math.PI / 1; 
// light2.castShadow = true;


// const lighthelper = new THREE.SpotLightHelper(light2) 



const targetObject = new THREE.Object3D();
targetObject.position.set(60, 20, -50);
scene.add(targetObject);

// Set the target of the directional light
light2.target = targetObject;


scene.add(light2.target);
scene.add(light2);




const terrainGeometry = new THREE.PlaneGeometry(130, 130, 50, 130);
const terrainMaterial = new THREE.MeshStandardMaterial({ map: texture3 });


const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);

terrain.rotation.x = -Math.PI / 2;
terrain.position.y = -2;
// terrain.receiveShadow = true;



scene.add(terrain);


const wallThickness = 0.1;
const wallHeight = 10;
const wallLength = 130;

const createBarrier = (x: number, z: number, width: number, depth: number) => {
  const barrier = new THREE.Mesh(
    new THREE.BoxGeometry(width, wallHeight, depth),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0  })
  );
  barrier.position.set(x, wallHeight / 1, z); // Adjust based on room dimensions
  return barrier;
};
const barriers: THREE.Mesh[] = [];
// Define positions and sizes for your barriers
const leftBarrier = createBarrier(-37, 0, wallThickness, wallLength);

const rightBarrier = createBarrier(55, 11, wallThickness, wallLength);
const frontBarrier = createBarrier(0, -51, wallLength, wallThickness);
const backBarrier = createBarrier(0, 55, wallLength, wallThickness);

scene.add(leftBarrier, rightBarrier,frontBarrier,backBarrier);
barriers.push(leftBarrier, rightBarrier, frontBarrier,backBarrier);



const checkCollision = (cameraPosition: THREE.Vector3) => {
  const cameraBox = new THREE.Box3().setFromCenterAndSize(
    cameraPosition,
    new THREE.Vector3(1, 1, 1) // Adjust size for better collision detection
  );

  for (const barrier of barriers) {
    const barrierBox = new THREE.Box3().setFromObject(barrier);
    if (cameraBox.intersectsBox(barrierBox)) {
      return true;
    }
  }
  return false;
};


// gltfloader.load('/materials/frame2.glb', (gltf) => {
//   gltf.scene.traverse((node: THREE.Object3D) => {
//     // if (node instanceof THREE.Mesh) {
//     //   if (node.name === 'laptop') {
//     //     console.log('node: ', node.name);
//     //     const material = new THREE.MeshStandardMaterial({ map: dummyTexture });
//     //     node.material = material;
//     //   }
//     // }
//   });
  

//   gltf.scene.scale.set(6, 6, 6);
//   gltf.scene.position.set(-47, -5, 15);
//   scene.add(gltf.scene);
// }, undefined, (error) => {
//   console.error('An error occurred loading the model:', error);
// });

// gltfloader.load('/materials/frame.glb', (gltf) => {
//   // console.log('gltf: ', gltf);
//   gltf.scene.traverse((node: THREE.Object3D) => {
//     // console.log('node: ', node);

//   })
//   // const aoMap = textureLoader.load('/materials/a.png');
  
//   // gltf.scene.traverse((node: THREE.Object3D) => {
//   //   if ('isMesh' in node && (node as THREE.Mesh).isMesh) {


      
//   //     const meshNode = node as THREE.Mesh;
//   //     if (Array.isArray(meshNode.material)) {


//   //       meshNode.material.forEach((mat) => {
//   //         if ('aoMap' in mat) {
//   //           (mat as THREE.MeshStandardMaterial).aoMap = aoMap;
//   //           (mat as THREE.MeshStandardMaterial).needsUpdate = true;
//   //         }
//   //       });
//   //     } else if ('aoMap' in meshNode.material) {
//   //       (meshNode.material as THREE.MeshStandardMaterial).aoMap = aoMap;
//   //       (meshNode.material as THREE.MeshStandardMaterial).needsUpdate = true;
//   //     }
//   //   }
//   // });

//   gltf.scene.scale.set(5, 5, 5);
//   gltf.scene.position.set(5, 0, 55);
//   scene.add(gltf.scene);
// }, undefined, (error) => {
//   console.error('An error occurred loading the model:', error);
// });



      


// Video Element
const video = document.createElement('video');
video.src = '/materials/MyVideo_2.mp4'; // Path to your video
video.loop = true;
video.muted = true;
video.play();

// Create Video Texture
const videoTexture = new THREE.VideoTexture(video);
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
videoTexture.format = THREE.RGBFormat;

// Create Plane Geometry for the TV screen
const geometry = new THREE.PlaneGeometry(65, 40); // Adjust size to fit your TV
const material = new THREE.MeshBasicMaterial({ map: videoTexture });
const tvScreen = new THREE.Mesh(geometry, material);

// Position the TV screen where you need it
tvScreen.position.set(7, 34, -52); // Adjust position as needed

// Add the TV screen to your scene
scene.add(tvScreen);


  
const ambientLight = new THREE.AmbientLight('white',0.1)
ambientLight.position.set(0,10,0);
scene.add(ambientLight);

    //   scene.add(target, wall1, wall2, wall3, wall4);
      // obstacles.push(wall1, wall2, wall3, wall4);

      // obstacles.forEach((obstacle) => {
      //   const boundingBox = new THREE.Box3().setFromObject(obstacle);
      //   boundingBoxes.push(boundingBox);
      // });

    
      const handleLockChange = () => {
        const isLocked = document.pointerLockElement === canvasRef.current
        if (isLocked) {
          setFullScreen(true)
        }
        else {
          setFullScreen(false)

        }
      };

      controls = new PointerLockControls(camera, renderer.domElement);
      canvasRef.current!.addEventListener("click", () => {
        controls.lock();
      });

      scene.add(controls.getObject());
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);
      document.addEventListener('pointerlockchange', handleLockChange);

      const handleMovement = () => {
        const originalPosition = controls.getObject().position.clone();
        controls.moveRight(velocity.x * 1);
        controls.moveForward(-velocity.z * 1);
      
        if (checkCollision(controls.getObject().position)) {
          controls.getObject().position.copy(originalPosition); // Reset to original position if collision detected
        }
      };

      
      // or THREE.BasicShadowMap
      // scene.traverse(function (node) {
      //   if (node instanceof THREE.Mesh) {
      //     node.material.needsUpdate = true;
      //   }
      // });



     


      const startRendering = () => {
        const animate = () => {
          requestAnimationFrame(animate);
          // Render only when models are loaded
          if (modelsLoaded) {
            handleMovement();

            renderer.render(scene, camera);
            setLoaded(true);
          }
        };
        animate();
      };
    };
 
  
    init();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <>
    <div id="fullscreen-container" style={{ maxWidth:'1600px',margin:'0 auto', position: 'relative', width: '100vw', height: '100vh !Important' }}>
    <canvas ref={canvasRef} style={{ width: '100%', height: '100% !Important' }} />
  </div>
  {!isLoaded ? <div id="fullscreen-container" style={{
    // paddingTop:'51vh',
    textAlign:'center',
    
    height:'100vh', background:'black',color:'white', position: 'absolute',top:'0',right:0,width: '50vw' }}>
   <h1 style={{paddingTop:'1em'}}>
   Loading 3D models, please wait... 
   </h1>
  </div>
: <></>  
}
</>

  );
};

export default ThreeScene;