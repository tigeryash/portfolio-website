"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { siteConfig } from "@/lib/site";

const iconButtonClass = `bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
  outline-none focus-visible:scale-110 hover:text-gray-950 hover:scale-110
  active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60
  dark:hover:text-white dark:hover:bg-gray-950`;

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-0" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://cdn.donmai.us/sample/1c/4b/__uzumaki_naruto_naruto_and_1_more_drawn_by_sssiii7610__sample-1c4b993253febe9832dff83f7908e42e.jpg"
              alt={`Portrait of ${siteConfig.name}`}
              width={192}
              height={192}
              preload
              className="h-24 w-24 rounded-full border-[.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😎
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl leading-[1.5]! font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Yash.</span> A{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4+ years</span> building{" "}
        <span className="underline">React</span> &amp; <span className="underline">Next.js</span>{" "}
        apps, from <span className="italic">AI-powered tools</span> to{" "}
        <span className="italic">interactive 3D experiences</span> on the web.
      </motion.h1>

      <motion.div
        className="flex flex-col flex-wrap items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition outline-none hover:scale-105 hover:bg-gray-950 focus-visible:scale-105 active:scale-100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="group borderBlack flex items-center gap-2 rounded-full bg-white px-5 py-3 whitespace-nowrap transition outline-none hover:scale-105 focus-visible:scale-105 active:scale-100 sm:px-7 dark:bg-white/10"
          >
            View CV{" "}
            <HiOutlineExternalLink className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={siteConfig.resumePath}
            download
            aria-label="Download CV (PDF)"
            title="Download CV (PDF)"
            className={iconButtonClass}
          >
            <HiDownload />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={iconButtonClass}
          >
            <BsLinkedin />
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={`${iconButtonClass} text-[1.35rem]`}
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
