"use client";

import React from "react";
import { Timeline } from ".//ui/timeline";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LayoutGrid } from ".//ui/layout-grid";

const Project = () => {
  const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: string | React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  };

  const features = [
    {
      title: "Next.js",
      description:
        "Powered by Next.js, a React framework that supports server-side rendering, routing, and optimised performance.",
      icon: <Image src="/assets/logos/nextjsLogo.png" alt="Next.js Logo" width={30} height={30} />,
    },
    {
      title: "Node.js",
      description:
        "Backed by Node.js, a fast and scalable JavaScript runtime used for server-side logic and tooling.",
      icon: <Image src="/assets/logos/nodejsLogo.png" alt="Node.js Logo" width={30} height={30} />,
    },
    {
      title: "Aceternity UI",
      description:
        "Primary UI built with Aceternity UI, a modern component library built on top of shadCN and Tailwind CSS.",
      icon: <Image src="/assets/logos/aceternityLogo.avif" alt="Aceternity Logo" width={30} height={30} />,
    },
    {
      title: "shadCN",
      description:
        "Built with shadCN components, a set of accessible and customisable UI primitives for modern React apps.",
      icon: <Image src="/assets/logos/shadCNLogo.png" alt="shadCN Logo" width={30} height={30} />,
    },
    {
      title: "Tailwind CSS",
      description:
        "Styled using Tailwind CSS, a utility-first framework for rapidly building custom user interfaces.",
      icon: <Image src="/assets/logos/tailwindLogo.png" alt="Tailwind Logo" width={50} height={50} />,
    },
    {
      title: "Three.js",
      description:
        "Interactive 3D elements rendered with Three.js, a powerful WebGL-based graphics library for the browser.",
      icon: <Image src="/assets/logos/threeJSLogo.png" alt="Three.js Logo" width={30} height={30} />,
    },
    {
      title: "Vercel",
      description:
        "Deployed on Vercel, a cloud platform optimised for frontend frameworks and serverless functions.",
      icon: <Image src="/assets/logos/vercelLogo.png" alt="Vercel Logo" width={30} height={30} />,
    },
    {
      title: "EmailJS",
      description:
        "Contact form powered by EmailJS, enabling email delivery directly from the client-side without a backend.",
      icon: <Image src="/assets/logos/emailjsLogo.png" alt="EmailJS Logo" width={30} height={30} />,
    },
  ];

  // ScrumScape project images
  const scrumScapeCards = [
    {
      id: 1,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/scrumscape_login.png",
      height1: "35vh",
      width1: "50vw",
      height2: "18vh",
      width2: "25vw",
    },
    {
      id: 2,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/scrumscape_sprints.png",
      height1: "35vh",
      width1: "50vw",
      height2: "18vh",
      width2: "25vw",
    },
    {
      id: 3,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/scrumscape_update_task.png",
      height1: "35vh",
      width1: "50vw",
      height2: "18vh",
      width2: "25vw",
    },
  ];

  // Drawbotics project images
  const drawboticsCards = [
    {
      id: 4,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/drawbotics1.jpg",
      height1: "50vh",
      width1: "45vw",
      height2: "25vh",
      width2: "22vw",
    },
    {
      id: 5,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/drawbotics2.jpg",
      height1: "50vh",
      width1: "45vw",
      height2: "25vh",
      width2: "22vw",
    },
  ];

  // Fiery Dragons project images
  const fieryDragonsCards = [
    {
      id: 6,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/fieryDragons2.jpg",
      height1: "60vh",
      width1: "45vw",
      height2: "30vh",
      width2: "22vw",
    },
    {
      id: 7,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/fieryDragons1.jpg",
      height1: "60vh",
      width1: "45vw",
      height2: "30vh",
      width2: "22vw",
    },
    {
      id: 8,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/fieryDragons3.png",
      height1: "60vh",
      width1: "45vw",
      height2: "30vh",
      width2: "22vw",
    },
  ];

  // Snake RL project images
  const snakeRLCards = [
    {
      id: 9,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/snakeRL_training.png",
      height1: "40vh",
      width1: "50vw",
      height2: "20vh",
      width2: "25vw",
    },
  ];

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            The Universal Book - Engineering Capstone Project
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Currently developing an innovative web application as my final year engineering capstone project, working collaboratively with a team of four students. The Universal Book aims to create a comprehensive digital platform that aggregates and organises literary content from various sources, providing users with a unified interface for discovering, accessing, and managing books across multiple formats and languages. This project demonstrates advanced software engineering principles, including agile development methodologies, user-centred design, and scalable system architecture.
          </p>
          <a
            href="https://www.theuniversalbook.org/"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit The Universal Book ↗
          </a>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            FindingNibbles - Large-Scale Mobile Application Development
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Contributing to the development of FindingNibbles, an ambitious mobile application project undertaken as part of a comprehensive software engineering course. Working within a large development team of fifteen students, this project emphasises collaborative software development practices, version control management, and agile project methodologies. The application focuses on food discovery and recommendation services, incorporating modern mobile development frameworks and real-time data synchronization. This experience provides valuable insights into large-scale software development, team coordination, and professional practices widely used in industry.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Personal Portfolio Website
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Designed and developed this comprehensive portfolio website to showcase my technical skills, projects, and professional experience. The site features a modern, responsive design with interactive elements, smooth animations, and optimised performance. Built using cutting-edge web technologies, the website demonstrates proficiency in full-stack development, UI/UX design principles, and modern deployment practices.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            <strong>Technology Stack:</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            ScrumScape - Agile Project Management Platform
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed ScrumScape, a comprehensive project management web application designed to streamline agile development workflows. Created as part of a university software engineering course, working collaboratively with a team of six developers following strict client specifications and requirements. The platform features sprint planning, task management, team collaboration tools, and progress tracking capabilities. Built using a robust tech stack including JavaScript, CSS, HTML, and PHP for the backend, with MySQL database integration managed through phpMyAdmin. The application utilises Bootstrap framework for responsive design and cross-platform compatibility, ensuring a consistent user experience across all devices.
          </p>
          <div className="h-screen w-full mb-6">
            <LayoutGrid cards={scrumScapeCards} alternatingLayout={true} />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Fiery Dragons - Desktop Game Application
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed a fully functional desktop implementation of the Fiery Dragons board game as part of a university Software Architecture course. This project demonstrates advanced object-oriented programming principles, design patterns, and software architecture best practices. Built entirely in Java with JavaFX for the graphical user interface, the application features intuitive gameplay mechanics, animated game elements, and comprehensive game state management. The project showcases expertise in GUI development, event-driven programming, and creating engaging user experiences through thoughtful interface design and smooth animations.
          </p>
          <div className="h-screen w-full mb-6">
            <LayoutGrid cards={fieryDragonsCards} alternatingLayout={true} />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100 ml-44 px-2">
            Competitive Freediving Data Visualization
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 ml-44 px-2">
            Created a comprehensive data visualization project analysing the competitive history and evolution of freediving as a sport. Developed as part of a university data analytics course, this project demonstrates proficiency in data collection, cleaning, analysis, and visualization using Tableau. The interactive dashboard presents historical trends, record progressions, athlete performance comparisons, and geographical distribution of competitive freediving achievements. The visualization incorporates multiple chart types, filtering capabilities, and dynamic interactions to provide meaningful insights into the sport's development over time.
          </p>
          <a
            href="https://public.tableau.com/app/profile/oliver2780/viz/FreeDiving/Freediving"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium mb-6 inline-block ml-44 px-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Interactive Dashboard on Tableau Public ↗
          </a>
          <div
            className="overflow-hidden rounded-lg shadow-lg  ml-44 px-2"
            style={{ transform: "scale(0.9)", transformOrigin: "top left", width: "110%", height: "2499px" }}
          >
            <iframe
              src="https://public.tableau.com/views/FreeDiving/Freediving?:showVizHome=no&:embed=true"
              width="1624"
              height="2499"
              className="border-none"
              allowFullScreen
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Drawbotics - Robotic Navigation System
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Contributed to the innovative Drawbotics project during a prestigious university winter vacation scholarship program with Monash SensiLab. Developed a comprehensive software library for autonomous navigation of drawing robots, implementing advanced pathfinding algorithms and motion control systems. Additionally, created a robust testing suite to ensure reliability and accuracy of the navigation system. This project involved working with Arduino programming, sensor integration, and real-time system control, demonstrating expertise in embedded systems development and robotics programming.
          </p>
          <div className="h-screen w-full mb-4">
            <LayoutGrid cards={drawboticsCards} alternatingLayout={true} />
          </div>
          <a
            href="https://github.com/Drawbotic/Drawbotic-Navigation-Arduino"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code on GitHub ↗
          </a>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Snake AI - Reinforcement Learning Agent
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed an intelligent reinforcement learning agent capable of playing the classic Snake game with superhuman performance. Created as part of the Monash Deep Neuron student team project, working collaboratively with a team of four researchers. The project utilised Python with Pygame for game environment simulation and PyTorch for implementing deep Q-learning algorithms. The AI agent learns optimal gameplay strategies through trial and error, demonstrating advanced understanding of neural networks, reinforcement learning principles, and game AI development. The project showcases expertise in machine learning, deep learning frameworks, and artificial intelligence applications.
          </p>
          <div className="w-full max-w-4xl mx-auto my-8">
            <video controls className="w-full rounded-lg shadow-lg">
              <source src="/assets/project_media/snakeRL_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="h-screen w-full mb-2">
            <LayoutGrid cards={snakeRLCards} alternatingLayout={true} />
          </div>
          <a
            href="https://github.com/DimitrisGahtidis/RL-Snake-Mini-Project"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code on GitHub ↗
          </a>
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="w-full  py-20 dark:bg-zinc-950">
      <Timeline data={data} />
    </div>
  );
};

export default Project;
