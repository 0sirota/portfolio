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

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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

  return (
    <>
      <header
        className={`bg-gray-50 dark:bg-zinc-900 transition-[height] duration-300 relative z-30 ${
          hovered ? "h-14" : "h-12"
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
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors relative cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            type="button"
            style={{ cursor: "pointer", touchAction: "manipulation" }}
          >
            {sidebarOpen ? (
              <IconX className="h-6 w-6 text-black dark:text-neutral-200" />
            ) : (
              <IconMenu2 className="h-6 w-6 text-black dark:text-neutral-200" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {sidebarOpen && (
        <nav className="md:hidden bg-gray-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-4 pb-3 shadow-md">
          <ul className="space-y-1 pt-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={closeSidebar}
                  className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-150"
                >
                  <span className="h-5 w-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400">
                    {link.icon}
                  </span>
                  <span className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                    {link.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
