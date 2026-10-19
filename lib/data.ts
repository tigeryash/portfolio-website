import { FaReact, FaUsers } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import aichat from "@/public/ai-chat.webp";
import voxel from "@/public/voxel-portfolio.webp";
import shader from "@/public/shader-journey.webp";
import solarite from "@/public/solarite.webp";
import yashdex from "@/public/yashdex.webp";
import spotlight from "@/public/spotlight.webp";
import type { Experience, Project } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: readonly Experience[] = [
  {
    title: "Quality Engineering Analyst",
    company: "Cognizant · Client: BMO",
    // Placeholder: replace with your real start date and a summary of your QEA work at BMO.
    date: "20XX – Present",
    description:
      "Quality Engineering & Assurance for BMO as part of Cognizant's QEA practice. Placeholder: describe what you test, the tools you use, and the impact.",
    icon: MdOutlineVerified,
  },
  {
    title: "Frontend Developer",
    company: "Chingu",
    location: "Remote",
    date: "2023 – Present",
    description:
      "Led frontend development for cross-functional teams of 6–8 developers using Scrum. Architected auth flows with React Hook Form + Zod, built admin dashboards, integrated Mapbox routing, set coding standards, and reviewed/merged 30+ PRs.",
    icon: FaUsers,
  },
  {
    title: "Frontend UI Engineer",
    company: "Paleto Bay GTA 5 Roleplay Server",
    location: "Remote",
    date: "Jan 2022 – Feb 2025",
    description:
      "Built in-game React UIs for a 500+ member community: a gas station interface wired to RAGE MP for real-time vehicle fuel data, a context-aware hook that surfaces UIs near map locations, and animated HUD and login screens.",
    icon: FaReact,
  },
];

export const projectsData: readonly Project[] = [
  {
    title: "High Elo LLMs",
    description:
      "Multi-chat app for talking to several LLMs at once, side by side. Bring your own API keys, with streaming responses via the AI SDK and auth via Better Auth.",
    tags: ["AI SDK", "TanStack Start", "TypeScript", "Convex", "Better Auth"],
    imageUrl: aichat,
    liveUrl: "https://ai-chat-tanstack.vercel.app/",
    githubUrl: "https://github.com/tigeryash/ai-chat-tanstack",
  },
  {
    title: "Voxel Park Portfolio",
    description:
      "An explorable park I modeled in Blender, with billboards showcasing my projects. Walk around as Frieren with physics-based movement.",
    tags: ["TypeScript", "Blender", "Rapier", "R3F", "Drei"],
    imageUrl: voxel,
    liveUrl: "https://voxel-portfolio-tan.vercel.app/",
    githubUrl: "https://github.com/tigeryash/voxel-portfolio/tree/main",
  },
  {
    title: "Shader Journey",
    description:
      "A collection of shader experiments built with Three.js and React Three Fiber, each one a distinct visual effect for the web.",
    tags: ["GSAP", "Three.js", "TypeScript", "GLSL", "TSL"],
    imageUrl: shader,
    liveUrl: "https://shader-journey-smoky.vercel.app/",
    githubUrl: "https://github.com/tigeryash/shader-journey",
  },
  {
    title: "Solarite",
    description:
      "Built with a Chingu Voyage team: a full-stack app for a solar panel installation company, with admin and client dashboards and Mapbox route planning.",
    tags: ["Vite", "React", "Mapbox", "Supabase", "Zod"],
    imageUrl: solarite,
    liveUrl: "https://v52-tier2-team-25.vercel.app/",
    githubUrl: "https://github.com/chingu-voyages/v52-tier2-team-25",
  },
  {
    title: "Yashdex",
    description:
      "A Pokédex with an AI assistant that identifies Pokémon in images from your webcam, pulling data from the PokéAPI.",
    tags: ["Next.js", "AI SDK", "TypeScript", "React Webcam", "Zustand"],
    imageUrl: yashdex,
    liveUrl: "https://yashdex.vercel.app/",
    githubUrl: "https://github.com/tigeryash/pokedex/tree/main",
  },
  {
    title: "Spotlight",
    description:
      "A social mobile app built with Expo where users share images, like and comment on posts, and follow other users.",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind", "Convex"],
    imageUrl: spotlight,
    githubUrl: "https://github.com/tigeryash/spotlight/tree/main",
  },
];

export const skillsData = [
  {
    section: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Start",
      "React Router",
      "Vite",
    ],
  },
  {
    section: "Styling & Animation",
    skills: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "GSAP"],
  },
  {
    section: "State & Data",
    skills: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    section: "Backend & Database",
    skills: ["Convex", "Supabase", "Firebase", "PostgreSQL", "Prisma", "Python"],
  },
  {
    section: "Testing & Quality",
    skills: ["Playwright", "Vitest", "Jest", "React Testing Library"],
  },
  {
    section: "3D & Graphics",
    skills: ["Three.js", "React Three Fiber", "Drei", "GLSL", "TSL", "Rapier", "Blender"],
  },
  {
    section: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    section: "Auth, Payments & AI",
    skills: ["Better Auth", "Clerk", "Auth.js", "Stripe", "AI SDK", "MCP"],
  },
] as const;
