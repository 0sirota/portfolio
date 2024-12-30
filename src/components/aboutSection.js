"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

import styles from "../styles/roundContainer.module.css";

const About = () => {
  const containerRef = useRef(null); // Reference to the container div

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x18181B, 1);
  
    containerRef.current.appendChild(renderer.domElement);
  
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
  
    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);
  
    const loader = new GLTFLoader();
    let mixer;
    loader.load(
      "/assets/3D/blossoming_boombox/scene.gltf",
      // "/assets/3D/robot_playground/scene.gltf",
      (gltf) => {
        const scale = 2;
        gltf.scene.scale.set(scale, scale, scale);
        scene.add(gltf.scene);


  
        gltf.scene.position.y = -1.5;



  
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce); // Play the animation only once
          action.clampWhenFinished = true; // Hold the final frame of the animation
          action.play();
        });
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
  
    camera.position.set(0, 1, 5);
  
    // Create OrbitControls and set the desired restrictions
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
  
    // Restrict rotation to only the X-axis
    // controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation (no up/down rotation)
    // controls.minPolarAngle = Math.PI / 2; // No negative vertical rotation (no up/down movement)
  
    // Disallow rotation on Y and Z axes (by locking the azimuthal rotation)
    controls.enableRotate = true;
    controls.enableZoom = true;   // Disable zoom
    controls.enablePan = true;    // Disable panning (moving the model)
  
    const onWindowResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);
  
    function animate() {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.01);
      renderer.render(scene, camera);
    }
    animate();
  
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);
  

  return (

    <section className="bg-gray-100 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto px-1 py-1 flex flex-col md:flex-row items-start gap-1">
        {/* Left Column */}
        <div className="text-center md:text-left w-full md:w-1/2 self-start">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m Oliver Sirota, a passionate software engineering student.
          </p>
        </div>
      

        {/* Right Column */}
        <div
  ref={containerRef}
  className={`${styles["round-container"]} ${"w-full"}`}
  style={{
    // height: "800px",
    // width: "1200px", // Adjust this to make the container wider
    border: "2px solid red", // Border added here to highlight the container
  }}
></div>

      </div>
    </section>
  );
};

export default About;
