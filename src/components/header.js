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

  // Debug logging
  const toggleSidebar = () => {
    console.log('Burger clicked! Current state:', sidebarOpen);
    setSidebarOpen(prev => {
      const newState = !prev;
      console.log('Setting sidebar to:', newState);
      return newState;
    });
  };

  const closeSidebar = () => {
    console.log('Closing sidebar');
    setSidebarOpen(false);
  };

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
        className={`bg-gray-50 dark:bg-zinc-900 transition-[height] duration-300 relative z-40 ${
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
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors z-100 relative cursor-pointer"
            onClick={toggleSidebar}
            onTouchEnd={(e) => {
              e.preventDefault();
              toggleSidebar();
            }}
            aria-label="Open menu"
            type="button"
            style={{ cursor: 'pointer', touchAction: 'manipulation' }}
          >
            <IconMenu2 className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden transition-opacity duration-500 cursor-pointer ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        onTouchEnd={(e) => {
          e.preventDefault();
          closeSidebar();
        }}
        style={{ cursor: 'pointer', touchAction: 'manipulation' }}
        role="button"
        aria-label="Close sidebar"
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-auto min-w-[200px] bg-white dark:bg-zinc-900 shadow-2xl transform transition-all duration-500 ease-in-out z-50 md:hidden ${
          sidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-3">
          <button
            onClick={closeSidebar}
            onTouchEnd={(e) => {
              e.preventDefault();
              closeSidebar();
            }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-110 cursor-pointer"
            aria-label="Close menu"
            type="button"
            style={{ cursor: 'pointer', touchAction: 'manipulation' }}
          >
            <IconX className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="px-3 pb-3">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={closeSidebar}
                  className="flex items-center space-x-6 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group hover:scale-105"
                >
                  <div className="h-6 w-6 flex-shrink-0">
                    {React.cloneElement(link.icon, {
                      className: "h-full w-full text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                    })}
                  </div>
                  <span className="text-base text-neutral-800 dark:text-neutral-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 whitespace-nowrap">
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