"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center text-white leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I recently completed my degree in Electronic Engineering and am currently pursuing a Bachelor of Business Administration with a specialization in Marketing, a unique combination that allows me to bridge technical expertise with strong business insight. My passion for programming began in childhood, when I honed my skills by exploring and replicating website source code to understand how digital systems are built from the ground up.
      </p>
      <p className="mb-3">
        My long-standing fascination with the ever-evolving technology landscape
        drives me to constantly gain knowledge, ensuring I am at the forefront
        of the latest industry trends and innovations. I am dedicated to
        enhancing my skills and am currently immersed in the study and
        application of web technologies, with a main focus on Frontend
        development.
      </p>
      <p>
        Beyond the academic field and programming, in my free time I usually
        exercise and play video games.
      </p>
    </motion.section>
  );
}

export default About;
