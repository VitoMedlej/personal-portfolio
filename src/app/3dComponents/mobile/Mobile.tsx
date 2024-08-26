"use client";
import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MobileButtons from '../MobileButtons/MobileButtons';
import { useLoadState } from '../Context/Context';
import { Box } from '@mui/material';

export default function Home() {
    const canvasRef = useRef < any > (null);
    const {isLoaded, setLoaded} = useLoadState()
    useEffect(() => {
        if (!canvasRef.current) 
            return;
        let modelsLoaded = false;



        const enterFullscreen = () => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
          }
        };
    
        document.addEventListener('click', enterFullscreen);

        let isMovingRight= false;
        let isMovingLeft  = false;
        let isMovingForward = false;
        let isMovingBackward= false;
        
        // const velocity = new THREE.Vector3();
        const onKeyDown = (event : KeyboardEvent | any) => {

            switch (event.key) {
                    // case 'w':   controls.moveForward(1);   break; case 'a':
                    // controls.moveRight(-1);   break; case 's':   controls.moveForward(-1); break;
                    // case 'd':   controls.moveRight(1);   break;
                case 'w':
                        isMovingForward= true
                    break;
                case 'a':
                  isMovingRight= true
                  break;
                  case 's':
                    isMovingBackward= true
                    break;
                    case 'd':
                  isMovingLeft= true

                    break;
            }
        };
        const onKeyUp = (event : KeyboardEvent | any) => {
          switch (event.key) {
              case 'w':
              case 's':
                  isMovingForward = false;
                  isMovingBackward = false;
                  break;
              case 'a':
                isMovingRight = false;
                break;
                case 'd':
                isMovingLeft = false;
                  break;
          }
      };

        // Create a scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer

        let renderer = new THREE.WebGLRenderer({canvas: canvasRef.current, antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create a geometry
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

        // Create a material
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

        // Create meshes
        // const cube = new THREE.Mesh(boxGeometry, material);
        // const sphere = new THREE.Mesh(sphereGeometry, material);


        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight
            .position
            .set(10, 20, 10);
        scene.add(directionalLight);

        // Camera
        camera
            .position
            .set(0, 10, 20); // Adjust position for better view


        renderer.setSize(window.innerWidth, window.innerHeight);
   

        const ambientLight = new THREE.AmbientLight('white',0.25)
        ambientLight.position.set(0,10,0);
        scene.add(ambientLight);
        

 
        const loader = new THREE.TextureLoader();


        const gltfloader = new GLTFLoader();
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
          }
          else {
            setLoaded(false);

          }
            // Trigger rendering after models load
        }, undefined, (error: any) => {
          setLoaded(false);

          console.error('An error occurred loading the model:', error);
        });
        
        
        const texture3 = loader.load("/materials/woodfloor.jpg", function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(3, 3);
        });
        
 
        
        const light2 = new THREE.SpotLight('white', 1.7);
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




     

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,antialias: true
      });

      renderer.setSize(window.innerWidth, window.innerHeight);




      
  


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
const tvmaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
const tvScreen = new THREE.Mesh(geometry, tvmaterial);

// Position the TV screen where you need it
tvScreen.position.set(7, 34, -52); // Adjust position as needed

// Add the TV screen to your scene
scene.add(tvScreen);



 
    

        let isDragging = false;
        const previousTouchPosition = {
            x: 0,
            y: 0
        };

        let pitch = 0;
        let yaw = 0;

        // if (isMovingBackward) {     camera.position.addScaledVector(direction,
        // -speed); } Listen for touchstart event
        window.addEventListener('touchstart', (e) => {
            isDragging = true;
            previousTouchPosition.x = e.touches[0].clientX;
            previousTouchPosition.y = e.touches[0].clientY;
        });

        // Listen for touchend event
        window.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Listen for touchmove event
        window.addEventListener('touchmove', (e) => {
            const currentTouchPosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };

            if (isDragging) {
                const deltaMove = {
                    x: currentTouchPosition.x - previousTouchPosition.x,
                    y: currentTouchPosition.y - previousTouchPosition.y
                };

                yaw += deltaMove.x * 0.01;
                pitch += deltaMove.y * 0.01;

                pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));

                // Update camera rotation
                camera
                    .rotation
                    .set(pitch, yaw, 0, 'YXZ');
            }

            previousTouchPosition.x = currentTouchPosition.x;
            previousTouchPosition.y = currentTouchPosition.y;

        });

        const buttons : any = document.querySelectorAll('.mobile-button')

        buttons.forEach((button : any) => {
            button.addEventListener('touchstart', (e : any) => {
                onKeyDown({
                    key: `${e.target
                        ?.id}`
                })
            })
            button.addEventListener('touchend', (e : any) => {
                onKeyUp({
                    key: `${e.target
                        ?.id}`
                })
            })
        })

        let speed = 0.4;


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


