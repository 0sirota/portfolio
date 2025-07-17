"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  height1?: string;
  width1?: string;  
  height2?: string; 
  width2?: string;  
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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOutsideClick();
      }
    };

    if (selected) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  return (
    <div className="w-full h-full p-4 md:p-8 grid grid-cols-1 gap-4 max-w-7xl mx-auto relative">
      {cards.map((card, i) => (
        <div key={i} className="flex w-full justify-center">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden shadow-lg hover:shadow-xl cursor-pointer",
              selected?.id === card.id
                ? "fixed inset-0 m-auto max-w-5xl max-h-[85vh] z-50 flex justify-center items-center rounded-lg"
                : alternatingLayout
                  ? "bg-white rounded-xl h-64 w-full max-w-md"
                  : "bg-white rounded-xl h-80 w-full max-w-lg",
              alternatingLayout && i % 2 === 0 ? "mr-auto" : alternatingLayout ? "ml-auto" : "mx-auto"
            )}
            layoutId={`card-${card.id}`}
            initial={false}
            animate={{
              borderRadius: selected?.id === card.id ? "0.5rem" : "0.75rem",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
            whileHover={selected?.id !== card.id ? { scale: 1.02 } : {}}
            whileTap={selected?.id !== card.id ? { scale: 0.98 } : {}}
          >
            <ImageComponent card={card} selected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      
      {/* Background overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card, selected }: { card: Card; selected: boolean }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "w-full h-full transition-all duration-300 ease-out",
        selected 
          ? "object-contain" // Shows full image when selected - NO DIMMING
          : "object-cover object-center" // Covers container when not selected
      )}
      alt="thumbnail"
      initial={false}
      animate={{
        scale: selected ? 1 : 1,
        filter: selected ? "brightness(1)" : "brightness(1)" // Ensures no dimming
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.6
      }}
    />
  );
};
