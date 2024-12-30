import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export default function MacbookScrollDemo() {
  return (
    (<div className="overflow-hidden bg-zinc-900 w-full">
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


