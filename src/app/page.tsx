"use client";

import React, { useEffect } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/contactSection";
import Footer from "../components/Footer";


const App = () => {
  useEffect(() => {
    // Apply dark mode by default when the component mounts
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <link rel="icon" href="/favicon.ico" />
      <Header/>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default App;
