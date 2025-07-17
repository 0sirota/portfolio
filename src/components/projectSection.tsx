"use client";

import React from "react";
import { Timeline } from ".//ui/timeline";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LayoutGrid } from ".//ui/layout-grid";

const Project = () => {
  // === Responsive scale for Tableau iframe ===
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      // Scale down if screen width less than 1624px (iframe native width)
      setScale(w < 1624 ? w / 1624 : 1);
    }
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // ... features and other data unchanged

  // Your full data array stays the same except for the Tableau visualisation part updated below

  const data = [
    // ... previous entries unchanged ...
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100 ">
            Competitive Freediving Data Visualisation
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 ">
            Created a comprehensive data‑visualisation project analysing the competitive history and evolution of freediving as a sport. Developed as part of a university visualisation unit, this project demonstrates proficiency in data collection, cleansing, analysis, and visualisation using Tableau. The interactive dashboard presents historical trends, record progressions, athlete‑performance comparisons, and geographical distribution of competitive freediving achievements. The visualisation incorporates multiple chart types, filtering capabilities, and dynamic interactions to provide meaningful insights into the sport's development over time.
          </p>
          <a
            href="https://public.tableau.com/app/profile/oliver2780/viz/FreeDiving/Freediving"
            className="text-blue-500 hover:underline text-sm md:text-base font-medium mb-6 inline-block "
            target="_blank"
            rel="noopener noreferrer"
          >
            View Interactive Dashboard on Tableau Public ↗
          </a>

          {/* Mobile preview */}
          <div className="block md:hidden">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                Interactive Dashboard
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                📊 Full interactive dashboard available on desktop or via the link above
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

          {/* Desktop scaled iframe */}
          <div
            className="hidden md:block w-full overflow-hidden"
            style={{
              width: "1624px",
              height: "2499px",
              transformOrigin: "top left",
              transform: `scale(${scale})`,
            }}
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
    // ...rest of your data unchanged
  ];

  return (
    <div id="projects" className="w-full py-20 dark:bg-zinc-950">
      <Timeline data={data} />
    </div>
  );
};

export default Project;
