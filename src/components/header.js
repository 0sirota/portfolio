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

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  // Calculate dynamic vertical spacing for sidebar options
  const getItemSpacing = () => {
    const totalItems = links.length;
    const topBottomPadding = 16; // px
    const availableHeight = window.innerHeight - topBottomPadding * 2;
    return availableHeight / totalItems - 48; // subtract estimated item height
  };

  return (
    <>
      <header
        className={`bg-gray-50 dark:bg-zinc-900 transition-[height] duration-300 relative z-50 ${
          hovered && !isMobile ? "h-14" : "h-12"
        }`}
      >
        <div className="flex items-center justify-between h-full p-4">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <Image src="/assets/logos/logo5.png" alt="Logo" width={60} height={60} />
            <h1 className="text-2xl md:text-3xl font-Helvetica font-bold text-black dark:text-neutral-200">
              Oliver Sirota
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div
            className="ml-auto hidden md:flex"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FloatingDock items={links} hovered={hovered} />
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors z-50 relative pointer-events-auto"
            onClick={toggleSidebar}
            aria-label="Open menu"
            type="button"
          >
            <IconMenu2 className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "max-content", minWidth: 200, padding: "16px 8px" }}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={closeSidebar}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-110"
            aria-label="Close menu"
          >
            <IconX className="h-6 w-6 text-black dark:text-neutral-200" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col justify-between h-[calc(100%-64px)]">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              onClick={closeSidebar}
              className="flex items-center px-2 py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group"
              style={{ marginBottom: index < links.length - 1 ? 16 : 0 }}
            >
              <div className="h-6 w-6 flex-shrink-0 mr-4">
                {React.cloneElement(link.icon, {
                  className:
                    "h-full w-full text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200",
                })}
              </div>
              <span className="text-lg text-neutral-800 dark:text-neutral-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {link.title}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
