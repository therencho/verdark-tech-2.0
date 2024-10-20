import { FC } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

interface TypewriterProps {}

const words = [
  {
    text: "Unleash",
  },
  {
    text: "the",
  },
  {
    text: "automation",
  },
  {
    text: "power",
  },
  {
    text: "of",
  },
  {
    text: "Vedark.",
    className: "text-gradient",
  },
];

const Typewriter: FC<TypewriterProps> = ({}) => {
  return (
    <div className="flex flex-col bg-slate-900 md:w-full w-11/12 rounded-xl items-center justify-center h-[20rem] max-w-screen-xl mx-auto p-4  ">
      <p className="text-slate-300 text-center font-light sm:text-xl p-1.5">
      Empower Your Crypto Journey
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className="border text-sm font-medium relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 mt-2 rounded-full">
          <a href="/contact">Connect Now</a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
    </div>
  );
};

export default Typewriter;
