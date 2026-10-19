"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="space-y-6">
        {skillsData.map((group) => (
          <li key={group.section}>
            <h3 className="mb-2 text-xl font-semibold tracking-wide text-gray-500 uppercase dark:text-white/60">
              {group.section}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {group.skills.map((skill, idx) => (
                <motion.li
                  className="borderBlack cursor-default rounded-xl bg-white px-5 py-3 transition-colors hover:bg-gray-100 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  key={skill}
                  custom={idx}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
