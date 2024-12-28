"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

const About = () => {
  const containerRef = useRef(null); // Reference to the container div

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    const textureLoader = new THREE.TextureLoader();
    const textureBaseColor = textureLoader.load('/assets/3D/smol_ame_in_an_upcycled_terrarium_hololiveen/textures/pasokon_baseColor.png');
    const textureTerrariumBaseColor = textureLoader.load('/assets/3D/smol_ame_in_an_upcycled_terrarium_hololiveen/textures/terrarium1_baseColor.png');

    // Load the GLTF model using GLTFLoader
    const loader = new GLTFLoader();
    let mixer; // Animation mixer to handle animations
    loader.load(
      '/assets/3D/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf', // Correct path to your GLTF model
      (gltf) => {
        console.log('GLTF model loaded successfully');
        
        // Traverse the model and apply the textures
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            if (child.name.includes("pasokon")) {
              child.material.map = textureBaseColor; // Apply pasokon texture
            } else if (child.name.includes("terrarium")) {
              child.material.map = textureTerrariumBaseColor; // Apply terrarium texture
            }
            child.material.needsUpdate = true; // Ensure material gets updated
          }
        });

        // Scale the entire model to make it smaller
        gltf.scene.scale.set(0.5, 0.5, 0.5); // Scale down by 50%

        scene.add(gltf.scene); // Add the model to the scene

        // Set up the animation mixer for animations
        mixer = new THREE.AnimationMixer(gltf.scene);

        // Play all animations from the model
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play(); // Play each animation clip
        });
      },
      undefined, // Optional progress handler
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Position the camera
    camera.position.set(0, 1, 3); // Adjust the camera to focus on the model

    // Add OrbitControls for better interaction (zoom, rotate)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

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

      controls.update(); // Update controls for smooth interaction
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
    <section className="bg-gray-100 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I’m Oliver Sirota, a passionate software engineering student.
        </p>
      </div>

      {/* 3D container */}
      <div ref={containerRef} style={{ width: "50%", height: "500px"}} className=" px-6 py-100 "></div>
    </section>
  );
};

export default About;
