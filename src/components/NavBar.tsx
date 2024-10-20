"use client";

import { FC, useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../public/assets/icon.png";
import { CircleDollarSign, Contact } from "lucide-react";

interface NavBarProps {
  className?: string;
}
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

  {
    name: "About Us",
    link: "/about",
    icon: <Contact className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Pricing",
    link: "/pricing",
    icon: (
      <CircleDollarSign className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Blog",
    link: "/blogs",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
const NavBar: FC<NavBarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-8 w-auto "
              alt=" Logo"
              width={100}
              height={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Vedark
            </span>
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            className="hs-collapse-toggle md:hidden p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border  bg-slate-950 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none bg-transparent border-gray-700 text-white hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className=" flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto p-4`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-gradient hover:bg-gray-700 hover:text-gradient md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-gradient hover:bg-gray-700 hover:text-gradient md:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-gradient hover:bg-gray-700 hover:text-gradient md:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-gradient hover:bg-gray-700 hover:text-gradient md:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-gradient hover:bg-gray-700 hover:text-gradient md:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <FloatingNav navItems={navItems} />
    </>
  );
};

export default NavBar;
