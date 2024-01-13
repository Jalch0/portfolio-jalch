import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SkyChatImg from "@/public/Skychat.png"
import BetImg from "@/public/BetStatistixs.png"
import StineonImg from "@/public/stineon.png"


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
    title: "SkyChat",
    description:
      "SkyChat is a real-time chat that can be used by any person and company, with various functionalities such as creating groups and more.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: SkyChatImg,
    url: "https://github.com/Jalch0/sky-chat-app"
  },
  {
    title: "Betstatistixs",
    description:
      "This is a betting control application that can be used for a person dedicated to sports betting",
    tags: ["React", "NivoChart", "NodeJS", "Express", "MySQL"],
    imageUrl: BetImg,
    url: "https://github.com/Jalch0/ControlBet-App"

  },
  {
    title: "Stineon Page",
    description:
      "I made this page for a web development and digital marketing agency called Stineon, it is a landing page with animation and a very attractive visual style",
    tags: ["Next.js", "Typecript", "Tailwind","Framer-Motion"],
    imageUrl: StineonImg,
    url: "https://stineon-page.vercel.app/"

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