"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls




const Construction = () => {

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
    '/assets/3D/construction_barricades/scene.gltf',
      (gltf) => {
        const scale = 3;
        gltf.scene.scale.set(scale, scale, scale);

        // gltf.scene.rotation.set(-Math.PI / 4, 0, 0); // Rotate 45 degrees on the Y-axis
        gltf.scene.position.set(0, 1, 0); 
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
      if (mixerRef.current) mixerRef.current.update(0.012);
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
    <section id="construction" className=" py-10 dark:bg-zinc-950 text-white">
      <section className=" bg-zinc-950 text-white ">
      <div className="container mx-auto px-6 text-center mb-4">
        <h2 className="text-8xl font-bold mb-4" style={{ fontSize: "2rem" }}>This page is under construction</h2>
      </div>
      </section>

      {/* 3D Model Container */}
      <div
          ref={containerRef}
          className="w-full  flex justify-center"
          style={{
            height: "400px",
            width: "100%",
          }}
        ></div>

    </section>
  );
};

export default Construction;





