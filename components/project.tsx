"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a href={url} target="_blank">
        <section className=" bg-gray-900 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-opacity-50 transition group-even:pl-8 flex justify-between">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:order-2 ">
            <h3 className="text-2xl font-semibold text-white flex items-center group-hover:text-sky-700">
              {title}
              <MdArrowOutward className="opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-700 transition" />{" "}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider font-bold text-sky-700 rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={imageUrl}
              height="250"
              width="250"
              quality="95"
              alt="Project I worked on"
              className="h-auto w-full object-cover transition shadow-2xl group-hover:scale-[1.04]"
            />
          </div>
        </section>
      </a>
    </motion.div>
  );
}

{
  /* <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="group mb-3 sm:mb-8 last:mb-0 ">
<section
  className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition group-even:pl-8"
>
  <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag, index) => (
        <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>

  <Image
    src={imageUrl}
    quality={95}
    alt="Project I worked on"
    className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] 
  group-hover:-transition-x-3 
  group-hover:translate-y-3 
  group-hover:-rotate-2 

  group-even:group-hover:transition-x-3 
  group-even:group-hover:translate-y-3 
  group-even:group-hover:rotate-2 

  group-even:-right-[initial] 
  group-even:-left-40"
  />
</section>
</motion.div> */
}
