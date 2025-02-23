"use client";
import React, { useEffect } from "react";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ProjectsSection from "../components/projectSection";
import ResumeSection from "../components/resumeSection";
import ContactSection from "../components/contactSection";
import Footer from "../components/footer";
import MacbookScrollDemo from "../components/macbook";

import { TracingBeam } from "../components/ui/tracing-beam";


import ConstructionSection from "../components/constructionSection";


export default function App() {
  useEffect(() => {
    // Apply dark mode by default when the component mounts
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className=" min-h-screen">
      <Header />
      <ConstructionSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ResumeSection /> */}
      {/* <MacbookScrollDemo /> */}
      <ContactSection />


      <Footer />
    </div>
  );
}
