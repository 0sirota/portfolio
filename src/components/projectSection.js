"use client";

import React from "react";



const Project = () => {
    return (
        <section id="projects" className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">A brief description of the project.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">A brief description of the project.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-600">A brief description of the project.</p>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Project;