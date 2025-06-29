"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

import styles from "../styles/roundContainer.module.css";

import { TypewriterEffectSmooth } from ".//ui/typewriter-effect";


const About = () => {
  const containerRef = useRef(null); 
  const rendererRef = useRef(null);  // Ref for the renderer
  const mixerRef = useRef(null);  // Ref for the animation mixer

  useEffect(() => {
    // Only initialize the scene and renderer if they haven't been created yet
    if (rendererRef.current) return;  // Skip if already initialized

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x09090b, 1);

    containerRef.current.appendChild(renderer.domElement);

    // Save the renderer to the ref so it persists across renders
    rendererRef.current = renderer;

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
      "/assets/3D/robot_playground/scene.gltf",
      (gltf) => {
        const scale = 1.5;
        gltf.scene.scale.set(scale, scale, scale);
        scene.add(gltf.scene);

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.clampWhenFinished = true;
          action.play();
        });

        // Save the mixer to the ref for updates
        mixerRef.current = mixer;
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    camera.position.set(0, 1, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    const onWindowResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      if (mixerRef.current) mixerRef.current.update(0.008);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      // Clean up the renderer and scene when the component unmounts
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <section className="bg-gray-200 dark:bg-zinc-950 dark:text-white w-full">
      <div className="container mx-auto px-0 py-8 flex flex-col md:flex-row items-start gap-1">
        {/* Left Column */}
        <div className="text-center md:text-left w-full md:w-3/5 self-start px-0">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m Oliver Sirota, a passionate software engineering student.
          </p>
        </div>

        {/* Right Column */}
        <div
          ref={containerRef}
          className="w-full md:w-2/5 px-0"
          style={{
            height: "600px",
            width: "100%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default About;