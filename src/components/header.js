"use client";

import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBriefcase,
  IconFileText,
  IconMessage,
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

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    // {
    //   title: "Resume",
    //   icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: "#resume",
    // },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/0sirota",
      target: "_blank",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/oliver-sirota",
      target: "_blank",
    },
  ];

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header
        className={`bg-gray-50 dark:bg-zinc-900 transition-[height] duration-300 relative z-50 ${
          hovered && !isMobile ? "h-14" : "h-12"
        }`}
      >
        <div className="flex items-center justify-between h-full p-4">
          {/* Left Section: Logo and Title */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Image
              src="/assets/logos/logo5.png"
              alt="Logo"
              width={60}
              height={60}
            />
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-Helvetica font-bold text-black dark:text-neutral-200">
              Oliver Sirota
            </h1>
          </div>

          {/* Desktop Navigation: Floating Dock */}
          <div
            className="ml-auto hidden md:flex"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FloatingDock items={links} hovered={hovered} />
          </div>

          {/* Mobile Navigation: Burger Menu */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu2 className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-black dark:text-neutral-200">
            Navigation
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close menu"
          >
            <IconX className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={handleLinkClick}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <div className="h-6 w-6 flex-shrink-0">
                    {React.cloneElement(link.icon, {
                      className: "h-full w-full text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors"
                    })}
                  </div>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">
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