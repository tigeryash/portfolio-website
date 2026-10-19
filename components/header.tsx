"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Link } from "react-scroll";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[.03] backdrop-blur-[.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:border-black/40 dark:bg-gray-950/75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        aria-label="Primary"
        className="fixed top-[.15rem] left-1/2 flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[.9rem] font-medium text-gray-500 sm:w-[40rem] sm:flex-none sm:gap-4">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                to={link.hash.replace("#", "")}
                href={link.hash}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className={clsx(
                  "flex w-full cursor-pointer items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  },
                )}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
