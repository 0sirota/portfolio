"use client";

import React, { useState, useRef, useEffect } from "react";


import { Timeline } from ".//ui/timeline";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { LayoutGrid } from ".//ui/layout-grid";


import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";




const Project = () => {

  // useEffect(() => {
  //   const divElement = document.getElementById('viz1739352798199');
  //   if (!divElement) return;
  
  //   const vizElement = divElement.getElementsByTagName('object')[0];
  //   if (!vizElement) return;
  
  //   if (divElement.offsetWidth > 800) {
  //     vizElement.style.width = '1300px'; // 1300
  //     vizElement.style.height = '2027px'; // 2027
  //   } else if (divElement.offsetWidth > 500) {
  //     vizElement.style.width = '1300px';
  //     vizElement.style.height = '2027px';
  //   } else {
  //     vizElement.style.width = '100%';
  //     vizElement.style.height = '3477px';
  //   }
  
  //   const scriptElement = document.createElement('script');
  //   scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  //   vizElement.parentNode.insertBefore(scriptElement, vizElement);
  // }, []);

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
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 ",
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
    icon: <Image src='/assets/logos/nextjsLogo.png' alt="Next.js Logo" width={30} height={30} />,
  },
  {
    title: "Node.js",
    description:
      "Backed by Node.js, a fast and scalable JavaScript runtime used for server-side logic and tooling.",
    icon: <Image src='/assets/logos/nodejsLogo.png' alt="Node.js Logo" width={30} height={30} />,
  },
  {
    title: "Aceternity UI",
    description:
      "Primary UI built with Aceternity UI, a modern component library built on top of shadCN and Tailwind CSS.",
    icon: <Image src='/assets/logos/aceternityLogo.avif' alt="Aceternity Logo" width={30} height={30} />,
  },
  {
    title: "shadCN",
    description:
      "Built with shadCN components, a set of accessible and customisable UI primitives for modern React apps.",
    icon: <Image src='/assets/logos/shadCNLogo.png' alt="shadCN Logo" width={30} height={30} />,
  },
  {
    title: "Tailwind CSS",
    description:
      "Styled using Tailwind CSS, a utility-first framework for rapidly building custom user interfaces.",
    icon: <Image src='/assets/logos/tailwindLogo.png' alt="Tailwind Logo" width={50} height={50} />,
  },
  {
    title: "Three.js",
    description:
      "Interactive 3D elements rendered with Three.js, a powerful WebGL-based graphics library for the browser.",
    icon: <Image src='/assets/logos/threeJSLogo.png' alt="Three.js Logo" width={30} height={30} />,
  },
  {
    title: "Vercel",
    description:
      "Deployed on Vercel, a cloud platform optimised for frontend frameworks and serverless functions.",
    icon: <Image src='/assets/logos/vercelLogo.png' alt="Vercel Logo" width={30} height={30} />,
  },
  {
    title: "EmailJS",
    description:
      "Contact form powered by EmailJS, enabling email delivery directly from the client-side without a backend.",
    icon: <Image src='/assets/logos/emailjsLogo.png' alt="EmailJS Logo" width={30} height={30} />,
  },

  ];



  const cards = [
    {
      id: 1,
      content: null,
      className: "md:col-span-2",
      thumbnail:
        "/assets/project_media/scrumscape_login.png",
      height1: "45vh",
      width1: "40vw",
      height2: "22vh",
      width2: "20vw",
    },
    {
      id: 2,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/scrumscape_sprints.png",
        height1: "45vh",
        width1: "40vw",
        height2: "22vh",
        width2: "20vw",
    },
    {
      id: 3,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/scrumscape_update_task.png",
        height1: "45vh",
        width1: "40vw",
        height2: "22vh",
        width2: "20vw",
    },

  ];

  const cards2 = [
    {
      id: 4,
      content: null,
      className: "md:col-span-2",
      thumbnail:
        "/assets/project_media/drawbotics1.jpg",
      height1: "60vh",
      width1: "40vw",
      height2: "30vh",
      width2: "20vw",
    },
    {
      id: 5,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/drawbotics2.jpg",
        height1: "60vh",
        width1: "40vw",
        height2: "30vh",
        width2: "20vw",
    },
  ];




  const cards3 = [
    {
      id: 6,
      content: null,
      className: "md:col-span-2",
      thumbnail:
        "/assets/project_media/fieryDragons2.jpg",
      height1: "80vh",
      width1: "40vw",
      height2: "40vh",
      width2: "20vw",
    },
    {
      id: 7,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/fieryDragons1.jpg",
        height1: "80vh",
        width1: "40vw",
        height2: "40vh",
        width2: "20vw",
    },
    {
      id: 8,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/fieryDragons3.png",
        height1: "80vh",
        width1: "40vw",
        height2: "40vh",
        width2: "20vw",
    },

  ];


    const cards4 = [
    {
      id: 9,
      content: null,
      className: "col-span-2",
      thumbnail:
        "/assets/project_media/snakeRL_training.png",
        height1: "60vh",
        width1: "40vw",
        height2: "30vh",
        width2: "20vw",
    },
  ];



  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Engineering Final Year Project, The Universal Book web application. Developed in a team of four. (IN PROGRESS)
          </p>
          <a
            href="https://www.theuniversalbook.org/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Universal Book ↗
          </a>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Full year software engineering project, FindingNibbles mobile application. Developed in a team of fifteen. (IN PROGRESS)
          </p>


        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created this website.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This website was built with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
            {/* <div
              className="tableauPlaceholder"
              id="viz1739352798199"
              style={{ position: "relative" }}
            >
              <noscript>
                <a href="#">
                  <img
                    alt="Freediving"
                    src="https://public.tableau.com/static/images/Fr/FreeDiving/Freediving/1_rss.png"
                    style={{ border: "none" }}
                  />
                </a>
              </noscript>
              <object className="tableauViz" style={{ display: "none" }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value="FreeDiving/Freediving" />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param
                  name="static_image"
                  value="https://public.tableau.com/static/images/Fr/FreeDiving/Freediving/1.png"
                />
                <param name="animate_transition" value="yes" />
                <param name="display_static_image" value="yes" />
                <param name="display_spinner" value="yes" />
                <param name="display_overlay" value="yes" />
                <param name="display_count" value="yes" />
                <param name="language" value="en-GB" />
              </object>
            </div> */}
        </div>
      ),
    },
    {
      
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Developed ScrumScape, a project management web application, as part of a university course in a team of six, following client specifications. 
          The application was built using JavaScript, CSS, HTML, and PHP, with MySQL for data storage managed through phpMyAdmin. 
          Bootstrap was used for styling to ensure a responsive and visually consistent design. 
          </p>
            <div className="h-screen w-full">
              <LayoutGrid cards={cards}  alternatingLayout={true}/>
              
            </div>

        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Software Architecture. Fiery Dragons board game created as a desktop application using Java and JavaFx.
          </p>

          <div className="h-screen w-full">
              <LayoutGrid cards={cards3}  alternatingLayout={true}/> 
            </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
            Data visualisation project (created with and published on Tableau) on the competitive history of freediving.
          </p>

          <a
            href="https://public.tableau.com/app/profile/oliver2780/viz/FreeDiving/Freediving"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Tableau Public ↗
          </a>

          <div className="overflow-hidden" style={{ transform: "scale(1)", transformOrigin: "top left", width: "100%", height: "2499px" }}>
            <iframe
              src="https://public.tableau.com/views/FreeDiving/Freediving?:showVizHome=no&:embed=true"
              width="1624"
              height="2499"
              className="border-none"
              allowFullScreen
            ></iframe>
          </div>


        </div>
      ),
    },
    
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            As part of a winter vacation scholarship program with Monash SensiLab, I worked on the Drawbotics project, where I wrote a software library for the navigation of drawing robots, as well as a testing suite.

          <a
            href="https://github.com/Drawbotic/Drawbotic-Navigation-Arduino"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository ↗
          </a>
          </p>
          <div className="h-screen w-full">
              <LayoutGrid cards={cards2}  alternatingLayout={true}/> 
            </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Snake AI. Developed an RL agent to play the game Snake using Python and Pygame and PyTorch. 
          </p>

              <div className="w-full max-w-4xl mx-auto my-10">
              <video
                controls
                className="w-full rounded-lg shadow-lg"
              >
                <source src="/assets/project_media/snakeRL_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="h-screen w-full">
              <LayoutGrid cards={cards4}  alternatingLayout={true}/> 
            </div>

            <a
            href="https://github.com/DimitrisGahtidis/RL-Snake-Mini-Project"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository ↗
          </a>

        </div>
      ),
    }
  ];
  return (
    <div id="projects" className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default Project;