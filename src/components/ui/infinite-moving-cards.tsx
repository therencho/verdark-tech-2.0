"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";
const AceternityLogo = () => {
  return (
    <svg
      width="216"
      height="66"
      viewBox="0 0 216 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.8 0.300049H0V65.1H64.8V0.300049ZM43.1999 21.9001H21.5999V43.5001H43.1999V21.9001Z"
        fill="black"
      ></path>
      <rect
        x="75.6"
        y="0.300049"
        width="21.6"
        height="64.8"
        fill="black"
      ></rect>
      <rect x="97.2001" y="21.9" width="21.6" height="21.6" fill="black"></rect>
      <rect
        x="118.8"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="118.8"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect x="172.8" y="21.9" width="21.6" height="21.6" fill="black"></rect>
      <rect
        x="194.4"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="194.4"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="151.2"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="151.2"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
    </svg>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    images: ReactNode;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  my-10 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[200px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <div className="">{item.images}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
