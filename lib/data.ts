import React from "react";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SkyChatImg from "@/public/Skychat.png"
import StineonImg from "@/public/stineon.png"
import PanacImg from "@/public/Panacia.png"
import SkyCamImg from "@/public/SkyCam.png"
import HaloSecurityImg from "@/public/HaloSecurity.png"
import AjAviationImg from "@/public/AjAviation.png"


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
    title: "Full Stack Developer​",
    location: "Equilibrio Agency",
    description:
      "Currently working as a full-stack developer where I contribute to a diverse range of projects.",
    icon: React.createElement(FaLaptopCode),
    date: "2024 - Present",
  },
  {
    title: "Electronic Engineer​",
    location: "Universidad Nacional Experimental del Táchira, VE",
    description:
      "I am currently developing my special degree project to graduate as an Electronic Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Bachelor's Degree in Business Administration​",
    location: "Universidad Católica del Táchira, VE",
    description:
      "I am currently studying Business Administration, major in marketing in the fourth year.",
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
    title: "PANAC-IA",
    description:
      "PANAC-IA is a personalized health assistant with which you will have access to nearby medical facilities and receive guidance from an AI integrated with GPT-3",
    tags: ["NextJS", "MongoDB", "GPT-3", "TypeScript", "Google Maps Api"],
    imageUrl: PanacImg,
    url: "https://github.com/Jalch0/panac-ia"
  },
  {
    title: "Stineon Page",
    description:
      "I made this page for a web development and digital marketing agency called Stineon, it is a landing page with animation and a very attractive visual style",
    tags: ["Next.js", "Typecript", "Tailwind","Framer-Motion"],
    imageUrl: StineonImg,
    url: "https://stineon-page.vercel.app/"

  },
  {
    title: "Sky Cam",
    description:
      "I made this page for a surveillance trailer company, with a minimalist and attractive design for the consumer, with a personalized contact email using resend.",
    tags: ["Next.js", "TypeScript", "Resend", "Tailwind", "Framer-Motion"],
    imageUrl: SkyCamImg,
    url: "https://sky-cam.com/"

  },
  {
    title: "Halo Security",
    description: "I developed a website for a security company in the United States, delivering a custom design fully tailored to the client’s requirements and ensuring a professional and user-friendly experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    imageUrl: HaloSecurityImg,
    url: "https://protectedbyhalo.com/"
  },
  {
    title: "Labrador Aviation Consulting",
    description: "I developed a website for an aviation security company in the United States, delivering a custom design fully tailored to the client's requirements.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Framer-Motion"],
    imageUrl: AjAviationImg,
    url: "https://ajlcaviation.com/"
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
  "Flutter",
  "Supabase",
  "WordPress",
] as const;
