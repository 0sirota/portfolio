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

import { Toaster } from 'sonner';


export default function App() {
  useEffect(() => {
    // Apply dark mode by default when the component mounts
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#18181B";
    document.documentElement.style.backgroundColor = "#18181B";
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <Toaster
          position="top-center"
          duration={4000}
          theme="dark"
          richColors
          visibleToasts={5}
          toastOptions={{
            style: {
              minWidth: 'auto',
              width: 'fit-content',
              maxWidth: '500px',
              padding: '12px 16px',
            },
            classNames: {
              toast: "mx-auto text-center flex items-center justify-center whitespace-nowrap",
              title: "text-sm font-medium",
              description: "text-xs",
              actionButton: "bg-zinc-400",
              cancelButton: "bg-orange-400",
            },
          }}
        />

        <Header />
        {/* <ConstructionSection /> */}
        <HeroSection />
        {/* <AboutSection /> */}
        <ProjectsSection />
        {/* <ResumeSection /> */}
        {/* <MacbookScrollDemo /> */}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}