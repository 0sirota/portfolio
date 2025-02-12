"use client";

import React, { useEffect } from "react";


import { Timeline } from ".//ui/timeline";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      title: "Aceternity UI",
      description:
        "Components from Aceternity UI, a modern React component library.",
      icon: <Image src='/assets/logos/aceternityLogo.avif' alt="Aceternity Logo" width={30} height={30} />,
    },
    {
      title: "Next.js",
      description:
        "Built with Next.js, a modern React framework that enables server-side rendering.",
      icon: <Image src='/assets/logos/nextjsLogo.png' alt="Next.js Logo" width={30} height={30} />,
    },
    {
      title: "Tailwind CSS",
      description:
        "Styled with Tailwind CSS, a utility-first CSS framework.",
      icon: <Image src='/assets/logos/tailwindLogo.png' alt="Tailwind Logo" width={50} height={50} />,
    },
    {
        title: "Node.js",
        description:
          "Built with Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        icon: <Image src='/assets/logos/nodejsLogo.png' alt="Node.js Logo" width={30} height={30} />,
      },
    {
      title: "Vercel",
      description: "Hosted on Vercel, a cloud platform for static sites and Serverless Functions.",
      icon: <Image src='/assets/logos/vercelLogo.png' alt="Vercel Logo" width={30} height={30} />,
    },
    {
        title: "EmailJS",
        description:
          "Message submissions handled by EmailJS, a service that sends emails directly from the client.",
        icon: <Image src='/assets/logos/emailjsLogo.png' alt="EmailJS Logo" width={30} height={30} />,
      },
    {
      title: "Sketchfab",
      description: "3D models from Sketchfab, a platform to publish, share, and discover 3D models.",
      icon: <Image src='/assets/logos/sketchfabLogo.png' alt="Sketchfab Logo" width={30} height={30} />,
    },
    {
      title: "UIverse.io",
      description: "UI elements from UIverse, an open-source UI component platform.",
      icon: <Image src='/assets/logos/uiverseLogo.png' alt="UIverse.io Logo" width={30} height={30} />,
    },
  ];

  const data = [
    {
      title: "Early 2025",
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

        </div>
      ),
    },
    {
      
      title: "Late 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            ScrumScape
          </p>
          <div className="grid grid-cols-2 gap-4">
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
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Fiery Dragons
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "Mid 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Drawbotics
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "Mid 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Snake AI
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
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