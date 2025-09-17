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
        "Powered by Next.js, a React framework that supports server‑side rendering, routing, and optimised performance.",
      icon: <Image src="/assets/logos/nextjsLogo.png" alt="Next.js Logo" width={30} height={30} />,
    },
    {
      title: "Node.js",
      description:
        "Backed by Node.js, a fast and scalable JavaScript runtime used for server‑side logic and tooling.",
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
        "Styled using Tailwind CSS, a utility‑first framework for rapidly building custom user interfaces.",
      icon: <Image src="/assets/logos/tailwindLogo.png" alt="Tailwind Logo" width={50} height={50} />,
    },
    {
      title: "Three.js",
      description:
        "Interactive 3D elements rendered with Three.js, a powerful WebGL‑based graphics library for the browser.",
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
        "Contact form powered by EmailJS, enabling email delivery directly from the client‑side without a backend.",
      icon: <Image src="/assets/logos/emailjsLogo.png" alt="EmailJS Logo" width={30} height={30} />,
    },
  ];

  // Enhanced LayoutGrid wrapper with better mobile modal handling
  const EnhancedLayoutGrid = ({ cards, alternatingLayout = true }) => {
    return (
      <div className="relative">
        <LayoutGrid 
          cards={cards} 
          alternatingLayout={alternatingLayout}
        />
        
        {/* Enhanced mobile modal styles */}
        <style jsx global>{`
          @media (max-width: 768px) {
            /* Ensure modal overlays are fully interactive on mobile */
            .layout-grid-overlay,
            [data-layout-grid-overlay],
            .modal-overlay,
            [role="dialog"]::backdrop {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              z-index: 9999 !important;
              background: rgba(0, 0, 0, 0.8) !important;
              backdrop-filter: blur(4px) !important;
              touch-action: manipulation !important;
              -webkit-touch-callout: none !important;
              -webkit-user-select: none !important;
              user-select: none !important;
              cursor: pointer !important;
              pointer-events: auto !important;
            }
            
            /* Make the entire overlay clickable */
            .layout-grid-overlay *,
            [data-layout-grid-overlay] *,
            .modal-overlay * {
              pointer-events: none !important;
            }
            
            /* But allow the actual modal content to be interactive */
            .layout-grid-modal-content,
            [data-modal-content],
            .modal-content,
            img[data-modal-image] {
              pointer-events: auto !important;
              cursor: default !important;
              touch-action: manipulation !important;
            }
            
            /* Add a close button for mobile */
            .layout-grid-overlay::before,
            [data-layout-grid-overlay]::before,
            .modal-overlay::before {
              content: "✕" !important;
              position: fixed !important;
              top: 20px !important;
              right: 20px !important;
              width: 40px !important;
              height: 40px !important;
              color: white !important;
              font-size: 24px !important;
              font-weight: bold !important;
              background: rgba(0, 0, 0, 0.8) !important;
              border-radius: 50% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              z-index: 10001 !important;
              cursor: pointer !important;
              pointer-events: auto !important;
              touch-action: manipulation !important;
              border: 2px solid rgba(255, 255, 255, 0.3) !important;
            }
            
            /* Add tap anywhere hint */
            .layout-grid-overlay::after,
            [data-layout-grid-overlay]::after,
            .modal-overlay::after {
              content: "Tap anywhere to close" !important;
              position: fixed !important;
              bottom: 20px !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              color: white !important;
              font-size: 14px !important;
              background: rgba(0, 0, 0, 0.6) !important;
              padding: 8px 16px !important;
              border-radius: 20px !important;
              z-index: 10001 !important;
              pointer-events: none !important;
            }
          }
        `}</style>
      </div>
    );
  };

  const makerlabCards = [
    {
      id: 1,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/clock_lamp.jpg",
    },
  ];

  // ScrumScape project images
  const scrumScapeCards = [
    {
      id: 1,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/scrumscape_login.png",
    },
    {
      id: 2,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/scrumscape_sprints.png",
    },
    {
      id: 3,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/scrumscape_update_task.png",
    },
  ];

  // Drawbotics project images
  const drawboticsCards = [
    {
      id: 4,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/drawbotics1.jpg",
    },
    {
      id: 5,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/drawbotics2.jpg",
    },
  ];

  // Fiery Dragons project images
  const fieryDragonsCards = [
    {
      id: 6,
      content: null,
      className: "md:col-span-2",
      thumbnail: "/assets/project_media/fieryDragons2.jpg",
    },
    {
      id: 7,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/fieryDragons1.jpg",
    },
    {
      id: 8,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/fieryDragons3.png",
    },
  ];

  // Snake RL project images
  const snakeRLCards = [
    {
      id: 9,
      content: null,
      className: "col-span-2",
      thumbnail: "/assets/project_media/snakeRL_training.png",
    },
  ];

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            The Universal Book – Engineering Final Year Project
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Currently developing a web application as my Engineering Final Year Project, leading a team of six students. 
            The Universal Book is a platform for authors to write books collaboratively and publish them independent of traditional publishers as well as for readers to discover and read these books.
            The application includes features such as live collaborative editing and an AI assistant chatbot. 
            
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            The application is coded in <strong>React</strong>, containerised with <strong>Docker</strong>, utilises <strong>Prisma</strong> as an ORM for a <strong>PostgreSQL</strong> database, and is hosted on the <strong>Nectar Research Cloud</strong>.
          </p>
          <a
            href="https://www.universal-book.com/"
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
            FindingNibbles - Full Year Software Engineering Team Project
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Currently developing a mobile application in a team of fifteen students. 
            FindingNibbles helps users decide on restaurants to eat at based on user preferences and dietary requirements through analysing, sorting, and categorising nearby restaurants.
            The application includes features such as AI generated recipes. 
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            The solution pairs a <strong>Flutter</strong> (<strong>Dart</strong>) front‑end with a <strong>NestJS</strong> back‑end; both services run in <strong>Docker</strong> containers, using <strong>Prisma</strong> to interface with a shared <strong>PostgreSQL</strong> database.
          </p>
        </div>
      ),
    },
        {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            MakerLab 
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
             Designed and built a range of artefacts for the Monash MakerLab unit, showcasing my ability to turn ideas into functional prototypes. 
             These projects highlight my creativity, technical problem-solving, and practical engineering skills. 
             Examples include a real-time updating clock lamp and an AI-powered sports tracking camera.
          </p>
            <div className="w-full mb-6">
            <EnhancedLayoutGrid cards={makerlabCards} alternatingLayout={true} />
          </div>

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
            Designed and developed this comprehensive portfolio website to showcase my projects, experiences, and skills. The site features a modern, responsive design with interactive elements, smooth animations, and optimised performance. Built using cutting‑edge web technologies, the website demonstrates proficiency in full‑stack development, UI/UX design principles, and modern deployment practices.
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
            ScrumScape Web App – Agile Project Management Platform
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed ScrumScape, a comprehensive project management web application designed to streamline agilev development workflows. 
            Created as part of a university Software Engineering unit, working collaboratively with a team of six developers following strict client specifications and requirements.
             The platform features sprint planning, task management, team‑collaboration tools, and progress‑tracking capabilities. 
             Built using a robust tech stack including <strong>PHP</strong> (managed through <strong>phpMyAdmin</strong>) and a <strong>MySQL</strong> database on the server side, alongside <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and the <strong>Bootstrap</strong> framework for the responsive front‑end.
          </p>
          <div className="w-full mb-6">
            <EnhancedLayoutGrid cards={scrumScapeCards} alternatingLayout={true} />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Fiery Dragons – Desktop Game Application
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed a fully functional desktop implementation of the Fiery Dragons board game as part of a university Software Architecture unit. 
            This project demonstrates advanced object‑oriented programming principles, design patterns, and software‑architecture best practices. 
            Built entirely in <strong>Java</strong>, utilising the <strong>JavaFX</strong> library for the graphical user interface, 
            the application features intuitive gameplay mechanics and comprehensive game‑state management. 
            The project showcases expertise in GUI development, event‑driven programming, and creating engaging user experiences through thoughtful interface design.
          </p>
          <div className="w-full mb-6">
            <EnhancedLayoutGrid cards={fieryDragonsCards} alternatingLayout={true} />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100 ">
            History of Competitive Freediving - Data Visualisation
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Created a comprehensive data‑visualisation project analysing the competitive history and evolution of freediving as a sport. 
            Developed as part of a university Data Visualisation unit, this project demonstrates proficiency in data collection, cleansing, analysis, and visualisation using Tableau. 
            The interactive dashboard presents historical trends, record progressions, athlete‑performance comparisons, and geographical distribution of competitive freediving achievements. 
            The visualisation incorporates multiple chart types, filtering capabilities, and dynamic interactions to provide meaningful insights into the sport's development over time.
          </p>
          <a
            href="https://public.tableau.com/app/profile/oliver2780/viz/FreeDiving/Freediving"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium mb-6 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Interactive Dashboard on Tableau Public ↗
          </a>

          {/* Message shown for screen widths < 3xl (less than ~1536px) */}
          <div className="block 3xl:hidden">
            <div className="relative w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                Interactive Dashboard
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                📊 A larger screen is needed to view the full data visualisation.
              </p>
              <a
                href="https://public.tableau.com/app/profile/oliver2780/viz/FreeDiving/Freediving"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Dashboard
              </a>
            </div>
          </div>

          {/* Full iframe shown only on 3xl and larger screens */}
          <div className="hidden 3xl:block w-full overflow-hidden">
            <div className="transform scale-[0.9] origin-top-left w-[1624px] h-[2499px]">
              <iframe
                src="https://public.tableau.com/views/FreeDiving/Freediving?:showVizHome=no&:embed=true"
                width="1624"
                height="2499"
                className="border-none"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Drawbotics – Winter Vacation Scholarship Placement at Monash SensiLab
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            As part of a 4-week placement at Monash SensiLab, I developed a Software Library for the navigation of Drawing Robots, facilitating the concatenation of simple commands to generate complex paths.
            The core navigation library was written in <strong>C++</strong> for <strong>Arduino</strong>, with supplementary utilities developed in <strong>Python</strong> using <strong>CircuitPython</strong>.
          </p>
          <div className="w-full mb-4">
            <EnhancedLayoutGrid cards={drawboticsCards} alternatingLayout={true} />
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
            Snake AI - Monash DeepNeuron
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Developed an intelligent Reinforcement-Learning agent capable of playing the classic Snake game with superhuman performance. 
            Created as part of a Monash DeepNeuron student team project, working collaboratively in a team of four. 
            The project utilised <strong>Python</strong> with <strong>Pygame</strong> for game‑environment simulation and <strong>PyTorch</strong> for implementing Reinforcement-Learning with Neural Networks. 
          </p>
          <div className="w-full max-w-4xl mx-auto my-8">
            <video controls className="w-full rounded-lg shadow-lg">
              <source src="/assets/project_media/snakeRL_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full mb-2">
            <EnhancedLayoutGrid cards={snakeRLCards} alternatingLayout={true} />
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
    <div id="projects" className="w-full py-20 dark:bg-zinc-950">
      <Timeline data={data} />
    </div>
  );
};

export default Project;