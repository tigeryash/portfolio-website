"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className=" mb-28 max-w-[50rem]
    text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
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
              alt="temporary profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[.35rem] border-white
                        object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
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
        className="mb-10 font-medium !leading-[1.5] mt-4 px-4 text-2xl sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Yash.</span> I&apos;m a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">websites</span>. My focus is{" "}
        <span className="underline">React</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 py-3 px-7 text-white flex items-center 
                gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
                hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me header{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/YashwanthVenkatesanResume.pdf"
          download={true}
          className="group bg-white py-3 px-7 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110 
                 active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/yashwanth-v-29a88392/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
            active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/tigeryash"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full 
            text-[1.35rem] outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
            active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
