"use client";

import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    (<div className="overflow-hidden bg-zinc-950 w-full">
      <MacbookScroll
        title={
          <span>
            Should write something here.
          </span>
        }

        src={`/assets/logos/logo1.png`}
        showGradient={false} />
    </div>)
  );
}


