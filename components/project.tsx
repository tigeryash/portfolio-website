"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import type { Project as ProjectProps } from "@/lib/types";

export default function Project({
  title,
  description,
  liveUrl,
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
  // Projects without a deployed site (e.g. mobile apps) link to their repo instead.
  const primaryUrl = liveUrl ?? githubUrl;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <article className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-200 transition hover:bg-gray-300 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="flex h-full flex-col px-5 pt-4 pb-7 sm:max-w-[50%] sm:pt-10 sm:pr-2 sm:pl-10 sm:group-even:ml-[18rem]">
          <div className="flex justify-between gap-2">
            <h3 className="text-2xl font-semibold">
              <a href={primaryUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {title}
              </a>
            </h3>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
              className="flex items-center justify-center text-[1.35rem] transition outline-none hover:scale-[1.15] hover:text-gray-950 focus-visible:scale-[1.15] active:scale-105 dark:text-white/60 dark:hover:text-white"
            >
              <FaGithubSquare />
            </a>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="rounded-full bg-black px-3 py-1 text-[.7rem] tracking-wider text-white uppercase dark:text-white/70"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={imageUrl}
            alt=""
            sizes="28.25rem"
            className="absolute top-8 -right-40 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-[1.04] group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </a>
      </article>
    </motion.div>
  );
}
