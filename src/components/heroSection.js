"use client";

import React, { useEffect, useRef, useState  } from "react";
import * as THREE from "three"; // Import the core Three.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

import { TypewriterEffectSmooth } from ".//ui/typewriter-effect";
import { TypewriterEffect } from ".//ui/typewriter-effect";



const Hero = () => {
  const containerRef = useRef(null); // Reference to the container div

  const [isHidden, setIsHidden] = useState(false);

  const words1 = [

    {
      text: "Hi!👋",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words2 = [

    {
      text: "My name is Oliver Sirota.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words3 = [

    {
      text: "Welcome to my portfolio!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];




  return (
    <section id="resume" className="dark:bg-zinc-950 text-white">
      <section className="dark:bg-zinc-950 text-white py-2">
      <div className="container mx-auto  text-center">
      <TypewriterEffectSmooth words={words1} duration={0.4} delay={1}/>
      <TypewriterEffectSmooth words={words2} duration={1.1} delay={2.5} />
      <TypewriterEffectSmooth words={words3}  duration={1.1} delay={5}/>

{/* 
        <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg">Showcasing my skills, projects, and experiences.</p> */}
      </div>
      </section>

      {/* 3D Model Container */}
      {/* <div ref={containerRef} style={{ width: "100%", height: "500px" }} className="px-6 py-100 hidden"></div> */}
    </section>
  );
};

export default Hero;





