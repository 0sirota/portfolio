"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  height1: string; // Add height property
  width1: string;  // Add width property
  height2: string; // Add height property
  width2: string;  // Add width property
};

type LayoutGridProps = {
  cards: Card[];
  selectedHeight?: string;
  selectedWidth?: string;
  alternatingLayout?: boolean;
};

export const LayoutGrid = ({
  cards,
  alternatingLayout = false,
}: LayoutGridProps) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-20 grid grid-cols-1 gap-1 max-w-7xl mx-auto relative">
      {cards.map((card, i) => (
        <div key={i} className="flex w-full">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden transition-all duration-300",
              selected?.id === card.id
                ? `rounded-lg  absolute inset-0 m-auto h-[45vh] w-[40vw]  z-50 flex justify-center items-center flex-wrap flex-col`
                : alternatingLayout
                  ? `bg-white rounded-xl  h-[22vh] w-[20vw] cursor-pointer`    // When not selected and alternating layout
                  : "bg-white rounded-xl h-full w-full cursor-pointer", // When not selected and not alternating layout
              alternatingLayout && i % 2 === 0 ? "mr-auto" : alternatingLayout ? "ml-auto" : "m-auto"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black transition-opacity duration-100",
          selected?.id ? "opacity-50 z-40 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-100"
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};