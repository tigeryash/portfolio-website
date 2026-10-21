"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        Hi, I&apos;m Yashwanth! I&apos;m a <span className="font-medium">Full Stack Developer</span>{" "}
        passionate about creating engaging and efficient web applications using modern technologies
        like <span className="font-medium">React, Next.js, and TypeScript</span>. My journey into
        tech began with an <span className="font-medium">Information Communication Technology</span>{" "}
        degree (and CS minor) from the <span className="italic">University of Kentucky</span>. From
        there, I dove headfirst into self-directed learning and targeted courses (including{" "}
        <span className="font-medium">Advanced React & Next.js</span>, and delving into areas like{" "}
        <span className="font-medium">Three.js</span> for 3D graphics) to build a strong foundation.
      </p>
      <p className="mb-3">
        I especially enjoy crafting intuitive and{" "}
        <span className="font-medium">responsive user interfaces</span> that work beautifully across
        devices. My experience extends beyond traditional websites; I&apos;ve developed custom React
        components for unique interactive environments, like contributing to a community{" "}
        <span className="italic">RAGE MP GTA 5 server</span>, and explored mobile app development
        using <span className="font-medium">React Native</span>. I thrive in{" "}
        <span className="font-medium">collaborative settings</span>. With{" "}
        <span className="italic">Chingu</span>, I&apos;ve led frontend development for Scrum teams
        of 6–8 developers. Integrating necessary APIs, implementing user authentication, and
        managing application state are all aspects I handle confidently to ensure a complete and
        functional product.
      </p>
      <p className="mb-3">
        Today I&apos;m a <span className="font-medium">Quality Engineer</span> at{" "}
        <span className="font-medium">Cognizant</span>, working with{" "}
        <span className="font-medium">BMO</span>, which has sharpened how I think about building
        software that is reliable and well tested. I&apos;m a quick learner, always excited by new
        tools and frameworks, and I keep building on the side, from AI apps to 3D experiences on the
        web.
      </p>
      <p>
        <span className="italic">Outside of work,</span> you can usually find me playing video
        games, catching up on movies/TV, or getting some exercise in with gymnastics rings. I also
        love opportunities to travel and connect with people.
      </p>
    </motion.section>
  );
}
