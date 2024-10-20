"use client";
import { FC, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import toast from "react-hot-toast";

interface BackgroundBeamsSectionProps {}

const BackgroundBeamsSection: FC<BackgroundBeamsSectionProps> = ({}) => {
  const [email, setEmail] = useState("");

  const handleJoinVedark = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email address.");
    } else {
      toast.success("Thank you for joining Vedark!");
      setEmail("");
      // Add any additional logic here, e.g., sending the email to the server
    }
  };

  return (
    <div className="h-[25rem] md:h-[30rem] xl:h-[40rem] w-full max-w-screen-xl mx-auto rounded-md bg-slate-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl text-gradient bg-clip-text  text-center font-sans font-bold">
          Join Vedark Community
        </h1>
        <p></p>
        <p className="text-slate-300 text-center font-light sm:text-xl p-1.5 mt-4 mb-1">
          Get the inside scoop on Vedark's exciting developments. Explore expert
          market insights, learn about new features, and discover how Vedark can
          help you navigate the ever-evolving crypto landscape.
        </p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow-sm border relative z-10 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="flex relative flex-col md:flex-row space-y-4 z-10 md:space-y-0 space-x-0 md:space-x-4 mb-5">
        <button
          className="border text-sm font-medium relative border-neutral-200 border-white/[0.2] text-white px-6 py-4 rounded-full"
          onClick={handleJoinVedark}
        >
          Join Vedark
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default BackgroundBeamsSection;
