"use client";

import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBriefcase,
  IconFileText,
  IconMessage,
  IconMail,
  IconHome,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";

const Header = () => {
  const [hovered, setHovered] = useState(false);

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
      title: "Resume",
      icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#resume",
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

  return (
    <header
      className={`bg-gray-50 dark:bg-neutral-950 transition-[height] duration-300 ${
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
          <h1 className="text-3xl font-Helvetica font-bold text-black dark:text-neutral-200">
            Oliver Sirota
          </h1>
        </div>

        {/* Right Section: Floating Dock */}
        <div
          className="ml-auto flex"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FloatingDock items={links}  hovered={hovered} />
        </div>
      </div>
    </header>
  );
};

export default Header;
