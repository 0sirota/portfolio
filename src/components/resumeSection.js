"use client";

import React from "react";

import { IconSearch, IconDownload } from "@tabler/icons-react";
import styles3 from "../styles/button3.module.css";

import { Spotlight } from "./ui/spotlight";




const Resume = () => {
  return (
    
    <section id="resume" className="py-20 bg-zinc-900 text-white">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">My Resume</h2>
        <p className="text-lg text-white mb-6">
          Check out my resume to learn more about my education, experience, and skills.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>


          <a
            href="/assets/CV/CV.pdf"
            target="_blank"
            rel="noopener noreferrer" // For security reasons
            className={`${styles3.button} ${styles3['button-item']}`}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <span className={styles3["button-bg"]}>
              <span className={styles3["button-bg-layers"]}>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-1"]} ${styles3["-purple"]}`}></span>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-2"]} ${styles3["-turquoise"]}`}></span>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-3"]} ${styles3["-yellow"]}`}></span>
              </span>
            </span>
            <span className={styles3["button-inner"]}>
              <span className={styles3["button-inner-static"]}>View</span>
              <IconSearch className={`${styles3["button-inner-hover"]} ${"h-full w-full"}`} />
            </span>
          </a>

          {/* Download Button */}
          <a
            href="/assets/CV/CV.pdf"
            download
            className={`${styles3.button} ${styles3['button-item']}`}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <span className={styles3["button-bg"]}>
              <span className={styles3["button-bg-layers"]}>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-1"]} ${styles3["-purple"]}`}></span>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-2"]} ${styles3["-turquoise"]}`}></span>
                <span className={`${styles3["button-bg-layer"]} ${styles3["button-bg-layer-3"]} ${styles3["-yellow"]}`}></span>
              </span>
            </span>
            <span className={styles3["button-inner"]}>
              <span className={styles3["button-inner-static"]}>Download</span>
              <IconDownload className={`${styles3["button-inner-hover"]} ${"h-full w-full"}`} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;












                    {/* View Button */}
                    // <button className={styles.button}>
                    //     <span>View</span>
                    // </button>


                    // <button type="button" className={styles2.btn}>
                    //   <strong>View</strong>
                    //   <div className={styles2.containerStars}>
                    //     <div className={styles2.stars}></div>
                    //   </div>

                    //   <div className={styles2.glow}>
                    //     <div className={styles2.circle}></div>
                    //     <div className={styles2.circle}></div>
                    //   </div>
                    // </button>






{/* <a 
href="/assets/CV/CV.pdf" 
target="_blank" 
className="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
>
View Resume
</a>
<a 
href="/assets/CV/CV.pdf" 
download 
className="text-white bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 inline-block ml-4"
>
Download Resume
</a> */}




