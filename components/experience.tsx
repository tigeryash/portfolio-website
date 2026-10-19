"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[42rem] scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <ol className="relative ml-4 border-l-2 border-black/10 sm:ml-6 dark:border-white/20">
        {experiencesData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={`${item.company}-${item.title}`}
              className="relative mb-10 pl-10 last:mb-0 sm:pl-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * idx }}
            >
              <span
                aria-hidden="true"
                className="borderBlack absolute top-4 -left-[1.3rem] flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md dark:bg-gray-800"
              >
                <Icon />
              </span>
              <div className="rounded-lg border border-black/5 bg-white/70 px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                <p className="text-sm font-medium text-gray-500 dark:text-white/60">
                  {item.date}
                  {item.location && ` · ${item.location}`}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="font-medium text-gray-700 dark:text-white/80">{item.company}</p>
                <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
