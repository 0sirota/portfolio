"use client";

import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBriefcase,
  IconMail,
  IconHome,
  IconBrandLinkedin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const links = [
    { title: "Home", icon: <IconHome />, href: "#home" },
    { title: "Projects", icon: <IconBriefcase />, href: "#projects" },
    { title: "Contact", icon: <IconMail />, href: "#contact" },
    { title: "GitHub", icon: <IconBrandGithub />, href: "https://github.com/0sirota", target: "_blank" },
    { title: "LinkedIn", icon: <IconBrandLinkedin />, href: "https://www.linkedin.com/in/oliver-sirota", target: "_blank" },
  ];

  const handleLinkClick = () => setSidebarOpen(false);

  return (
    <>
      {/* Header */}
      <header
        className={`bg-gray-50 dark:bg-zinc-900 transition-[height] duration-300 relative z-50 ${
          hovered && !isMobile ? "h-14" : "h-12"
        }`}
      >
        <div className="flex items-center justify-between h-full p-4">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <Image src="/assets/logos/logo5.png" alt="Logo" width={60} height={60} />
            <h1 className="text-2xl md:text-3xl font-Helvetica font-bold text-black dark:text-neutral-200">
              Oliver Sirota
            </h1>
          </div>

          {/* Desktop Floating Dock */}
          <div
            className="ml-auto hidden md:flex"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FloatingDock items={links} hovered={hovered} />
          </div>

          {/* Mobile Burger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors z-50 relative pointer-events-auto"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            type="button"
          >
            {sidebarOpen ? <IconX className="h-6 w-6 text-black dark:text-neutral-200" /> : <IconMenu2 className="h-6 w-6 text-black dark:text-neutral-200" />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleLinkClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-zinc-900 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "auto", minWidth: "200px", maxWidth: "80%" }}
      >
        <nav className="h-full flex flex-col justify-between py-6">
          {/* Links */}
          <ul className="flex flex-col flex-1 justify-around">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={handleLinkClick}
                  className="flex items-center px-4 py-6 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group"
                  style={{ gap: "16px" }}
                >
                  <div className="h-8 w-8 flex-shrink-0 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {React.cloneElement(link.icon, { className: "h-full w-full" })}
                  </div>
                  <span className="text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {link.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
