"use client";

import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">My Resume</h2>
          <p className="text-lg text-gray-700 mb-6">
            Check out my resume to learn more about my education, experience, and skills.
          </p>
          <div>
            <a 
              href="assets/CV.pdf" 
              target="_blank" 
              className="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
            >
              View Resume
            </a>
            <a 
              href="../../public/assets/CV.pdf" 
              download 
              className="text-white bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 inline-block ml-4"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
  );
};

export default Resume;