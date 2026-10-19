import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  liveUrl?: string;
  githubUrl: string;
};

export type Experience = {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string;
  icon: IconType;
};
