"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">
          Information Communication Technology{" "}
        </span>{" "}
        from <span className="italic">University of Kentucky</span>. Afterwards
        I self taught myself{" "}
        <span className="font-medium">HTML, CSS and Javascript</span> through{" "}
        <span className="italic"> tutorials and small projects</span> and took a
        course from Scrimba for{" "}
        <span className="font-medium">React and Advanced React</span>.{" "}
        <span className="italic">I enjoy figuring out</span> how to make designs
        and replicating them. I can use Next.js and have some experience with
        TypeScript. I adapt to new technologies quickly and have fun when I know
        I can implement them into my work. I am currently looking for a{" "}
        <span className="font-medium">full time position </span>
        as a <span className="underline">front end web developer</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding,</span> I enjoy
        playing video games, watching movies/tv shows, and exercising with
        gymnast rings. I like exploring new places when I get the opportunity to
        and listening to other peoples&apos; experiences.
      </p>
    </motion.section>
  );
}