const checkCollision = (cameraBoundingBox: THREE.Box3, boundingBoxes: THREE.Box3[]): boolean => {
  for (const box of boundingBoxes) {
      if (cameraBoundingBox.intersectsBox(box)) {
          return true;
      }
  }
  return false;
};

// Create bounding boxes for barriers
const barrierBoundingBoxes = barriers.map(barrier => {
  const boundingBox = new THREE.Box3().setFromObject(barrier);
  return boundingBox;
});



const startRendering = () => {
  setLoaded(true);

  const animate = () => {
    requestAnimationFrame(animate);

    if (modelsLoaded) {
      renderer.render(scene, camera);
    }
    camera.position.y = 15;

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    const right = new THREE.Vector3();
    right.crossVectors(camera.up, direction).normalize();

    const offset = 0.9; // Amount to kick back if needed

    // Calculate intended movement and check for collisions before applying it
    const intendedPosition = camera.position.clone();

    if (isMovingRight) {
      intendedPosition.addScaledVector(right, speed);
    }
    if (isMovingLeft) {
      intendedPosition.addScaledVector(right, -speed);
    }
    if (isMovingForward) {
      intendedPosition.addScaledVector(direction, speed);
    }
    if (isMovingBackward) {
      intendedPosition.addScaledVector(direction, -speed);
    }

    // Create a bounding box for the intended position
    const intendedBoundingBox = new THREE.Box3().setFromCenterAndSize(intendedPosition, new THREE.Vector3(1, 1, 1)); // Adjust size as needed

    // Check for collisions
    const collisionDetected = checkCollision(intendedBoundingBox, barrierBoundingBoxes);

    // Only update the camera position if no collision is detected
    if (!collisionDetected) {
      camera.position.copy(intendedPosition);
    } else {
      // Optionally add a kick-back if a collision is detected
      if (isMovingRight) {
        camera.position.sub(right.clone().multiplyScalar(offset));
      }
      if (isMovingLeft) {
        camera.position.sub(right.clone().multiplyScalar(-offset));
      }
      if (isMovingForward) {
        camera.position.sub(direction.clone().multiplyScalar(offset));
      }
      if (isMovingBackward) {
        camera.position.sub(direction.clone().multiplyScalar(-offset));
      }
    }
  };

  animate();
};
        // Cleanup on unmount
        return () => {
            window.removeEventListener('touchstart', () => {});
            window.removeEventListener('touchend', () => {});
            window.removeEventListener('touchmove', () => {});
            renderer.dispose();
            material.dispose();
            boxGeometry.dispose();
            sphereGeometry.dispose();
            document.removeEventListener('click', enterFullscreen);

        };
    }, []);

    return <> 
   {/* <PictureFrame ref={pictureFrameRef} /> */}
    
   <>
  <div id="fullscreen-container" style={{ position: 'relative',width: '100%',  height: '100vh' }}>
      <canvas ref={canvasRef} style={{     width: '100%', height: '100%' }} />
      <MobileButtons isLoaded={isLoaded} />
    </div>
   
    {!isLoaded ? <div id="fullscreen-container" style={{
      paddingTop:'51vh',
      textAlign:'center',
      
      height:'50vh', background:'black',color:'white', position: 'absolute',top:'0',right:0,width: '100%' }}>
     <h1 style={{paddingTop:'1em'}}>
     Loading 3D models, please wait... 
     </h1>
    </div>
  : <></>  
  }
  </>
  </ >
};
