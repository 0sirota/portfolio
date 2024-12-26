"use client";

import React from "react";


const About = () => {
    return (
        <>
        <section className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m Oliver Sirota, a passionate software engineering student.
          </p>
        </div>
      </section>
    
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m [Your Name], a passionate [your profession] with expertise in [your skills].
            I enjoy creating, learning, and solving real-world problems through technology.
          </p>
        </div>
      </section>
        </>

  );
};

export default About;








