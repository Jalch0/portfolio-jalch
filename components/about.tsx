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
        I am currently pursuing a dual degree in Electronic Engineering and
        Business Administration, a distinctive combination that allows me to
        seamlessly integrate technical expertise with a deep understanding of
        business principles. My passion for programming dates back to my
        childhood, where I fostered my skills by meticulously dissecting and
        replicating the source code of web pages to understand their inner
        workings.
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
