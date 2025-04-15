"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProfileImg from "@/public/Profile.png"

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col justify-between items-center md:flex-row" >

        {/* Intro text*/}

        <motion.h1
          className="text-white text-center w-100% mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl md:w-1/2 md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hi, I&apos;m Javier,</span> a{" "}
          <span className="font-bold">Full Stack developer</span> crafting <span className="font-bold">seamless, impactful digital experiences</span>
        </motion.h1>

        {/* Photo */}

        <div className="flex mb-10 items-center md:pr-20">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={ProfileImg}
                alt="Javier Labrador"
                width="250"
                height="250"
                quality="95"
                priority={true}
                className="h-22 w-25 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-2 right-4 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.2,
                duration: 0.7,
              }}
            >
              ​🚀​
            </motion.span>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-gray-900 focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:border-white active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

      </motion.div>
    </section>
  );
}

export default Intro;
