import timetrackerImg from "@/public/time-tracker.png";
import adviceImg from "@/public/advice-gen.png";
import calculatorImg from "@/public/calc-png.png";
import roomhomepageImg from "@/public/room-homepage.png";
import agecalcImg from "@/public/age-calc.png";
import todoImg from "@/public/todo-app.png";
import iosweatherImg from "@/public/ios-weather-clone.png";
import passcodeImg from "@/public/passcode.png";
import chatgpt from "@/public/chatgpt.png";
import petsoft from "@/public/petsoft.png";

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
    title: "ChatGPT Clone",
    description:
      "Fully functional ChatGPT 3.5 app utlizing OpenAI' api. Users log in with a Google account and can save chats on Firebase.",
    tags: [
      "React",
      "Nextjs 14",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Authjs V5",
    ],
    imageUrl: chatgpt,
    webpageUrl: "https://chatgpt-messenger-five.vercel.app/",
    githubUrl: "https://github.com/tigeryash/chatgpt-messenger/tree/master",
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
    title: "Upper/Lower",
    description:
      "I remade the functionality of the website higherlowergame. Which I made for someone on upwork.",
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "Zustand",
      "Vite",
    ],
    imageUrl: iosweatherImg,
    webpageUrl: "https://tigeryash.github.io/upper-lower/",
    githubUrl: "https://github.com/tigeryash/upper-lower",
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
  {
    title: "Calculator",
    description:
      "Recreated a frontend mentor design challenge. It is a calculator that can perform basic operations. It has 3 themes and is responsive.",
    tags: ["React", "Vite"],
    imageUrl: calculatorImg,
    webpageUrl: "https://tigeryash.github.io/calculator/",
    githubUrl: "https://github.com/tigeryash/calculator",
  },
  {
    title: "Todo App",
    description:
      "A todo app design from frontendmentor which is funtional. Can add, delete and mark todos as complete. It uses Redux for state management. It has a dark mode and is responsive.",
    tags: ["React", "Vite", "Redux", "TypeScript"],
    imageUrl: todoImg,
    webpageUrl: "https://tigeryash.github.io/todo-app/",
    githubUrl: "https://github.com/tigeryash/todo-app",
  },
  {
    title: "Room Homepage",
    description:
      "Another FrontEndMentor design I recreated. Practiced Grid and styling mobile first.",
    tags: ["React", "Vite", "TypeScript"],
    imageUrl: roomhomepageImg,
    webpageUrl: "https://tigeryash.github.io/room-homepage/",
    githubUrl: "https://github.com/tigeryash/room-homepage",
  },
  {
    title: "Age Calculator",
    description:
      "Takes in a date and calculates the number of years, months and days since that date. It uses the dayjs library.",
    tags: ["React"],
    imageUrl: agecalcImg,
    webpageUrl: "https://tigeryash.github.io/age-calc/",
    githubUrl: "https://github.com/tigeryash/age-calc",
  },
  {
    title: "Advice Generator",
    description:
      "Random Advice Generator using the Advice Slip JSON API. It uses the TanStack Query library for fetching data. Recreated from a FrontEndMentor design.",
    tags: ["React", "Vite", "TypeScript", "TanStack Query"],
    imageUrl: adviceImg,
    webpageUrl: "https://tigeryash.github.io/advice-gen/",
    githubUrl: "https://github.com/tigeryash/advice-gen",
  },
  {
    title: "iOS Passcode Clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Vite.", "TypeScript"],
    imageUrl: passcodeImg,
    webpageUrl: "https://tigeryash.github.io/passcode/",
    githubUrl: "https://github.com/tigeryash/passcode",
  },
  {
    title: "Time Tracker",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Vite", "TypeScript"],
    imageUrl: timetrackerImg,
    webpageUrl: "https://tigeryash.github.io/time-tracker/",
    githubUrl: "https://github.com/tigeryash/time-tracker",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Redux",
  "Vite",
  "Zustand",
  "Context API",
  "GSAP",
  "Zod",
  "shadcn/ui",
  "prisma",
] as const;
