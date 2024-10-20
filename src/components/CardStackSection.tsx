import { FC } from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

interface CardStackSectionProps {}

const CardStackSection: FC<CardStackSectionProps> = ({}) => {
  return (
    <div className="h-[18rem] flex items-center justify-center w-full max-w-screen-xl mx-auto">
      <CardStack items={CARDS} />
    </div>
  );
};

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-slate-900 text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah M.",
    designation: "Marketing Manager",
    content: (
      <p>
        Vedark automates <Highlight>my crypto trades 24/7</Highlight>, perfect
        for my busy schedule. My returns have <Highlight>improved</Highlight>,
        and I highly recommend it!"
      </p>
    ),
  },
  {
    id: 1,
    name: "David L.",
    designation: "Software Engineer",
    content: (
      <p>
        Skeptical at first, Vedark won me over.
        <Highlight>
          Backtesting and analytics helped refine my strategy.
        </Highlight>
        Secure and reliable - a great crypto trading tool!
      </p>
    ),
  },
  {
    id: 2,
    name: "Emily C.",
    designation: "Entrepreneur",
    content: (
      <p>
        New to crypto? Vedark's user-friendly design made it easy to start.
        Educational resources helped me learn, and
        <Highlight>I achieved my investment goals.</Highlight>
      </p>
    ),
  },
];

export default CardStackSection;
