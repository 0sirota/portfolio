"use client";

import React, { useEffect } from "react";

import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ProjectsSection from "../components/projectSection";
import ResumeSection from "../components/resumeSection";
import ContactSection from "../components/contactSection";
import Footer from "../components/footer";


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
