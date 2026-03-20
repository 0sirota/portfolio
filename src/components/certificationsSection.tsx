"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

type Certification = {
  title: string;
  issuer: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: {
    // If src is provided, it will render as the main logo.
    src?: string;
    alt?: string;

    // Fallback if src isn't provided
    letter?: string;
    bgClassName?: string;
    textClassName?: string;
  };
};

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      credentialId: "E1B542114EE0F9DE",
      logo: {
        src: "/assets/logos/MicrosoftAzureDataFundamentalsLogo.svg",
        alt: "Microsoft Azure Data Fundamentals badge",
      },
    },
    {
      title: "dbt Fundamentals",
      issuer: "dbt Labs",
      credentialId: "77798324",
      credentialUrl:
        "https://credentials.getdbt.com/5b20409a-345b-4e67-ae02-e95da08a7e46#acc.InVyhoX1",
      logo: {
        src: "/assets/logos/dbtBadge.png",
        alt: "dbt Fundamentals badge",
      },
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      credentialId: "ZN8TVV8BLCFQ",
      credentialUrl: "https://coursera.org/verify/ZN8TVV8BLCFQ",
      logo: {
        src: "/assets/logos/CourseraBadge.png",
        alt: "Coursera Neural Networks and Deep Learning badge",
      },
    },
    {
      title: "Certified SOLIDWORKS Associate in Mechanical Design",
      issuer: "Dassault Systèmes",
      credentialId: "C-6VEXDHS975",
      logo: {
        src: "/assets/logos/SolidWorksDesignLogo.png",
        alt: "Certified SOLIDWORKS Associate badge",
      },
    },
  ];

  return (
    <section
      id="certifications"
      className="w-full py-16 bg-gray-50 dark:bg-zinc-950 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Certifications
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            A selection of certifications and credentials demonstrating ongoing
            learning and practical skills.
          </p>
        </div>

        <DraggableCardContainer className="w-full">
          <div className="grid w-full max-w-5xl grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 mx-auto">
            {certifications.map((cert) => (
              <div
                key={`${cert.title}-${cert.credentialId ?? "no-id"}`}
                className="group relative flex min-h-[640px] items-center justify-center overflow-visible"
              >
                {/* Text behind the draggable badge */}
                <div className="absolute inset-0 z-0 flex items-center justify-center px-6 text-center">
                  <div className="max-w-[19rem]">
                    <h3 className="text-lg font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                      {cert.issuer}
                    </p>

                    {cert.credentialId && (
                      <p className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="text-neutral-900 dark:text-neutral-200 font-medium">
                          Credential ID:
                        </span>{" "}
                        <span className="font-mono">{cert.credentialId}</span>
                      </p>
                    )}

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-medium text-blue-500 hover:underline"
                      >
                        Verify credential ↗
                      </a>
                    )}
                  </div>
                </div>

                <DraggableCardBody
                  className="z-10 h-[24rem] w-[24rem] rounded-[2rem] bg-transparent p-0 shadow-none border-none ring-0 outline-none overflow-visible"
                  hideGlare
                  disableChrome
                >
                  <div className="relative h-full w-full">
                    {cert.logo?.src ? (
                      <img
                        src={cert.logo.src}
                        alt={cert.logo.alt ?? cert.title}
                        className={
                          cert.title ===
                          "Neural Networks and Deep Learning"
                            ? "pointer-events-none relative z-10 h-full w-full rounded-3xl object-contain scale-[1.15] origin-center"
                            : "pointer-events-none relative z-10 h-full w-full rounded-3xl object-contain scale-[1.05] origin-center"
                        }
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`pointer-events-none relative z-10 h-full w-full rounded-3xl flex items-center justify-center ${
                          cert.logo?.bgClassName ??
                          "bg-gradient-to-br from-zinc-700 to-zinc-900"
                        } ${cert.logo?.textClassName ?? "text-white"}`}
                        aria-hidden="true"
                      >
                        <span className="text-5xl font-extrabold">
                          {cert.logo?.letter ?? "✓"}
                        </span>
                      </div>
                    )}
                  </div>
                </DraggableCardBody>
              </div>
            ))}
          </div>
        </DraggableCardContainer>
      </div>
    </section>
  );
};

export default CertificationsSection;