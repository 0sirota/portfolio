"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

import { TypewriterEffectSmooth } from ".//ui/typewriter-effect";

const Hero = () => {
  const containerRef = useRef(null); 
  const rendererRef = useRef(null);  // Ref for the renderer
  const mixerRef = useRef(null);  // Ref for the animation mixer
  const cameraRef = useRef(null);  // Ref for the camera
  const modelRef = useRef(null);  // Ref for the 3D model
  const [isHidden, setIsHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if device is desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Dynamic words based on device type
  const words1 = [
    {
      text: isDesktop ? "Hi!👋" : "Hi!",
      className: "",
    },
  ];

  const words2 = [
    {
      text: "My name is Oliver Sirota.",
      className: "",
    },
  ];

  const words3 = [
    {
      text: "Welcome to my portfolio!",
      className: "",
    },
  ];

  // Function to update positioning based on screen size
  const updatePositioning = () => {
    if (!cameraRef.current || !modelRef.current) return;

    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

    if (isMobile) {
      // Mobile: Move camera and model more to the left
      cameraRef.current.position.set(-1.25, 1, 5);
      modelRef.current.position.set(-0.75, 0, 0);
    } else if (isTablet) {
      // Tablet: Slight adjustment
      cameraRef.current.position.set(-1.5, 1, 5);
      modelRef.current.position.set(-0.5, 0, 0);
    } else {
      // Desktop: Original positioning
      cameraRef.current.position.set(-2, 1, 5);
      modelRef.current.position.set(0, 0, 0);
    }
  };

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
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x09090b, 1);

    containerRef.current.appendChild(renderer.domElement);

    // Save the renderer and camera to refs
    rendererRef.current = renderer;
    cameraRef.current = camera;

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
      "/assets/3D/space_ame_camping_-_amelia_watson_hololive/scene.gltf",
      (gltf) => {
        const scale = 1.5;
        gltf.scene.scale.set(scale, scale, scale);
        gltf.scene.rotation.set(0, -0.5, 0);
        scene.add(gltf.scene);

        // Save the model to ref for positioning updates
        modelRef.current = gltf.scene;

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.clampWhenFinished = true;
          action.play();
        });

        // Save the mixer to the ref for updates
        mixerRef.current = mixer;

        // Apply initial positioning
        updatePositioning();
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    camera.position.set(-2, 1, 5);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.25;
    // controls.screenSpacePanning = false;

    const onWindowResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      
      // Update positioning on resize
      updatePositioning();
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
    <section id="hero" className="dark:bg-zinc-950 text-white relative w-full h-screen overflow-hidden">
      {/* 3D Model Background */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      ></div>

      {/* Hero Text Overlay - Responsive positioning and sizing */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 pointer-events-none">
        <div 
          className="text-left"
          style={{ 
            marginLeft: 'clamp(1.5rem, 12vw, 20rem)',
            marginTop: '-50vh',
            width: 'auto',
            display: 'block'
          }}
        >
          {/* First text line */}
          <div style={{ fontSize: 'clamp(1.5rem, 3vw, 4rem)' }}>
            <TypewriterEffectSmooth 
              words={words1} 
              duration={0.4} 
              delay={1}
              containerClassName="block my-4 sm:my-6 md:my-8"
              textClassName="!text-[1em] font-bold"
            />
          </div>
          
          {/* Second text line */}
          <div style={{ fontSize: 'clamp(1.5rem, 3vw, 4rem)' }}>
            <TypewriterEffectSmooth 
              words={words2} 
              duration={1.1} 
              delay={2.5}
              containerClassName="block my-4 sm:my-6 md:my-8"
              textClassName="!text-[1em] font-bold"
            />
          </div>
          
          {/* Third text line */}
          <div style={{ fontSize: 'clamp(1.5rem, 3vw, 4rem)' }}>
            <TypewriterEffectSmooth 
              words={words3} 
              duration={1.1} 
              delay={5}
              containerClassName="block my-4 sm:my-6 md:my-8"
              textClassName="!text-[1em] font-bold"
            />
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;