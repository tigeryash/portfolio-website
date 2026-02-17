"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  webpageUrl,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scaleProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <motion.section
        className=" bg-gray-200 max-w-[42rem] border border-black/5 overflow-hidden
                sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-400 transition rounded-lg
                dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col 
                    h-full sm:group-even:ml-[18rem] "
        >
          <div className="flex justify-between">
            <h3 className="text-2xl semibold">
              <a
                href={webpageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {title}
              </a>
            </h3>
            <a
              href={githubUrl}
              target="_blank"
              className=" flex items-center justify-center 
            text-[1.35rem] outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
            active:scale-105 transition  dark:text-white/60"
            >
              <FaGithubSquare />
            </a>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, idx) => (
              <li
                className="bg-black px-3 py-1 text-[.7rem] uppercase tracking-wider text-white
                        rounded-full dark:text-white/70"
                key={idx}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <a href={webpageUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={title + " screenshot"}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    group-even:right-[initial] group-even:-left-40  group-hover:-translate-x-3 
                    group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition
                    group-even:group-hover:translate-x-3 
                    group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
          />
        </a>
      </motion.section>
    </motion.div>
  );
}
