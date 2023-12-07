import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Electronic Engineer​",
    location: "Universidad Nacional Experimental del Táchira, VE",
    description:
      "I am currently electronic engineering in the fifth semester.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Bachelor's Degree in Business Administration​",
    location: "Universidad Católica del Táchira, VE",
    description:
      "I am currently studying Business Administration, major in marketing in the third year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2026",
  },
  {
    title: "Freelance - Front-End Developer",
    location: "Táchira, VE",
    description:
      "I am currently working on freelance projects for organizations and companies in my sector, and I am also open to proposals at a global level.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "https://drive.google.com/uc?export=download&id=1mwW7WWvJS1sOe2wwLrl8VhwH26BukUBr",
    url: "https://google.com"
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "https://drive.google.com/uc?export=download&id=1t7ADn3ujEgIGP9vir5wgGtrt9rQ9XRR_",
    url: "https://google.com"

  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://drive.google.com/uc?export=download&id=1cEl19-DtkRMfH8VbpKR5hVVAonYokyjy",
    url: "https://google.com"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Git",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
] as const;