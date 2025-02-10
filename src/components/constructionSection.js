"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls




const Construction = () => {
  const containerRef = useRef(null); // Reference to the container div

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(1200, 700);     //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x18181B, 1); // Sets the background color of the Three.js scene to bg-zinc-900

    containerRef.current.appendChild(renderer.domElement);

    // Set up the ambient light to provide basic lighting to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Soft ambient light
    scene.add(ambientLight);

    // Add a point light to illuminate the model more directly
    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(5, 5, 5); // Position the point light
    scene.add(pointLight);

    // Add a directional light to provide stronger, more focused light (like sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize(); // Position and normalize the direction
    scene.add(directionalLight);

    // Load the textures using THREE.TextureLoader

    // Load the GLTF model using GLTFLoader
    const loader = new GLTFLoader();
    let mixer; // Animation mixer to handle animations
    loader.load(
        '/assets/3D/construction_barricades/scene.gltf',
        (gltf) => {
          console.log('GLTF model loaded successfully');
      
          // Scale the model
          gltf.scene.scale.set(1, 1, 1);
      
          // ✅ Set initial rotation (Adjust as needed)
          gltf.scene.rotation.set(-Math.PI / 4, 0, 0); // Rotate 45 degrees on the Y-axis
      
          // Add the model to the scene
          scene.add(gltf.scene);
      
          // Set up animations
          mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF model:', error);
        }
      );

    // Position the camera
    camera.position.set(0, 1, 0.5); // Adjust the camera to focus on the model

    // Add OrbitControls for better interaction (zoom, rotate)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation (no up/down rotation)
    // controls.minPolarAngle = Math.PI / 2; // No negative vertical rotation (no up/down movement)
  

    controls.enabled = true; // Disable interaction
    controls.enableRotate = true;
    controls.enableZoom = true;   // Disable zoom
    controls.enablePan = true;    // Disable panning (moving the model)

 

    // Update camera aspect ratio and renderer size on window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

    };
    window.addEventListener('resize', onWindowResize);

    // Set up an animation loop to render the scene and animate the model
    function animate() {
      requestAnimationFrame(animate);

      if (mixer) {
        mixer.update(0.01); // Update the animation mixer with a small delta time for smoother animation
      }

      // controls.update(); // Update controls for smooth interaction
      renderer.render(scene, camera);
    }

    animate();

    // Clean up the scene and listeners on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
    };
  }, []);




  return (
    <section id="construction" className="py-10 bg-zinc-900 text-white">
      <section className="bg-zinc-900 text-white py-5">
      <div className="container mx-auto px-6 text-center mb-4">
        <h2 className="text-8xl font-bold mb-4" style={{ fontSize: "2rem" }}>This page is under construction</h2>
      </div>
      </section>

      {/* 3D Model Container */}
      <div ref={containerRef} className="w-full h-[100px] flex justify-center"></div>

    </section>
  );
};

export default Construction;





