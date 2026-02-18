
import iosweatherImg from "@/public/ios-weather-clone.webp";
import aichat from "@/public/ai-chat.webp";
import petsoft from "@/public/petsoft.webp";
import marble from "@/public/marble.webp";
import solarite from "@/public/solarite.webp";
import awwwards from "@/public/awwwards.webp";
import portal from "@/public/portal.webp";
import construction from "@/public/construction.webp";
import yashdex from "@/public/yashdex.webp";
import spotlight from "@/public/spotlight.webp";
import expomovie from "@/public/movie-expo.webp";
import gourd from "@/public/3d-gourd.webp";
import voxel from "@/public/voxel-portfolio.webp";
import shader from "@/public/shader-journey.webp";
import pantry from "@/public/pantry.webp";

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

export const projectsData = [
  {
    title: "High Elo LLMs",
    description:
      "Multi Chat window app that allows users to chat with multiple LLMs at once. It uses the AI SDK and Better Auth for authentication.",
    tags: [
      "AI SDK",
      "TanStack Start",
      "TypeScript",
      "Convex",
      "Better Auth",
    ],
    imageUrl: aichat,
    webpageUrl: "https://ai-chat-tanstack.vercel.app/",
    githubUrl: "https://github.com/tigeryash/ai-chat-tanstack",
  },{
    title: "Voxel Park Portfolio",
    description:
      "Park I modeled in Blender with billboards containing my projects. Move around with Frieren.",
    tags: [ "TypeScript", "Blender", "Rapier", "R3F", "Drei"],
    imageUrl: voxel,
    webpageUrl: "https://voxel-portfolio-tan.vercel.app/",
    githubUrl: "https://github.com/tigeryash/voxel-portfolio/tree/main",
  },
  {
    title: "Shader Journey",
    description:
      "A collection of shader experiments created with Threejs and React Three Fiber. Each shader is a unique visual effect that can be used in web projects.",
    tags: ["GSAP", "Threejs", "TypeScript", "GLSL", "TSL"],
    imageUrl: shader,
    webpageUrl: "https://shader-journey-smoky.vercel.app/",
    githubUrl: "https://github.com/tigeryash/shader-journey",
  },
{
    title: "Pantry Tracker",
    description:
      "A fullstack app for tracking pantry items. Users can add items to their pantry, track expiration dates, and get notifications when items are about to expire.",
    tags: ["React Native", "Expo", "Uniwind", "TypeScript"],
    imageUrl: pantry,
    webpageUrl: "https://sofi-health.vercel.app/",
    githubUrl: "https://github.com/tigeryash/pantry-tracker",
  },
   {
    title: "Scroll Based Animation",
    description:
      "A project demonstrating scroll-based animations using GSAP and Lenis.",
    tags: ["GSAP", "Lenis", "Threejs", "React", "TypeScript"],
    imageUrl: gourd,
    webpageUrl: "https://sofi-health.vercel.app/",
    githubUrl: "https://github.com/tigeryash/sofi-health",
  },
  {
    title: "Solarite",
    description:
      "Collaborated in a Chingu Voyage and developed a fullstack app for solar panel installation company. With Admin and Client dashboard.",
    tags: ["Vite", "React", "Mapbox", "Supabase", "Zod"],
    imageUrl: solarite,
    webpageUrl: "https://v52-tier2-team-25.vercel.app/",
    githubUrl: "https://github.com/chingu-voyages/v52-tier2-team-25",
  },
  {
    title: "Marble Game",
    description:
      "R3F game avoid obstacles and reach end in the fastest time possible.",
    tags: ["Vite", "R3F", "Rapier", "Drei", "Zustand"],
    imageUrl: marble,
    webpageUrl: "https://marble-game-rosy.vercel.app/",
    githubUrl: "https://github.com/tigeryash/marble-game/tree/main",
  },
  {
    title: "Spotlight",
    description:
      "An Expo app which users can share iamges and like and comment on them. Then can also follow other users.",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind", "Convex"],
    imageUrl: spotlight,
    webpageUrl: "https://github.com/tigeryash/spotlight/tree/main",
    githubUrl: "https://github.com/tigeryash/spotlight/tree/main",
  },
  {
    title: "Expo Movie App",
    description:
      "Developed a movie app using Expo and React Native. It fetches data from TMDB API and allows users to search for movies.",
    tags: ["React Native", "Expo", "TypeScript", "Tailwind", "Expo Go"],
    imageUrl: expomovie,
    webpageUrl: "https://github.com/tigeryash/expo-movie-app/tree/main",
    githubUrl: "https://github.com/tigeryash/expo-movie-app/tree/main",
  },
  {
    title: "3D Portal Scene",
    description:
      "Created a 3D Scene in Blender and imported it into a Threejs app. The portal effect uses a shader.",
    tags: ["Vite", "Threejs", "Blender", "GLSL"],
    imageUrl: portal,
    webpageUrl: "https://portal-threejs-three.vercel.app/",
    githubUrl: "https://github.com/tigeryash/portal-threejs",
  },
  {
    title: "Yashdex",
    description:
      "Pokedex app with AI assitant to help identify Pokemon within images. Pulling data from the PokeAPI.",
    tags: ["Nextjs", "AI SDK", "TypeScript", "React Webcam", "Zustand"],
    imageUrl: yashdex,
    webpageUrl: "https://yashdex.vercel.app/",
    githubUrl: "https://github.com/tigeryash/pokedex/tree/main",
  },
  {
    title: "Awwwards Gaming site ",
    description:
      "Uses CSS and GSAP techniques to create modern Awwwards animations.",
    tags: ["React", "Vite", "TypeScript", "TailwindCSS", "GSAP"],
    imageUrl: awwwards,
    webpageUrl: "https://awwwards-jsm-nu.vercel.app/",
    githubUrl: "https://github.com/tigeryash/awwwards-jsm",
  },
  {
    title: "Landing Page",
    description:
      "I took a design from dribbble and made it into a real website. Using the latest frontend technologies.",
    tags: ["Next.js 14", "TypeScript", "ShadCn UI", "Zod", "Framer Motion"],
    imageUrl: construction,
    webpageUrl: "https://christian-construction.vercel.app/",
    githubUrl: "https://github.com/tigeryash/christian-construction",
  },
  {
    title: "PetSoft",
    description:
      "End of course project for Nextjs course. An app that helps dog sitters keep track of client pets.",
    tags: [
      "React",
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Stripe",
      "ShadCn UI",
      "Prisma",
    ],
    imageUrl: petsoft,
    webpageUrl: "https://petsoft-project-seven.vercel.app/",
    githubUrl: "https://github.com/tigeryash/petsoft-project",
  },
  {
    title: "iOS Weather App",
    description:
      "A clone of the iOS/iPadOS weather app. Gets current weather from OpenWeather API. Works for every city in the world.",
    tags: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "TanStack",
    ],
    imageUrl: iosweatherImg,
    webpageUrl: "https://yashappleweatherclone.vercel.app/",
    githubUrl: "https://github.com/tigeryash/weather-app",
  },
 

] as const;

export const skillsData = [
  {
    section: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React","TanStack Start", "Next.js", "React Router", "Vite"],
  },
  {
    section: "Styling & Animation",
    skills: ["TailwindCSS", "shadcn/ui", "Framer Motion", "GSAP"],
  },
  {
    section: "State Management",
    skills: ["Redux", "Zustand", "Context API"],
  },
  {
    section: "Backend & Data",
    skills: ["Prisma", "Convex", "Firebase", "TanStack Query", "Zod"],
  },
  {
    section: "3D",
    skills: ["Three.js", "React Three Fiber", "Drei", "GLSL", "Rapier", "Blender", "TSL"],
  },
  {
    section: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    section: "Auth & AI",
    skills: ["Better Auth","Clerk", "Authjs V5", "AI SDK"],
  },
] as const;
